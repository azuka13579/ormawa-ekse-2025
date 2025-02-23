import React from "react";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { X } from "lucide-react";

export default function Cardproker(props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="bg-white p-4">
            <div
                className="w-full h-80 bg-gradient-to-t from-primary4 to-[#31BFE3] rounded-lg group hover:scale-105 relative transition duration-300 overflow-hidden flex justify-center"
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
                    src={`${window.location.origin}/img/Home.png`}
                    alt=""
                    className="w-auto h-full object-cover group-hover:scale-125 duration-700 ease-in-out"
                />
                <h1
                    className="text-slate-300 font-montserrat text-3xl font-bold drop-shadow-lg absolute bottom-6 left-6 right-6 
                group-hover:text-white transition duration-300 group-hover:scale-105"
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
                        className="w-4/5 max-h-[80vh] p-6 bg-white rounded-2xl shadow-xl relative overflow-auto scroll-smooth"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                    >
                        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-20">
                            <X size={20} />
                        </button>
                        <div className="flex md:flex-row flex-col gap-6">
                            <div className="flex-1 aspect-square bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg md:mb-0 mb-4 text-primary5"></div>
                            <div className="text-primary5 md:w-3/5">
                                <div className="border-b-[2px] border-primary5 pb-4">
                                    <h2 className="text-lg md:text-3xl font-bold ">
                                        Risbang Investigation 1.0
                                    </h2>
                                    <p className="text-sm md:text-xl">
                                        2 Februari - 26 Februari 2025
                                    </p>
                                </div>

                                <p className="text-sm mt-4 text-justify">
                                    Program kerja yang bertujuan untuk
                                    mengumpulkan data melalui platform fillout
                                    serta mengolah dan menganalisis data terkait
                                    pengalaman akademik mahasiswa PPKU, kemudian
                                    mempublikasikan hasil beserta solusinya
                                    untuk perbaikan kualitas pembelajaran. Lorem
                                    ipsum dolor sit amet consectetur adipisicing
                                    elit. Distinctio odit perspiciatis expedita
                                    quam esse laudantium asperiores repellat
                                    laboriosam voluptates numquam eos ipsa
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
                                    quas incidunt, vero, quia consequatur sint
                                    officia fuga facere, culpa quam quod hic
                                    velit voluptate facilis quisquam qui ut!
                                    Incidunt laborum odit minus inventore error
                                    explicabo nesciunt illum, sunt eaque quos
                                    reprehenderit eos ducimus numquam aperiam
                                    enim laudantium delectus quod dolorem
                                    excepturi eligendi voluptate ipsum
                                    perspiciatis quasi? Quasi, aspernatur odit
                                    quibusdam alias commodi, quidem adipisci
                                    consequuntur doloremque deleniti pariatur
                                    aliquid similique doloribus eum distinctio,
                                    amet debitis modi error?
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
