<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Produk - Samudra Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100">
    <div class="container mx-auto p-6">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h2 class="text-2xl font-bold mb-6">Tambah Produk</h2>

            @if ($errors->any())
                <div class="bg-red-100 text-red-700 p-4 rounded mb-4">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="grid grid-cols-2 gap-6">
                    <!-- Kolom Kiri -->
                    <div class="space-y-4">
                        <!-- Nama Produk -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Nama Produk 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="text" name="name" value="{{ old('name') }}" 
                                   class="w-full p-2 border rounded" 
                                   placeholder="Contoh: Kaos Polo Lengan Pendek"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">Maksimal 100 karakter</p>
                        </div>

                        <!-- Deskripsi -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Deskripsi 
                                <span class="text-red-500">*</span>
                            </label>
                            <textarea name="description" class="w-full p-2 border rounded h-32" 
                                      placeholder="Deskripsikan detail produk, bahan, dan keunggulan"
                                      required>{{ old('description') }}</textarea>
                            <p class="text-sm text-gray-500 mt-1">Minimal 50 karakter</p>
                        </div>

                        <!-- Ukuran -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Ukuran 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="text" name="size" value="{{ old('size') }}" 
                                   class="w-full p-2 border rounded" 
                                   placeholder="Contoh: XL, L, M"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Pisahkan dengan koma. Gunakan '-' jika tidak ada ukuran
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
                            <input type="number" name="price" value="{{ old('price') }}" 
                                   class="w-full p-2 border rounded" 
                                   placeholder="Contoh: 150000"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Masukkan angka tanpa titik atau koma (contoh: 150000 untuk Rp150.000)
                            </p>
                        </div>

                        <!-- Stok -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Stok 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="number" name="stock" value="{{ old('stock') }}" 
                                   class="w-full p-2 border rounded" 
                                   placeholder="Contoh: 50"
                                   min="0"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Masukkan jumlah stok dalam angka bulat
                            </p>
                        </div>

                        <!-- Gambar -->
                        <div>
                            <label class="block mb-2 font-semibold">
                                Gambar Produk 
                                <span class="text-red-500">*</span>
                            </label>
                            <input type="file" name="image" 
                                   class="w-full p-2 border rounded"
                                   accept="image/jpeg, image/png, image/jpg, image/gif"
                                   required>
                            <p class="text-sm text-gray-500 mt-1">
                                Format: JPEG, PNG, JPG, GIF (Maks. 2MB). Usahakan gambar jelas dan background rapi
                            </p>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit" 
                            class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors">
                        Tambah Produk
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>