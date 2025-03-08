import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { useCart } from "../Context/CartContext";
const fakultasData = {
    Faperta: ["Agronomi", "Ilmu Tanah", "Proteksi Tanaman"],
    FKH: ["Kedokteran Hewan"],
    FPIK: ["Manajemen Sumberdaya Perairan", "Budidaya Perairan"],
    Fapet: ["Nutrisi dan Teknologi Pakan", "Produksi Ternak"],
};

export default function Checkout() {
    const cart = useCart(); // Ambil cart dari context
    const cartData = cart.cart;
    const { data, setData, post, processing } = useForm({
        email: "",
        name: "",
        nim: "",
        fakultas: "",
        departemen: "",
        whatsapp: "",
        bukti_transfer: null,
        cart: cartData, // Masukkan cart ke dalam form data
        total: Array.isArray(cartData)
            ? cartData.reduce(
                  (total, item) =>
                      total + parseFloat(item.price) * item.quantity,
                  0
              )
            : 0, // Menghitung total harga produk
    });

    const [selectedFileName, setSelectedFileName] = useState("");

    useEffect(() => {
        // Reset departemen jika fakultas berubah
        setData("departemen", "");
    }, [data.fakultas]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(amount);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Lakukan logika submit di sini (misalnya validasi atau perhitungan data)

        alert("Checkout berhasil!");

        // Redirect ke halaman yang diinginkan
        window.location.href = "/samudra-store"; // Ganti dengan URL yang sesuai
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Checkout</h2>

            <div className="border-b pb-4 mb-4">
                <h3 className="text-lg font-semibold">Detail Produk</h3>
                {cartData.length === 0 ? (
                    <p>Keranjang Anda kosong</p>
                ) : (
                    cartData.map((item) => (
                        <div
                            key={item.id}
                            className="flex justify-between border-b py-2"
                        >
                            <span>
                                {item.name} (x{item.quantity})
                            </span>
                            <span>
                                {formatCurrency(
                                    parseFloat(item.price) * item.quantity
                                )}
                            </span>{" "}
                            {/* Konversi harga ke float */}
                        </div>
                    ))
                )}

                <div className="font-bold text-right mt-2">
                    Total: {formatCurrency(data.total)}
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="Nama"
                    value={data.name}
                    onChange={(e) => setData("name", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    placeholder="NIM"
                    value={data.nim}
                    onChange={(e) => setData("nim", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />

                <select
                    value={data.fakultas}
                    onChange={(e) => setData("fakultas", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                >
                    <option value="">Pilih Fakultas</option>
                    {Object.keys(fakultasData).map((fak) => (
                        <option key={fak} value={fak}>
                            {fak}
                        </option>
                    ))}
                </select>

                <select
                    value={data.departemen}
                    onChange={(e) => setData("departemen", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                    disabled={!data.fakultas}
                >
                    <option value="">Pilih Departemen</option>
                    {data.fakultas &&
                        fakultasData[data.fakultas].map((dep) => (
                            <option key={dep} value={dep}>
                                {dep}
                            </option>
                        ))}
                </select>

                <input
                    type="text"
                    placeholder="Nomor WhatsApp"
                    value={data.whatsapp}
                    onChange={(e) => setData("whatsapp", e.target.value)}
                    className="w-full p-2 border rounded"
                    required
                />

                <h3 className="text-lg font-semibold mt-6">
                    Nomor Rekening: 3288-9238-9198-1892-19
                </h3>

                <label className="block text-gray-700">
                    Upload Bukti Transfer:
                </label>
                <input
                    type="file"
                    onChange={(e) => {
                        setData("bukti_transfer", e.target.files[0]);
                        setSelectedFileName(
                            e.target.files[0] ? e.target.files[0].name : ""
                        );
                    }}
                    className="w-full p-2 border rounded"
                    required
                />
                {selectedFileName && (
                    <p className="text-sm text-green-600">
                        File: {selectedFileName}
                    </p>
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                    disabled={processing}
                >
                    {processing ? "Memproses..." : "Bayar"}
                </button>
            </form>
        </div>
    );
}
