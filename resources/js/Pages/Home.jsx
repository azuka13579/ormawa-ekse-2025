import React from "react";
import Navbar from "../Components/Navbar";
import Card4 from "../Components/CardPrestasi";
import SakarsaDaily from "../Components/SakarsaDaily";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Visi from "../Components/Visi";
import Misi from "../Components/Misi";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Head title="Ormawa Eksekutif PKU IPB" />

      <div className="md:h-screen bg-white flex flex-col">
        {/* Logo untuk mobile */}
        <div className="bg-biru p-7 mb-24 md:hidden items-center">
          <img src="img/Logowir.png" alt="Logo Sakarsa" />
        </div>

        {/* Selayang Pandang */}
        <div
          className="h-full block md:flex flex-1 mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="md:w-3/5 max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 md:ml-20 text-center flex-col">
            <h1 className="text-6xl font-bold text-white font-rowdies">
              Selayang Pandang
            </h1>
            <p className="text-2xl text-white pt-5 font-montserrat">
              Ormawa Eksekutif PKU IPB
            </p>
          </div>
        </div>

        {/* Informasi Ormawa */}
        <div className="block md:flex md:space-x-4 font-montserrat md:px-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-white italic">
              Ormawa Eksekutif PKU IPB
            </h2>
            <p className="text-lg text-white pt-4 max-w-[549px] text-justify">
              <span className="font-bold">Ormawa Eksekutif PKU IPB</span> adalah organisasi kemahasiswaan yang berfungsi menangani problematika dan kesejahteraan mahasiswa PKU IPB.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-white italic">
              Peran Ormawa Eksekutif PKU IPB
            </h2>
            <p className="text-lg text-white pt-4 max-w-[549px] text-justify">
              Organisasi ini tidak hanya menangani masalah, tetapi juga menjadi penggerak pengembangan dan kesejahteraan mahasiswa PKU IPB melalui berbagai kegiatan dan program.
            </p>
          </div>
        </div>
      </div>

      {/* Bagian Kabinet */}
      <div className="text-center" data-aos="fade-up" data-aos-duration="700">
        <h2 className="md:text-7xl text-5xl font-bold text-fontcolors font-rowdies">
          Kabinet Samudra Wirakarsa
        </h2>
        <p className="md:text-2xl text-lg text-fontcolors font-montserrat">
          Samudra melambangkan potensi manusia yang tak terbatas. Wirakarsa adalah semangat para pejuang yang menciptakan realitas.
        </p>
      </div>

      {/* Komponen Visi & Misi */}
      <Visi />
      <Misi />

      {/* Sakarsa Daily */}
      <SakarsaDaily />

      {/* Bagian Prestasi */}
      <div className="py-10 bg-white flex flex-col gap-10">
        <h1 className="font-rowdies text-5xl font-bold text-primary5 text-center">
          Prestasi KM PKU IPB
        </h1>
        <div className="flex gap-10 px-16">
          <div className="w-3/5 text-primary5 rounded-lg">
            <img
              src="https://osccdn.medcom.id/images/content/2022/02/21/68b0b9759f7d965cdd82cdee8154bbf6.png"
              alt=""
              className="rounded-lg object-cover w-full"
            />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            <Card4 />
            <Card4 />
            <Card4 />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
