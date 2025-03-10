import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { useCart } from "../Context/CartContext";
import DisplaySize from "../Components/DisplaySize";

const fakultasData = {
    Faperta: ["Agronomi", "Ilmu Tanah", "Proteksi Tanaman"],
    FKH: ["Kedokteran Hewan"],
    FPIK: ["Manajemen Sumberdaya Perairan", "Budidaya Perairan"],
    Fapet: ["Nutrisi dan Teknologi Pakan", "Produksi Ternak"],
};

export default function Checkout() {
    const cart = useCart();
    const cartData = cart.cart;
    const { data, setData, post, processing } = useForm({
        email: "",
        name: "",
        nim: "",
        fakultas: "",
        departemen: "",
        whatsapp: "",
        bukti_transfer: null,
        cart: cartData,
        total: cartData.reduce((total, item) => total + parseFloat(item.price) * item.quantity, 0),
    });

    const [selectedFileName, setSelectedFileName] = useState("");

    useEffect(() => {
        setData("departemen", "");
    }, [data.fakultas]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("checkout.store"), {
            onSuccess: () => {
                alert("Checkout berhasil!");
                window.location.href = "/samudra-store";
            },
            onError: (errors) => {
                alert("Terjadi kesalahan: " + Object.values(errors).join(", "));
            },
        });
    };
    

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Order Summary */}
                <div className="bg-white p-6 shadow-lg rounded-xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Ringkasan Pesanan</h2>
                    <div className="space-y-6">
                        {cartData.map((item) => (
                            <div key={item.id} className="flex items-center gap-4 pb-4 border-b border-gray-200">
                                <img 
                                    src={`/storage/${item.image}`} 
                                    alt={item.name} 
                                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800">{item.name}</h3>
                                    <p className="text-sm text-gray-600">Jumlah: {item.quantity}</p>
                                    <p className="text-sm text-gray-600">Size: <DisplaySize productId={item.id}></DisplaySize> </p>
                                </div>
                                <div className="text-lg font-medium text-gray-900">
                                    {formatCurrency(item.price * item.quantity)}
                                </div>
                            </div>
                        ))}
                        <div className="pt-4">
                            <div className="flex justify-between text-xl font-bold text-gray-900">
                                <span>Total:</span>
                                <span>{formatCurrency(data.total)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="bg-white p-6 shadow-lg rounded-xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Detail Pembeli</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Info */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) => setData("email", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="email@example.com"
                                    required
                                />
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) => setData("name", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Nama lengkap"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">NIM</label>
                                    <input
                                        type="text"
                                        value={data.nim}
                                        onChange={(e) => setData("nim", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        placeholder="Nomor Induk Mahasiswa"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Academic Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Informasi Akademik</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Fakultas</label>
                                    <select
                                        value={data.fakultas}
                                        onChange={(e) => setData("fakultas", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Pilih Fakultas</option>
                                        {Object.keys(fakultasData).map((fak) => (
                                            <option key={fak} value={fak}>{fak}</option>
                                        ))}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Departemen</label>
                                    <select
                                        value={data.departemen}
                                        onChange={(e) => setData("departemen", e.target.value)}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                        required
                                        disabled={!data.fakultas}
                                    >
                                        <option value="">Pilih Departemen</option>
                                        {data.fakultas && fakultasData[data.fakultas].map((dep) => (
                                            <option key={dep} value={dep}>{dep}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">Informasi Pembayaran</h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nomor WhatsApp</label>
                                <input
                                    type="tel"
                                    value={data.whatsapp}
                                    onChange={(e) => setData("whatsapp", e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="62812-3456-7890"
                                    required
                                />
                            </div>
                            
                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <div className="mb-2 text-sm text-gray-600">
                                    <span className="font-medium">Transfer ke:</span>
                                    <div className="mt-1 bg-gray-50 p-3 rounded-md">
                                        <div className="font-mono">3288 9238 9198 1892 19</div>
                                        <div className="text-xs text-gray-500 mt-1">BRI a.n. Samudra Store</div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-3">Upload Bukti Transfer</label>
                                <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-500 transition-colors">
                                    <div className="flex flex-col items-center text-gray-600">
                                        <svg 
                                            className="w-8 h-8 mb-2" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24"
                                        >
                                            <path 
                                                strokeLinecap="round" 
                                                strokeLinejoin="round" 
                                                strokeWidth={2} 
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" 
                                            />
                                        </svg>
                                        <span className="text-sm">
                                            {selectedFileName || "Klik atau drag file bukti transfer"}
                                        </span>
                                    </div>
                                    <input 
                                        type="file" 
                                        className="hidden" 
                                        onChange={(e) => {
                                            setData("bukti_transfer", e.target.files[0]);
                                            setSelectedFileName(e.target.files[0]?.name || "");
                                        }} 
                                        required 
                                    />
                                </label>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                        >
                            {processing ? (
                                <div className="flex items-center justify-center gap-2">
                                    <svg 
                                        className="animate-spin h-5 w-5 text-white" 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        fill="none" 
                                        viewBox="0 0 24 24"
                                    >
                                        <circle 
                                            className="opacity-25" 
                                            cx="12" 
                                            cy="12" 
                                            r="10" 
                                            stroke="currentColor" 
                                            strokeWidth="4"
                                        ></circle>
                                        <path 
                                            className="opacity-75" 
                                            fill="currentColor" 
                                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        ></path>
                                    </svg>
                                    Memproses...
                                </div>
                            ) : (
                                "Konfirmasi Pembayaran"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}