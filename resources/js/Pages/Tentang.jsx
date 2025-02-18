import React from "react";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import CardTentang from "../Components/CardTentang";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import ImageSlider from "../Components/Slide";
=======
>>>>>>> 9433adc (update)
=======
>>>>>>> 7e16c2c (update)
=======
import ImageSlider from "../Components/Slide";
>>>>>>> e4465ba (update slidergambar)
=======
>>>>>>> 9433adc (update)

export default function SakarsaHelp() {
    return (
        <div>
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
            <Head title="Sakarsa Help" />
=======
            <Head title="Ormawa Eksekutif PKU IPB" />
>>>>>>> 7e16c2c (update)
=======
            <Head title="Sakarsa Help" />
>>>>>>> 9433adc (update)
=======
            <Head title="Ormawa Eksekutif PKU IPB" />
>>>>>>> 7e16c2c (update)
=======
            <Head title="Sakarsa Help" />
>>>>>>> 9433adc (update)
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />

                <div className="h-full flex flex-1">
                    <div className="kiri w-3/5 bg-white text-primary5 h-full flex justify-center gap-10 ml-20 flex-col">
                        <div
                            className="font-rowdies font-bold text-7xl"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p>Tentang Kita,</p>
                            <p>Samudra Wirakarsa</p>
                        </div>
                        <div
                            className="p-5 bg-primary4 text-white w-3/4 rounded-xl"
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
                    <div className="kanan flex-1 flex justify-center ">
                        <img
                            src="img/Home.png"
                            alt=""
                            className="w-full relative object-cover"
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
                        className="py-3 px-8 bg-primary6 text-white text-5xl font-rowdies rounded-full"
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
}
>>>>>>> 7e16c2c (update)
=======
>>>>>>> 9433adc (update)
=======
}
>>>>>>> 7e16c2c (update)
=======
>>>>>>> 9433adc (update)
