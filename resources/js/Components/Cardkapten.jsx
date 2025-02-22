import React from "react";

export default function Cardkapten(props) {
    return (
        <div className="">
            <div
                className="w-[300px] h-[400px] bg-primary7 from-primary4 to-[#31BFE3] rounded-lg flex items-end group hover:scale-105 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                <div className="flex flex-col relative">
                    <img src="img/azka2.png" alt="" className="" />
                    <h1 className="text-white font-montserrat text-xl font-bold drop-shadow-lg absolute bottom-12 left-6">
                        {props.nama}
                    </h1>
                    <h1 className="text-white font-montserrat text-lg font-light drop-shadow-lg absolute bottom-6 left-6">
                        Kapten {props.no}
                    </h1>
                </div>
            </div>
        </div>
    );
}
