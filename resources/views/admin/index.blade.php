<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home | Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex flex-col">
    <div class="w-full p-6 bg-white shadow-lg">
        <h1 class="text-2xl font-bold text-gray-800 mb-4">Dashboard Admin</h1>
        
        <a href="{{ route('addproker') }}" class="inline-block px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-primary-600 transition">Tambah Proker</a>
        
        <div class="mt-4">
            <form action="" method="POST" class="w-1/4">
                @csrf
                <button type="submit" class="w-full mt-4 px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">Keluar</button>
            </form>
        </div>
    </div>
</body>
</html>