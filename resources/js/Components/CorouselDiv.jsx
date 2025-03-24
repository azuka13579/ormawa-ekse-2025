// Components/Carousel.jsx
import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CorouselDiv = forwardRef((props, ref) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "0",
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
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

    const prokers = [];

    return (
        <div className="carousel-container mx-auto max-w-8xl px-4">
            <Slider ref={ref} {...settings}>
                {prokers.map((proker, index) => (
                    <CardTentang
                        key={proker.index}
                        delay={index * 100}
                        nama={proker.divisi}
                        img=""
                    />
                ))}
            </Slider>
        </div>
    );
});

export default CorouselDiv;
