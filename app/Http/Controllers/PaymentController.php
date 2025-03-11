<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\Product;
use Illuminate\Http\Request;
use Str;

class PaymentController extends Controller
{
    public function index(Request $request){        
        $image = $request->file('bukti_transfer');
        $image_path = $image->store('recipes');
        $produk = [];
        foreach ($request->cart as $value) {
            array_push($produk, [
                'id' => $value['id'],
                'kuantitas' => $value['quantity'],
                'size' => $value['selectedSize']
            ]);
        }
        $data = [
            'nama' => $request->name,
            'nim' => $request->nim,
            'fakultas' => $request->fakultas,
            'departemen' => $request->departemen,
            'email' => $request->email,
            'no_wa' => $request->whatsapp,
            'produk' => $produk,
            'image_path' => $image_path
        ];
        Penjualan::create($data);

    }

    public function show(){
        $data = Penjualan::all();
        $arr_ret = [];
        
        foreach ($data as $pembeli) {
            $tmp1 = [];
            foreach ($pembeli->produk as $buy_product) {
                // dd($buy_product);
                $produk_retrieved = Product::where('id', (int)$buy_product['id'])->get();
                // dd($produk_retrieved);
                array_push($tmp1, [
                    'id' => $produk_retrieved[0]->id,
                    'nama_produk' => $produk_retrieved[0]->name,
                    'size' => $buy_product['size'],
                    'price' => $produk_retrieved[0]->price,
                    'kuantitas' => (int)$buy_product['kuantitas'],
                    'image_path' => $produk_retrieved[0]->image
                ]);
                // dd($tmp1);
            }
            array_push($arr_ret, [
                'id_beli' => $pembeli->id,
                'nama' => $pembeli->nama,
                'nim' => $pembeli->nim,
                'fakultas' => $pembeli->fakultas,
                'departemen' => $pembeli->departemen,
                'email' => $pembeli->email,
                'no_wa' => $pembeli->no_wa,
                'produk' => $tmp1,
                'recipe_path' => $pembeli->image_path
            ]);
        }
        dd($arr_ret);
    }

   
}
