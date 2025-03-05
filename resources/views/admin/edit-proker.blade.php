<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Proker</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="p-6 bg-gray-100">
    <div class="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 class="text-xl font-bold mb-4">Edit Program Kerja</h1>

        <form action="{{ route('updateproker', $proker->id) }}" method="POST" enctype="multipart/form-data">
            @csrf
            <label class="block mb-2">Nama Singkat Proker</label>
            <input type="text" name="namasingkat" value="{{ $proker->namasingkatan }}" required class="w-full p-2 border rounded mb-4">
            <label class="block mb-2">Nama Proker</label>
            <input type="text" name="namaproker" value="{{ $proker->nama }}" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Tujuan</label>
            <input type="text" name="tujuan" value="{{ $proker->tujuan }}" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Deskripsi</label>
            <textarea name="deskripsi" required class="w-full p-2 border rounded mb-4">{{ $proker->deskripsi }}</textarea>

            <label class="block mb-2">Tanggal Mulai</label>
            <input type="date" name="startdate" value="{{ $proker->start }}" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Tanggal Selesai</label>
            <input type="date" name="enddate" value="{{ $proker->end }}" required class="w-full p-2 border rounded mb-4">

            <label class="block mb-2">Gambar</label>
            <input type="file" name="image" class="w-full p-2 border rounded mb-4">
            @if($proker->image_path)
                <p class="text-sm text-gray-500">Gambar saat ini:</p>
                <img src="{{ asset($proker->image_path) }}" alt="Gambar Proker" class="w-32 h-32 object-cover rounded mb-4">
            @endif

            <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
            <a href="{{ route('admin-index') }}" class="ml-4 text-gray-600">Batal</a>
        </form>
    </div>
</body>
</html>
