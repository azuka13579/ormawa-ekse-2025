<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Edit Proker</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div class="w-full max-w-3xl bg-white shadow-xl rounded-2xl p-8">
        <h1 class="text-3xl font-bold text-gray-800 mb-8 text-center border-b-2 border-blue-100 pb-4">
            ✏️ Edit Program Kerja
        </h1>

        <form action="{{ route('updateproker', $proker->id) }}" method="POST" enctype="multipart/form-data" class="space-y-6">
            @csrf
        
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Kolom Kiri -->
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Nama Singkat <span class="text-red-500">*</span>
                        </label>
                        <input type="text" name="namasingkat" value="{{ $proker->namasingkatan }}" required
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Contoh: PKKMB 2023">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Mulai <span class="text-red-500">*</span>
                        </label>
                        <input type="date" name="startdate" value="{{ $proker->start }}" required
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Tujuan <span class="text-red-500">*</span>
                        </label>
                        <textarea name="tujuan" required rows="4"
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Tujuan utama program">{{ $proker->tujuan }}</textarea>
                    </div>
                </div>

                <!-- Kolom Kanan -->
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Nama Lengkap <span class="text-red-500">*</span>
                        </label>
                        <input type="text" name="namaproker" value="{{ $proker->nama }}" required
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Nama lengkap program">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Tanggal Selesai <span class="text-red-500">*</span>
                        </label>
                        <input type="date" name="enddate" value="{{ $proker->end }}" required
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all">
                    </div>

                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">
                            Deskripsi <span class="text-red-500">*</span>
                        </label>
                        <textarea name="deskripsi" required rows="4"
                            class="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
                            placeholder="Detail pelaksanaan program">{{ $proker->deskripsi }}</textarea>
                    </div>
                </div>
            </div>

            <!-- Upload Gambar -->
            <div class="border-2 border-dashed border-gray-300 rounded-2xl p-6 text-center transition-colors hover:border-blue-400">
                <label class="cursor-pointer">
                    <input type="file" name="image" class="hidden" accept="image/jpeg, image/png, image/jpg">
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
                            Biarkan kosong jika tidak ingin mengganti gambar
                        </p>
                    </div>
                </label>
            </div>

            <!-- Preview Gambar Saat Ini -->
            @if($proker->image_path)
                <div class="mt-4">
                    <p class="text-sm font-medium text-gray-700 mb-2">Gambar Saat Ini:</p>
                    <div class="border-2 border-gray-200 rounded-xl p-2 inline-block">
                        <img src="{{ asset($proker->image_path) }}" alt="Current Proker Image" 
                            class="w-48 h-48 object-cover rounded-lg shadow-sm">
                    </div>
                </div>
            @endif

            <!-- Action Buttons -->
            <div class="pt-6 flex justify-end space-x-4">
                <a href="{{ route('admin-index') }}" 
                    class="px-6 py-2 border-2 border-gray-300 text-gray-600 font-semibold rounded-xl hover:bg-gray-50 transition-all flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    Batal
                </a>
                <button type="submit" 
                    class="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl transition-all transform hover:scale-[1.02] flex items-center">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Simpan Perubahan
                </button>
            </div>
        </form>
    </div>
</body>
</html>