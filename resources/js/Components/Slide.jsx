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
        <div className="relative w-full rounded-lg">
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
                    transform: `translateX(${index === currentSlide ? 0 : 10}px)`,
                }}
            >
                <img
                    src={`${window.location.origin}/${src}`}
                    alt={`Slide ${index}`}
                    className="h-auto max-h-[500px] w-auto object-contain"
                />
            </div>
        ))}
    </div>
</div>

    );
};

export default ImageSlider;
