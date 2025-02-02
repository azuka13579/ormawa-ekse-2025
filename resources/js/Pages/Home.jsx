import React, { useRef } from 'react';
import Navbar from "../Components/Navbar";
import { motion } from "framer-motion"; // Import motion dari framer-motion
import { useInView } from "react-intersection-observer"; // Import useInView untuk mendeteksi scroll
import SakarsaDaily from '../Components/SakarsaDaily';

export default function Home() {

    
    const [headerRef, headerInView] = useInView({ triggerOnce: false, threshold: 0.2, trackVisibility: true, delay: 100 });
    const [sectionRef, sectionInView] = useInView({ triggerOnce: false, threshold: 0.2, trackVisibility: true, delay: 100 });
    const [textRef, textInView] = useInView({ triggerOnce: false, threshold: 0.2, trackVisibility: true, delay: 100 });

    const [carouselRef, carouselInView] = useInView({ triggerOnce: false, threshold: 0.2, trackVisibility: true, delay: 100 });
        

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
                staggerChildren: 0.3
            }
        }
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
                delay: 0.3
            }
        }
    };

    const textBlockVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.2,
                type: "spring",
                stiffness: 120
            }
        })
    };
    const carouselVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "tween",
                ease: "anticipate",
                duration: 0.8
            }
        }
    };

    return (
        <div>
            <Navbar />

            {/* Animasi untuk bagian pertama */}
            <motion.div
               ref={headerRef}
               initial="hidden"
               animate={headerInView ? "visible" : "hidden"}
               variants={headerVariants}
               className="flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-4 md:space-y-0 max-w[500px]"
            >
                {/* Teks */}
                <div className="max-w-[600px] font-rowdies">
                    <h1 className="text-8xl md:text-6xl font-bold text-fontcolors leading-snug">
                        Arungi Samudra, Capai Cakrawala, Wujudkan Cita
                    </h1>
                    <p className="text-2xl text-black mt-2 font-montserrat">
                        Kami hadir untuk membantu KM PKU IPB!
                    </p>
                </div>

                {/* Gambar */}
                <div className="w-full md:w-1/2 flex justify-center p-0">
                    <img
                        src="img/Home.png"
                        alt="Logo Sakarsa"
                        className="w-full md:w-[500px] h-auto"
                    />
                </div>
            </motion.div>

            {/* Animasi untuk bagian kedua */}
            <motion.div
           
           ref={sectionRef}
           initial="hidden"
           animate={sectionInView ? "visible" : "hidden"}
           variants={sectionVariants}
           className="px-10 py-10 max-w-screen-xl max-h-[1000px] mx-auto bg-fontcolors rounded-3xl shadow-md"
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

                {['Samudra'].map((title) => (
                    <motion.div
                        key={title}
                        custom={1}
                        variants={textBlockVariants}
                    >
                        <div className='bg-biru rounded-3xl text-align max-w-[150px] mx-auto'>
                            <h1 className='font-montserrat text-2xl font-bold text-white p-2'>{title}</h1>
                        </div>
                        <div className="py-5 max-w-[1200px] mx-auto rounded-3xl">
                            <p className="text-2xl text-fontcolors font-montserrat">
                        <span className="font-bold">Samudra</span> melambangkan dimensi tak terhingga dari potensi manusia, tak terbatas, mendalam, dan penuh misteri. Setiap gelombang membawa kisah perjuangan, setiap arus mengandung kekuatan transformasi.
                        </p>
                        </div>
                    </motion.div>
                ))}
                {['Wirakarsa'].map((title) => (
                    <motion.div
                        key={title}
                        custom={2}
                        variants={textBlockVariants}
                    >
                        <div className='bg-biru rounded-3xl text-align max-w-[150px] mx-auto'>
                            <h1 className='font-montserrat text-2xl font-bold text-white p-2'>{title}</h1>
                        </div>
                        <div className="py-5 max-w-[1200px] mx-auto rounded-3xl">
                            <p className="text-2xl text-fontcolors font-montserrat">
                        <span className="font-bold">Wirakarsa</span> adalah spirit kami, semangat para pejuang yang tidak sekadar bermimpi, namun menciptakan realitas.
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
                        <span className="font-bold">Samudra Wirakarsa </span> menjadi navigator peradaban, mengarungi tantangan dengan keberanian, mendobrak batas-batas dengan kreativitas, dan membangun jembatan menuju masa depan yang lebih cerah. Samudra Wirakarsa adalah pernyataan bahwa pemimpin sejati tidak menunggu perubahan, melainkan menciptakannya. Kami adalah gelegar inspirasi yang memecah kesunyian, cahaya yang menembus kegelapan, dan harapan yang tak pernah padam. Ini lah Samudra Wirakarsa, di mana setiap pikiran adalah gelombang perubahan, setiap gelombang adalah revolusi, dan setiap derap adalah sejarah.
                        </p>
                </motion.div>
            </motion.div>
            {/* Konten lain */}
            <SakarsaDaily />
            
        </div>
    );
}
