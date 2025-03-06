import React from "react";
import { useCart } from "../Context/CartContext";

export default function CartPage() {
    const { cart, removeFromCart, updateQuantity } = useCart();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Keranjang Belanja</h1>
            {cart.length === 0 ? (
                <p>Keranjang kosong</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="border p-4 mb-4 flex justify-between">
                        <span>{item.name} - Rp. {item.price}</span>
                        <button onClick={() => removeFromCart(item.id)} className="text-red-500">Hapus</button>
                    </div>
                ))
            )}
        </div>
    );
}
