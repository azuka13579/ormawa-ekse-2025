import { createContext, useContext, useState } from "react";

// Buat context
const CartContext = createContext();

// Provider untuk membungkus aplikasi
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Tambah produk ke keranjang
    const addToCart = (product, quantity, selectedSize = null) => {
        setCart((prevCart) => {
            // Cek apakah produk sudah ada di keranjang
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id && item.selectedSize === selectedSize
            );

            if (existingProductIndex !== -1) {
                // Jika produk sudah ada, update jumlahnya
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += quantity;
                return updatedCart;
            } else {
                // Jika belum ada, tambahkan ke keranjang
                return [...prevCart, { ...product, quantity, selectedSize }];
            }
        });
    };

    // Hapus item dari keranjang
    const removeFromCart = (productId, selectedSize = null) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === productId && item.selectedSize === selectedSize))
        );
    };

    // Bersihkan seluruh keranjang
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook untuk menggunakan CartContext
export const useCart = () => {
    return useContext(CartContext);
};
