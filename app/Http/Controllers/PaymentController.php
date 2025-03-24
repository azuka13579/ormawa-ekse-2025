<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\Product;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Pagination\LengthAwarePaginator; 
use Illuminate\Support\Facades\Log;


use Str;

class PaymentController extends Controller
{
    public function index(Request $request){        
        $image = $request->file('bukti_transfer');
        $image_path = $image->store('recipes');
        
        $produk = [];
        foreach ($request->cart as $value) {
            
            $product = Product::find($value['id']);
            
            if ($product && $product->stock >= $value['quantity']) {
                
                $product->stock -= $value['quantity'];
                $product->save();
    
                array_push($produk, [
                    'id' => $value['id'],
                    'kuantitas' => $value['quantity'],
                    'size' => $value['selectedSize']
                ]);
            } else {
                return response()->json([
                    'message' => "Stok produk {$product->name} tidak mencukupi!"
                ], 400);
            }
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

    public function show(Request $request)
    {
        $nama_admin = Auth::user();
        $search = $request->query('search');
        $limit = $request->query('limit', 10);

        $query = Penjualan::where('nim', 'like', "%{$search}%")->latest();

        $query->orWhere('nama', 'like', "%{$search}%");

        $search = $query->get();

        $data = $query->latest()->get();

        $arr_ret = [];
        
        foreach ($data as $pembeli) {
            $tmp1 = [];

            foreach ($pembeli->produk as $buy_product) {
                $produk_retrieved = Product::find((int)$buy_product['id']);

                if ($produk_retrieved) {
                    $tmp1[] = [
                        'id' => $produk_retrieved->id,
                        'nama_produk' => $produk_retrieved->name,
                        'size' => $buy_product['size'],
                        'price' => $produk_retrieved->price,
                        'kuantitas' => (int)$buy_product['kuantitas'],
                        'image_path' => $produk_retrieved->image
                    ];
                }
            }

            $arr_ret[] = [
                'id_beli' => $pembeli->id,
                'nama' => $pembeli->nama,
                'nim' => $pembeli->nim,
                'fakultas' => $pembeli->fakultas,
                'departemen' => $pembeli->departemen,
                'email' => $pembeli->email,
                'no_wa' => $pembeli->no_wa,
                'produk' => $tmp1,
                'recipe_path' => $pembeli->image_path,
                'status' => $pembeli->status,
                'status_diterima' => $pembeli->status_diterima,
                'waktu_pembelian' => $pembeli->created_at
            ];
        }

        $page = $request->query('page', 1);
        $perPage = $limit;
        $offset = ($page - 1) * $perPage;
        
        $pagedData = array_slice($arr_ret, $offset, $perPage);

        $data = new LengthAwarePaginator($pagedData, count($arr_ret), $perPage, $page, [
            'path' => $request->url(),
            'query' => $request->query()

        ]);

        return view('admin_samudra_store.penjualan.tabel', [
            'nama_admin' => $nama_admin,
            'data' => $data,
            'search' => $search,
            'limit' => $limit
        ]);    
    }

    public function updateStatus(Request $request)
    {
        $order = Penjualan::findOrFail($request->id);
        if ($request->status == 'accepted' || $request->status == 'rejected') {
            $order->status = $request->status;
            $order->save();
            return response()->json(['success' => true, 'message' => 'Status berhasil diperbarui']);
        }
        return response()->json(['success' => false, 'message' => 'Status tidak valid']);
    }

    
    public function deleteOrder($id)
    {
        $order = Penjualan::find($id);
        
        if (!$order) {
            return response()->json(['error' => 'Data tidak ditemukan'], 404);
        }
    
        // Loop semua produk dalam pesanan dan kembalikan stoknya
        foreach ($order->produk as $item) {
            $product = Product::find($item['id']);
            
            if ($product) {
                $product->stock += $item['kuantitas']; // Kembalikan stok
                $product->save();
            }
        }
    
        // Hapus pesanan setelah stok dikembalikan
        $order->delete();
    
        return response()->json([
            'success' => true, 
            'message' => 'Data berhasil dihapus dan stok dikembalikan'
        ]);
    }
    

    public function updateDiterima(Request $request)
    {
   
        $request->validate([
            'id' => 'required|exists:penjualans,id',
            'status' => 'required|boolean',
        ]);

        $penjualan = Penjualan::findOrFail($request->id);
        $penjualan->status_diterima = $request->status;
        $penjualan->save();

        return response()->json(['success' => true, 'message' => 'Status berhasil diperbarui.']);
    
    }
}
