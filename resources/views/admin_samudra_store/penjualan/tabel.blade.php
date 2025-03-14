<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Penjualan</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>
<body class="bg-gray-100">
    <nav class="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white shadow-lg">
        <div class="container font-montserrat mx-auto flex items-center justify-between">
            <!-- Logo -->
            <div class="flex items-center space-x-3">
                <img src="../img/Samudrastore.png" alt="Samudra Store" class="max-w-[80px] md:max-w-[100px] h-auto">
                <h1 class="text-2xl font-bold tracking-tight text-primary5">Samudra Store Admin</h1>
            </div>
    
            <!-- Navigasi -->
            <div class="hidden md:flex space-x-6">
                <a href="{{ route('admin.products.index') }}" class="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-700/30 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                    </svg>
                    <span>Produk</span>
                </a>
                <a href="{{ route('admin.products.penjualan') }}" class="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-700/30 transition-all duration-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                    </svg>
                    <span>Penjualan</span>
                </a>
            </div>
    
            <!-- Logout -->
            <form action="{{ route('admin.logout') }}" method="POST">
                @csrf
                <button type="submit" class="flex items-center space-x-2 bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/>
                    </svg>
                    <span>Logout</span>
                </button>
            </form>
        </div>
    </nav>

    <div class="max-w-9xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h1 class="text-2xl font-bold mb-6 text-gray-700">Dashboard Penjualan</h1>

        <!-- Filter dan Search -->
        <div class="flex flex-col md:flex-row justify-between items-center gap-4 mb-6 bg-white p-5 rounded-lg shadow-md">
            <div class="relative w-full md:w-2/3">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </div>
                <input type="text" id="search" placeholder="Cari Nama atau NIM pembeli" 
                    class="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 text-base" 
                    value="{{ request('search') }}">
            </div>
            
            <div class="flex items-center gap-2 w-full md:w-auto">
                <button id="search-btn" class="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium flex items-center gap-2 shadow-sm">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                    Cari
                </button>
                
                <div class="flex items-center gap-2">
                    <label for="limit" class="text-gray-700 font-medium whitespace-nowrap">Tampilkan:</label>
                    <select id="limit" class="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 cursor-pointer">
                        <option value="10" {{ request('limit') == 10 ? 'selected' : '' }}>10</option>
                        <option value="20" {{ request('limit') == 20 ? 'selected' : '' }}>20</option>
                        <option value="50" {{ request('limit') == 50 ? 'selected' : '' }}>50</option>
                        <option value="100" {{ request('limit') == 100 ? 'selected' : '' }}>100</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="overflow-x-auto rounded-lg border shadow-lg">
            <table class="w-full text-base">
                <thead class="bg-gradient-to-r from-blue-50 to-blue-100">
                    <tr>
                        <th class="p-5 text-left font-bold text-gray-800">Nama</th>
                        <th class="p-5 text-left font-bold text-gray-800">NIM</th>
                        <th class="p-5 text-left font-bold text-gray-800">Email</th>
                        <th class="p-5 text-left font-bold text-gray-800">No WhatssApp</th>
                        <th class="p-5 text-left font-bold text-gray-800">Fakultas</th>
                        <th class="p-5 text-left font-bold text-gray-800">Departemen</th>
                        <th class="p-5 text-left font-bold text-gray-800">Produk</th>
                        <th class="p-5 text-left font-bold text-gray-800">Total</th>
                        <th class="p-5 text-left font-bold text-gray-800">Resi</th>
                        <th class="p-5 text-center font-bold text-gray-800">Status Pembayaran</th>
                        <th class="p-5 text-center font-bold text-gray-800">Status Terima</th>
                        <th class="p-5 text-center font-bold text-gray-800">Hapus</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 text-sm">
                    @foreach ($data as $pembeli)
    <tr class="hover:bg-blue-50 transition-colors">
        <td class="p-3 text-gray-700">{{ $pembeli['nama'] }}</td>
        <td class="p-3 text-gray-700">{{ $pembeli['nim'] }}</td>
        <td class="p-3 text-gray-700">{{ $pembeli['email'] }}</td>
        <td class="p-3 text-gray-700">{{ $pembeli['no_wa'] }}</td>
        <td class="p-3 text-gray-700">{{ $pembeli['fakultas'] }}</td>
        <td class="p-3 text-gray-700">{{ $pembeli['departemen'] }}</td>
        <td class="p-3">
            @php $totalBelanja = 0; @endphp
            @foreach ($pembeli['produk'] as $produk)
                @php $subtotal = $produk['price'] * $produk['kuantitas']; @endphp
                @php $totalBelanja += $subtotal; @endphp
                <div class="flex mb-2 last:mb-0 bg-white py-10 px-4 rounded-lg border border-gray-100 shadow-sm">
                    <img src="{{ asset('storage/' . ($produk['image_path'] ?? 'default.png')) }}" 
                         class="w-16 h-16 rounded-md object-cover mr-4 border shadow-sm">
                    <div class="block pr-16">
                        <p class="text-gray-800 font-semibold text-lg">{{ $produk['nama_produk'] }}</p>
                        <p class="text-base text-gray-600">
                            <span class="">Ukuran:</span> {{ $produk['size'] }}
                            <span class="">Jumlah:</span> {{ $produk['kuantitas'] }} pcs
                        </p>
                        
                    </div>
                </div>
            @endforeach
        </td>
        <td class="p-3 text-gray-700 font-bold">Rp{{ number_format($totalBelanja, 0, ',', '.') }}</td> <!-- Total Belanja -->
        <td class="p-3">
            <div class="cursor-zoom-in resi-thumbnail" 
                 onclick="showResiModal('{{ asset('storage/' . ($pembeli['recipe_path'] ?? 'default_recipe.png')) }}')">
                <img src="{{ asset('storage/' . ($pembeli['recipe_path'] ?? 'default_recipe.png')) }}" 
                     class="w-24 h-24 rounded-md border shadow-sm object-cover transition-transform hover:scale-110">
            </div>
        </td>
        <td class="p-3 text-center">
            <div class="flex flex-col space-y-3 items-center">
                @if($pembeli['status'] == 'pending')
                    <div class="flex space-x-2">
                        <button class="accept-btn px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200 transition-colors flex items-center shadow-sm"
                                data-id="{{ $pembeli['id_beli'] }}" data-status="accepted">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                            Terima
                        </button>
                        <button class="reject-btn px-4 py-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200 transition-colors flex items-center shadow-sm"
                                data-id="{{ $pembeli['id_beli'] }}" data-status="rejected">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                            </svg>
                            Tolak
                        </button>
                    </div>
                @else
                    <span class="px-4 py-2 rounded-lg text-base font-semibold 
                          {{ $pembeli['status'] == 'accepted' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700' }}">
                        {{ $pembeli['status'] == 'accepted' ? 'Bukti Pembayaran Valid' : 'Bukti Pembayaran Tidak Valid' }}
                    </span>
                @endif
            </div>
        </td>
        <td class="p-2 text-center">
            <button class="toggle-diterima-btn px-5 py-3 rounded-lg text-base font-semibold transition-colors shadow-sm
                {{ $pembeli['status_diterima'] ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-orange-100 text-orange-700 hover:bg-orange-200' }}" 
                data-id="{{ $pembeli['id_beli'] }}" 
                data-status="{{ $pembeli['status_diterima'] ? 'true' : 'false' }}">
                @if($pembeli['status_diterima'])
                    <svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                    </svg>
                    Sudah Diterima
                @else
                    <svg class="w-5 h-5 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                    </svg>
                    Belum Diterima
                @endif
            </button>
        </td>
        <td>
            <button class="delete-btn px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center shadow-sm"
                        data-id="{{ $pembeli['id_beli'] }}">
                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                    </svg>
                    Hapus
                </button>
        </td>
    </tr>
@endforeach

                </tbody>
            </table>
        </div>

        <!-- Pagination -->
        <div class="mt-6">
            {{ $data->appends(['search' => request('search'), 'limit' => request('limit')])->links() }}
        </div>
    </div>

    <!-- Resi Modal -->
    <div id="resiModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center p-4 z-50">
        <div class="bg-white rounded-lg max-w-2xl w-full p-6 relative">
            <button onclick="closeResiModal()" class="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </button>
            <img id="modalResiImage" class="w-full h-auto rounded-lg">
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", function () {

            const searchInput = document.getElementById("search");
            const searchButton = document.getElementById("search-btn");
            const limitSelect = document.getElementById("limit");

            function updateURL() {
                const search = searchInput.value;
                const limit = limitSelect.value;
                window.location.href = `?search=${search}&limit=${limit}`;
            }

            searchButton.addEventListener("click", updateURL);

            searchInput.addEventListener("keypress", function (event) {
                if (event.key === "Enter") {
                    event.preventDefault();
                    updateURL();
                }
            });

            limitSelect.addEventListener("change", updateURL);
            document.querySelectorAll(".accept-btn, .reject-btn").forEach(button => {
            button.addEventListener("click", function () {
                const id = this.getAttribute("data-id");
                const status = this.getAttribute("data-status");

                fetch("{{ route('admin.updateStatus') }}", {
                    method: "POST",
                    headers: {
                        "X-CSRF-TOKEN": document.querySelector("meta[name='csrf-token']").getAttribute("content"),
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id, status }),
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        window.location.reload();
                    } else {
                        alert("Gagal memperbarui status.");
                    }
                })
                .catch(error => console.error("Error:", error));
            });
        });

        document.querySelectorAll(".delete-btn").forEach(button => {
            button.addEventListener("click", function () {
                if (confirm("Apakah Anda yakin ingin menghapus data ini?")) {
                    const id = this.getAttribute("data-id");

                    fetch(`/admin/delete/${id}`, {
                        method: "DELETE",
                        headers: {
                            "X-CSRF-TOKEN": document.querySelector("meta[name='csrf-token']").getAttribute("content"),
                        }
                    })
                    .then(response => response.json())
                    .then(data => {
                        if (data.success) {
                            window.location.reload();
                        } else {
                            alert("Gagal menghapus data.");
                        }
                    })
                    .catch(error => console.error("Error:", error));
                }
            });
        });
        
        // Toggle Diterima Status
       // Replace your current toggle-diterima event listener code with this:
document.querySelectorAll(".toggle-diterima-btn").forEach(button => {
    button.addEventListener("click", function() {
        const id = this.getAttribute("data-id");
        const currentStatus = this.getAttribute("data-status");
        // Toggle the status (if true becomes false, if false becomes true)  
        const newStatus = currentStatus === "true" ? false : true;
        const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
        
        // Update UI optimistically
        this.setAttribute("data-status", String(newStatus));
        if (newStatus) {
            this.classList.remove("bg-gray-200", "hover:bg-gray-300", "text-gray-700");
            this.classList.add("bg-green-500", "hover:bg-green-600", "text-white");
            this.innerHTML = '<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Sudah Diterima</span>';
        } else {
            this.classList.remove("bg-green-500", "hover:bg-green-600", "text-white");
            this.classList.add("bg-gray-200", "hover:bg-gray-300", "text-gray-700");
            this.innerHTML = '<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>Belum Diterima</span>';
        }

        fetch("{{ route('admin.updateDiterima') }}", {
            method: "POST",
            headers: {
                "X-CSRF-TOKEN": csrfToken,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, status: newStatus }),
        })
        .then(response => {
            // Check if response is ok before parsing JSON
            if (!response.ok) {
                throw new Error('Server responded with error: ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            console.log("Response:", data);
            if (!data.success) {
                // Revert UI changes if server reports failure
                this.setAttribute("data-status", currentStatus);
                if (currentStatus === "true") {
                    this.classList.remove("bg-gray-200", "hover:bg-gray-300", "text-gray-700");
                    this.classList.add("bg-green-500", "hover:bg-green-600", "text-white");
                    this.innerHTML = '<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Sudah Diterima</span>';
                } else {
                    this.classList.remove("bg-green-500", "hover:bg-green-600", "text-white");
                    this.classList.add("bg-gray-200", "hover:bg-gray-300", "text-gray-700");
                    this.innerHTML = '<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>Belum Diterima</span>';
                }
                alert("Gagal memperbarui status penerimaan.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            // Revert UI changes on error
            this.setAttribute("data-status", currentStatus);
            if (currentStatus === "true") {
                this.classList.remove("bg-gray-200", "hover:bg-gray-300", "text-gray-700");
                this.classList.add("bg-green-500", "hover:bg-green-600", "text-white");
                this.innerHTML = '<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg>Sudah Diterima</span>';
            } else {
                this.classList.remove("bg-green-500", "hover:bg-green-600", "text-white");
                this.classList.add("bg-gray-200", "hover:bg-gray-300", "text-gray-700");
                this.innerHTML = '<span class="flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>Belum Diterima</span>';
            }
            alert("Terjadi kesalahan saat memperbarui status penerimaan.");
        });
    });
});
        });
        function showResiModal(imageSrc) {
            document.getElementById('modalResiImage').src = imageSrc;
            document.getElementById('resiModal').classList.remove('hidden');
            document.body.classList.add('overflow-hidden');
        }

        function closeResiModal() {
            document.getElementById('resiModal').classList.add('hidden');
            document.body.classList.remove('overflow-hidden');
        }

        // Close modal on outside click
        document.getElementById('resiModal').addEventListener('click', function(e) {
            if (e.target === this) closeResiModal();
        });

        
        
    </script>

</body>
</html>
