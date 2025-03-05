<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Proker | Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
 
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    <div class="w-full max-w-2xl p-6 bg-white shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold text-gray-800 mb-4 text-center">Tambah Program Kerja</h1>
        
        <form action="#" method="POST" enctype="multipart/form-data" class="space-y-4">
            @csrf
            
            <div>
                <label class="block text-gray-700 font-medium">Nama Singkat Proker</label>
                <input type="text" name="namasingkat" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            </div>
            <div>
                <label class="block text-gray-700 font-medium">Nama Proker</label>
                <input type="text" name="namaproker" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Tujuan</label>
                <textarea name="tujuan" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Deskripsi</label>
                <textarea name="deskripsi" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Gambar</label>
                <input type="file" name="image" required class="w-full px-4 py-2 border rounded-lg">
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Tanggal Dimulai</label>
                <input type="date" name="startdate" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Tanggal Berakhir</label>
                <input type="date" name="enddate" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400">
            </div>
            
            <div class="text-center">
                <button type="submit" class="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">Simpan</button>
            </div>
        </form>
    </div>
</body>
</html>
