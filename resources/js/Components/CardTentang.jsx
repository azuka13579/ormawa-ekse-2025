import React from "react";

export default function CardTentang(props) {
    return (
        <div className="">
            <div
                className="w-full h-96 bg-gradient-to-t from-primary4 to-[#31BFE3] rounded-lg flex items-end group hover:scale-105"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
            >
                <div className="p-6 flex items-center">
                    <h1 className="text-white font-montserrat text-2xl font-bold group-hover:text-black">
                        {props.nama}
                    </h1>
                </div>
            </div>
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> 7e16c2c (update)
