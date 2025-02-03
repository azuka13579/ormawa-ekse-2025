import { Link } from "@inertiajs/react";
import React from "react";

export default function CardPrestasi() {
    return (
        <Link
            className="bg-white text-primary5 font-montserrat flex rounded-lg group transition duration-700 overflow-hidden"
            data-aos="fade-up"
            data-aos-duration="800"
            href="home"
        >
            <div className="w-2/5 overflow-hidden">
                <img
                    src="https://osccdn.medcom.id/images/content/2022/02/21/68b0b9759f7d965cdd82cdee8154bbf6.png"
                    alt=""
                    className="aspect-square object-cover rounded-lg group-hover:scale-125 transition duration-700 ease-in-out "
                />
            </div>
            <div className="p-4 flex-1 transition duration-300 group-hover:bg-primary5 group-hover:text-white ">
                <h1 className="font-bold text-3xl">Judul</h1>
                <p className="line-clamp-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, quibusdam!
                </p>
            </div>
        </Link>
    );
}
