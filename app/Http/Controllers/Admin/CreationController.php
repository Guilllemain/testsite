<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProductRequest;
use App\ImageProduct;
use App\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\Facades\Image;

class CreationController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return view('admin.creation.index', compact('products'));
    }

    public function create()
    {
        return view('admin.creation.create');
    }

    public function store(ProductRequest $request)
    {
        // $resize = Image::make($file)->resize(300, 300)->encode('jpg');
        // $hash = md5($resize->__toString());
        // $resize->save(public_path($path));
        // $url = "/" . $path;

        $product = Product::create([
            'name' => $request->name,
            'features' => $request->features,
            'description' => $request->description,
            'thumbnail' => resize_file($request, 'products/thumbnails', 600, 600)
        ]);

        $this->product_images($request, $product);

        return redirect('/admin/creation')->with('message', 'Ta nouvelle création est en ligne');
    }

    public function edit(Product $product)
    {
        return view('admin.creation.edit', compact('product'));
    }

    public function update(Product $product, Request $request)
    {
        $request->validate([
            'name' => 'required',
            'features' => 'required',
            'description' => 'required',
        ]);

        $product->update([
            'name' => $request->name,
            'features' => $request->features,
            'description' => $request->description,
        ]);

        if ($request->thumbnail) {
            Storage::disk('public')->delete($product->thumbnail);
            $product->update([
                'thumbnail' => resize_file($request, "products/thumbnails", 600, 600)
            ]);
        }

        if ($request->product_img) {
            foreach ($product->images as $image) {
                Storage::disk('public')->delete($image->img_url);
                $image->delete();
            }
            $this->product_images($request, $product);
        }

        return redirect('/admin/creation')->with('message', 'Ta création a bien été modifiée');
    }

    public function destroy(Product $product)
    {
        Storage::disk('public')->delete($product->thumbnail);
        foreach ($product->images as $image) {
            Storage::disk('public')->delete($image->img_url);
            Storage::disk('public')->delete($image->img_thumbnail);
        }

        $product->delete();

        return redirect('/admin/creation')->with('message', 'Ta création a bien été supprimée');
    }

    public function product_images($request, $product)
    {
        foreach ($request->product_img as $image) {
            ImageProduct::create([
                'product_id' => $product->id,
                'img_url' => resize_file($image, 'products/images', 1200, 1200),
                'img_thumbnail' => resize_file($image, 'products/images/thumbnails', 200, 200)
            ]);
        }
    }
}
