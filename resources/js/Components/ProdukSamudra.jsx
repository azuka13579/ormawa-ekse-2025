import React, { useRef } from "react";
import CarouselSamudra from "./CorouselSamudra";

export default function ProdukSamudra() {
    const sliderRef = useRef(null);


    return (
        
        <div 
        data-aos="fade-up"
        data-aos-duration="800"
        className="max-w-7xl mx-auto sm:px-6 lg:px-8 py-5 bg-white mt-8 relative "
    >
        {/* Tombol Previous di Kiri */}
        <button
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-fontcolors transition shadow-md z-10"
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
    
        {/* Carousel */}
        <CarouselSamudra ref={sliderRef} />
    
        {/* Tombol Next di Kanan */}
        <button
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-fontcolors transition shadow-md z-10"
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
    
    );
}
