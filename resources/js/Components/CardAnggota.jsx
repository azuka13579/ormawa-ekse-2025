import React from "react";

export default function Cardkapten(props) {
    return (
        <div className="">
            <div
                className="w-72 h-96 bg-transparent from-primary4 to-[#31BFE3] rounded-lg flex items-end group hover:scale-105 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                <div className="flex flex-col relative">
                    <img
                        src="img/azka2.png"
                        alt=""
                        className="w-full h-full object-cover scale-150 relative top-20"
                    />
                </div>
            </div>
        </div>
    );
}
