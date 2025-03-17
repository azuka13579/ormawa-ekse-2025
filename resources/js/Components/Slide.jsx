import React, { useState } from "react";
import BlurText from "./BlurText";
const ImageSlider = ({ images }) => {
    const [imageErrors, setImageErrors] = useState({});

    const handleImageError = (index) => {
        setImageErrors((prev) => ({ ...prev, [index]: true }));
    };

    // Hitung jumlah gambar yang error
    const errorCount = Object.keys(imageErrors).length;

    return (
        <div className="relative w-full rounded-2xl select-none">
            {/* Slider Container */}
            <div
                data-aos="fade-up"
                data-aos-delay="100"
                data-aos-duration="1000"
                className="slides-imageslide rounded-xl flex overflow-x-auto scrollbar-hidden snap-x snap-mandatory scroll-smooth"
                style={{
                    WebkitTapHighlightColor: "transparent",
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none"
                }}
            >
                <div className="blank"></div>
                
                {errorCount === images.length ? ( // Jika semua gambar gagal dimuat
                    <BlurText text="COMING SOON!" delay={100}/>
                ) : (
                    images.map((src, index) => {
                        const imageUrl = `${window.location.origin}/${src.image_path}`;

                        return (
                            <div
                                key={index}
                                id={`val-${index + 1}`}
                                className="imageslide"
                                style={{
                                    margin: 0,
                                    padding: 0,
                                    border: "none",
                                    outline: "none"
                                }}
                            >
                                {!imageErrors[index] && (
                                    <img
                                        src={imageUrl}
                                        alt={`Team member ${index + 1}`}
                                        className="h-auto max-h-[250px] md:max-h-[500px] w-auto"
                                        style={{
                                            pointerEvents: "none",
                                            userDrag: "none",
                                            WebkitUserDrag: "none"
                                        }}
                                        draggable="false"
                                        onError={() => handleImageError(index)}
                                    />
                                )}
                            </div>
                        );
                    })
                )}

                <div className="blank"></div>
            </div>
        </div>
    );
};

export default ImageSlider;
