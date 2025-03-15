<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Informasi</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-6 bg-gray-100">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-xl font-bold mb-4">Edit informasi</h1>

        <form action="{{ route('updateinformasi', $informasi->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            <label class="block mb-2">Judul</label>
            <input type="text" name="judul" value="{{ $informasi->judul }}" required class="w-full p-2 border rounded mb-4">
            <label class="block mb-2">Deskripsi Singkat</label>
            <input type="text" name="deskripsi_singkat" value="{{ $informasi->deskripsi_singkat }}" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Deskripsi</label>
            <textarea name="deskripsi" value="" required class="w-full p-2 border rounded mb-4 h-40">{{ $informasi->deskripsi }}</textarea>

            <label class="block mb-2">Narahubung (No HP)</label>
            <input type="text" value="{{ $informasi->narahubung }}" name="narahubung" required class="w-full p-2 border rounded mb-4"></input>

            <label class="block mb-2">Gambar</label>
            <input type="file" name="image" class="w-full p-2 border rounded mb-4">
             <p class="text-sm text-gray-500 mt-1">Format: JPEG, PNG, JPG, GIF (Maks. 4MB). Usahakan gambar jelas </p>
            @if($informasi->image_path)
                <p class="text-sm text-gray-500">Gambar saat ini:</p>
                <img src="{{ asset($informasi->image_path) }}" alt="Gambar Proker" class="w-32 h-32 object-cover rounded mb-4">
            @endif

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
            <a href="{{ route('admin-index') }}" class="ml-4 text-gray-600">Batal</a>
        </form>
    </div>
</body>
</html>
