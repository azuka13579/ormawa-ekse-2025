<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Proker | Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-100 pb-4">
            📋 Tambah Program Kerja
        </h1>
        
        <form action="#" method="POST" enctype="multipart/form-data" class="space-y-6">
            @csrf
        
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Kolom Kiri -->
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Nama Singkat Proker <span class="text-red-500">*</span>
                        </label>
                        <input type="text" name="namasingkat" required 
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Contoh: PKKMB 2023">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Dimulai
                        </label>
                        <input type="date" name="startdate" 
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                        <p class="text-sm text-gray-500 mt-1">Opsional</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Tujuan <span class="text-red-500">*</span>
                        </label>
                        <textarea name="tujuan" required rows="4"
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Tuliskan tujuan utama program"></textarea>
                    </div>
                </div>

                <!-- Kolom Kanan -->
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap Proker <span class="text-red-500">*</span>
                        </label>
                        <input type="text" name="namaproker" required 
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Contoh: Program Pengenalan Kampus Mahasiswa Baru">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Berakhir
                        </label>
                        <input type="date" name="enddate" 
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                        <p class="text-sm text-gray-500 mt-1">Opsional</p>
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Deskripsi <span class="text-red-500">*</span>
                        </label>
                        <textarea name="deskripsi" required rows="4"
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Jelaskan detail pelaksanaan program"></textarea>
                    </div>
                </div>
            </div>

            <!-- Upload Gambar -->
            <div class="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center transition-colors hover:border-blue-400">
                <label class="cursor-pointer">
                    <input type="file" name="image" required class="hidden" accept="image/jpeg, image/png, image/jpg">
                    <div class="space-y-2">
                        <div class="mx-auto text-blue-500">
                            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                            </svg>
                        </div>
                        <p class="text-gray-600 font-medium">
                            <span class="text-blue-500">Klik untuk upload</span> atau drag and drop
                        </p>
                        <p class="text-xs text-gray-500">
                            Format: JPEG, PNG, JPG (Maks. 4MB)<br>
                            Usahakan gambar jelas dan relevan
                        </p>
                    </div>
                </label>
            </div>

            <!-- Tombol Submit -->
            <div class="pt-6">
                <button type="submit" 
                    class="w-full py-3 px-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center space-x-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"/>
                    </svg>
                    <span>Simpan Program Kerja</span>
                </button>
            </div>
        </form>
    </div>
</body>
</html>