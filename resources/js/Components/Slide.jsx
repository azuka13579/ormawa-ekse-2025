import React, { useState } from "react";

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = [
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
        "img/Rafa.png",
    ];

    return (
        <div className="relative w-full border-2 rounded-lg border-primary5">
            {/* Slider Container */}
            <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory scroll-smooth"
            >
                {images.map((src, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 snap-start"
                        style={{
                            transform: `translateX(${
                                index === currentSlide ? 0 : 10
                            }px)`,
                        }}
                    >
                        <img
                            src={src}
                            alt={`Slide ${index}`}
                            className="h-[500px] object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageSlider;
