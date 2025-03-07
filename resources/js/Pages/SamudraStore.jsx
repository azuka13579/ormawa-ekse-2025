import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import Footer from "../Components/Footer";
import ProdukSamudra from "../Components/ProdukSamudra";
import DisplaySize from "../Components/DisplaySize";
import { usePage } from "@inertiajs/react";
import { useCart } from "../Context/CartContext";
import { X } from "lucide-react";
import {Link} from "@inertiajs/react";

export default function SamudraStore() {
    const formatRupiah = (price) => {
        return `Rp. ${Number(price).toLocaleString("id-ID")}`;
    };
    const { cart, removeFromCart } = useCart();
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { products } = usePage().props;

    return (
        <div>
            <Head title="Samudra Store" />
            <div className="flex px-10 justify-between py-2 md:shadow-md fixed bg-white mt-0 z-40 w-full">
                <img
                    src="img/Samudra.png"
                    alt="Samudra Store"
                    className="w-3/4 md:w-1/4 h-auto object-contain"
                />
                <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative hover:bg-primary3  p-2 rounded-xl transition duration-300"
                >
                    <img
                        src={`${window.location.origin}/img/Keranjang.png`}
                        alt="keranjang"
                        className="w-full h-auto"
                    />
                    {cart.length > 0 && (
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            {cart.length}
                        </span>
                    )}
                </button>

                {/* Popup Keranjang */}
                {isCartOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
                        <div
                            className="w-4/5 md:w-1/3 bg-white p-6 rounded-lg shadow-lg relative"
                            data-aos="zoom-in"
                        >
                            <button
                                className="absolute top-3 right-3"
                                onClick={() => setIsCartOpen(false)}
                            >
                                <X size={20} />
                            </button>
                            <h2 className="text-xl font-bold mb-4">
                                Keranjang Belanja
                            </h2>

                            {cart.length === 0 ? (
                                <p className="text-center text-gray-500">
                                    Keranjang kosong
                                </p>
                            ) : (
                                <div className="space-y-4">
                                    {cart.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex justify-between items-center border-b pb-2"
                                        >
                                            <div>
                                                <p className="text-lg font-semibold">
                                                    {item.name}
                                                </p>
                                                <p className="text-gray-600">
                                                    Size: <DisplaySize productId={item.id}></DisplaySize>
                                                </p>{" "}
                                                {/* Menampilkan size */}
                                                <p className="text-gray-600">
                                                    {formatRupiah(item.price)} x{" "}
                                                    {item.quantity}
                                                </p>
                                            </div>
                                            <button
                                                className="text-red-500 font-bold"
                                                onClick={() =>
                                                    removeFromCart(item.id)
                                                }
                                            >
                                                Hapus
                                            </button>
                                        </div>
                                    ))}
                                    {/* Menampilkan total harga */}
                                    <div className="text-right font-bold text-lg mt-4">
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
                                    <button
                                        className="w-full bg-primary4 text-white py-2 mt-4 rounded-lg"
                                        onClick={() => {
                                           
                                        }}
                                    >
                                        Lanjut ke Checkout
                                    </button>
                                    </Link>
                                </div>
                                
                            )}
                        </div>
                    </div>
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
                    className="w-1/5 mx-auto"
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
                <h1 className="text-6xl md:text-9xl lg:text-9xl bg-gradient-to-r py-16 from-primary7 to-primary5 max-w-[760px] bg-clip-text text-transparent font-rowdies font-bold px-20">
                    Happy Shopping!
                </h1>
            </div>
            <div
                data-aos="fade-up"
                data-aos-duration="900"
                className="bg-primary8 max-w-[200px] md:max-w-[300px] text-center py-2 px-2 md:py-3 md:px-4 mx-auto rounded-3xl"
            >
                <p className="text-white font-bold font-montserrat text-xl md:text-5xl">
                    In Sale
                </p>
            </div>
            <div className="container mx-auto px-4 my-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 relative">
                    {products.map((product, index) => (
                        <ProdukSamudra product={product} index={index} />
                    ))}
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
