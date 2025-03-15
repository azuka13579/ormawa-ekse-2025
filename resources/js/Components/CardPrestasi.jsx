import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

export default function CardPrestasi(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <div
                className="bg-white text-primary5 font-montserrat flex rounded-lg group transition duration-700 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                href="home"
                onClick={() => setIsOpen(true)}
            >
                <div className="w-2/5 overflow-hidden">
                    <img
                        src={props.image_path}
                        alt=""
                        className="aspect-square object-cover rounded-lg group-hover:scale-125 transition duration-700 ease-in-out "
                    />
                </div>

                <div className="p-4 flex-1 transition duration-300 group-hover:bg-primary5 group-hover:text-white ">
                    <h1 className="font-bold text-xl">{props.judul}</h1>
                    <p className="line-clamp-4">{props.deskripsi_singkat}</p>
                </div>
            </div>

            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 font-montserrat">
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
                        </button>
                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="flex-1 g-gradient-to-br from-blue-500 to-teal-500 rounded-lg md:mb-0 mb-4 text-primary5">
                                <img
                                    src={props.image_path}
                                    alt=""
                                    className="rounded-xl"
                                />
                            </div>
                            <div className="text-primary5 md:w-3/5">
                                <div className="border-b-[2px] border-primary5 pb-2">
                                    <h2 className="text-lg md:text-3xl font-bold ">
                                        {props.judul}
                                    </h2>
                                    <p className="text-base italic">
                                        Published on{" "}
                                        {new Date(
                                            props.created_at
                                        ).toLocaleString("id-ID", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}{" "}
                                    </p>
                                    <p className="text-base">
                                        {props.narahubung}
                                    </p>
                                </div>

                                <p className="text-sm mt-4 text-justify whitespace-pre-line">
                                    {props.deskripsi}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
