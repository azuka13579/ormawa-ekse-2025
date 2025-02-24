import { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/data")
            .then((response) => {
                setProducts(response.data); // Ambil bagian `data`
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-4">Daftar Produk</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                    <div key={product.id} className="border rounded-lg p-4 shadow-md bg-white">
                       <img src={product.image_path} alt="Gambar" srcset="" />
                        
                    </div>
                ))}
            </div>
        </div>
    );
}
