import React from "react";
import CardPrestasi from "../Components/CardPrestasi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlurText from "../Components/BlurText";

export default function Informasi(props) {
    const informasi = props.informasi;
    //console.log(informasi.length);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col items-center">
                <BlurText
                    text="Semua Informasi"
                    delay={100}
                    className="md:text-8xl text-4xl font-bold text-center my-4"
                />

                <div className="grid grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 w-full gap-6 px-8 pb-4">
                    {informasi.length > 0 ? (
                        informasi.map((info, index) => (
                            <CardPrestasi
                                key={index}
                                {...info}
                                className="transform transition-transform hover:-translate-y-1"
                            />
                        ))
                    ) : (
                        <div className="my-20 text-center p-6 bg-gray-50 rounded-xl">
                            <p className="text-gray-500 text-xl">
                                Informasi Belum Tersedia
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
