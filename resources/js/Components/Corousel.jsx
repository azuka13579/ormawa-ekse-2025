import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCardproker from "./CorouselCardProker";

const Carousel = forwardRef(({ prokers }, ref) => {
    const today = new Date();
    
    // Filter proker yang sedang berlangsung
    const activeProkers = prokers.filter(proker => {
        const startDate = new Date(proker.start);
        const endDate = new Date(proker.end);
        endDate.setDate(endDate.getDate() + 1);
        return startDate <= today && endDate >= today;
    });

    // Jika hanya ada 1 proker, ubah konfigurasi carousel
    const isSingleProker = activeProkers.length === 1;

    const settings = {
        dots: !isSingleProker,
        infinite: !isSingleProker,
        speed: 500,
        slidesToShow: isSingleProker ? 1 : 3,
        slidesToScroll: 1,
        centerMode: !isSingleProker,
        focusOnSelect: true,
        centerPadding: "0",
        autoplay: !isSingleProker,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: isSingleProker ? 1 : 2,
                    centerPadding: "0",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0",
                },
            },
        ],
    };

    return (
        <div className="carousel-container mx-auto max-w-6xl px-4 py-6">
            <Slider ref={ref} {...settings}>
                {activeProkers.length > 0 ? (
                    activeProkers.map((proker, index) => (
                        <div key={proker.id} className="px-2">
                            <CarouselCardproker {...proker} delay={index * 100} />
                        </div>
                    ))
                ) : (
                    <div className="text-center text-xl font-semibold text-gray-600">
                        
                    </div>
                )}
            </Slider>
        </div>
    );
});

export default Carousel;

