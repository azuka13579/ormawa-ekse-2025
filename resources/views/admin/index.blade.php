<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Admin | Proker</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Heroicons CDN -->
    <script src="https://unpkg.com/@heroicons/v2.0.18/24/outline/index.js"></script>
</head>
<body class="bg-gray-50 min-h-screen">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div class="flex flex-col space-y-6">
            <!-- Header Section -->
            <div class="flex justify-between items-center bg-gradient-to-r from-blue-600 to-blue-500 p-6 rounded-xl shadow-lg">
                <div>
                    <h1 class="text-2xl font-bold text-white">Halo, {{ auth()->user()->nama }}</h1>
                    <p class="text-blue-100">Divisi {{ auth()->user()->div }}</p>
                </div>
                <div class="flex gap-4">

                    <a href="{{ route('addproker') }}" class="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Tambah Proker
                    </a>
                    <a href="{{ route('addinformasi') }}" class="flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-all">
                        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                        </svg>
                        Tambah Informasi
                    </a>
                    <form action="{{ route('keluar') }}" method="POST" class="">
                        @csrf
                        <button type="submit" class="flex items-center bg-red-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700 transition-all">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                            </svg>
                            Keluar
                        </button>
                    </form>
                </div>
            </div>

            <!-- Proker Table -->
            <div class="flex flex-col gap-4">
                <h1 class="text-4xl text-black font-bold">Proker</h1>
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Nama Singkat</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Proker</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Tujuan</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Periode</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Gambar</th>
                                    <th class="px-6 py-4 text-right text-sm font-semibold text-gray-700">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                @foreach ($prokers as $proker)
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 text-sm text-gray-800 font-medium">{{ $proker->namasingkatan }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-800 max-w-xs">{{ $proker->nama }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-600">{{ Str::limit($proker->tujuan, 50) }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-600">
                                        <span class="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs">{{ \Carbon\Carbon::parse($proker->start)->locale('id')->translatedFormat('j F Y') }} – 
                                            {{ \Carbon\Carbon::parse($proker->end)->locale('id')->translatedFormat('j F Y') }}
                                            </span>
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="w-16 h-16 rounded-lg overflow-hidden border">
                                            @if ($proker->image_path)
                                                <img src="{{ asset($proker->image_path) }}" class="w-full h-full object-cover" alt="Gambar Proker">
                                            @else
                                                <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                                                    <span class="text-gray-400 text-xs">No Image</span>
                                                </div>
                                            @endif
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-right space-x-2">
                                        <a href="{{ route('editproker', $proker->id) }}" class="inline-flex items-center p-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                            </svg>
                                        </a>
                                        <form action="{{ route('deleteproker', $proker->id) }}" method="POST" class="inline">
                                            @csrf
                                            <button type="submit" onclick="return confirm('Apakah Anda yakin ingin menghapus proker ini?')" class="inline-flex items-center p-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                </svg>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div class="flex flex-col gap-4">
                <h1 class="text-4xl text-black font-bold">Informasi</h1>
                <div class="bg-white rounded-xl shadow-md overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">No</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Judul</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Deskripsi</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Narahubung</th>
                                    <th class="px-6 py-4 text-left text-sm font-semibold text-gray-700">Gambar</th>
                                    <th class="px-6 py-4 text-right text-sm font-semibold text-gray-700">Aksi</th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200">
                                @foreach ($information as $index => $informasi)
                                <tr class="hover:bg-gray-50 transition-colors">
                                    <td class="px-6 py-4 text-sm text-gray-800 font-medium">{{ $index + 1 }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-800 max-w-xs">{{ $informasi->judul }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-600">{{ Str::limit($informasi->deskripsi, 50) }}</td>
                                    <td class="px-6 py-4 text-sm text-gray-600">
                                        {{ $informasi->narahubung }}
                                    </td>
                                    <td class="px-6 py-4">
                                        <div class="w-16 h-16 rounded-lg overflow-hidden border">
                                            @if ($informasi->image_path)
                                                <img src="{{ asset($informasi->image_path) }}" class="w-full h-full object-cover" alt="Gambar Proker">
                                            @else
                                                <div class="w-full h-full bg-gray-100 flex items-center justify-center">
                                                    <span class="text-gray-400 text-xs">No Image</span>
                                                </div>
                                            @endif
                                        </div>
                                    </td>
                                    <td class="px-6 py-4 text-right space-x-2">
                                        <a href="{{ route('editinformasi', $informasi->id) }}" class="inline-flex items-center p-2 text-sm font-medium text-blue-600 hover:bg-blue-50 rounded-lg">
                                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/>
                                            </svg>
                                        </a>
                                        <form action="{{ route('deleteinformasi', $informasi->id) }}" method="POST" class="inline">
                                            @csrf
                                            <button type="submit" onclick="return confirm('Apakah Anda yakin ingin menghapus proker ini?')" class="inline-flex items-center p-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg">
                                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                                                </svg>
                                            </button>
                                        </form>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <!-- Logout Button -->
            
        </div>
    </div>
</body>
</html>