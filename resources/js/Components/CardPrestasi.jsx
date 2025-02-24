import { Link } from "@inertiajs/react";
import React from "react";
import { useState } from "react";
import { X } from "lucide-react";

export default function CardPrestasi() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="">
            <div
                className="bg-white text-primary5 font-montserrat flex rounded-lg group transition duration-700 overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="800"
                href="home"
                onClick={() => setIsOpen(true)}
            >
                <div className="w-2/5 overflow-hidden">
                    <img
                        src="https://osccdn.medcom.id/images/content/2022/02/21/68b0b9759f7d965cdd82cdee8154bbf6.png"
                        alt=""
                        className="aspect-square object-cover rounded-lg group-hover:scale-125 transition duration-700 ease-in-out "
                    />
                </div>

                <div className="p-4 flex-1 transition duration-300 group-hover:bg-primary5 group-hover:text-white ">
                    <h1 className="font-bold text-3xl">Judul</h1>
                    <p className="line-clamp-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magni, quibusdam!
                    </p>
                </div>
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
                            <div className="flex-1 aspect-square bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg md:mb-0 mb-4 text-primary5"></div>
                            <div className="text-primary5 md:w-3/5">
                                <div className="border-b-[2px] border-primary5 pb-4">
                                    <h2 className="text-lg md:text-3xl font-bold ">
                                        Prestasi KM PKU
                                    </h2>
                                    <p className="text-sm md:text-xl">
                                        14 Januari 2025
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
