import React from "react";

export default function Cardkapten(props) {
    return (
        <div className="">
            <div
                className="w-[300px] h-[400px] bg-primary7 rounded-lg flex 
                items-center justify-center group hover:scale-105 overflow-hidden shadow-primary4 shadow-md relative "
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                <img
                    src={`${window.location.origin}/${props.image_path}`}
                    alt=""
                    className="group-hover:scale-110 transition duration-1000 ease-in-out h-full object-cover"
                />
                <h1 className="text-white font-montserrat text-xl font-bold drop-shadow-lg absolute bottom-12 left-6 right-6">
                    {props.nama}
                </h1>
                <h1 className="text-white font-montserrat text-lg font-light drop-shadow-lg absolute bottom-6 left-6 right-6">
                    Kapten {props.no}
                </h1>
            </div>
        </div>
    );
}
