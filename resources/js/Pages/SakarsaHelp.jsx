import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SakarsaHelp() {
    return (
            <div className="md:h-screen bg-white flex flex-col">
            <Navbar />
            <Head title="Sakarsa Help" />
            <div className="h-full flex flex-1 px-12 mx-auto mb-20 mt-20">
                <div 
                className="w-[550px] max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 flex-col">
                    <h1 
                    data-aos="fade-right"
                data-aos-duration="800"
                    className="font-rowdies text-7xl">Sakarsa Help</h1>
                    <p 
                    data-aos="fade-right"
                data-aos-duration="1000"
                    className="font-montserrat text-xl">
                        Sakarsa Help merupakan program kerja gabungan antara Biro Riset Pengembangan dengan Departemen Advokasi Kesejahteraan       Mahasiswa Ormawa Eksekutif PKU IPB sebagai tempat menampung berbagai keluhan mahasiswa PKU IPB. Jadi buat kalian yang       memiliki keluhan baik di bidang akademik dan non-akademik, pelayanan, sarana dan prasarana maupun finansial bisa      menyampaikan keluhan kalian di laman ini!
                    </p>
                </div>
                <div 
                data-aos="fade-left"
                data-aos-duration="1200"
                className="h-full flex flex-1 px-12">
                    <img src="img/gambarnahkoda.png" alt="Ilustrasi Sakarsa Help" className="h-[400px] w-[540px]" />
                </div>
            </div>
            <div 
            data-aos="fade-right"
            data-aos-duration="1200"
            className="bg-coklat mx-auto w-[700px] justify-center text-center flex px-3 py-3 rounded-3xl mb-11">
                <div className="mx-auto py-3">
                <p className="font-montserrat text-xl text-white font-bold">Wanna know more about us?</p>
                </div>
                <div className="bg-white rounded-3xl py-2 px-6 mx-auto justify-center text-center">
                    <p className="font-monsterrat text-xl text-coklat font-bold">Contact Us</p>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
}
