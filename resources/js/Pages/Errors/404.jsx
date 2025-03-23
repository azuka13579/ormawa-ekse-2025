import { Link } from "@inertiajs/react";
import React from "react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 p-4">
            {/* Container */}
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transform transition-all hover:scale-105 duration-300">
                {/* Ilustrasi Karakter Lucu */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-32 h-32 bg-blue-200 rounded-full flex items-center justify-center">
                            <div className="text-8xl animate-bounce">🤔</div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center transform rotate-12">
                            404
                        </div>
                    </div>
                </div>

                {/* Pesan Error */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-3">
                        Oops!
                    </h1>
                    <p className="text-xl font-semibold text-gray-800 mb-2">
                        Halaman Website Samudra Wirakarsa Menghilang!
                    </p>
                    <p className="text-gray-600">
                        Sepertinya halaman yang kamu cari sedang bersembunyi atau mungkin sedang liburan 🏝️
                    </p>
                </div>

                {/* Pilihan Navigasi */}
                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="w-full py-3 px-6 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                    >
                        Kembali ke Beranda
                    </Link>
                    
                    <button 
                        onClick={() => window.history.back()} 
                        className="w-full py-3 px-6 bg-white border border-gray-300 text-gray-700 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors duration-200"
                    >
                        Kembali ke Halaman Sebelumnya
                    </button>
                </div>

                {/* Tip Lucu */}
                <div className="mt-8 bg-blue-50 rounded-lg p-4 border-l-4 border-blue-400">
                    <p className="text-sm text-blue-800">
                        <span className="font-bold">Tip:</span> Jika kamu tersesat di internet, jangan panik! 
                        Gunakan tombol di atas untuk menemukan jalan pulang 🏠
                    </p>
                </div>
            </div>

            {/* Dekorasi Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-16 w-20 h-20 bg-pink-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-32 right-20 w-32 h-32 bg-yellow-200 rounded-full opacity-50"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-200 rounded-full opacity-50"></div>
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-green-200 rounded-full opacity-50"></div>
            </div>
        </div>
    );
}