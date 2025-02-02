import React from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion"; // Import motion dari framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView untuk mendeteksi scroll

export default function Home({ nama }) {
    const { ref: textRef, inView } = useInView({
        triggerOnce: false, // Men-trigger animasi ketika elemen muncul
        threshold: 0.2, // 20% dari elemen harus terlihat
    });

    return (
        <div>
            <Navbar />

            {/* Animasi untuk bagian pertama */}
            <motion.div
                initial={{ opacity: 0, y: 50 }} // Mulai dari opacity 0 dan geser sedikit ke bawah
                animate={{ opacity: inView ? 0 : 1 }} // Setelah animasi, opacity jadi 1 dan kembali ke posisi semula
                transition={{ duration: 1.5, delay: 0.5 }} // Durasi animasi 1 detik
                className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 max-w[500px]"
            >
                {/* Teks */}
                <div className="max-w-[600px] font-rowdies">
                    <h1 className="text-8xl md:text-6xl font-bold text-fontcolors leading-snug">
                        Arungi Samudra, Capai Cakrawala, Wujudkan Cita
                    </h1>
                    <p className="text-2xl text-black mt-2 font-montserrat">
                        Kami hadir untuk membantu KM PKU IPB!
                    </p>
                </div>

                {/* Gambar */}
                <div className="w-full md:w-1/2 flex justify-center p-0">
                    <img
                        src="img/Home.png"
                        alt="Logo Sakarsa"
                        className="w-full md:w-[500px] h-auto"
                    />
                </div>
            </motion.div>

            {/* Animasi untuk bagian kedua */}
            <motion.div
                initial={{ opacity: 0 }} // Mulai dari opacity 0
                animate={{ opacity: inView ? 1 : 0 }} // Menjadi opacity 1 saat elemen terlihat, 0 jika tidak
                transition={{ duration: 1.2, delay: 0.2 }} // Durasi lebih lama dan ada delay
                className="px-10 py-10 max-w-screen-xl max-h-[1000px] mx-auto bg-fontcolors rounded-3xl"
            >
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold text-white font-rowdies">
                        Selayang Pandang
                    </h1>
                    <p className="text-2xl text-white pt-5 font-montserrat">
                        Ormawa Eksekutif PKU IPB
                    </p>
                </div>

                <div className="flex space-x-4 font-montserrat pl-10 pr-10">
                    {/* Kiri */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold text-white italic">
                            Ormawa Eksekutif PKU IPB
                        </h2>
                        <p className="text-lg text-white pt-4 max-w-[549px]">
                            <span className="font-bold">
                                Ormawa Eksekutif PKU IPB
                            </span>{" "}
                            merupakan organisasi kemahasiswaan di lingkup
                            Pendidikan Kompetensi Umum yang dikhususkan untuk
                            mahasiswa tingkat PKU IPB. Fungsinya melibatkan
                            pemberian kesejahteraan penanganan segala
                            problematika yang dialami mahasiswa PKU IPB.
                        </p>
                    </div>

                    {/* Gambar/Pemisah */}
                    <div className="flex justify-center items-center mx-1">
                        <img src="img/Line.png" alt="Line Image" />
                    </div>

                    {/* Kanan */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold text-white italic">
                            Peran Ormawa Eksekutif PKU IPB
                        </h2>
                        <p className="text-lg text-white pt-4 max-w-[549px]">
                            Perannya sangat signifikan dalam kehidupan kampus
                            mahasiswa PKU, dengan pergerakan, pengembangan,
                            pelayanan, dan pengabdian. Dengan demikian,
                            organisasi ini bukan hanya berfungsi sebagai
                            penanganan masalah, tetapi juga sebagai penggerak
                            pengembangan dan kesejahteraan mahasiswa PKU IPB
                            melalui berbagai kegiatan dan program yang
                            dijalankan.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Animasi teks saat scroll */}
            <motion.div
                ref={textRef}
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }} // Animasi masuk dan keluar
                transition={{ duration: 1.5, delay: 0.3 }}
                className="text-center pt-10 pb-96"
            >
                <div className="px-10 pt-10 pb-4 max-w-[1000px] mx-auto rounded-3xl">
                    <h2 className="text-7xl font-bold text-fontcolors font-rowdies ">
                        Kabinet
                    </h2>
                    <h2 className="text-7xl font-bold text-fontcolors font-rowdies ">
                        Samudra Wirakarsa
                    </h2>
                </div>
                <div className="px-10 max-w-[1200px] mx-auto rounded-3xl">
                    <p className="text-2xl text-fontcolors font-montserrat">
                        <span className="font-bold">Samudra Wirakarsa</span>{" "}
                        memiliki makna bahwasanya Ormawa Eksekutif PKU IPB
                        2023/2024 diharapkan dapat menjadi dunia dan wahana
                        inspiratif bagi KM PKU IPB dalam mewujudkan karya-karya
                        luar biasa yang berawal dari sebuah mimpi.
                    </p>
                </div>
                <h1 className="font-bold text-8xl text-black">WOY INI AZKA</h1>
            </motion.div>
        </div>
    );
}
