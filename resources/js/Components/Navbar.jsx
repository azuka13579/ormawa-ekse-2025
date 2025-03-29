import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { useEffect, useRef } from 'react';
import { Home, HelpCircle, ShoppingCart, Info } from 'lucide-react';
import { motion } from "framer-motion";

export default function Navbar() {
    const { url } = usePage();
    

    const isActive = (path) => {
        return url === path
            ? "border-primary5 text-primary5 pointer-events-none"
            : "border-transparent text-primary4 text-fontcolors hover:border-primary5 hover:text-primary5 transition duration-200";
    };
    const indicatorRef = useRef(null);
    const navRef = useRef(null);
    
    const navItems = [
        { path: "/", icon: Home, label: "Beranda" },
        { path: "/sakarsa-care", icon: HelpCircle, label: "Sakarsa Care" },
        { path: "/samudra-store", icon: ShoppingCart, label: "Samudra Store", external: true },
        { path: "/tentang", icon: Info, label: "Tentang" }
    ];

    // Temukan indeks item yang aktif
    const activeIndex = navItems.findIndex(item => item.path === url);
    
    // Gunakan useEffect untuk memindahkan indikator saat URL berubah
    useEffect(() => {
        if (indicatorRef.current && navRef.current && activeIndex !== -1) {
            // Dapatkan lebar total navigasi
            const navWidth = navRef.current.offsetWidth;
            // Hitung lebar per item
            const itemWidth = navWidth / navItems.length;
            // Hitung posisi tengah item aktif
            const centerPosition = (itemWidth * activeIndex) + (itemWidth / 2);
            // Posisikan indikator dengan mengurangi setengah lebar indikator
            indicatorRef.current.style.left = `${centerPosition - (indicatorRef.current.offsetWidth / 2)}px`;
        }
    }, [url, activeIndex]);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="hidden md:flex bg-primary1 ">
                <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 p-4 w-full">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex">
                            <Link href="/">
                                <img
                                    src="/img/Logowir.png"
                                    alt="Logo"
                                    className="h-14 w-auto"
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
                                href="/sakarsa-care"
                                className={`font-bold border-b-2 ${isActive(
                                    "/sakarsa-care"
                                )}`}
                            >
                                Sakarsa Care
                            </Link>
                            <a
                                href="/samudra-store"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`font-bold border-b-2 ${isActive(
                                    "/samudra-store"
                                )}`}
                            >
                                Samudra Store
                            </a>
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
            <div className="md:hidden fixed inset-x-0 bottom-0 bg-primary1 shadow-lg z-10 w-full">
            {/* Container utama */}
            <div ref={navRef} className="relative px-2 py-1">
                {/* Indikator yang bergerak */}
                <div 
                    ref={indicatorRef} 
                    className="absolute bg-sakarsaBlue rounded-full h-14 w-14 transform -translate-y-3 transition-all duration-300 ease-in-out"
                    style={{ 
                        opacity: 0.15,
                        top: '50%',
                        marginTop: '-20px',
                        zIndex: 0
                    }}
                />
                
                <div className="flex justify-around items-center relative z-10">
                    {navItems.map((item, index) => {
                        const isItemActive = url === item.path;
                        const Icon = item.icon;
                        
                        const ItemWrapper = item.external ? 
                            ({ children }) => (
                                <a
                                    href={item.path}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`flex flex-col items-center justify-center py-2 transition-all duration-300 ${
                                        isItemActive 
                                            ? "text-primary1" 
                                            : "text-primary4"
                                    }`}
                                    style={{
                                        width: `${100 / navItems.length}%`
                                    }}
                                >
                                    {children}
                                </a>
                            ) : 
                            ({ children }) => (
                                <Link
                                    href={item.path}
                                    className={`flex flex-col items-center justify-center py-2 transition-all duration-300 ${
                                        isItemActive 
                                            ? "text-primary5" 
                                            : "text-primary4"
                                    }`}
                                    style={{
                                        width: `${100 / navItems.length}%`
                                    }}
                                >
                                    {children}
                                </Link>
                            );
                        
                        return (
                            <ItemWrapper key={item.path}>
                                <div 
                                    className={`relative flex items-center justify-center transition-all duration-300 ${
                                        isItemActive ? "transform -translate-y-2" : ""
                                    }`}
                                >
                                    <motion.div 
                                    animate={{ y: isItemActive ? -8 : 0 }}
                                    transition={{ duration: 0.2, ease: "easeInOut" }}
                                    className={`flex items-center justify-center rounded-full p-3 ${isItemActive ? "bg-white" : ""}`}>
                                        <Icon 
                                            size={25} 
                                            strokeWidth={isItemActive ? 2.5 : 1.5} 
                                            className="transition-all duration-200"
                                        />
                                    </motion.div>
                                </div>
                                <span className={`text-xs`}>
                                    {item.label}
                                </span>
                            </ItemWrapper>
                        );
                    })}
                </div>
            </div>
            
            {/* Area aman untuk perangkat dengan "notch" atau "punch hole" */}
            <div className="h-safe-bottom bg-white"></div>
        </div>
        </>
    );
}
