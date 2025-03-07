<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();

        return Inertia::render('SamudraStore', [
            'products' => $products
        ]);
    }
    public function Checkout()
    {
        $products = Product::all();

        return Inertia::render('Keranjang', [
            'products' => $products
        ]);
    }

    public function dashboard()
    {
        $products = Product::all();
        return view('admin_samudra_store.dashboard', ['products' => $products]);
    }

    public function create()
    {
        return view('admin_samudra_store.products.create');
    }

    public function edit(Product $product)
    {
        return view('admin_samudra_store.products.edit', ['product' => $product]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'size' => 'string|max:50',
            'price' => 'required|numeric|min:0|regex:/^\d+$/',
            'stock' => 'required|integer|min:0',
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048'
        ]);

        $imagePath = $request->file('image')->store('products', 'public');

        Product::create([
            'name' => $request->name,
            'description' => $request->description,
            'size' => $request->size,
            'price' => $request->price,
            'stock' => $request->stock,
            'image' => $imagePath
        ]);

        return redirect()->route('admin.products.index')->with('success', 'Produk berhasil ditambahkan.');
    }

    public function update(Request $request, Product $product)
{
    // Validasi data input
    $request->validate([
        'name' => 'required|string|max:255',
        'description' => 'required|string',
        'size' => 'string|max:50',
        'price' => 'required|numeric|min:0|regex:/^\d+$/',
        'stock' => 'required|integer|min:0',
        'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048'
    ]);

    // Cek apakah ada file gambar baru yang diunggah
    if ($request->hasFile('image')) {
        // Hapus gambar lama jika ada
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        // Simpan gambar baru
        $imagePath = $request->file('image')->store('products', 'public');
        $product->image = $imagePath;
    }

    // Update data produk tanpa mengganti gambar jika tidak diubah
    $product->update([
        'name' => $request->name,
        'description' => $request->description,
        'size' => $request->size,
        'price' => $request->price,
        'stock' => $request->stock,
        'image' => $product->image, // Pastikan gambar tetap ada jika tidak diubah
    ]);
    
    return redirect()->route('admin.products.index')->with('success', 'Produk berhasil diperbarui.');
}

    public function destroy(Product $product)
    {
        // Hapus gambar sebelum menghapus produk
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        $product->delete();

        return back()->with('success', 'Produk berhasil dihapus.');
    }
}
