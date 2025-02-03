// Components/Carousel.jsx
import React, { forwardRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = forwardRef((props, ref) => {
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
          centerPadding: "0"
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "0"
        }
      }
    ]
  };

  const images = [
    'img/gambar.png',
    'img/gambar.png',
    'img/gambar.png',
    'img/gambar.png',
    'img/gambar.png',
    'img/gambar.png',
    'img/gambar.png',
  ];

  return (
    <div className="carousel-container mx-auto max-w-4xl px-4">
      <Slider ref={ref} {...settings}>
        {images.map((img, index) => (
          <div key={index} className="relative">
            <div className="relative transition-transform duration-300 ease-in-out transform hover:scale-105">
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="rounded-xl shadow-xl w-96"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default Carousel;