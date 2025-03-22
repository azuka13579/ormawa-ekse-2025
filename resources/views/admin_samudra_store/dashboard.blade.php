<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Admin - Samudra Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
    
    <script src="https://unpkg.com/@heroicons/v2.0.18/24/outline/index.js"></script>
    <style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .fade-in {
            animation: fadeIn 0.5s ease-out;
        }
        .hover-lift {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .hover-lift:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
    </style>
</head>
<body class="bg-gray-50">

    <nav class="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white shadow-lg">
        <div class="container font-montserrat mx-auto flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
                <img src="../../img/Samudrastore.png" alt="Samudra Store" class="max-w-[80px] md:max-w-[100px] h-auto">
                <h1 class="text-2xl font-bold tracking-tight text-primary5">Samudra Store Admin</h1>
            </div>
    
            <!-- Navigasi -->
            <div class="hidden md:flex space-x-6">
                <a href="{{ route('admin.products.index') }}" class="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-700/30 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span>Produk</span>
                </a>
                <a href="{{ route('admin.products.penjualan') }}" class="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-700/30 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span>Penjualan</span>
                </a>
            </div>
    
            <!-- Logout -->
            <form action="{{ route('admin.logout') }}" method="POST">
                @csrf
                <button type="submit" class="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    <span>Logout</span>
                </button>
            </form>
        </div>
    </nav>
    

    <!-- Konten Dashboard -->
    <div class="container mx-auto p-6 fade-in">
        <div class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div class="flex justify-between items-center mb-8">
                <h2 class="text-3xl font-bold text-gray-800">Manajemen Produk</h2>
                <a href="{{ route('admin.products.create') }}" 
                   class="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:shadow-md flex items-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                    </svg>
                    <span>Tambah Produk</span>
                </a>
            </div>

            <div class="overflow-x-auto rounded-xl border border-gray-100 shadow">
                <table class="min-w-full">
                    <thead class="bg-blue-50/60">
                        <tr>
                            <th class="py-4 px-6 text-left text-gray-700 font-semibold uppercase">Produk</th>
                            <th class="py-4 px-6 text-center text-gray-700 font-semibold uppercase">Harga</th>
                            <th class="py-4 px-6 text-center text-gray-700 font-semibold uppercase">Stok</th>
                            <th class="py-4 px-6 text-center text-gray-700 font-semibold uppercase">Gambar</th>
                            <th class="py-4 px-6 text-center text-gray-700 font-semibold uppercase">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100">
                        @foreach($products as $product)
                        <tr class="hover:bg-gray-50/80 transition-colors duration-200">
                            <td class="py-4 px-6 text-gray-800 font-medium">{{ $product->name }}</td>
                            <td class="py-4 px-6 text-center text-blue-600 font-semibold">Rp {{ number_format($product->price) }}</td>
                            <td class="py-4 px-6 text-center">
                                <span class="px-3 py-1 rounded-full bg-green-100 text-green-800">{{ $product->stock }} tersedia</span>
                            </td>
                            <td class="py-4 px-6 text-center">
                                <div class="relative group">
                                    <img src="{{ asset('storage/'.$product->image) }}" 
                                         class="w-16 h-16 object-cover rounded-lg shadow-sm border border-gray-200 cursor-zoom-in transition-transform duration-300 hover:scale-110">
                                </div>
                            </td>
                            <td class="py-4 px-6 text-center space-x-2">
                                <a href="{{ route('admin.products.edit', $product->id) }}" 
                                   class="inline-flex items-center px-4 py-2 bg-blue-100 hover:bg-blue-200 text-blue-800 rounded-lg transition-all duration-300">
                                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                    </svg>
                                    Edit
                                </a>
                                <form action="{{ route('admin.products.destroy', $product->id) }}" method="POST" class="inline">
                                    @csrf @method('DELETE')
                                    <button type="submit" 
                                            class="inline-flex items-center px-4 py-2 bg-red-100 hover:bg-red-200 text-red-800 rounded-lg transition-all duration-300"
                                            onclick="return confirm('Yakin ingin menghapus produk ini?')">
                                        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                        </svg>
                                        Hapus
                                    </button>
                                </form>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>

            @if($products->isEmpty())
            <div class="text-center py-12">
                <div class="text-gray-400 mb-4">
                    <svg class="w-24 h-24 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/>
                    </svg>
                </div>
                <p class="text-gray-500 text-lg">Belum ada produk yang tersedia</p>
            </div>
            @endif
        </div>
    </div>

</body>
</html>