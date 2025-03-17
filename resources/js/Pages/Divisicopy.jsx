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
    console.log(props.deskripsi);

    return (
        <div>
            <Head title={props.divisi} />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri md:w-3/5 bg-white text-primary5 h-full flex justify-center gap-10 px-4 md:ml-20 flex-col relative items-center">
                        <img
                            src={`${window.location.origin}/${props.deskripsi.image_path}`}
                            alt="Gambar mobile di tengah"
                            className="w-3/4 md:hidden"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        />
                        <div
                            className="font-rowdies font-bold text-5xl md:text-6xl text-center md:text-left"
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
                                <span className="font-bold">
                                    {props.divisi}
                                </span>{" "}
                                {props.deskripsi.deskripsi}
                            </p>
                        </div>
                    </div>
                    <div
                        className="kanan flex-1 flex justify-center items-center invisible md:visible"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            src={`${window.location.origin}/${props.deskripsi.image_path}`}
                            alt="Gambar di kanan tengah"
                            className="w-4/5 h-auto object-cover max-w-[600px] hover:scale-110 transition duration-1000"
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
                    src={`${window.location.origin}/${props.deskripsi.timeline_path}`}
                    alt="Timeline"
                    className="w-full md:w-1/2 h-auto object-cover mx-auto"
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
