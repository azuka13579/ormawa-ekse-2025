import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Cardkapten from "../Components/Cardkapten";
import Cardproker from "../Components/Cardproker";
import ImageSlider from "../Components/Slide";

export default function Divisicopy(props) {
    return (
        <div>
            <Head title={props.divisi} />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="md:w-4/5 bg-white text-primary5 h-full flex justify-center md:gap-8 md:ml-20 flex-col px-4 md:items-start items-center">
                        <img
                            img src={`${window.location.origin}/img/Home.png`}
                            alt="Gambar di kanan tengah"
                            className="scale-75 md:hidden"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />

                        <div
                            className="font-rowdies font-bold text-5xl md:text-6xl text-center md:text-left"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p className="text-4xl md:text-5xl">Tentang Kita,</p>
                            <p>{props.divisi || "Nama Divisi"}</p>
                            <p className="font-thin text-xl italic mt-4">
                                Ormawa Eksekutif PKU 2024/2025
                            </p>
                        </div>
                        <div
                            className="p-5 bg-primary4 text-white md:w-3/5 rounded-xl mt-6 md:mt-0"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <p className="font-montserrat md:text-lg text-justify">
                                Ormawa Eksekutif PKU IPB merupakan organisasi
                                kemahasiswaan di lingkup Pendidikan Kompetensi
                                Umum yang dikhususkan untuk mahasiswa tingkat
                                PKU IPB. Fungsinya melibatkan pemberian
                                kesejahteraan dan penanganan problematika
                                yang dialami mahasiswa PKU IPB.
                            </p>
                        </div>
                    </div>

                    <div
                        className="absolute h-screen w-full md:visible invisible"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            img src={`${window.location.origin}/img/Home.png`}
                            alt="Gambar"
                            className="absolute -right-16 top-1/2 -translate-y-1/2 scale-75"
                        />
                    </div>
                </div>
            </div>

            {/* Seksi Kapten */}
            <div className="w-full flex flex-col justify-center py-8 px-4">
                <div className="bg-white flex flex-col w-full gap-10 items-center md:items-start">
                    <div className="md:px-20 md:text-left text-center">
                        <h1 className="text-primary4 text-6xl font-rowdies font-bold" data-aos="fade-up" data-aos-duration="800">
                            Kapten
                        </h1>
                        <h1 className="text-primary6 text-2xl font-montserrat mt-2" data-aos="fade-up" data-aos-duration="800">
                            Biro Riset Pengembangan
                        </h1>
                    </div>

                    <div className="flex md:justify-between md:w-full flex-col md:flex-row md:px-20 md:gap-10 gap-4 md:items-center">
                        {[
                            { nama: "Alfath Asqar Tsani", no: "1" },
                            { nama: "Azka Raditya Hafidz", no: "2" },
                            { nama: "Nama Saya Sangat Panjang Asli", no: "3" },
                        ].map((kapten, index) => (
                            <Cardkapten key={index} delay={index * 100} {...kapten} />
                        ))}
                    </div>
                </div>

                {/* Anggota */}
                <div className="mt-8 flex flex-col md:px-20 px-4">
                    <h1 className="text-primary4 text-6xl font-rowdies font-bold text-center md:text-left" data-aos="fade-up" data-aos-duration="800">
                        Anggota
                    </h1>
                    <h1 className="text-primary6 text-2xl font-montserrat mt-2" data-aos="fade-up" data-aos-duration="800">
                        Biro Riset Pengembangan
                    </h1>
                    <ImageSlider />
                </div>
            </div>

            {/* Proker */}
            <div className="md:px-20 px-4">
                <div className="flex justify-center mb-4">
                    <h1 className="py-3 px-16 bg-gradient-to-r from-primary7 to-primary6 text-white text-5xl font-rowdies rounded-full mt-4 inline-block" data-aos="fade-up" data-aos-duration="800">
                        Proker
                    </h1>
                </div>
                <img src={`${window.location.origin}/img/timeline.png`} alt="Timeline" className="w-full md:w-3/4 h-auto object-cover mx-auto" data-aos="fade-up" data-aos-duration="1000" />
            </div>

            {/* Proker Grid */}
            <div className="px-4 md:px-20 py-8 flex flex-col gap-6">
                <div className="text-center">
                    <h1 className="text-primary5 text-4xl font-rowdies font-bold" data-aos="fade-up" data-aos-duration="800">
                        Cari Tahu Lebih Banyak!
                    </h1>
                    <h1 className="text-primary4 text-2xl font-montserrat" data-aos="fade-up" data-aos-duration="800">
                        Tentang Proker Kami
                    </h1>
                </div>
                <div className="flex flex-wrap md:grid md:grid-cols-2 gap-8">
                    {["Risbang Investigation 1.0", "Risbang Investigation 1.0", "Risbang Investigation 1.0", "Risbang Investigation (RISVES) 1.0"].map((judul, index) => (
                        <Cardproker key={index} judul={judul} delay={index % 2 === 0 ? "" : "150"} />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
