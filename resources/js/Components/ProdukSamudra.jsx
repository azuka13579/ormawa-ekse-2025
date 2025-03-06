import React, { useState } from "react";
import { X } from "lucide-react";
import { useCart } from "../Context/CartContext";

export default function ProductsSamudra({ product, index }) {
    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const { addToCart } = useCart();
    return (
        <div className="group">
            <div
                key={product.id}
                className="border rounded-lg shadow-md overflow-hidden "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={(index % 4) * 100}
                onClick={() => setIsOpen(true)}
            >
                <div className="group-hover:bg-primary1 transition-all duration-300 p-4">
                    <img
                        src={`/storage/${product.image}`}
                        alt={product.name}
                        className="w-full h-40 object-cover rounded-md mb-2"
                    />

                    <h2 className="text-xl font-bold text-primary5">
                        {product.name}
                    </h2>

                    <p className="text-lg font-semibold text-primary4">
                        {formatRupiah(product.price)}
                    </p>
                    <p className="text-gray-700">Stock: {product.stock}</p>
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
                                console.log(isOpen);
                            }}
                        >
                            <X size={20} />
                        </button>{" "}
                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="flex-1 aspect-square bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg md:mb-0 mb-4 text-primary5 flex justify-center">
                                <img
                                    src={`/storage/${product.image}`}
                                    alt=""
                                    className="h-full object-cover rounded-xl"
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

                                <p className="text-sm text-justify">
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
                                                            name="size"
                                                            value={size}
                                                            className="hidden peer"
                                                            onChange={(e) =>
                                                                setSelectedSize(
                                                                    e.target
                                                                        .value
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
                                    className="mt-4 px-4 py-2 bg-primary4 text-white font-semibold rounded-lg hover:bg-primary5 transition-all"
                                    onClick={() => addToCart(product, quantity)}
                                >
                                    Tambah ke Keranjang
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
