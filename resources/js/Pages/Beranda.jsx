import React from "react";
import Footer from "../Components/Footer";
import "../../css/owl.theme.css";
import Card from "../Components/Card2";
import OwlCarousel from "react-owl-carousel";
import Navbar2 from "../Components/Navbar2";
export default function Beranda() {
    const options = {
        loop: true,
        // nav: true,
        autoplaySpeed: 1000,
        dragEndSpeed: 1000,
        dotsSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoWidth: true,
        stagePadding: 100,

        dots: false,

        items: 3,
        margin: 20,
        center: true,
    };
    return (
        <>
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar2></Navbar2>
                <div className="h-full flex flex-1">
                    <div className="kiri w-3/5 bg-white text-primary5 h-full flex justify-center gap-6 ml-20 flex-col">
                        <div
                            className="font-rowdies font-bold text-6xl"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p>Arungi Samudra,</p>
                            <p>Gapai Cakrawala,</p>
                            <p>Wujudkan Cita</p>
                        </div>
                        <p
                            className="font-montserrat text-2xl"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            Kami Hadir Untuk Membantu KM PKU IPB!
                        </p>
                    </div>
                    <div className="absolute right-[10%]">
                        {/* <img src="img/Home.png" alt="" /> */}
                    </div>
                </div>
            </div>

            <div className="px-6 bg-white text-white font-montserrat">
                <div className="p-12 h-full w-full bg-primary4 rounded-lg flex flex-col gap-14 text-justify relative">
                    <div
                        className="flex flex-col gap-2 justify-center items-center"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <p className="text-primary1 text-5xl font-bold">
                            Selayang Pandang
                        </p>
                        <p className="text-2xl">Ormawa Eksekutif PKU IPB</p>
                    </div>
                    <div className="flex-1 grid grid-cols-2 gap-20">
                        <div
                            className="kiri"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <p className="text-primary1 text-2xl font-semibold mb-4">
                                Ormawa Eksekutif PKU IPB
                            </p>
                            <p className="font-light">
                                <span className="font-bold">
                                    Ormawa Eksekutif PKU IPB
                                </span>{" "}
                                merupakan organisasi kemahasiswaan di lingkup
                                Pendidikan Kompetensi Umum yang dikhususkan
                                untuk mahasiswa tingkat PKU IPB. Fungsinya
                                melibatkan pemberian kesejahteraan penanganan
                                segala problematika yang dialami mahasiswa PKU
                                IPB.
                            </p>
                        </div>
                        <div className="flex justify-center items-center mx-1 absolute right-[50%]">
                            <img src="img/Line.png" alt="Line Image" />
                        </div>
                        <div
                            className="kanan"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="150"
                        >
                            <p className="text-primary1 text-2xl font-semibold mb-4">
                                Peran Ormawa Eksekutif PKU IPB
                            </p>
                            <p className=" font-light">
                                Perannya sangat signifikan dalam kehidupan
                                kampus mahasiswa PKU, dengan pergerakan,
                                pengembangan, pelayanan, dan pengabdian. Dengan
                                demikian, organisasi ini bukan hanya berfungsi
                                sebagai{" "}
                                <span className="font-bold">
                                    penanganan masalah
                                </span>
                                , tetapi juga sebagai{" "}
                                <span className="font-bold">
                                    penggerak pengembangan
                                </span>{" "}
                                dan{" "}
                                <span className="font-bold">
                                    kesejahteraan mahasiswa PKU IPB
                                </span>{" "}
                                melalui berbagai kegiatan dan prgrgam yang
                                dijalankan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full flex justify-center items-center text-center py-32">
                <div className="flex flex-col gap-5 w-4/6 justify-center items-center text-primary5 bg-white">
                    <div
                        className=""
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <h1 className="font-extrabold text-7xl font-rowdies">
                            Kabinet
                        </h1>
                        <h1 className="font-extrabold text-7xl font-rowdies">
                            Samudra Wirakarsa
                        </h1>
                    </div>
                    <p
                        className="font-light text-xl"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <span className="font-bold">Samudra Wirakarsa</span>{" "}
                        memiliki makna bahwasanya Ormawa Eksekutif PKU IPB
                        2023/2024 diharapkan dapat menjadi dunia dan wahana
                        inspiratif bagi KM PKU IPB dalam mewujudkan karya-karya
                        luar biasa yang berawal dari sebuah mimpi.
                    </p>
                </div>
            </div>

            <div className="bg-primary2 text-primary5 flex gap-10 flex-col py-10 pb-14">
                <div
                    className="px-24"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="font-rowdies text-5xl">Sakarsa's</h1>
                    <h2 className="font-montserrat font-light text-4xl">
                        Weekly Daily
                    </h2>
                </div>
                <div className="" data-aos="fade-up" data-aos-duration="800">
                    <OwlCarousel
                        className="owl-theme from-blue-500 via-sky-300 to-blue-500"
                        {...options}
                    >
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </OwlCarousel>
                </div>
            </div>
            

            <Footer></Footer>
        </>
    );
}
