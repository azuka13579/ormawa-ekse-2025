<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Mail\OrderMail;
use Illuminate\Support\Facades\Mail;

class StoreController extends Controller
{
    public function index(){
        $products = Product::all();

        return Inertia::render('SamudraStore', [
            'products' => $products
        ]);
    }
    public function indexCheckout(){
        $products = Product::all();

        return Inertia::render('Keranjang', [
            'products' => $products
        ]);
    }

    public function kirimEmail(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'nim' => 'required|string',
            'fakultas' => 'required|string',
            'departemen' => 'required|string',
            'whatsapp' => 'required|string',
            'catatan' => 'required|string',
            'email' => 'required|email',
            'cart' => 'required|array',
            'total' => 'required|numeric',
        ]);

        // Ambil data produk dari request
        $produkList = [];
        foreach ($validatedData['cart'] as $buy_product) {
            $produk = Product::find((int) $buy_product['id']);
            if ($produk) {
                $produkList[] = [
                    'id' => $produk->id,
                    'nama_produk' => $produk->name,
                    'size' => $buy_product['selectedSize'],
                    'price' => $produk->price,
                    'kuantitas' => (int) $buy_product['quantity'],
                    'image_path' => $produk->image,
                ];
            }
        }

        // Format data untuk email
        $orderData = [
            'nama' => $validatedData['name'],
            'nim' => $validatedData['nim'],
            'fakultas' => $validatedData['fakultas'],
            'departemen' => $validatedData['departemen'],
            'no_wa' => $validatedData['whatsapp'],
            'catatan' => $validatedData['catatan'],
            'email' => $validatedData['email'],
            'produk' => $produkList,
            'total' => $validatedData['total'],
            
        ];
        // dd($orderData);
        // Kirim email
        Mail::to($validatedData['email'])->send(new OrderMail($orderData));
        

        return response()->json(['message' => 'Email pesanan berhasil dikirim']);
    }
}
