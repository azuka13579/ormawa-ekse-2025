<?php

namespace App\Http\Controllers;

use App\Models\Penjualan;
use App\Models\Product;
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

    public function show(Request $request)
{
    $search = $request->query('search');
    $limit = $request->query('limit', 10);

    // Query data utama
    $query = Penjualan::where('nim', 'like', "%{$search}%")->latest();

// Jika juga ingin mencari di dalam produk JSON
$query->orWhere('nama', 'like', "%{$search}%");

$search = $query->get();

    $data = $query->latest()->get(); // Ambil semua data tanpa pagination dulu
    //dd($data); //

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

    // **Pagination Manual**
    $page = $request->query('page', 1); // Halaman saat ini
    $perPage = $limit; // Jumlah data per halaman
    $offset = ($page - 1) * $perPage;
    
    // Slice array sesuai halaman
    $pagedData = array_slice($arr_ret, $offset, $perPage);

    // Buat instance LengthAwarePaginator
    $data = new LengthAwarePaginator($pagedData, count($arr_ret), $perPage, $page, [
        'path' => $request->url(),
        'query' => $request->query()

    ]);
    

    //dd($arr_ret);
    return view('admin_samudra_store.penjualan.tabel', [
        'data' => $data, // Ubah dari $arr_ret ke $data yang sudah dipaginasi
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

    $order->delete();
    return response()->json(['success' => true, 'message' => 'Data berhasil dihapus']);
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
