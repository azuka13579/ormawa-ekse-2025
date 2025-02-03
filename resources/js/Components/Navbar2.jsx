import { Link } from "@inertiajs/react";
import React from "react";
import { usePage } from "@inertiajs/react";

export default function Navbar() {
    const { url } = usePage();

    const isActive = (path) => {
        return url === path ? "border-primary4" : "";
    };
    return (
        <nav className="bg-primary2 py-2">
            <div className="max-w-6xl mx-auto px-2">
                <div className="flex justify-between items-center py-4 ">
                    <div className="text-lg font-semibold text-primary5">
                        <img src="" alt="" />
                        <div className="flex flex-col">
                            <h1 className="text-4xl">Samudra Wirakarsa</h1>
                        </div>
                    </div>
                    <div className="flex space-x-4 text-primary5 font-semibold text-lg">
                        <Link
                            href="beranda"
                            className={`border-b-2 border-transparent hover:border-primary4 transition duration-300 ${isActive(
                                "beranda"
                            )}`}
                        >
                            Beranda
                        </Link>
                        <Link
                            href="help"
                            className={`border-b-2 border-transparent hover:border-primary4 transition duration-300 ${isActive(
                                "/help"
                            )}`}
                        >
                            Sakarsa Help
                        </Link>
                        <Link
                            href="store"
                            className={`border-b-2 border-transparent hover:border-primary4 transition duration-300 ${isActive(
                                "/store"
                            )}`}
                        >
                            Sakarsa Store
                        </Link>
                        <Link
                            href="tentang"
                            className={`border-b-2 border-transparent hover:border-primary4 transition duration-300 ${isActive(
                                "/tentang"
                            )}`}
                        >
                            Tentang
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
