import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Cardkapten from "../Components/Cardkapten";
import CardAnggota from "../Components/CardAnggota";
import "../../css/divisi.css";
import "../../css/owl.theme.css";
import OwlCarousel from "react-owl-carousel";
import ImageSlider from "../Components/Slide"
export default function Divisi() {
    const options = {
        loop: true,
        // nav: true,
        autoplaySpeed: 1000,
        dragEndSpeed: 1000,
        dotsSpeed: 1000,
        autoplay: false,
        autoplayTimeout: 1000,
        autoplayHoverPause: true,
        autoWidth: true,
        stagePadding: 0,

        dots: false,

        // items: 3,
        margin: -150,
        center: true,
    };
    return (
        <div>
            <Head title="Divisi" />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri w-4/5 bg-white text-primary5 h-full flex justify-center gap-10 ml-20 flex-col">
                        <div
                            className="font-rowdies font-bold text-7xl"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p>Tentang Kita,</p>
                            <p>Pengembangan Sumber Daya Mahasiswa</p>
                            <p className="font-thin text-xl italic mt-4">
                                Ormawa Eksekutif PKU 2024/2025
                            </p>
                        </div>
                        <div
                            className="p-5 bg-primary4 text-white w-3/5 rounded-xl"
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
                    <div className="absolute h-screen w-full">
                        <img
                            src="img/Home.png"
                            alt="Gambar di kanan tengah"
                            class="absolute -right-16 top-1/2 -translate-y-1/2 scale-75"
                        />
                    </div>
                </div>
            </div>

            {/* sektion2 */}
            <div className="w-full flex flex-col justify-center py-8">
                <div className="bg-white flex flex-col w-full gap-10">
                    <div className="px-20">
                        <h1
                            className="text-primary4 text-7xl font-rowdies font-bold"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            Kapten
                        </h1>
                        <h1
                            className="text-primary6 text-4xl font-montserrat mt-2"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            Biro Riset Pengembangan
                        </h1>
                    </div>

                    <div className="flex justify-between px-20">
                        <Cardkapten
                            delay="0"
                            nama="Alfath Asqar Tsani"
                            no="1"
                        ></Cardkapten>
                        <Cardkapten
                            delay="100"
                            nama="Azka Raditya Hafidz"
                            no="2"
                        ></Cardkapten>
                        <Cardkapten
                            delay="200"
                            nama="Nama Saya Sangat panjang asli"
                            no="3"
                        ></Cardkapten>
                    </div>
                </div>
                <div className="mt-8 flex flex-col px-20">
                    <h1
                        className="text-primary4 text-7xl font-rowdies font-bold"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Anggota
                    </h1>

                    <div className="w-full mt-4">
                        <div
                            className=""
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <OwlCarousel
                                className="owl-theme from-blue-500 via-sky-300 to-blue-500"
                                {...options}
                            >
                                <CardAnggota no="1"></CardAnggota>
                                <CardAnggota no="2"></CardAnggota>
                                <CardAnggota no="3"></CardAnggota>
                                <CardAnggota no="4"></CardAnggota>
                                <CardAnggota no="5"></CardAnggota>
                                <CardAnggota no="5"></CardAnggota>
                                <CardAnggota no="5"></CardAnggota>
                                <CardAnggota no="5"></CardAnggota>
                                <CardAnggota no="5"></CardAnggota>
                            </OwlCarousel>
                        </div>
                    </div>
                    <ImageSlider></ImageSlider>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
