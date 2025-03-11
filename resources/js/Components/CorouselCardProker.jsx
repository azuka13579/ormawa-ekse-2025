import React from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "@inertiajs/react";
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
const CarouselCardproker = (props) => {
    // Format tanggal menjadi lebih user friendly
    const formatDate = (dateString) => {
        const options = {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        };

        try {
            const date = new Date(dateString);
            return date.toLocaleDateString("id-ID", options);
        } catch (error) {
            return dateString; // Fallback jika format tanggal tidak valid
        }
    };
    const divisi = divisiData.find((d) => d.id === props.div_id);
    console.log("divisi cek", divisi);

    return (
        <>
            <div
                className=" rounded-xl shadow-md mx-2 transform transition-all duration-300 
                  hover:shadow-xl hover:-translate-y-1 cursor-pointer group overflow-hidden"
            >
                {/* Image Container with Improved Overlay */}
                <div className="relative h-64 overflow-hidden">
                    <img
                        src={`${window.location.origin}/${props.image_path}`}
                        alt={props.nama}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                </div>

                {/* Info Section with Improved Date Format */}
                <div className="px-4 py-3 bg-white rounded-b-xl">
                    <h3 className=" text-primary4 font-bold text-xl drop-shadow-lg">
                        {props.nama}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                        <Calendar className="w-4 h-4 text-primary2" />
                        <div className="flex items-center">
                            <span>{formatDate(props.start)}</span>
                            <ArrowRight className="w-3 h-3 mx-2" />
                            <span>{formatDate(props.end)}</span>
                        </div>
                    </div>

                    {/* View more link */}
                    <Link href={`/tentang/${divisi.nama}`}>
                        <button className="mt-2 flex justify-end text-primary5 text-sm font-medium px-3 py-1 border border-primary5 rounded-md hover:bg-primary5 hover:text-white transition-all">
                            Lihat Detail
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default CarouselCardproker;
