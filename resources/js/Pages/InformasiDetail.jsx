import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "@inertiajs/react";

export default function InformasiDetail(props) {
    // console.log(props.informasi[0]);
    const [isExpanded, setIsExpanded] = useState(false);
    const informasi = props.informasi;
    return (
        <div className="overflow-hidden">
            <div className="min-h-screen">
                <Navbar></Navbar>
                <div className="flex justify-center font-montserrat p-5">
                    <div className="md:w-2/3 w-full flex justify-center flex-col gap-6">
                        <div className="">
                            <h1
                                className="text-primary4 font-bold text-4xl md:text-6xl"
                                data-aos="fade-up"
                                data-aos-duration="800"
                            >
                                {informasi.judul}
                            </h1>
                            <h1
                                className="mt-2 text-primary4 font-base"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="100"
                            >
                                Dipublikasikan pada{" "}
                                {new Date(
                                    informasi.created_at
                                ).toLocaleDateString("id-ID", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                })}
                            </h1>
                        </div>
                        <div
                            className="group overflow-hidden rounded-xl"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            <img
                                src={`${window.location.origin}/${informasi.image_path}`}
                                alt=""
                                className={`w-full object-cover transition-all duration-700 group-hover:scale-110 overflow-hidden  ${
                                    isExpanded ? "" : "h-96"
                                }`}
                                loading="lazy"
                                onClick={() => setIsExpanded(!isExpanded)}
                            />
                        </div>
                        <p
                            className="whitespace-pre-line mb-6"
                            data-aos="fade-up"
                            data-aos-duration="800"
                        >
                            {informasi.deskripsi}
                        </p>

                        <div className="bg-primary5/10 p-4 rounded-lg">
                            <p className="text-sm font-semibold text-primary5">
                                Narahubung Informasi:
                                <span className="block mt-1 font-normal">
                                    {informasi.narahubung}
                                </span>
                            </p>
                        </div>
                        <Link
                            href="/informasi"
                            className="bg-primary4 hover:bg-primary5 text-white duration-300 transition p-4 rounded-lg"
                        >
                            Kembali
                        </Link>
                        {/* <h1>{informasi.image_path}</h1> */}
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
