import React from "react";

export default function Cardkapten(props) {
    return (
        <div className="">
            <div
                className="w-72 h-96 bg-primary7 from-primary4 to-[#31BFE3] rounded-lg flex items-end group hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                <div className="p-6 flex flex-col">
                    <h1 className="text-white font-montserrat text-xl font-bold drop-shadow-lg">
                        {props.nama}
                    </h1>
                    <h1 className="text-white font-montserrat text-lg font-light drop-shadow-lg">
                        Kapten {props.no}
                    </h1>
                </div>
            </div>
        </div>
    );
}
