<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin | Proker</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 p-6">
    <div class="max-w-6xl mx-auto bg-white p-6 rounded shadow-md">
        <h1 class="text-2xl font-bold mb-4">Selamat datang, {{ auth()->user()->nama }} dari {{ auth()->user()->div }}</h1>
        
        <a href="{{ route('addproker') }}" class="bg-blue-500 text-white px-4 py-2 rounded">Tambah Proker</a>
        
        <table class="w-full mt-4 border-collapse border border-gray-300">
            <thead>
                <tr class="bg-gray-200">
                    <th class="border px-4 py-2">Nama Singkat</th>
                    <th class="border px-4 py-2">Nama Proker</th>
                    <th class="border px-4 py-2">Tujuan</th>
                    <th class="border px-4 py-2">Deskripsi</th>
                    <th class="border px-4 py-2">Periode</th>
                    <th class="border px-4 py-2">Gambar</th>
                    <th class="border px-4 py-2">Aksi</th>
                </tr>
            </thead>
            <tbody>
                @foreach ($prokers as $proker)
                    <tr>
                        <td class="border px-4 py-2">{{ $proker->namasingkatan }}</td>
                        <td class="border px-4 py-2">{{ $proker->nama }}</td>
                        <td class="border px-4 py-2">{{ $proker->tujuan }}</td>
                        <td class="border px-4 py-2">{{ $proker->deskripsi }}</td>
                        <td class="border px-4 py-2">{{ $proker->start }} - {{ $proker->end }}</td>
                        <td class="border px-4 py-2">
                            @if ($proker->image_path)
                                <img src="{{ asset($proker->image_path) }}" class="w-20 h-20 object-cover" alt="Gambar Proker">
                            @else
                                Tidak ada gambar
                            @endif
                        </td>
                        <td class="border px-4 py-2">
                            <a href="{{ route('editproker', $proker->id) }}" class="bg-yellow-500 text-white px-3 py-1 rounded">Edit</a>
                            <form action="{{ route('deleteproker', $proker->id) }}" method="POST" class="inline">
                                @csrf
                                <button type="submit" class="bg-red-500 text-white px-3 py-1 rounded" onclick="return confirm('Apakah Anda yakin ingin menghapus proker ini?')">Hapus</button>
                            </form>
                        </td>
                    </tr>
                @endforeach
            </tbody>
        </table>

        <form action="{{ route('keluar') }}" method="POST" class="mt-4">
            @csrf
            <button type="submit" class="bg-gray-700 text-white px-4 py-2 rounded">Keluar</button>
        </form>
    </div>
</body>
</html>