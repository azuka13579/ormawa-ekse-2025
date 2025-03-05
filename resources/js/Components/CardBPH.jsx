import React from "react";

export default function CardBPH(props) {
    return (
        <div className="">
            <div
                className="h-[400px] max-w-[300px] bg-primary7 from-primary4 to-[#31BFE3] rounded-lg flex items-end group hover:scale-105 overflow-hidden shadow-primary4 shadow-md"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                <div className="flex flex-col relative">
                    <img
                        src={`${window.location.origin}/img/rafa.png`}
                        alt=""
                        className={`md:${props.scale} top-60  relative scale-[0.8] w-full`}
                    />
                    <h1 className="text-white font-montserrat text-xl font-bold drop-shadow-lg absolute bottom-12 left-6 right-6">
                        {props.nama}
                    </h1>
                    <h1 className="text-white font-montserrat text-lg font-light drop-shadow-lg absolute bottom-6 left-6 right-6">
                        {props.jabatan}
                    </h1>
                </div>
            </div>
        </div>
    );
}
