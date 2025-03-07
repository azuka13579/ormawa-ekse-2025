import { createContext, useState, useContext, useEffect } from "react";

// Buat Context
const SizeContext = createContext();

// Provider untuk menyimpan ukuran per produk
export const SizeProvider = ({ children }) => {
    const [selectedSizes, setSelectedSizes] = useState(
        JSON.parse(sessionStorage.getItem("selectedSizes")) || {} // Ambil data dari sessionStorage
    );

    // Simpan ke sessionStorage setiap kali selectedSizes berubah
    useEffect(() => {
        sessionStorage.setItem("selectedSizes", JSON.stringify(selectedSizes));
    }, [selectedSizes]);

    // Fungsi untuk mengubah ukuran berdasarkan ID produk
    const setSelectedSize = (productId, size) => {
        setSelectedSizes((prevSizes) => ({
            ...prevSizes,
            [productId]: size, // Simpan berdasarkan ID produk
        }));
    };

    return (
        <SizeContext.Provider value={{ selectedSizes, setSelectedSize }}>
            {children}
        </SizeContext.Provider>
    );
};

// Custom Hook agar lebih mudah digunakan di komponen lain
export const useSize = () => useContext(SizeContext);
