import { Link } from "@inertiajs/react";
import React from "react";

export default function TooManyRequests({ message }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-primary2 to-primary3 p-4">
            {/* Container */}
            <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 transform transition-all  duration-300">
                {/* Ilustrasi */}
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <div className="w-32 h-32 bg-primary1/20 rounded-full flex items-center justify-center overflow-hidden">
                            <div className="relative">
                                <div className="text-6xl animate-pulse">⏱️</div>
                                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                                    <div className="animate-spin text-4xl opacity-30 absolute">
                                        ⚙️
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="absolute -bottom-2 -right-2 bg-primary4 text-white text-sm font-bold rounded-full w-10 h-10 flex items-center justify-center transform rotate-12 animate-pulse">
                            429
                        </div>
                    </div>
                </div>

                {/* Pesan Error */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary4 to-primary2 mb-3">
                        Whoa, Tunggu Dulu!
                    </h1>
                    <p className="text-xl font-semibold text-primary5 mb-3">
                        Server Butuh Istirahat
                    </p>
                    <p className="text-primary5 mb-2">
                        {message ||
                            "Terlalu banyak permintaan dalam waktu singkat. Server kita butuh kopi sebentar!"}
                    </p>
                    <div className="inline-flex items-center bg-primary2/40 text-primary5 px-3 py-1 rounded-full text-sm">
                        <span className="animate-ping mr-2">●</span> Coba lagi
                        dalam beberapa menit
                    </div>
                </div>

                {/* Timer Visual */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-6 overflow-hidden">
                    <div className="bg-primary4 h-2.5 rounded-full animate-progress"></div>
                </div>

                {/* Pilihan Navigasi */}
                <div className="flex flex-col gap-3">
                    <Link
                        href="/"
                        className="w-full py-3 px-6 bg-gradient-to-r from-primary2 to-primary4 text-white font-medium rounded-xl text-center shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                    >
                        Kembali ke Beranda
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="w-full py-3 px-6 bg-white border border-gray-300 text-primary4 font-medium rounded-xl text-center hover:bg-gray-50 transition-colors duration-200"
                    >
                        Kembali ke Halaman Sebelumnya
                    </button>
                </div>

                {/* Tip */}
                <div className="mt-8 bg-primary2/30 rounded-lg p-4 border-l-4 border-primary4">
                    <p className="text-sm text-primary4">
                        <span className="font-bold">Tip:</span> Jika kamu sering
                        melihat halaman ini, cobalah kurangi frekuensi
                        permintaan atau hubungi administrator untuk bantuan.
                    </p>
                </div>
            </div>

            {/* Dekorasi Background */}
            <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
                <div className="absolute top-20 left-16 w-16 h-16 bg-primary4 rounded-full opacity-30"></div>
                <div className="absolute bottom-32 right-20 w-28 h-28 bg-primary4 rounded-full opacity-30"></div>
                <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-primary4 rounded-full opacity-30"></div>
                <div className="absolute bottom-1/4 left-1/3 w-14 h-14 bg-primary4 rounded-full opacity-30"></div>
            </div>

            {/* CSS untuk animasi progress bar */}
            <style jsx>{`
                @keyframes progress {
                    0% {
                        width: 0%;
                    }
                    100% {
                        width: 100%;
                    }
                }
                .animate-progress {
                    animation: progress 30s linear;
                }
            `}</style>
        </div>
    );
}
