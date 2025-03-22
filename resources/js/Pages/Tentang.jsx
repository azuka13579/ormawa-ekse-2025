import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import CardTentang from "../Components/CardTentang";
import CardBPH from "../Components/CardBPH";
import "../../css/owl.theme.css";
import OwlCarousel from "react-owl-carousel";
export default function Tentang(props) {
    // Updated carousel options with center focused settings
    const options = {
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                stagePadding: 0,
            },
            480: {
                items: 1,
                stagePadding: 50,
            }
        },
        nav: false,
        dots: true,
        dotsSpeed: 500,
        center: true,
        margin: 0,
    };
    
    return (
        <div className="">
            <Head title="Ormawa Eksekutif PKU IPB" />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri md:w-3/5 bg-white text-primary5 h-full flex justify-center gap-10 px-4 md:ml-20 flex-col relative">
                        <img
                            loading="lazy"
                            src="img/Home1.png"
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
                            <p>Tentang Kita,</p>
                            <p>Samudra Wirakarsa</p>
                        </div>
                        <div
                            className="p-5 bg-primary4 text-white md:w-full rounded-xl text-justify"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <p
                                className="font-montserrat text-lg max-w-[1000px]"
                                data-aos="fade-right"
                                data-aos-duration="800"
                                data-aos-delay="200"
                            >
                                <span className="font-bold">
                                    Ormawa Eksekutif PKU IPB
                                </span>{" "}
                                merupakan organisasi kemahasiswaan di lingkup
                                Pendidikan Kompetensi Umum yang dikhususkan
                                untuk mahasiswa tingkat PKU IPB. Fungsinya
                                melibatkan pemberian kesejahteraan penanganan
                                segala problematika yang dialami
                                mahasiswa PKU IPB.
                            </p>
                        </div>
                    </div>
                    <div
                        className="kanan flex-1 flex justify-center items-center invisible md:visible"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            src="img/Home1.png"
                            alt="Gambar di kanan tengah"
                            className="w-full h-auto object-cover max-w-[600px]"
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4">
                <div className="md:text-left text-center md:px-20 px-4">
                    <h1
                        className="text-primary4 text-6xl font-rowdies font-bold"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Nakhoda
                    </h1>
                    <h1
                        className="text-primary6 text-2xl font-montserrat mt-2"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        {props.divisi || "Ormawa Eksekutif PKU 2024/2025"}
                    </h1>
                </div>
                <div className="sm:hidden mt-4 w-full">
                    {/* Centered BPH OwlCarousel for mobile */}
                    <div className="flex justify-center">
                        <div className="w-full">
                            <OwlCarousel
                                className="owl-theme"
                                {...options}
                            >
                                <div className="item flex justify-center">
                                    <CardBPH
                                        nama="Fiezha Hasby Ari Widana"
                                        jabatan="Ketua Umum Ormawa Eksekutif PKU"
                                        delay=""
                                        image_path="images/bph/ketua.png"
                                    />
                                </div>
                                <div className="item flex justify-center">
                                    <CardBPH
                                        nama="Fatma Dwi Hasanah"
                                        jabatan="Wakil Ketua Umum Ormawa Eksekutif PKU"
                                        delay=""
                                        image_path="images/bph/wakil.png"
                                    />
                                </div>
                                <div className="item flex justify-center">
                                    <CardBPH
                                        nama="Tedy Kusuma Hidayat"
                                        jabatan="Sekretaris Internal Ormawa Eksekutif PKU"
                                        delay=""
                                        image_path="images/bph/sekre1.png"
                                    />
                                </div>
                                <div className="item flex justify-center">
                                    <CardBPH
                                        nama="Arifatu Dzikra"
                                        jabatan="Sekretaris Eksternal Ormawa Eksekutif PKU"
                                        delay=""
                                        image_path="images/bph/sekre2.png"
                                    />
                                </div>
                                <div className="item flex justify-center">
                                    <CardBPH
                                        nama="Dewi Ayu Lestari"
                                        jabatan="Bendahara Internal Ormawa Eksekutif PKU"
                                        delay=""
                                        image_path="images/bph/bend1.png"
                                    />
                                </div>
                                <div className="item flex justify-center">
                                    <CardBPH
                                        nama="Nur Fadillah"
                                        jabatan="Bendahara Eksternal Ormawa Eksekutif PKU"
                                        delay=""
                                        image_path="images/bph/bend2.png"
                                    />
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="sm:block hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center py-8 gap-4 px-4 md:px-8">
                        <CardBPH
                            nama="Fiezha Hasby Ari Widana"
                            jabatan="Ketua Umum Ormawa Eksekutif PKU"
                            delay=""
                            image_path="images/bph/ketua.png"
                        ></CardBPH>
                        <CardBPH
                            nama="Fatma Dwi Hasanah"
                            jabatan="Wakil Ketua Umum Ormawa Eksekutif PKU"
                            delay=""
                            image_path="images/bph/wakil.png"
                        ></CardBPH>
                    </div>
                    <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 place-items-center px-4 md:px-8">
                        <CardBPH
                            nama="Tedy Kusuma Hidayat"
                            jabatan="Sekretaris Internal Ormawa Eksekutif PKU"
                            delay=""
                            image_path="images/bph/sekre1.png"
                        ></CardBPH>
                        <CardBPH
                            nama="Arifatu Dzikra"
                            jabatan="Sekretaris Eksternal Ormawa Eksekutif PKU"
                            delay=""
                            image_path="images/bph/sekre2.png"
                        ></CardBPH>
                        <CardBPH
                            nama="Dewi Ayu Lestari"
                            jabatan="Bendahara Internal Ormawa Eksekutif PKU"
                            delay=""
                            image_path="images/bph/bend1.png"
                        ></CardBPH>
                        <CardBPH
                            nama="Nur Fadillah"
                            jabatan="Bendahara Eksternal Ormawa Eksekutif PKU"
                            delay=""
                            image_path="images/bph/bend2.png"
                        ></CardBPH>
                    </div>
                </div>
            </div>

            {/* sektion2 */}
            <div className="bg-white px-2 md:px-8 py-4 flex flex-col gap-8 mt-8">
                <div className="flex justify-center">
                    <h1
                        className="py-3 px-8 bg-primary6 text-white text-5xl font-rowdies rounded-full"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Biro
                    </h1>
                </div>
                <div className="sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:grid hidden">
                    {props.biro.map((divisi, index) => (
                        <CardTentang
                            key={index}
                            delay={index * 100}
                            nama={divisi.divisi}
                            img={divisi.image_path}
                        />
                    ))}
                </div>
                <div className="sm:hidden block w-full">
                    {/* Centered Biro OwlCarousel for mobile */}
                    <div className="flex justify-center">
                        <div className="w-full">
                            <OwlCarousel
                                className="owl-theme"
                                {...options}
                            >
                                {props.biro.map((divisi, index) => (
                                    <div key={index} className="item flex justify-center">
                                        <CardTentang
                                            delay={index * 100}
                                            nama={divisi.divisi}
                                            img={divisi.image_path}
                                        />
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <h1
                        className="py-3 px-8 bg-primary6 text-white text-5xl font-rowdies rounded-full"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Departemen
                    </h1>
                </div>
                <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 hidden">
                    {props.departemen.map((divisi, index) => (
                        <CardTentang
                            key={index}
                            delay={(index % 4) * 100}
                            nama={divisi.divisi}
                            img={divisi.image_path}
                        />
                    ))}
                </div>
                <div className="sm:hidden block w-full">
                    {/* Centered Departemen OwlCarousel for mobile */}
                    <div className="flex justify-center">
                        <div className="w-full">
                            <OwlCarousel
                                className="owl-theme"
                                {...options}
                            >
                                {props.departemen.map((divisi, index) => (
                                    <div key={index} className="item flex justify-center">
                                        <CardTentang
                                            delay={(index % 4) * 100}
                                            nama={divisi.divisi}
                                            img={divisi.image_path}
                                        />
                                    </div>
                                ))}
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
           
            <Footer></Footer>
        </div>
    );
}