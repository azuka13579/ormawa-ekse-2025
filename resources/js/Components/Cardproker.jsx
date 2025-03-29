import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
const divisiData = [
    { id: 1, nama: "Departemen Advokasi Kesejahteraan Mahasiswa" },
    { id: 2, nama: "Departemen Sosial dan Lingkungan Hidup" },
    { id: 3, nama: "Biro Internal" },
    { id: 4, nama: "Departemen Seni dan Budaya" },
    { id: 5, nama: "Departemen Akademik Prestasi" },
    { id: 6, nama: "Biro Media Branding" },
    { id: 7, nama: "Departemen Pengembangan Sumber Daya Mahasiswa" },
    { id: 8, nama: "Biro Kolaborasi dan Kemitraan" },
    { id: 9, nama: "Departemen Kajian dan Aksi Strategis" },
    { id: 10, nama: "Departemen Ekonomi Kreatif" },
    { id: 11, nama: "Departemen Pemuda dan Olahraga" },
    { id: 12, nama: "Biro Riset Pengembangan" },
];

export default function Cardproker(props) {
    const [isOpen, setIsOpen] = useState(false);
    const divisi = divisiData.find((d) => d.id === props.div_id) || {
        nama: "Divisi Tidak Diketahui",
    };
    console.log(props);

    return (
        <article
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            data-aos-duration="800"
            data-aos="fade-up"
        >
            <button
                onClick={() => setIsOpen(true)}
                className="w-full h-full text-left focus:outline-none focus:ring-2 focus:ring-primary4"
                aria-label={`Buka detail program kerja ${props.judul}`}
            >
                <div className="relative aspect-video overflow-hidden rounded-t-xl">
                    <img
                        src={`${window.location.origin}/${props.image_path}`}
                        alt={`Cover program kerja ${props.judul}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                            e.target.src = "/placeholder-proker.jpg"; // Ganti dengan fallback image
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent" />
                </div>

                <div className="p-6 space-y-2">
                    <span className="text-sm md:text-xl lg:text-xl bg-gradient-to-r py-16 from-primary7 to-primary5 bg-clip-text text-transparent font-montserrat">
                        {divisi.nama}
                    </span>
                    <h3 className="text-xl font-bold text-primary5 line-clamp-2">
                        {props.judul}
                    </h3>
                    <p className="text-sm text-gray-500">
                        {props.start} - {props.end}
                    </p>
                </div>
            </button>

            {isOpen &&
                createPortal(
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="modal-title"
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm transition-all"
                    >
                        <div
                            className="absolute inset-0 bg-black/30"
                            onClick={() => setIsOpen(false)}
                        />

                        <div
                            className="relative w-full max-w-[80vw] max-h-[90vh] bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
                            data-aos-duration="500"
                            data-aos="zoom-in"
                        >
                            <button
                                className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 text-gray-500"
                                onClick={() => setIsOpen(false)}
                                aria-label="Tutup modal"
                            >
                                <X size={24} />
                            </button>

                            <div className="md:w-full p-6 md:p-8 overflow-y-auto flex md:flex-row flex-col gap-6">
                                <div className="flex-1 bg-gray-100 ">
                                    <img
                                        src={`${window.location.origin}/${props.image_path}`}
                                        alt={`Detail program kerja ${props.judul}`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                                <div className="md:w-1/2">
                                    <header>
                                        <h1
                                            id="modal-title"
                                            className="text-3xl font-bold text-primary5 mb-2"
                                        >
                                            {props.judul}
                                        </h1>
                                        <div className="space-y-1 text-sm text-gray-500">
                                            <p>
                                                {props.start} - {props.end}
                                            </p>
                                            <p className="font-medium text-primary4">
                                                {divisi.nama}
                                            </p>
                                        </div>
                                    </header>
                                    <section className="space-y-4 mt-4">
                                        <div>
                                            <h2 className="text-xl font-semibold mb-2 text-primary5">
                                                Tujuan
                                            </h2>
                                            <p className="text-black whitespace-pre-line leading-relaxed">
                                                {props.tujuan}
                                            </p>
                                        </div>

                                        <div>
                                            <h2 className="text-xl font-semibold mb-2 text-primary5">
                                                Deskripsi
                                            </h2>
                                            <p className="text-black whitespace-pre-line leading-relaxed">
                                                {props.deskripsi}
                                            </p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
        </article>
    );
}
