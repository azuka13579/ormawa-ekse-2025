import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "@inertiajs/react";
import BlurText from "../Components/Risves3.0";

export default function SakarsaCare() {
    return (
        <div className="md:h-screen bg-white flex flex-col">
            <Navbar />
            <Head title="Sakarsa Care" />

            <div className="h-full block md:flex mb-20 mx-auto mt-20 px-4">
                <div className="w-full sm:w-[550px] max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 flex-col">
                    <h1
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="font-rowdies text-5xl sm:text-7xl text-center md:text-left"
                    >
                        Sakarsa Care
                    </h1>
                    <p
                        data-aos="fade-right"
                        data-aos-duration="1000"
                        className="font-montserrat text-lg sm:text-xl text-center sm:text-left"
                    >
                        Sakarsa Care merupakan program kerja gabungan antara
                        Biro Riset Pengembangan dengan Departemen Advokasi
                        Kesejahteraan Mahasiswa Ormawa Eksekutif PKU IPB sebagai
                        tempat menampung berbagai keluhan mahasiswa PKU IPB.
                        Jadi buat kalian yang memiliki keluhan baik di bidang
                        akademik dan non-akademik, pelayanan, sarana dan
                        prasarana maupun finansial bisa menyampaikan keluhan
                        kalian di laman ini!
                    </p>
                </div>
                <div
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    className="flex flex-1 justify-center px-6 sm:px-12"
                >
                    <img
                        src="images/logo/adkesmah.png"
                        alt="Logo Adkesmah - Sakarsa Care"
                        loading="lazy"
                        className="h-[250px] sm:h-[320px] w-auto max-w-[400px] object-contain rounded-lg"
                    />
                </div>
            </div>
            <div
                // data-aos="fade-right"
                // data-aos-duration="800"
                // data-aos-anchor-placement="center-bottom"
                className="bg-primary4 mx-auto md:mx-auto md:w-[700px] w-[300px] justify-center text-center block md:flex items-center px-6 py-3 rounded-3xl mb-11 gap-20 "
            >
                <div className="">
                    <p className="font-montserrat text-s sm:text-xl text-white font-bold">
                        Wanna know more about us?
                    </p>
                </div>
                <a
                    href="https://linktr.ee/halomincare"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="bg-white max-md:mx-auto max-md:max-w-[200px] rounded-3xl py-2 px-6 text-center hover:bg-primary1 duration-300 transition hover:text-primary5">
                        <p className="font-montserrat text-sm sm:text-xl font-bold">
                            Contact Us
                        </p>
                    </div>
                </a>
            </div>
           

            <BlurText></BlurText>
            

            <Footer />
        </div>
    );
}
