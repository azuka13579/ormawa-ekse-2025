import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import CardTentang from "../Components/CardTentang";
import ProductList from "../Components/Testfetching";
import CardBPH from "../Components/CardBPH";

export default function Tentang(props) {
    return (
        <div className="">
            <Head title="Ormawa Eksekutif PKU IPB" />
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri md:w-4/5 bg-white text-primary5 h-full flex justify-center gap-10 px-4 md:ml-20 flex-col relative">
                        <img
                            src="img/Home.png"
                            alt="Gambar mobile di tengah"
                            class="scale-75 md:hidden"
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
                    <div
                        className="absolute h-screen w-full invisible md:visible"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            src="img/Home.png"
                            alt="Gambar di kanan tengah"
                            class="absolute -right-16 top-1/2 -translate-y-1/2 scale-75"
                        />
                    </div>
                </div>
            </div>

            <div className="">
                <div className="md:text-left text-center px-20">
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
                <div className="grid grid-cols-1 md:grid-cols-2 place-items-center py-8 gap-4 px-4 md:px-8">
                    <CardBPH
                        nama="Ayubi Fathan"
                        jabatan="ketua Eksekutif"
                        delay=""
                        scale="scale-[0.8]"
                    ></CardBPH>
                    <CardBPH
                        nama="Fiezha Hasby"
                        jabatan="Wakil Ketua"
                        delay="150"
                        scale="scale-[0.8]"
                    ></CardBPH>
                </div>
                <div className="grid md:grid-cols-4 gap-4 sm:grid-cols-2 grid-cols-1 place-items-center px-4 md:px-8">
                    <CardBPH
                        nama="Fiezha Hasby"
                        jabatan="Sekretaris Eksternal"
                        delay=""
                        top="top-48"
                    ></CardBPH>
                    <CardBPH
                        nama="Fiezha Hasby"
                        jabatan="Sekretaris Internal"
                        delay="100"
                    ></CardBPH>
                    <CardBPH
                        nama="Fiezha Hasby"
                        jabatan="Sekretaris Eksternal"
                        delay="200"
                    ></CardBPH>
                    <CardBPH
                        nama="Fiezha Hasby"
                        jabatan="Sekretaris Internal"
                        delay="300"
                    ></CardBPH>
                </div>
            </div>

            {/* sektion2 */}
            <div className="bg-white px-4 md:px-8 flex flex-col gap-8 mt-8">
                <div className="flex justify-center">
                    <h1
                        className="py-3 px-8 bg-primary6 text-white text-5xl font-rowdies rounded-full"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        Biro
                    </h1>
                </div>
                <div className="grid grid:cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.biro.map((divisi, index) => (
                        <CardTentang
                            key={index}
                            delay={index * 100}
                            nama={divisi.divisi}
                            img=""
                        />
                    ))}
                    ;
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
                <div className="grid grid:cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {props.departemen.map((divisi, index) => (
                        <CardTentang
                            key={index}
                            delay={(index % 4) * 100}
                            nama={divisi.divisi}
                            img=""
                        />
                    ))}
                    ;
                </div>
            </div>
            {/* <ProductList></ProductList> */}
            <Footer></Footer>
        </div>
    );
}
