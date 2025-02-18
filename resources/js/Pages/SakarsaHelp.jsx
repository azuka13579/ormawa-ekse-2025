import React from "react";
import { Head } from "@inertiajs/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function SakarsaHelp() {
    return (
        <div>
            <div className="h-screen">
                <Navbar />
                <Head title="Sakarsa Help" />
                <h1>Hello Dunia Indonesia</h1>
            </div>
            <Footer></Footer>
        </div>
    );
}
