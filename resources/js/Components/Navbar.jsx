import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";

export default function Navbar() {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        return url === path
            ? "border-primary5 border-b-2 text-primary5"
            : "border-transparent text-primary4 text-fontcolors hover:border-primary5 hover:text-primary5 transition duration-200";
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex bg-primary2 ">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 p-4 w-full">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex">
                            <Link href="/">
                                <img
                                    src="/img/Logo.png"
                                    alt="Logo"
                                    className="h-20 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="flex space-x-8 font-montserrat text-lg">
                            <Link
                                href="/"
                                className={`font-bold border-b-2 ${isActive(
                                    "/"
                                )}`}
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/sakarsa-help"
                                className={`font-bold border-b-2 ${isActive(
                                    "/sakarsa-help"
                                )}`}
                            >
                                Sakarsa Help
                            </Link>
                            <Link
                                href="/samudra-store"
                                className={`font-bold border-b-2 ${isActive(
                                    "/samudra-store"
                                )}`}
                            >
                                Samudra Store
                            </Link>
                            <Link
                                href="/tentang"
                                className={`font-bold border-b-2 ${isActive(
                                    "/tentang"
                                )}`}
                            >
                                Tentang
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed inset-x-0 bottom-0 bg-sakarsaBlue shadow-lg z-40">
                <div className="flex justify-around p-2">
                    <Link
                        href="/"
                        className={`flex flex-col items-center text-sm font-bold ${isActive(
                            "/"
                        )}`}
                    >
                        <ion-icon
                            name="home-outline"
                            className="text-2xl mb-1"
                        ></ion-icon>
                        Beranda
                    </Link>
                    <Link
                        href="/sakarsa-help"
                        className={`flex flex-col items-center text-sm font-bold ${isActive(
                            "/sakarsa-help"
                        )}`}
                    >
                        <ion-icon
                            name="help-circle-outline"
                            className="text-2xl mb-1"
                        ></ion-icon>
                        Sakarsa Help
                    </Link>
                    <Link
                        href="/samudra-store"
                        className={`flex flex-col items-center text-sm font-bold ${isActive(
                            "/samudra-store"
                        )}`}
                    >
                        <ion-icon
                            name="cart-outline"
                            className="text-2xl mb-1"
                        ></ion-icon>
                        Samudra Store
                    </Link>
                    <Link
                        href="/tentang"
                        className={`flex flex-col items-center text-sm font-bold ${isActive(
                            "/tentang"
                        )}`}
                    >
                        <ion-icon
                            name="information-circle-outline"
                            className="text-2xl mb-1"
                        ></ion-icon>
                        Tentang
                    </Link>
                </div>
            </div>
        </>
    );
}
