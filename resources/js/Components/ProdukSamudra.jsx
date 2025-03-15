import React, { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../Context/CartContext";
import { useSize } from "../Context/SizeContext";

export default function ProductsSamudra({ product, index }) {
    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    const { selectedSizes, setSelectedSize } = useSize();
    const selectedSize = selectedSizes[product.id] || "";
    return (
        <div className="group">
            <div
                key={product.id}
                className="border rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={(index % 4) * 100}
                onClick={() => setIsOpen(true)}
            >
                <div className="relative group font-adihaus">
                    

                    <div className="overflow-hidden bg-gray-100 aspect-square">
                        <img
                            src={`/storage/${product.image}`}
                            alt={product.name}
                            className="mx-auto sm:mt-10 sm:w-11/12 sm:h-11/12w-full h-full object-cover rounded-t-md transition-transform duration-300 "
                        />
                    </div>

                    <div className="p-4 bg-white group-hover:bg-primary1/20 transition-all duration-300">

                        <h2 className="text-sm text-primary5 truncate">
                            Samudra Store
                        </h2>
                        <h2 className="text-2xl text-primary5 truncate">
                            {product.name}
                        </h2>

                        <div className="gap-2 flex flex-col">
                            <p className="text-sm text-primary4">
                                {formatRupiah(product.price)}
                            </p>

                            <div className="flex items-center">
                                <span
                                    className={`inline-block w-2 h-2 rounded-full mr-1 ${
                                        product.stock > 0
                                            ? "bg-green-500"
                                            : "bg-red-500"
                                    }`}
                                ></span>
                                <p className="text-sm text-gray-700">
                                    {product.stock > 0
                                        ? `Stock: ${product.stock}`
                                        : "Out of Stock"}
                                </p>
                            </div>
                        </div>

                        <div className="mt-3 pt-3 border-t border-gray-100">
                            <button className="w-full bg-primary1 hover:bg-primary1/80 text-primary5 font-medium py-2 rounded-md transition-colors duration-200">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-40 font-montserrat">
                    <div
                        className="w-4/5 max-h-[80vh] p-6 bg-white rounded-2xl shadow-xl relative overflow-auto scroll-smooth scrollbar-hidden"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-20"
                            onClick={() => {
                                setIsOpen(false);
                            }}
                        >
                            <X size={20} />
                        </button>{" "}
                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="flex-1 max-w-sm md:max-w-[300px] md:max-h-[300px] aspect-square bg-gray-100 rounded-lg md:mb-0 mb-4 flex justify-center items-center overflow-hidden">
                                <img
                                    src={`/storage/${product.image}`}
                                    alt="Product Image"
                                    className="w-full h-full object-cover rounded-xl"
                                />
                            </div>

                            <div className="text-primary5 md:w-3/5">
                                <div className="border-b-[2px] border-primary5 pb-2">
                                    <h2 className="text-2xl md:text-4xl font-bold ">
                                        {product.name}
                                    </h2>
                                </div>
                                <h1 className="text-xl font-bold mt-4 ">
                                    Deskripsi
                                </h1>

                                <p className="text-sm text-justify whitespace-pre-line">
                                    {product.description}
                                </p>
                                {product.size !== "-" && (
                                    <>
                                        <h1 className="text-lg font-bold mt-4">
                                            Size
                                        </h1>
                                        <div className="flex max-md:grid max-md:grid-cols-4 gap-4">
                                            {product.size
                                                .split(",")
                                                .map((size, index) => (
                                                    <label key={index}>
                                                        <input
                                                            type="radio"
                                                            name={`size-${product.id}`} // Buat unik berdasarkan ID produk
                                                            value={size}
                                                            checked={
                                                                selectedSize ===
                                                                size
                                                            }
                                                            className="hidden peer"
                                                            onChange={() =>
                                                                setSelectedSize(
                                                                    product.id,
                                                                    size
                                                                )
                                                            }
                                                        />
                                                        <div className="cursor-pointer px-3 py-2 rounded-lg border border-primary4 text--primary4 font-semibold peer-checked:bg-primary4 peer-checked:text-white transition-all duration-300 hover:bg-primary1">
                                                            {size}
                                                        </div>
                                                    </label>
                                                ))}
                                        </div>
                                    </>
                                )}

                                <p className=" text-justify text-lg font-bold mt-2">
                                    {formatRupiah(product.price)}
                                </p>

                                <div className="flex items-center gap-4 mt-4">
                                    <button
                                        className="px-3 py-2 bg-primary4 text-white font-semibold rounded-lg hover:bg-primary5 transition-all"
                                        onClick={() =>
                                            setQuantity(
                                                Math.max(1, quantity - 1)
                                            )
                                        }
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        min="1"
                                        value={quantity}
                                        onChange={(e) => {
                                            const newQuantity =
                                                parseInt(e.target.value) || 1;
                                            setQuantity(
                                                Math.min(
                                                    product.stock,
                                                    Math.max(1, newQuantity)
                                                )
                                            );
                                        }}
                                        className="w-16 p-2 border rounded-lg text-center"
                                    />
                                    <button
                                        className="px-3 py-2 bg-primary4 text-white font-semibold rounded-lg hover:bg-primary5 transition-all"
                                        onClick={() =>
                                            setQuantity((prev) =>
                                                Math.min(
                                                    product.stock,
                                                    prev + 1
                                                )
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>

                                <button
                                    className={`mt-4 px-4 py-2 bg-primary4 text-white font-semibold rounded-lg hover:bg-primary5 transition-all
                                        disabled:bg-red-500 disabled:`}
                                    disabled={product.stock <= 0}
                                    onClick={() => {
                                        addToCart(product, quantity);
                                        setIsOpen(false);
                                    }}
                                >
                                    {product.stock > 0
                                        ? "Tambah Ke Keranjang"
                                        : "Habis"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
