import React, { useState } from "react";
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';

export default function Navbar() {
    const { url } = usePage();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isActive = (path) => {
        return url === path ? 'text-black' : 'text-fontcolors hover:text-white';
    };

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex bg-sakarsaBlue shadow-md">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 p-4 w-full">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex">
                            <Link href="/">
                                <img src="/img/Logo.png" alt="Logo" className="h-14 w-auto" />
                            </Link>
                        </div>

                        {/* Desktop Links */}
                        <div className="flex space-x-8 font-montserrat text-xl">
                            <Link
                                href="/"
                                className={`font-bold ${isActive('/')}`}
                            >
                                Beranda
                            </Link>
                            <Link
                                href="/sakarsa-care"
                                className={`font-bold ${isActive('/sakarsa-care')}`}
                            >
                                Sakarsa Care
                            </Link>
                            <Link
                                href="/samudra-store"
                                className={`font-bold ${isActive('/samudra-store')}`}
                            >
                                Samudra Store
                            </Link>
                            <Link
                                href="/tentang"
                                className={`font-bold ${isActive('/tentang')}`}
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
                        className={`flex flex-col items-center text-sm font-bold ${isActive('/')}`}
                    >
                        <ion-icon name="home-outline" className="text-2xl mb-1"></ion-icon>
                        Beranda
                    </Link>
                    <Link
                        href="/sakarsa-care"
                        className={`flex flex-col items-center text-sm font-bold ${isActive('/sakarsa-care')}`}
                    >
                        <ion-icon name="help-circle-outline" className="text-2xl mb-1"></ion-icon>
                        Sakarsa Care
                    </Link>
                    <Link
                        href="/samudra-store"
                        className={`flex flex-col items-center text-sm font-bold ${isActive('/samudra-store')}`}
                    >
                        <ion-icon name="cart-outline" className="text-2xl mb-1"></ion-icon>
                        Samudra Store
                    </Link>
                    <Link
                        href="/tentang"
                        className={`flex flex-col items-center text-sm font-bold ${isActive('/tentang')}`}
                    >
                        <ion-icon name="information-circle-outline" className="text-2xl mb-1"></ion-icon>
                        Tentang
                    </Link>
                </div>
            </div>
        </>
    );
}