<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Penjualan; // Sesuaikan dengan model yang digunakan
use App\Models\Product;
use App\Mail\OrderMail;
use Illuminate\Support\Facades\Mail;

class OrderController extends Controller
{
    public function sendOrderEmail(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'nim' => 'required|string',
            'fakultas' => 'required|string',
            'departemen' => 'required|string',
            'whatsapp' => 'required|string',
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
            'email' => $validatedData['email'],
            'produk' => $produkList,
            'total' => $validatedData['total'],
            
        ];

        // Kirim email
        Mail::to($validatedData['email'])->send(new OrderMail($orderData));

        return response()->json(['message' => 'Email pesanan berhasil dikirim']);
    }
}
