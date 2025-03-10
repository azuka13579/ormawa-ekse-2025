
import { div } from "framer-motion/client";
import React from "react";

export default function Visi() {
    return (
        <div 
        data-aos="fade-up"
        data-aos-duration="1000"
        className="flex md:ml-60 mb-12">
    <div className="bg-biru md:max-w-[600px] max-w-96 max-md:mx-auto md:p-10 p-6 rounded-2xl">
        <h1 className="font-rowdies md:text-6xl text-5xl text-white mb-5">Visi</h1>
        <p className="font-montserrat text-lg md:text-xl text-white text-justify">Mewujudkan Organisasi Mahasiswa Eksekutif PKU yang berintegritas dalam dedikasi untuk aktualisasi potensi Keluarga Mahasiswa PKU menuju ekosistem yang <span className="font-bold">aktif, kreatif, inovatif, adaptif, dan kolaboratif</span>.</p>
    </div> 
    
</div>

    );
}
