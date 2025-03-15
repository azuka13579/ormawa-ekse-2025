import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Footer from "../Components/Footer";
import ProdukSamudra from "../Components/ProdukSamudra";
import DisplaySize from "../Components/DisplaySize";
import { usePage } from "@inertiajs/react";
import { useCart } from "../Context/CartContext";
import { X } from "lucide-react";
import { Link } from "@inertiajs/react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

export default function SamudraStore() {
    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };
    const { cart, removeFromCart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { products } = usePage().props;
    const cartLength = cart.length;
    const productLength = products.length;

    return (
        <div>
            <Head title="Samudra Store" />
            <div className="flex px-10 justify-between py-2 md:shadow-md fixed bg-white mt-0 z-40 w-full">
                <img
                    src="img/Samudra.png"
                    alt="Samudra Store"
                    className="w-3/4 md:w-1/4 h-auto object-contain"
                />
                <div className="relative">
                    {/* Button Keranjang */}
                    <button
                        onClick={() => setIsCartOpen(!isCartOpen)}
                        className="relative flex my-auto items-center justify-center w-12 h-12 bg-primary1 text-black rounded-full shadow-md hover:bg-primary4 transition duration-300"
                    >
                        {/* Icon Keranjang */}
                        <ShoppingCart size={26} />

                        {/* Badge Jumlah Item */}
                        {cartLength > 0 && (
                            <motion.span
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", stiffness: 200 }}
                                className="absolute -top-1 -right-1 bg-primary3 text-black text-xs font-bold px-2 py-1 rounded-full"
                            >
                                {cartLength}
                            </motion.span>
                        )}
                    </button>
                </div>

                {/* Popup Keranjang */}
                {isCartOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 120 }}
                        className="absolute right-0 mt-3 w-80 bg-white shadow-2xl rounded-lg p-5 border border-gray-200"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-center border-b pb-3">
                            <h2 className="text-xl font-bold text-gray-800">
                                Keranjang Belanja
                            </h2>
                            <button onClick={() => setIsCartOpen(false)}>
                                <X
                                    size={20}
                                    className="text-gray-500 hover:text-red-500 transition"
                                />
                            </button>
                        </div>

                        {/* Isi Keranjang */}
                        {cartLength === 0 ? (
                            <p className="text-center text-gray-500 py-6">
                                Keranjang kosong 😢
                            </p>
                        ) : (
                            <div className="space-y-4 max-h-60 overflow-y-auto">
                                {cart.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center gap-4 border-b pb-3"
                                    >
                                        <img
                                            src={`/storage/${item.image}`}
                                            alt={item.name}
                                            className="w-16 h-16 object-cover rounded-lg border border-gray-300"
                                        />
                                        <div className="flex-1">
                                            <p className="text-lg font-semibold">
                                                {item.name}
                                            </p>
                                            <p className="text-gray-500 text-sm">
                                                Size:{" "}
                                                <DisplaySize
                                                    productId={item.id}
                                                />
                                            </p>
                                            <p className="text-gray-700">
                                                {formatRupiah(item.price)} x{" "}
                                                {item.quantity}
                                            </p>
                                        </div>
                                        <button
                                            className="text-red-500 font-bold hover:text-red-600 transition"
                                            onClick={() =>
                                                removeFromCart(item.id)
                                            }
                                        >
                                            Hapus
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Total Harga & Checkout */}
                        {cartLength > 0 && (
                            <div className="mt-4">
                                <div className="text-right font-bold text-lg">
                                    Total:{" "}
                                    {formatRupiah(
                                        cart.reduce(
                                            (total, item) =>
                                                total +
                                                item.price * item.quantity,
                                            0
                                        )
                                    )}
                                </div>
                                <Link href="/samudra-store/checkout">
                                    <button className="w-full bg-gradient-to-r from-primary3 to-primary4 text-white py-3 mt-4 rounded-lg font-semibold hover:opacity-90 transition duration-300">
                                        Lanjut ke Checkout
                                    </button>
                                </Link>
                            </div>
                        )}
                    </motion.div>
                )}
            </div>
            <div className="h-24"></div>
            <div
                data-aos="fade-up"
                data-aos-duration="800"
                className="flex flex-col gap-5 items-center text-center"
            >
                <img
                    src="img/Samudrastore.png"
                    alt="Samudra Store"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    loading="lazy"
                    className="md:w-1/5 w-3/4 mx-auto"
                />
                <h1 className="bg-gradient-to-r from-primary7 to-primary5 text-3xl md:text-8xl bg-clip-text text-transparent font-rowdies font-bold mx-auto">
                    Samudra Store
                </h1>
                <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="bg-gradient-to-r from-primary7 to-primary5 md:max-w-[800px] mx-auto rounded-3xl py-2 md:py-3 px-3 md:px-4"
                >
                    <p className="text-l md:text-2xl font-bold font-montserrat text-white">
                        Menyediakan segala kebutuhan KM PKU
                    </p>
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    className="text-center max-w-[1000px] mx-auto"
                >
                    <p className="text-sm md:text-xl text-primary8">
                        <span className="font-bold">Samudera Store</span> adalah
                        salah satu program dari{" "}
                        <span className="font-bold">
                            Departemen Ekonomi Kreatif
                        </span>{" "}
                        yang berfokus pada kewirausahaan. Program ini dirancang
                        untuk menciptakan peluang bisnis yang inovatif dan
                        berkelanjutan.{" "}
                    </p>
                </div>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="1200"
                className="flex h-screen text-left items-center md:px-6"
            >
                <h1 className="text-6xl md:text-9xl lg:text-9xl bg-gradient-to-r py-16 from-primary7 to-primary5 max-w-[760px] bg-clip-text text-transparent font-rowdies font-bold md:px-20 px-10">
                    Happy Shopping!
                </h1>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="900"
                className="bg-gradient-to-r from-primary7 to-primary5 max-w-[200px] md:max-w-[300px] text-center py-2 px-2 md:py-3 md:px-4 mx-auto rounded-3xl"
            >
                <p className="text-white font-bold font-montserrat text-xl md:text-5xl">
                    In Sale
                </p>
            </div>
            {productLength === 0 ? (
                <div
                    data-aos="fade-up"
                    data-aos-duration="900"
                    className="my-36 bg-gradient-to-r from-primary7 to-primary5 max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] text-center py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-10 mx-auto rounded-3xl shadow-lg transition-all duration-300 hover:scale-105"
                >
                    <p className="text-white font-bold font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                        COMING SOON!
                    </p>
                </div>
            ) : (
                <div className="container mx-auto px-4 my-4">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
                        {products.map((product, index) => (
                            <ProdukSamudra product={product} index={index} />
                        ))}
                    </div>
                </div>
            )}

            <Footer></Footer>
        </div>
    );
}
