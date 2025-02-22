import React from "react";
import { Link } from "@inertiajs/react";

export default function CardTentang(props) {
    return (
        <Link className="" href={"tentang/" + props.nama}>
            <div
                className="w-full h-96 bg-gradient-to-t from-primary4 to-[#31BFE3] rounded-lg group hover:scale-105 relative transition duration-300 overflow-hidden
                flex justify-center"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                {/* <div className="p-6 flex items-center">
                    <h1 className="text-white font-montserrat text-2xl font-bold group-hover:text-black transition duration-300">
                        {props.nama}
                    </h1>
                </div> */}
                <img
                    src="img/Home.png"
                    alt=""
                    className="w-full h-auto object-cover group-hover:scale-100 scale-90 transition duration-700 ease-in-out"
                />
                <h1
                    className="text-slate-300 font-montserrat text-2xl font-bold drop-shadow-lg absolute bottom-6 left-6 right-6
                group-hover:text-white transition duration-300 group-hover:scale-105"
                >
                    {props.nama}
                </h1>
            </div>
        </Link>
    );
}
