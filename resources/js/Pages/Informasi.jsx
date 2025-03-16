import React from "react";
import CardPrestasi from "../Components/CardPrestasi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Informasi(props) {
    console.log(props.informasi);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col items-center">
                <h1 className="text-7xl my-4 bg-gradient-to-r from-primary2 to-primary5 text-transparent bg-clip-text font-montserrat font-bold text-center">
                    Semua Informasi
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 w-full gap-6 px-8 pb-4">
                    {props.informasi.map((info, index) => (
                        <CardPrestasi
                            key={index}
                            {...info}
                            className="transform transition-transform hover:-translate-y-1"
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
