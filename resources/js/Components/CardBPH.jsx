import React from "react";

export default function CardBPH({ image_path, nama, jabatan, delay }) {
    return (
        <div
            className="h-[380px] w-[270px] bg-primary7 rounded-lg flex items-end group hover:scale-105 overflow-hidden shadow-md shadow-primary4"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={delay}
        >
            <div className="relative w-full h-full flex flex-col items-center p-4">
                <img
                    src={`${window.location.origin}/${image_path}`}
                    alt={nama}
                    className="w-full h-[350px] object-cover rounded-t-lg absolute bottom-0"
                />
                <div className="absolute bottom-10 left-4 right-4 text-center">
                    <h1 className="text-primary4 font-montserrat text-lg font-bold drop-shadow-lg">
                        {nama}
                    </h1>
                    <h2 className="text-primary4 font-montserrat text-md font-light drop-shadow-lg mt-1">
                        {jabatan}
                    </h2>
                </div>
            </div>
        </div>
    );
}