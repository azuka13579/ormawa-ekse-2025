<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Produk - Samudra Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6">Edit Produk</h2>
            
            @if ($errors->any())
                <div class="bg-red-100 text-red-700 p-4 rounded mb-4">
                    <ul class="list-disc list-inside">
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('admin.products.update', $product->id) }}" method="POST" enctype="multipart/form-data">
                @csrf
                

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <!-- Kolom Kiri -->
                    <div class="space-y-4">
                        <!-- Nama Produk -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Nama Produk 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="text" name="name" value="{{ old('name', $product->name) }}" 
                                   class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                   placeholder="Contoh: Kaos Polo Katun Premium"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">Maksimal 100 karakter</p>
                        </div>

                        <!-- Deskripsi -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Deskripsi 
                                <span class="text-red-500">*</span>
                            </label>
                            <textarea name="description" class="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-blue-500"
                                      placeholder="Deskripsikan material, keunggulan produk, dan detail penting lainnya"
                                      required>{{ old('description', $product->description) }}</textarea>
                            <p class="text-sm text-gray-500 mt-1">Minimal 50 karakter</p>
                        </div>

                        <!-- Ukuran -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Ukuran 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="text" name="size" value="{{ old('size', $product->size) }}" 
                                   class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                   placeholder="Contoh: XL, L, M"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Pisahkan dengan koma. Gunakan "-" jika tidak ada ukuran
                            </p>
                        </div>
                    </div>

                    <!-- Kolom Kanan -->
                    <div class="space-y-4">
                        <!-- Harga -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Harga (IDR) 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="number" name="price" value="{{ old('price', $product->price) }}" 
                                   class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                   placeholder="Contoh: 150000"
                                   min="1000"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Masukkan angka tanpa tanda titik/koma (contoh: 150000 untuk Rp150.000)
                            </p>
                        </div>

                        <!-- Stok -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Stok 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="number" name="stock" value="{{ old('stock', $product->stock) }}" 
                                   class="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500"
                                   placeholder="Contoh: 25"
                                   min="0"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Stok tidak boleh kurang dari 0
                            </p>
                        </div>

                        <!-- Gambar -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Gambar Produk
                            <span class="text-gray-500 text-sm">(Opsional)</span>
                            </label>
                            <div class="border-2 border-dashed border-gray-300 rounded-lg p-4">
                                <input type="file" name="image" 
                                       class="w-full"
                                       accept="image/jpeg, image/png, image/jpg, image/webp">
                                <p class="text-sm text-gray-500 mt-2">
                                    Format: JPEG, PNG, JPG, WEBP (Maks. 2MB)<br>
                                    Kosongkan jika tidak ingin mengganti gambar
                                </p>
                                
                                @if ($product->image)
                                    <div class="mt-4">
                                        <p class="text-sm font-semibold mb-2">Gambar Saat Ini:</p>
                                        <div class="relative group">
                                            <img src="{{ asset('storage/'.$product->image) }}" 
                                                 class="w-32 h-32 object-cover rounded-lg border-2 border-blue-200 shadow-sm"
                                                 alt="Preview Gambar Produk">
                                            <div class="absolute inset-0 bg-black bg-opacity-50 hidden group-hover:flex items-center justify-center rounded-lg">
                                                <span class="text-white text-sm">Preview Gambar</span>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>

                <div class="mt-6 flex justify-end gap-3">
                    <a href="{{ route('admin.products.index') }}" 
                       class="bg-gray-300 text-gray-700 px-6 py-2 rounded hover:bg-gray-400 transition-colors">
                        Batal
                    </a>
                    <button type="submit" 
                            class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                        Simpan Perubahan
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>