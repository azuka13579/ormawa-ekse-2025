import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { X } from "lucide-react";

export default function Cardproker(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white p-4">
            <div
                className="w-full h-80 bg-gradient-to-t from-primary4 to-[#31BFE3] rounded-lg group hover:scale-105 relative transition duration-300 overflow-hidden flex justify-center shadow-md"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={props.delay}
                onClick={() => setIsOpen(true)}
            >
                {/* <div className="p-6 flex items-center">
                    <h1 className="text-white font-montserrat text-2xl font-bold group-hover:text-black transition duration-300">
                        {props.nama}
                    </h1>
                </div> */}
                <img
                    src={`${window.location.origin}/${props.image_path}`}
                    alt=""
                    className="w-auto h-full object-cover group-hover:scale-125 duration-700 ease-in-out"
                />
                <h1
                    className="text-slate-300 font-montserrat text-3xl font-bold drop-shadow-lg absolute bottom-6 left-6 right-6 
                group-hover:text-white transition duration-300 group-hover:scale-105 text-center"
                >
                    {props.judul}
                </h1>
            </div>

            {isOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10 font-montserrat"
                    onClick={() => {
                        setIsOpen(false);
                        console.log(isOpen);
                    }}
                >
                    <div
                        className="w-4/5 max-h-[80vh] p-6 bg-white rounded-2xl shadow-xl relative overflow-auto scroll-smooth scrollbar-hidden"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                    >
                        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-20">
                            <X size={20} />
                        </button>
                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="flex-1 aspect-square bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg md:mb-0 mb-4 text-primary5 flex justify-center">
                                <img
                                    src={`${window.location.origin}/${props.image_path}`}
                                    alt=""
                                    className="h-full object-cover"
                                />
                            </div>
                            <div className="text-primary5 md:w-3/5">
                                <div className="border-b-[2px] border-primary5 pb-4">
                                    <h2 className="text-2xl md:text-4xl font-bold ">
                                        {props.nama}
                                    </h2>
                                    <p className="text-sm md:text-xl">
                                        {props.start} - {props.end}
                                    </p>
                                </div>
                                <h1 className="text-2xl font-bold mt-4 ">
                                    Tujuan
                                </h1>

                                <p className="text-sm text-justify">
                                    {props.deskripsi}
                                </p>
                                <h1 className="text-2xl font-bold mt-4 ">
                                    Deskripsi
                                </h1>
                                <p className="text-sm text-justify">
                                    repudiandae dolores nulla alias, enim quas
                                    tempora cum earum eveniet aliquid. Nesciunt
                                    illo odio adipisci tempore laudantium
                                    molestias culpa sequi ab ipsam alias
                                    sapiente ad veritatis cum nam dolorem eius,
                                    rem vitae labore id doloremque consectetur
                                    quis obcaecati consequuntur. Aspernatur
                                    doloremque architecto, cum aliquam aut
                                    mollitia dicta quos autem dignissimos,
                                    maiores animi commodi sed doloribus,
                                    temporibus non numquam! Id esse reiciendis
                                    dolor architecto aliquid animi quos non?
                                    Debitis, ex optio nesciunt quae quasi autem
                                    officia aliquid et sed? Assumenda facilis
                                    dolore iusto maiores ipsa voluptate
                                    accusantium! Mollitia esse, expedita
                                    suscipit nesciunt dolor odit iure delectus
                                    in similique, eaque voluptate. Perferendis
                                    quidem voluptatibus similique doloremque
                                    earum quia ex. Accusamus voluptatem delectus
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
