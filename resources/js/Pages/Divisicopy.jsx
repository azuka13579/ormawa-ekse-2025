import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Cardkapten from "../Components/Cardkapten";
import Cardproker from "../Components/Cardproker";
import ImageSlider from "../Components/Slide";
import "../../css/owl.theme.css";
import OwlCarousel from "react-owl-carousel";

export default function Divisicopy(props) {
    const options = {
        // loop: true,
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

        // items: 2,
        margin: 0,
        center: true,
    };
    console.log(props.proker);
    console.log(props);

    return (
        <div>
            <Head title={props.divisi} />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri md:w-3/5 bg-white text-primary5 h-full flex justify-center gap-10 px-4 md:ml-20 flex-col relative">
                        <img
                            src={`${window.location.origin}/img/Home.png`}
                            alt="Gambar mobile di tengah"
                            className="scale-75 md:hidden"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />
                        <div
                            className="font-rowdies font-bold text-5xl md:text-7xl text-center md:text-left"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p>{props.divisi}</p>
                        </div>
                        <div
                            className="p-5 bg-primary4 text-white md:w-full rounded-xl text-justify max-w-[1000px]"
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
                    <div
                        className="kanan flex-1 flex justify-center items-center invisible md:visible"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            src={`${window.location.origin}/img/Home.png`}
                            alt="Gambar di kanan tengah"
                            className="w-full h-auto object-cover max-w-[600px]"
                        />
                    </div>
                </div>
            </div>

            {/* Seksi Kapten */}
            <div className="w-full flex flex-col justify-center py-8 px-4">
                <div className="bg-white flex flex-col w-full gap-10 items-center md:items-start">
                    <div className="md:px-20 md:text-left text-center">
                        <h1
                            className="text-primary4 text-6xl font-rowdies font-bold"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            Kapten
                        </h1>
                        <h1
                            className="text-primary6 text-2xl font-montserrat mt-2 "
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            {props.divisi || "Nama Divisi"}
                        </h1>
                    </div>

                    <div className="flex md:justify-between md:w-full flex-col md:flex-row md:px-20 md:gap-10 gap-4 md:items-center">
                        {props.data.map((kapten, index) => (
                            <Cardkapten
                                key={index}
                                delay={index * 100}
                                no={index + 1}
                                {...kapten}
                            />
                        ))}
                    </div>
                </div>

                {/* Anggota */}
                <div className="mt-8 flex flex-col md:px-20">
                    <h1
                        className="text-primary4 text-6xl font-rowdies font-bold text-center md:text-left"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Anggota
                    </h1>
                    <h1
                        className="text-primary6 text-2xl font-montserrat mt-2 md:text-left text-center"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        {props.divisi || "Nama Divisi"}
                    </h1>

                    <ImageSlider images={props.anggota} />
                    <div className="sm:hidden">
                        <OwlCarousel
                            className="owl-theme from-blue-500 via-sky-300 to-blue-500"
                            {...options}
                        >
                            {props.anggota.map((src, index) => (
                                <div key={index} className="">
                                    <img
                                        src={`${window.location.origin}/${src.image_path}`}
                                        alt={`Slide ${index}`}
                                        className="h-auto max-h-[500px] w-auto object-contain"
                                    />
                                </div>
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>

            {/* Proker */}
            <div className="md:px-20 px-4">
                <div className="flex justify-center mb-4">
                    <h1
                        className="py-3 px-16 bg-gradient-to-r from-primary7 to-primary6 text-white text-5xl font-rowdies rounded-full mt-4 inline-block"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Proker
                    </h1>
                </div>
                <img
                    src={`${window.location.origin}/img/timeline.png`}
                    alt="Timeline"
                    className="w-full md:w-3/4 h-auto object-cover mx-auto"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                />
            </div>

            {/* Proker Grid */}
            <div className="px-4 md:px-20 py-8 flex flex-col gap-6 ">
                <div
                    className="text-center"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1
                        className="text-primary5 text-4xl font-rowdies font-bold"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Cari Tahu Lebih Banyak!
                    </h1>
                    <h1
                        className="text-primary4 text-2xl font-montserrat border-b-2 border-primary5 pb-2"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Tentang Proker Kami
                    </h1>
                </div>
                <div className="flex flex-wrap flex-col md:grid md:grid-cols-2 gap-8 px-4">
                    {props.proker.map((proker, index) => (
                        <Cardproker
                            key={index}
                            judul={proker.namasingkatan}
                            delay={index % 2 === 0 ? "" : "150"}
                            {...proker}
                        />
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
