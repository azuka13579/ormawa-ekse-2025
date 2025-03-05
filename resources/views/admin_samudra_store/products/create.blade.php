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

            <!-- Tampilkan pesan error jika ada -->
            @if ($errors->any())
                <div class="bg-red-100 text-red-700 p-4 rounded mb-4">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif

            <!-- Form Upload Produk -->
            <form action="{{ route('admin.products.store') }}" method="POST" enctype="multipart/form-data">
                @csrf

                <div class="grid grid-cols-2 gap-6">
                    <!-- Form Input Fields -->
                    <div class="space-y-4">
                        <div>
                            <label class="block mb-2 font-semibold">Nama Produk</label>
                            <input type="text" name="name" value="{{ old('name') }}" 
                                   class="w-full p-2 border rounded" required>
                        </div>

                        <div>
                            <label class="block mb-2 font-semibold">Deskripsi</label>
                            <textarea name="description" class="w-full p-2 border rounded" required>{{ old('description') }}</textarea>
                        </div>

                        <div>
                            <label class="block mb-2 font-semibold">Ukuran</label>
                            <input type="text" name="size" value="{{ old('size') }}" 
                                   class="w-full p-2 border rounded" required>
                        </div>
                    </div>

                    <div class="space-y-4">
                        <div>
                            <label class="block mb-2 font-semibold">Harga</label>
                            <input type="number" name="price" value="{{ old('price') }}" 
                                   class="w-full p-2 border rounded" required>
                        </div>

                        <div>
                            <label class="block mb-2 font-semibold">Stok</label>
                            <input type="number" name="stock" value="{{ old('stock') }}" 
                                   class="w-full p-2 border rounded" required>
                        </div>

                        <div>
                            <label class="block mb-2 font-semibold">Gambar Produk</label>
                            <input type="file" name="image" class="w-full p-2 border rounded" required>
                            <span class="text-sm text-gray-500">Format: jpeg, png, jpg, gif (Max: 2MB)</span>
                        </div>
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit" 
                            class="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                        Tambah Produk
                    </button>
                </div>
            </form>
        </div>
    </div>
</body>
</html>
