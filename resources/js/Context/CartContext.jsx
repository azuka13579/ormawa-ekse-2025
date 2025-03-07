import { createContext, useContext, useState } from "react";

// Buat context
const CartContext = createContext();

// Provider untuk membungkus aplikasi
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]); // Pastikan ada default []

    // Fungsi untuk menambah produk ke keranjang
    const addToCart = (product, quantity, selectedSize = null) => {
        setCart((prevCart) => {
            const existingProductIndex = prevCart.findIndex(
                (item) => item.id === product.id && item.selectedSize === selectedSize
            );

            if (existingProductIndex !== -1) {
                const updatedCart = [...prevCart];
                updatedCart[existingProductIndex].quantity += quantity;
                return updatedCart;
            } else {
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

    // Bersihkan keranjang
    const clearCart = () => {
        setCart([]);
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};

// Custom hook untuk menggunakan context
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart harus digunakan dalam CartProvider");
    }
    return context;
};
