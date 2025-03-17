import React from "react";
import CardPrestasi from "../Components/CardPrestasi";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BlurText from "../Components/BlurText";

export default function Informasi(props) {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col items-center">
                <BlurText text="Semua Informasi"
                delay={100}
                />
                
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
