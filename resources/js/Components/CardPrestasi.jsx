import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

// CardPrestasi.jsx
export default function CardPrestasi(props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="w-full md:w-full">
            <div
                className="bg-white text-primary5 font-montserrat flex flex-col rounded-lg group transition duration-300 overflow-hidden shadow-md hover:shadow-lg cursor-pointer"
                onClick={() => setIsOpen(true)}
                data-aos="fade-up"
                data-aos-duration="800"
                // data-aos-anchor-placement="bottom-top"
            >
                <div className="aspect-video overflow-hidden">
                    <img
                        src={
                            props.image_path ||
                            "/images/default-achievement.jpg"
                        }
                        alt={props.judul}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                    />
                </div>

                <div className="p-4 transition-colors duration-300">
                    <h1 className="font-bold text-lg mb-2 line-clamp-2">
                        {props.judul}
                    </h1>
                    <p className="text-sm text-gray-600 line-clamp-3 mb-3">
                        {props.deskripsi_singkat}
                    </p>
                    <span className="text-xs text-primary4 font-semibold">
                        {new Date(props.created_at).toLocaleDateString(
                            "id-ID",
                            {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                            }
                        )}
                    </span>
                </div>
            </div>

            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
                    <div
                        data-aos="zoom-in"
                        data-aos-duration="400"
                        className="bg-white rounded-xl  w-4/5 max-h-[90vh] overflow-y-auto relative scrollbar-hidden"
                    >
                        <button
                            className="sticky top-2 left-full -translate-x-6 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-sm hover:bg-gray-100 transition-colors"
                            onClick={() => setIsOpen(false)}
                            aria-label="Tutup modal"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>

                        <div className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="md:w-1/2">
                                    <img
                                        src={props.image_path}
                                        alt={props.judul}
                                        className="rounded-lg w-full h-auto max-h-64 md:max-h-none object-cover"
                                    />
                                </div>

                                <div className="md:w-1/2">
                                    <div className="border-b-2 border-primary5 pb-3 mb-4">
                                        <h2 className="text-2xl font-bold mb-2">
                                            {props.judul}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            Dipublikasikan pada{" "}
                                            {new Date(
                                                props.created_at
                                            ).toLocaleDateString("id-ID", {
                                                day: "numeric",
                                                month: "long",
                                                year: "numeric",
                                            })}
                                        </p>
                                    </div>

                                    <div className="prose prose-sm max-w-none">
                                        <p className="whitespace-pre-line mb-6">
                                            {props.deskripsi}
                                        </p>

                                        {props.narahubung && (
                                            <div className="bg-primary5/10 p-4 rounded-lg">
                                                <p className="text-sm font-semibold text-primary5">
                                                    Narahubung Informasi:
                                                    <span className="block mt-1 font-normal">
                                                        {props.narahubung}
                                                    </span>
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
