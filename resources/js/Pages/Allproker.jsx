import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Cardproker from "../Components/Cardproker";

export default function Allproker(props) {
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-col items-center">
                <h1 className="text-7xl my-4 bg-gradient-to-r from-primary2 to-primary5 text-transparent bg-clip-text font-montserrat font-bold">
                    Semua Program Kerja
                </h1>
                <div className="grid grid-cols-3 w-full">
                    {props.proker.map((proker, index) => (
                        <Cardproker
                            key={index}
                            judul={proker.namasingkatan}
                            delay={(index % 3) * 100}
                            {...proker}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
