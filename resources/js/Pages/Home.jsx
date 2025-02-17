import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion"; // Import motion dari framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView untuk mendeteksi scroll
import Card4 from "../Components/CardPrestasi";
import SakarsaDaily from "../Components/SakarsaDaily";
import Footer from "../Components/Footer";
import { Head } from "@inertiajs/react";

export default function Home() {
    const [headerRef, headerInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        trackVisibility: true,
        delay: 100,
    });
    const [sectionRef, sectionInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        trackVisibility: true,
        delay: 100,
    });
    const [textRef, textInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        trackVisibility: true,
        delay: 100,
    });

    const [carouselRef, carouselInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
        trackVisibility: true,
        delay: 100,
    });

    // Variants for animations
    const headerVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20,
                staggerChildren: 0.3,
            },
        },
    };

    const sectionVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "tween",
                ease: "easeOut",
                duration: 1.2,
                delay: 0.3,
            },
        },
    };

    const textBlockVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                type: "spring",
                stiffness: 120,
            },
        }),
    };
    const carouselVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                ease: "anticipate",
                duration: 0.8,
            },
        },
    };

    return (
        <div>
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar />
                <Head title="Ormawa Eksekutif PKU IPB" />

                {/* Animasi untuk bagian pertama */}
                <div className="h-full flex flex-1 mx-auto">
                    <div className="w-3/5 max-h-[700px] bg-white text-primary5 h-full flex justify-center gap-6 ml-20 flex-col">
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
                    <div className="kanan flex-1 flex justify-center ">
                        <img
                            src="img/Home.png"
                            alt=""
                            className="w-full relative object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* Animasi untuk bagian kedua */}
            <motion.div
                ref={sectionRef}
                initial="hidden"
                animate={sectionInView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="mt-6 px-10 py-10 max-w-screen-xl max-h-[1000px] mx-auto bg-fontcolors rounded-3xl shadow-md"
            >
                <div className="text-center mb-8">
                    <h1 className="text-6xl font-bold text-white font-rowdies">
                        Selayang Pandang
                    </h1>
                    <p className="text-2xl text-white pt-5 font-montserrat">
                        Ormawa Eksekutif PKU IPB
                    </p>
                </div>

                <div className="flex space-x-4 font-montserrat pl-10 pr-10">
                    {/* Kiri */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold text-white italic">
                            Ormawa Eksekutif PKU IPB
                        </h2>
                        <p className="text-lg text-white pt-4 max-w-[549px]">
                            <span className="font-bold">
                                Ormawa Eksekutif PKU IPB
                            </span>
                            merupakan organisasi kemahasiswaan di lingkup
                            Pendidikan Kompetensi Umum yang dikhususkan untuk
                            mahasiswa tingkat PKU IPB. Fungsinya melibatkan
                            pemberian kesejahteraan penanganan segala
                            problematika yang dialami mahasiswa PKU IPB.
                        </p>
                    </div>

                    {/* Gambar/Pemisah */}
                    <div className="flex justify-center items-center mx-1">
                        <img src="img/Line.png" alt="Line Image" />
                    </div>

                    {/* Kanan */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold text-white italic">
                            Peran Ormawa Eksekutif PKU IPB
                        </h2>
                        <p className="text-lg text-white pt-4 max-w-[549px]">
                            Perannya sangat signifikan dalam kehidupan kampus
                            mahasiswa PKU, dengan pergerakan, pengembangan,
                            pelayanan, dan pengabdian. Dengan demikian,
                            organisasi ini bukan hanya berfungsi sebagai
                            penanganan masalah, tetapi juga sebagai penggerak
                            pengembangan dan kesejahteraan mahasiswa PKU IPB
                            melalui berbagai kegiatan dan program yang
                            dijalankan.
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* Animasi teks saat scroll */}
            <motion.div
                ref={textRef}
                initial="hidden"
                animate={textInView ? "visible" : "hidden"}
                className="text-center pt-10"
            >
                <motion.div
                    custom={0}
                    variants={textBlockVariants}
                    className="px-10 pt-10 pb-4 max-w-[1000px] mx-auto rounded-3xl"
                >
                    <h2 className="text-7xl font-bold text-fontcolors font-rowdies">
                        Kabinet
                    </h2>
                    <h2 className="text-7xl font-bold text-fontcolors font-rowdies">
                        Samudra Wirakarsa
                    </h2>
                </motion.div>

                {["Samudra"].map((title) => (
                    <motion.div
                        key={title}
                        custom={1}
                        variants={textBlockVariants}
                    >
                        <div className="bg-biru rounded-3xl text-align max-w-[150px] mx-auto">
                            <h1 className="font-montserrat text-2xl font-bold text-white p-2">
                                {title}
                            </h1>
                        </div>
                        <div className="py-5 max-w-[1200px] mx-auto rounded-3xl">
                            <p className="text-2xl text-fontcolors font-montserrat">
                                <span className="font-bold">Samudra</span>{" "}
                                melambangkan dimensi tak terhingga dari potensi
                                manusia, tak terbatas, mendalam, dan penuh
                                misteri. Setiap gelombang membawa kisah
                                perjuangan, setiap arus mengandung kekuatan
                                transformasi.
                            </p>
                        </div>
                    </motion.div>
                ))}
                {["Wirakarsa"].map((title) => (
                    <motion.div
                        key={title}
                        custom={2}
                        variants={textBlockVariants}
                    >
                        <div className="bg-biru rounded-3xl text-align max-w-[150px] mx-auto">
                            <h1 className="font-montserrat text-2xl font-bold text-white p-2">
                                {title}
                            </h1>
                        </div>
                        <div className="py-5 max-w-[1200px] mx-auto rounded-3xl">
                            <p className="text-2xl text-fontcolors font-montserrat">
                                <span className="font-bold">Wirakarsa</span>{" "}
                                adalah spirit kami, semangat para pejuang yang
                                tidak sekadar bermimpi, namun menciptakan
                                realitas.
                            </p>
                        </div>
                    </motion.div>
                ))}

                <motion.div
                    custom={3}
                    variants={textBlockVariants}
                    className="py-10 max-w-[1200px] mx-auto rounded-3xl"
                >
                    <p className="text-2xl text-fontcolors font-montserrat">
                        <span className="font-bold">Samudra Wirakarsa </span>{" "}
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
                </motion.div>
            </motion.div>
            {/* Konten lain */}
            <SakarsaDaily />
            <div className="py-10 bg-white flex flex-col gap-10">
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
             <Footer></Footer>
        </div>
    );
}
