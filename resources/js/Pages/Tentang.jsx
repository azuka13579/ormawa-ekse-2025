import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import CardTentang from "../Components/CardTentang";
import ImageSlider from "../Components/Slide";

export default function Tentang() {
    return (
        <div className="">
            <Head title="Ormawa Eksekutif PKU IPB" />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri md:w-4/5 bg-white text-primary5 h-full flex justify-center gap-10 px-4 md:ml-20 flex-col relative">
                        <img
                            src="img/Home.png"
                            alt="Gambar di kanan tengah"
                            class="scale-75 md:hidden"
                        />
                        <div
                            className="font-rowdies font-bold text-5xl md:text-7xl text-center md:text-left"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p>Tentang Kita,</p>
                            <p>Samudra Wirakarsa</p>
                        </div>
                        <div
                            className="p-5 bg-primary4 text-white md:w-3/5 rounded-xl text-justify"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <p
                                className="font-montserrat text-lg"
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                Ormawa Eksekutif PKU IPB merupakan organisasi
                                kemahasiswaan di lingkup Pendidikan Kompetensi
                                Umum yang dikhususkan untuk mahasiswa tingkat
                                PKU IPB. Fungsinya melibatkan pemberian
                                kesejahteraan penanganan segala problematika
                                yang dialami mahasiswa PKU IPB.
                            </p>
                        </div>
                    </div>
                    <div className="absolute h-screen w-full invisible md:visible">
                        <img
                            src="img/Home.png"
                            alt="Gambar di kanan tengah"
                            class="absolute -right-16 top-1/2 -translate-y-1/2 scale-75"
                        />
                    </div>
                </div>
            </div>

            {/* sektion2 */}
            <div className="bg-white px-4 flex flex-col gap-8 py-10">
                <div className="flex justify-center">
                    <h1
                        className="py-3 px-8 bg-primary6 text-white text-5xl font-rowdies rounded-full"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Biro
                    </h1>
                </div>
                <div className="grid grid:cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-center">
                    <CardTentang
                        delay="0"
                        nama="Riset dan Pengembangan"
                    ></CardTentang>
                    <CardTentang
                        delay="100"
                        nama="Media Branding"
                    ></CardTentang>
                    <CardTentang
                        delay="200"
                        nama="Kolaborasi dan Kemitraan"
                    ></CardTentang>
                    <CardTentang delay="300" nama="Internal"></CardTentang>
                </div>
                <div className="flex justify-center">
                    <h1
                        className="py-3 px-8 bg-primary6 text-white text-5xl font-rowdies rounded-full mt-8"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Departemen
                    </h1>
                </div>
                <div className="grid md:grid-cols-4 gap-4">
                    <CardTentang
                        delay="0"
                        nama="Sosial Lingkungan Hidup"
                    ></CardTentang>
                    <CardTentang delay="100" nama="Seni Budaya"></CardTentang>
                    <CardTentang
                        delay="200"
                        nama="Ekonomi Kreatif"
                    ></CardTentang>
                    <CardTentang
                        delay="300"
                        nama="Advokasi Kesejahteraan Mahasiswa"
                    ></CardTentang>
                    <CardTentang
                        delay="0"
                        nama="Pengembangan Sumber Daya Mahasiswa"
                    ></CardTentang>
                    <CardTentang
                        delay="100"
                        nama="Kajian Aksi Strategis"
                    ></CardTentang>
                    <CardTentang
                        delay="200"
                        nama="Akademik Prestasi"
                    ></CardTentang>
                    <CardTentang
                        delay="300"
                        nama="Pemuda Olahraga"
                    ></CardTentang>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
