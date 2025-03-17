<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Informasi | Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
 
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold text-gray-800 mb-4 text-center">Tambah Informasi</h1>
        
        <form action="#" method="POST" enctype="multipart/form-data" class="space-y-4">
            @csrf
            
            <div>
                <label class="block text-gray-700 font-medium">Judul</label>
                <input type="text" name="judul" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            </div>
            <div>
                <label class="block text-gray-700 font-medium">Deskripsi Singkat</label>
                <input type="text" name="deskripsi_singkat" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Deskripsi</label>
                <textarea name="deskripsi" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 h-40"></textarea>
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Narahubung (No HP)</label>
                <input type="text" name="narahubung" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"></input>
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Gambar</label>
                <input type="file" name="image" required class="w-full px-4 py-2 border rounded-lg">
             <p class="text-sm text-gray-500 mt-1">Format: JPEG, PNG, JPG (Maks. 4MB). Usahakan gambar jelas </p>
                
            </div>
            
            <div class="text-center">
                <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Simpan</button>
            </div>
        </form>
    </div>
</body>
</html>
