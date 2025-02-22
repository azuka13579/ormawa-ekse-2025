import React, { forwardRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ShoppingBag } from "lucide-react";
import axios from "axios";

const CarouselSamudra = forwardRef((props, ref) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setProducts(response.data.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: "50px",
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    centerPadding: "30px",
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "20px",
                },
            },
        ],
    };

    const updateCount = (index, value) => {
        setProducts(prev => prev.map((item, i) => i === index ? { ...item, count: Math.max(1, (item.count || 1) + value) } : item));
    };

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="carousel-container w-full max-w-7xl">
            <Slider ref={ref} {...settings}>
                {products.map((product, index) => (
                    <div key={index} className="relative px-4">
                        <div className="relative flex flex-col bg-white p-4 shadow-xl h-[500px]">
                            {/* Gambar Produk */}
                            <img
                                src={`/img/${product.name}.png`|| "img/gambar.png"}
                                alt={product.name}
                                className="w-[300px] h-[300px] object-cover"
                            />
                            <div className="text-left mt-2">
                                <p className="text-lg font-semibold">{product.name}</p>
                                <p className="text-sm">Size: {product.size || "-"}</p>
                                <p className="text-sm">Stock: {product.stock}</p>
                                <button className="bg-white text-black px-3 py-1 rounded-md">View Details</button>
                            </div>
                            {/* Counter Barang */}
                            <div className="flex items-center gap-2 mt-2">
                                <button className="bg-gray-300 px-3 py-1 rounded-md" onClick={() => updateCount(index, -1)}>-</button>
                                <span>{product.count || 1}</span>
                                <button className="bg-gray-300 px-3 py-1 rounded-md" onClick={() => updateCount(index, 1)}>+</button>
                            </div>
                            {/* Shopping Bag */}
                            <button className="mt-3 max-w-[150px] bg-black text-white px-3 py-1 flex items-center gap-2 rounded-md">
                                <ShoppingBag size={16} /> Add to Bag
                            </button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
});

export default CarouselSamudra;
