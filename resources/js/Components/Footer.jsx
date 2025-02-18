import React from "react";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <div className="bg-primary2 py-6 w-full flex md:flex-row flex-col md:justify-between items-center md:items-center font-montserrat md:px-10">
            <div className="kiri flex gap-4">
                <img src="img/home.png" alt="" className="w-24 object-cover" />
                <div className="">
                    <h1 className="text-primary5 md:text-xl text-lg mb-2">
                        Dikembangkan oleh
                    </h1>
                    <h1 className="text-primary5 md:text-3xl text-2xl font-extrabold">
                        Biro Riset Pengembangan
                    </h1>
                    <h1 className="text-primary5 md:text-2xl text-xl font-light">
                        Ormawa PKU IPB 2024/2025
                    </h1>
                </div>
            </div>
            <div className="Kanan flex flex-col gap-2 text-primary5 mr-4">
                <h1 className="font-semibold font-montserrat text-xl text-center">
                    Hubungi Kami
                </h1>
                <div className="flex gap-4">
                    <FaInstagram className="text-4xl bg-primary1 p-1.5 rounded-full text-primary5 font-bold hover:bg-primary5 transition duration-300 hover:text-primary1 " />
                    <FaXTwitter className="text-4xl bg-primary1 p-1.5 rounded-full text-primary5 font-bold hover:bg-primary5 transition duration-300 hover:text-primary1 " />
                    <FaTiktok className="text-4xl bg-primary1 p-1.5 rounded-full text-primary5 font-bold hover:bg-primary5 transition duration-300 hover:text-primary1 " />
                    <FaYoutube className="text-4xl bg-primary1 p-1.5 rounded-full text-primary5 font-bold hover:bg-primary5 transition duration-300 hover:text-primary1 " />
                    <MdEmail className="text-4xl bg-primary1 p-1.5 rounded-full text-primary5 font-bold hover:bg-primary5 transition duration-300 hover:text-primary1 " />
                </div>
            </div>
        </div>
    );
}
