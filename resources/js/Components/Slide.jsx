import React, { useState } from "react";

const ImageSlider = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const images = props.images;

    console.log(images);

    return (
        <div className="relative w-full rounded-2xl">
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
                            src={`${window.location.origin}/${src.image_path}`}
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
