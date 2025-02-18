import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 12c07cc (u)
=======
>>>>>>> 9433adc (update)
import Card4 from "../Components/CardPrestasi";
import SakarsaDaily from "../Components/SakarsaDaily";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";
import Visi from "../Components/Visi";
import Misi from "../Components/Misi";

<<<<<<< HEAD
=======
import { motion } from "framer-motion"; // Import motion dari framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView untuk mendeteksi scroll
import Card4 from "../Components/CardPrestasi";
import SakarsaDaily from "../Components/SakarsaDaily";
import Footer from "../Components/Footer";
<<<<<<< HEAD
>>>>>>> b7fe374 (update)
=======
import { Head } from "@inertiajs/react";
<<<<<<< HEAD
>>>>>>> f6dc351 (Update Dulu Mang)
=======
import Visi from "../Components/Visi";
import Misi from "../Components/Misi";
>>>>>>> e1a1c2c (update-responsif)
=======
>>>>>>> 12c07cc (u)

export default function Home() {
    
    return (
        <div>
            <Navbar></Navbar>
            <Head title="Ormawa Eksekutif PKU IPB" />
           
            <div className="md:h-screen bg-white flex flex-col">
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
                <div className="bg-biru p-7 mb-24 md:hidden items-center">
                    <img src="img/Logowir.png" alt="Logo Sakarsa" />
                </div>
            
                {/* Animasi untuk bagian pertama */}
<<<<<<< HEAD
                <div className="h-full block md:flex flex-1 mx-auto"
                data-aos="fade-up"
                        data-aos-duration="1000"
                >
                    <div className="md:w-3/5 max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 md:ml-20 text-center flex-col">
=======
                <div className="h-full flex flex-1">
=======
                <Navbar />
                <Head title="Ormawa Eksekutif PKU IPB" />

                {/* Animasi untuk bagian pertama */}
                <div className="h-full flex flex-1 mx-auto">
>>>>>>> f6dc351 (Update Dulu Mang)
                    <div className="w-3/5 max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 ml-20 flex-col">
>>>>>>> b7fe374 (update)
=======
                <div className="bg-biru p-7 mb-24 md:hidden">
                    <img src="img/Logowir.png" alt="" />
=======
                <div className="bg-biru p-7 mb-24 md:hidden items-center">
                    <img src="img/Logowir.png" alt="Logo Sakarsa" />
>>>>>>> b8a33f0 (update)
                </div>
            
                {/* Animasi untuk bagian pertama */}
                <div className="h-full block md:flex flex-1 mx-auto"
                data-aos="fade-up"
                        data-aos-duration="1000"
                >
                    <div className="md:w-3/5 max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 md:ml-20 text-center flex-col">
>>>>>>> e1a1c2c (update-responsif)
                        <div
                            className="font-rowdies font-bold md:text-6xl text-4xl"
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
<<<<<<< HEAD
<<<<<<< HEAD
                    <div className="flex justify-center ">
=======
                    <div className="kanan flex-1 flex justify-center ">
>>>>>>> b7fe374 (update)
=======
                    <div className="flex justify-center ">
>>>>>>> e1a1c2c (update-responsif)
                        <img
                            src="img/Home.png"
                            alt=""
                            className="w-full relative object-cover"
                            
                        />
                    </div>
                </div>
            </div>
            {/* Animasi untuk bagian kedua */}
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e1a1c2c (update-responsif)
            <div
            data-aos="fade-up"
            data-aos-duration="800"
                className="mt-6 px-10 py-10 max-w-screen-xl max-h-[12000px] mx-auto bg-fontcolors rounded-3xl shadow-md"
<<<<<<< HEAD
=======
            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="mt-6 px-10 py-10 max-w-screen-xl max-h-[1000px] mx-auto bg-fontcolors rounded-3xl shadow-md"
>>>>>>> b7fe374 (update)
=======
>>>>>>> e1a1c2c (update-responsif)
            >
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold text-white font-rowdies">
                        Selayang Pandang
                    </h1>
                    <p className="text-2xl text-white pt-5 font-montserrat">
                        Ormawa Eksekutif PKU IPB
                    </p>
                </div>

                <div className="block md:flex md:space-x-4 font-montserrat md:pl-10 md:pr-10">
    {/* Kiri */}
    <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-white italic">
            Ormawa Eksekutif PKU IPB
        </h2>
        <p className="text-lg text-white pt-4 max-w-[549px] text-justify">
            <span className="font-bold">Ormawa Eksekutif PKU IPB</span> merupakan organisasi kemahasiswaan di lingkup
            Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan
            pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.
        </p>
    </div>

    <div className="py-2 md:hidden">
        <img src="img/LineHp.png" alt="Line Image" className="w-full h-auto"/>
    </div>

    {/* Gambar hanya muncul di tampilan desktop atau tablet ke atas */}
    <div className="justify-center items-center mx-1 hidden md:flex ">
        <img src="img/Line.png" alt="Line Image" className="w-full h-auto"/>
    </div>

    {/* Kanan */}
    <div className="w-full md:w-1/2">
        <h2 className="text-3xl font-semibold text-white italic">
            Peran Ormawa Eksekutif PKU IPB
        </h2>
        <p className="text-lg text-white pt-4 max-w-[549px] text-justify">
            Perannya sangat signifikan dalam kehidupan kampus mahasiswa PKU, dengan pergerakan, pengembangan,
            pelayanan, dan pengabdian. Dengan demikian, organisasi ini bukan hanya berfungsi sebagai penanganan
            masalah, tetapi juga sebagai penggerak pengembangan dan kesejahteraan mahasiswa PKU IPB melalui
            berbagai kegiatan dan program yang dijalankan.
        </p>
    </div>
</div>

            </div>

            {/* Animasi teks saat scroll */}
            <div data-aos="fade-up"
                        data-aos-duration="700"
                        className="text-center">
                <div
                    data-aos="fade-up"
                        data-aos-duration="600"
                    className="px-10 pt-10 pb-10 max-w-[1000px] mx-auto rounded-3xl">
                    <h2 className="md:text-7xl text-5xl font-bold text-fontcolors font-rowdies">
                        Kabinet
                    </h2>
                    <h2 className="md:text-7xl text-5xl font-bold text-fontcolors font-rowdies">
                        Samudra Wirakarsa
                    </h2>
                <div className="mt-4">

                   
                        <div 
                        data-aos="fade-up"
                        data-aos-duration="700"
                        className="bg-biru rounded-3xl text-align max-w-[150px] mx-auto">
                            <h1 className="font-montserrat md:text-2xl text-xl font-bold text-white p-2">
                                Samudra
                            </h1>
                        </div>
                        <div 
                        data-aos="fade-right"
                        data-aos-duration="700"
                        className="py-5 max-w-[1200px] mx-auto rounded-3xl">
                            <p className="md:text-2xl text-lg text-fontcolors font-montserrat ">
                                <span className="font-bold">Samudra</span> melambangkan dimensi tak terhingga dari potensi
                                manusia, tak terbatas, mendalam, dan penuh
                                misteri. Setiap gelombang membawa kisah
                                perjuangan, setiap arus mengandung kekuatan
                                transformasi.
                            </p>
                        </div>
                    
                        <div 
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="bg-biru rounded-3xl text-align max-w-[150px] mx-auto">
                            <h1 className="font-montserrat md:text-2xl text-xl font-bold text-white p-2">
                                Wirakarsa
                            </h1>
                        </div>
                        <div 
                        data-aos="fade-right"
                        data-aos-duration="800"
                        className="py-5 max-w-[1200px] mx-auto rounded-3xl">
                            <p className="md:text-2xl text-lg text-fontcolors font-montserrat">
                                <span className="font-bold">Wirakarsa</span>{" "}
                                adalah spirit kami, semangat para pejuang yang
                                tidak sekadar bermimpi, namun menciptakan
                                realitas.
                            </p>
                        </div>
                    
                <div
                data-aos="fade-right"
                data-aos-duration="1000"
                    className="md:py-5  max-w-[1200px] mx-auto rounded-3xl"
                >
                    <p className="md:text-2xl text-lg text-fontcolors font-montserrat">
                        <span className="font-bold">Samudra Wirakarsa </span>
                        menjadi navigator peradaban, mengarungi tantangan dengan
                        keberanian, mendobrak batas-batas dengan kreativitas,
                        dan membangun jembatan menuju masa depan yang lebih
                        cerah. Samudra Wirakarsa adalah pernyataan bahwa
                        pemimpin sejati tidak menunggu perubahan, melainkan
                        menciptakannya. Kami adalah gelegar inspirasi yang
                        memecah kesunyian, cahaya yang menembus kegelapan, dan
                        harapan yang tak pernah padam. Ini lah Samudra
                        Wirakarsa, di mana setiap pikiran adalah gelombang
                        perubahan, setiap gelombang adalah revolusi, dan setiap
                        derap adalah sejarah.
                    </p>
                    </div>
            </div>
            </div>
            </div>
            <Visi />
            <Misi />
            {/* Konten lain */}
            <SakarsaDaily />
            <div className="py-10 bg-white flex flex-col gap-10">
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> e1a1c2c (update-responsif)
    <div className="flex justify-between flex-col md:flex-row gap-8">
        <div
            className="px-8 md:px-16 text-primary5 flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <h1 className="font-rowdies text-3xl md:text-5xl font-bold">Prestasi</h1>
            <h2 className="font-montserrat font-semibold text-2xl md:text-4xl text-primary4">
                KM PKU IPB
            </h2>
        </div>
        <div
            className="px-8 md:px-16 text-primary5 flex flex-col justify-end gap-2"
            data-aos="fade-up"
            data-aos-duration="800"
        >
            <h2 className="font-montserrat font-semibold text-2xl md:text-4xl text-primary4 border-b-2 border-transparent hover:scale-105 hover:border-primary5 transition duration-150">
                Semua Prestasi
            </h2>
        </div>
    </div>
    <div className="flex flex-col md:flex-row gap-8 md:gap-10 px-8 md:px-16">
        <div className="w-full md:w-3/5 text-primary5 rounded-lg group transition duration-300">
            <div
                className="overflow-hidden rounded-lg"
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <img
                    src="https://osccdn.medcom.id/images/content/2022/02/21/68b0b9759f7d965cdd82cdee8154bbf6.png"
                    alt=""
                    className="rounded-lg object-cover w-full group-hover:scale-125 transition duration-700 ease-in-out"
                />
<<<<<<< HEAD
            </div>
            <div className="pr-2">
                <h1
                    className="font-bold text-xl md:text-3xl mt-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-anchor-placement="center-bottom"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, perferendis.
                </h1>
                <p
                    className="mt-2 text-sm md:text-base"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-anchor-placement="center-bottom"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero consequuntur excepturi,
                    aut voluptatum tenetur ipsam nobis nam, temporibus praesentium voluptatibus, nihil
                    iusto. Eius iusto similique illum velit sed, pariatur rerum id repellendus suscipit,
                    dicta, possimus facilis. Fuga corporis enim quos.
                </p>
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <Card4></Card4>
            <Card4></Card4>
            <Card4></Card4>
        </div>
    </div>
</div>

<<<<<<< HEAD
=======
                <div className="flex justify-between">
                    <div
                        className="px-16 text-primary5 flex flex-col gap-2"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <h1 className="font-rowdies text-5xl font-bold">
                            Prestasi
                        </h1>
                        <h2 className="font-montserrat font font-semibold text-4xl text-primary4">
                            KM PKU IPB
                        </h2>
                    </div>
                    <div
                        className="px-16 text-primary5 flex flex-col justify-end gap-2"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <h2 className="font-montserrat font font-semibold text-4xl text-primary4 border-b-2 border-transparent hover:scale-105 hover:border-primary5 transition duration-150">
                            Semua Prestasi
                        </h2>
                    </div>
                </div>
                <div className="flex gap-10 px-16">
                    <div className=" w-3/5 text-primary5 rounded-lg group transition duration-300">
                        <div
                            className="overflow-hidden rounded-lg"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            <img
                                src="https://osccdn.medcom.id/images/content/2022/02/21/68b0b9759f7d965cdd82cdee8154bbf6.png"
                                alt=""
                                className=" rounded-lg object-cover w-full group-hover:scale-125 transition duration-700 ease-in-out"
                            />
                        </div>
                        <div className="pr-2">
                            <h1
                                className="font-bold text-3xl mt-4"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-anchor-placement="center-bottom"
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Placeat, perferendis.
                            </h1>
                            <p
                                className="mt-2"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-anchor-placement="center-bottom"
                            >
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Vero consequuntur excepturi,
                                aut voluptatum tenetur ipsam nobis nam,
                                temporibus praesentium voluptatibus, nihil
                                iusto. Eius iusto similique illum velit sed,
                                pariatur rerum id repellendus suscipit, dicta,
                                possimus facilis. Fuga corporis enim quos.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-4">
                        <Card4></Card4>
                        <Card4></Card4>
                        <Card4></Card4>
                    </div>
                </div>
            </div>
>>>>>>> b7fe374 (update)
=======
            </div>
            <div className="pr-2">
                <h1
                    className="font-bold text-xl md:text-3xl mt-4"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-anchor-placement="center-bottom"
                >
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, perferendis.
                </h1>
                <p
                    className="mt-2 text-sm md:text-base"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-anchor-placement="center-bottom"
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero consequuntur excepturi,
                    aut voluptatum tenetur ipsam nobis nam, temporibus praesentium voluptatibus, nihil
                    iusto. Eius iusto similique illum velit sed, pariatur rerum id repellendus suscipit,
                    dicta, possimus facilis. Fuga corporis enim quos.
                </p>
            </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
            <Card4></Card4>
            <Card4></Card4>
            <Card4></Card4>
        </div>
    </div>
</div>

>>>>>>> e1a1c2c (update-responsif)
=======
>>>>>>> 9433adc (update)
             <Footer></Footer>
        </div>
    );
}
