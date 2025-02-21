import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import ProdukSamudra from "../Components/ProdukSamudra";

export default function SakarsaHelp() {
    return (
        <div>
            <Head title="Samudera Store" /> 
                <div 
                className="flex px-10 justify-between py-4 md:shadow-md fixed bg-white mt-0 z-40">
                    <img src="img/Samudra.png" alt="Samudra Store" className="w-1/4 h-auto" />
                    <img src="img/Keranjang.png" alt="keranjang" className="" />
                </div>
                <div className="h-20">
                </div>
                <div className="flex flex-col gap-6 items-center text-center">

                    <img src="img/Samudrastore.png" alt="Samudra Store" className="w-1/4 mx-auto"/>
                    <h1 className="bg-gradient-to-r from-primary7 to-primary5 text-9xl bg-clip-text text-transparent font-rowdies font-bold mx-auto">Samudra Store</h1>
                    <div className="bg-gradient-to-r from-primary7 to-primary5 md:max-w-[800px] mx-auto rounded-3xl py-4 px-5">
                        <p className="text-3xl font-bold font-montserrat text-white">
                        Menyediakan segala kebutuhan KM PKU
                        </p>
                    </div>
                    <div className="text-center max-w-[1000px] mx-auto">
                    <p className="text-xl text-primary8"><span className="font-bold">Samudera Store</span> adalah salah satu program dari <span className="font-bold">Departemen Ekonomi Kreatif</span> yang berfokus pada kewirausahaan. Program ini dirancang untuk menciptakan peluang bisnis yang inovatif dan berkelanjutan. </p>
                    </div>
                </div>
                <div className="flex h-screen text-left items-center px-6">
                
                  <h1 className="text-7xl md:text-9xl lg:text-9xl bg-gradient-to-r py-16 from-primary7 to-primary5 max-w-[760px] bg-clip-text text-transparent font-rowdies font-bold px-20">
                    Happy Shopping!
                  </h1>
                </div>
                <div className="bg-primary8 max-w-[300px] text-center py-3 px-4 mx-auto rounded-3xl">
                    <p className="text-white font-bold font-montserrat text-5xl">
                        In Sale
                    </p>

                </div>
            <ProdukSamudra></ProdukSamudra>

            <Footer></Footer>
        </div>
    );
}
