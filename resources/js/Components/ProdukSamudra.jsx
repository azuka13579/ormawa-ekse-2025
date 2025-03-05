import React from "react";
import { Link } from "@inertiajs/react";

export default function ProductsSamudra({ products }) {
    return (
        
        <div className="container mx-auto px-4 my-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow-md">
                        <img
                    src={`/storage/${product.image}`}
                alt={product.name}
                 className="w-full h-40 object-cover rounded-md mb-2"
                />

                        <h2 className="text-xl font-semibold">{product.name}</h2>
                        <p className="text-gray-600">{product.description}</p>
                        <p className="text-gray-600">{product.size}</p>
                        <p className="text-lg font-bold text-green-600">Rp.{product.price}</p>
                        <p className="text-gray-700">Stock: {product.stock}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
