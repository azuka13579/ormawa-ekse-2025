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
    const [sizeError, setSizeError] = useState(false);

    return (
        <div className="group relative">
            <div
                className="card-hover-effect bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={(index % 4) * 100}
                onClick={() => setIsOpen(true)}
            >
                <div className="flex flex-col h-full">
                    {/* Image Section */}
                    <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <img
                            src={`/storage/${product.image}`}
                            alt={product.name}
                            className="object-contain w-full h-full p-4 transition-transform duration-500 group-hover:scale-105"
                        />

                        {/* Stock Badge */}
                        <div
                            className={`absolute top-2 right-2 px-3 py-1 rounded-full text-xs font-semibold ${
                                product.stock > 0
                                    ? "bg-green-100 text-green-800"
                                    : "bg-red-100 text-red-800"
                            }`}
                        >
                            {product.stock > 0
                                ? `${product.stock} tersedia`
                                : "Habis"}
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 font-montserrat flex flex-col flex-grow">
                        <h3 className=" text-gray-500 text-sm mb-1">
                            Samudra Store
                        </h3>
                        <h2 className="font-bold text-gray-900 text-lg line-clamp-2 mb-2">
                            {product.name}
                        </h2>

                        <div className="mt-auto">
                            <p className="text-xl font-bold text-primary4">
                                {formatRupiah(product.price)}
                            </p>

                            <button className="font-montserrat w-full mt-3 bg-gradient-to-r from-primary4 to-primary3 hover:opacity-90 text-white font-semibold py-2.5 rounded-lg transition-all duration-200">
                                Lihat Detail
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="scrollbar-hidden fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 animate-fade-in">
                    <div
                        className="scrollbar-hidden modal-content w-[90%] max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                    >
                        <button
                            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} className="text-gray-600" />
                        </button>

                        {/* Image Column */}
                        <div className="md:w-1/2 bg-gray-50 p-8 flex items-center justify-center">
                            <img
                                src={`/storage/${product.image}`}
                                alt={product.name}
                                className="object-contain max-h-[400px] w-full rounded-xl"
                            />
                        </div>

                        {/* Content Column */}
                        <div className="scrollbar-hidden md:w-1/2 p-6 md:p-8 overflow-y-auto">
                            <div className="space-y-6">
                                <div className="border-b pb-4">
                                    <h1 className="text-3xl font-bold text-gray-900">
                                        {product.name}
                                    </h1>
                                    <p className="text-xl font-bold text-primary4 mt-2">
                                        {formatRupiah(product.price)}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold mb-2">
                                        Deskripsi
                                    </h3>
                                    <p className="text-gray-600 whitespace-pre-line">
                                        {product.description}
                                    </p>
                                </div>

                                {product.size !== "-" && (
                                    <div>
                                        <h3 className="text-lg font-semibold mb-3">
                                            Pilih Ukuran
                                        </h3>
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                            {product.size
                                                .split(",")
                                                .map((size) => (
                                                    <button
                                                        key={size}
                                                        onClick={() =>
                                                            setSelectedSize(
                                                                product.id,
                                                                size
                                                            )
                                                        }
                                                        className={`size-button ${
                                                            selectedSize ===
                                                            size
                                                                ? "bg-primary4 text-white"
                                                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                                                        }`}
                                                    >
                                                        {size}
                                                    </button>
                                                ))}

                                        </div>
                                    </div>
                                )}
                                {sizeError && <p className="text-red-500 text-sm mt-2">Silakan pilih ukuran terlebih dahulu!</p>}

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-lg font-semibold">
                                            Jumlah
                                        </h3>
                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() =>
                                                    setQuantity(
                                                        Math.max(
                                                            1,
                                                            quantity - 1
                                                        )
                                                    )
                                                }
                                                className="quantity-button"
                                            >
                                                -
                                            </button>
                                            <input
                                                type="number"
                                                value={quantity}
                                                onChange={(e) => {
                                                    const val = Math.min(
                                                        product.stock,
                                                        Math.max(
                                                            1,
                                                            parseInt(
                                                                e.target.value
                                                            ) || 1
                                                        )
                                                    );
                                                    setQuantity(val);
                                                }}
                                                className="w-16 text-center border rounded-lg py-2"
                                            />
                                            <button
                                                onClick={() =>
                                                    setQuantity(
                                                        Math.min(
                                                            product.stock,
                                                            quantity + 1
                                                        )
                                                    )
                                                }
                                                className="quantity-button"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => {
                                            if (!selectedSize && product.size !== "-") {
                                                setSizeError(true);
                                                return;
                                            }
                                            addToCart(product, quantity);
                                            setIsOpen(false);
                                        }}
                                        disabled={product.stock <= 0}
                                        className={`w-full py-3.5 rounded-lg font-semibold transition-all ${
                                            product.stock > 0
                                                ? "bg-primary4 hover:bg-primary5 text-white"
                                                : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                        }`}
                                    >
                                        {product.stock > 0
                                            ? "Tambahkan ke Keranjang"
                                            : "Stok Habis"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
