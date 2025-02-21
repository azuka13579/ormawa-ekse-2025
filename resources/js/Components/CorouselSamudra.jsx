// Components/Carousel.jsx
import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselSamudra = forwardRef((props, ref) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
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

    const images = [
        "img/gambar.png",
        "img/gambar.png",
        "img/gambar.png",
        "img/gambar.png",
        "img/gambar.png",
        "img/gambar.png",
        "img/gambar.png",
    ];

    return (
        <div className="carousel-container w-full max-w-7xl h-1/2">
        <Slider ref={ref} {...settings}>
            {images.map((img, index) => (
                <div key={index} className="relative px-4">
                    <div className="relative flex flex-col items-center bg-white p-4 shadow-xl h-[300px]">
                        {/* Gambar Produk */}
                        <img
                            src={img}
                            alt={`Slide ${index + 1}`}
                            className="w-[300px] h-[300px] object-cover"
                        />
                        
                        {/* Nama Produk */}
                        <h1 className="mt-4 text-lg font-semibold">
                            Produk {index + 1}
                        </h1>
                        <span className="text-sm text-gray-600">Harga 100</span>
                    </div>
                </div>
            ))}
        </Slider>
    </div>
    
    );
});

export default CarouselSamudra;
