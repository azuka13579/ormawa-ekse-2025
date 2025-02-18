import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Carousel from "./Corousel";

export default function SakarsaDaily() {
    const sliderRef = useRef(null);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
    

    return (
        <div 
            data-aos="fade-up"
            data-aos-duration="800"
            className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-5 bg-sakarsaBlue mt-8 rounded-3xl shadow-md relative"
=======
>>>>>>> 9433adc2a006949527ed4dcd36d6d3bafa0a2fd2
    const [carouselRef, carouselInView] = useInView({
        triggerOnce: false,
        threshold: 0.2,
    });

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
        <motion.div
            ref={carouselRef}
            initial="hidden"
            animate={carouselInView ? "visible" : "hidden"}
            variants={carouselVariants}
            className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-5 bg-sakarsaBlue mt-8 rounded-3xl relative"
<<<<<<< HEAD
=======
    

    return (
=======
    

    return (
>>>>>>> e1a1c2c (update-responsif)
        <div 
            data-aos="fade-up"
            data-aos-duration="800"
            className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-5 bg-sakarsaBlue mt-8 rounded-3xl shadow-md relative"
>>>>>>> e1a1c2c (update-responsif)
=======
>>>>>>> 947de2c32cf72b0af2873536d2dd29747f0bf79d
>>>>>>> 9433adc2a006949527ed4dcd36d6d3bafa0a2fd2
        >
            <div className="relative">
                <h1 className="font-rowdies text-4xl md:text-5xl text-fontcolors">
                    Sakarsa’s
                </h1>
                <h3 className="font-montserrat text-lg md:text-xl text-fontcolors pb-10">
                    Weekly Daily
                </h3>

                {/* Custom Arrows */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 flex gap-4 z-10">
                    <button
                        className="slick-prev-arrow bg-white p-2 rounded-full hover:bg-fontcolors transition"
                        onClick={() => sliderRef.current?.slickPrev()}
                    >
                        <svg
                            className="w-6 h-6 text-fontcolors hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <button
                        className="slick-next-arrow bg-white p-2 rounded-full hover:bg-fontcolors transition"
                        onClick={() => sliderRef.current?.slickNext()}
                    >
                        <svg
                            className="w-6 h-6 text-fontcolors hover:text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            <Carousel ref={sliderRef} />
        </div>
    );
}
