import { useState, useEffect } from "react";
import { useForm, usePage } from "@inertiajs/react";
import { useCart } from "../Context/CartContext";
import DisplaySize from "../Components/DisplaySize";
import { useSize } from "../Context/SizeContext";
import axios from "axios";
import {Link} from "@inertiajs/react";

const fakultasData = {
    Faperta: [
        "Smart Agriculture",
        "Manajemen Sumberdaya Lahan",
        "Agronomi dan Holtikultura",
        "Proteksi Tanaman",
        "Arsitektur Lanskap",
    ],
    SKHB: ["Kedokteran Hewan", "Sains Biomedis"],
    FPIK: [
        "Teknologi dan Manajemen Perikanan Budidaya",
        "Manajemen Sumberdaya Perairan",
        "Teknologi Hasil Perairan",
        "Teknologi dan Manajemen Perikanan Tangkap",
        "Ilmu dan Teknologi Kelautan",
    ],
    Fapet: [
        "Teknologi Produksi Ternak",
        "Nutrisi dan Teknologi Pakan",
        "Teknologi Hasil Ternak",
    ],
    Fahutan: [
        "Manajemen Hutan",
        "Teknologi Hasil Hutan",
        "Konservasi Sumberdaya Hutan dan Ekowisata",
        "Silvikultur",
    ],
    Fateta: [
        "Teknik Pertanian dan Biosistem",
        "Teknologi Pangan",
        "Teknik Industri Pertanian",
        "Teknik Sipil dan Lingkungan",
    ],
    FMIPA: [
        "Bioinformatika",
        "Meteorologi Terapan",
        "Biologi",
        "Kimia",
        "Fisika",
        "Biokimia",
    ],
    FEM: [
        "Ekonomi Pembangunan",
        "Manajemen",
        "Agribisnis",
        "Ekonomi Sumberdaya dan Lingkungan",
        "Ekonomi Syariah",
    ],
    FEMA: [
        "Ilmu Gizi",
        "Ilmu Keluarga dan Konsumen",
        "Sains Komunikasi dan Pengembangan Masyarakat",
    ],
    Vokasi: [
        "Ekowisata",
        "Teknologi Rekayasa Perangkat Lunak",
        "Teknologi Rekayasan Koputer",
        "Supervisor Jaminan Mutu Pangan",
        "Manajemen Industri Jasa Makanan dan Gizi",
        "Teknologi dan Manajemen Pembenihan Ikan",
        "Teknologi dan Manajemen Ternak",
        "Manajemen Agribisnis",
        "Manajemen Industri",
        "Analisis Kimia",
        "Teknik dan Manajemen Lingkungan",
        "Akuntansi",
        "Parademik Veteriner",
        "Teknologi dan Manajemen Produksi Perkebunan",
        "Teknologi Produksi dan Pengembangan Masyarakat Pertanian",
    ],
    SB: ["Bisnis"],
    FK: ["Kedokteran"],
    SSMI: [
        "Statistika dan Sains Data",
        "Matematika",
        "Ilmu Komputer",
        "Aktuaria",
        "Kecerdasan Buatan",
    ],
};

export default function Checkout() {
    const cart = useCart();
    const [toastMessage, setToastMessage] = useState("");
const [toastType, setToastType] = useState(""); // success / error
const [showToast, setShowToast] = useState(false);
const triggerToast = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);

    setTimeout(() => {
        setShowToast(false);
    }, 3000); // Hilang otomatis setelah 3 detik
};

    const cartData = cart.cart;
    const { selectedSizes } = useSize();
    const selectedSizesList = cartData.map(
        (item) => selectedSizes[item.id] || "-"
    );
    const mergedCart = cartData.map((item, index) => ({
        ...item,
        selectedSize: selectedSizesList[index] || "-",
    }));

   // Tambahkan pengecekan sebelum menggunakan data
const { data, setData, post, processing } = useForm({
    email: "",
    name: "",
    nim: "",
    fakultas: "",
    departemen: "",
    whatsapp: "",
    catatan: "",
    bukti_transfer: null,
    cart: mergedCart || [], // Tambahkan fallback ke array kosong
    total: Array.isArray(cartData) ? cartData.reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
    ) : 0, // Tambahkan pengecekan
});
    
const sendEmail = async () => {
    try {
        await axios.post("/send-order-email", {
            name: data.name,
            nim: data.nim,
            fakultas: data.fakultas,
            departemen: data.departemen,
            whatsapp: data.whatsapp,
            email: data.email,
            catatan: data.catatan,
            cart: mergedCart,
            total: data.total,
        });

        triggerToast("Email pesanan berhasil dikirim!", "success");
    } catch (error) {
        console.error("Gagal mengirim email:", error);
        triggerToast("Terjadi kesalahan saat mengirim email.", "error");
    }
};


    const [selectedFileName, setSelectedFileName] = useState("");
    const [berhasil, setBerhasil] = useState(false);

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
    const [showConfirmation, setShowConfirmation] = useState(false);
    
    // Error popup state
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const validateEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    };
    const handleSubmitClick = (e) => {
        e.preventDefault();
        
        if (!data.email.trim()) {
            // Show error popup instead of alert
            setErrorMessage("Email Tidak Boleh Kosong");
            setShowError(true);
            return;
        }else if (!validateEmail(data.email.trim())){
            setErrorMessage("Masukkan format email dengan benar!");
            setShowError(true);
            return;
        }
        if (!data.name.trim()) {
            setErrorMessage("Nama Tidak Boleh Kosong");
            setShowError(true);
            return;
        }
        if (!data.nim.trim()) {
            setErrorMessage("NIM Tidak Boleh Kosong");
            setShowError(true);
            return;
        }
        
        if (!data.fakultas){
            setErrorMessage("Fakultas Harap Diisi!");
            setShowError(true);
            return;
        }
        if (!data.departemen){
            setErrorMessage("Departemen Harap Diisi!");
            setShowError(true);
            return;
        }
        if (!data.whatsapp.trim()) {
            setErrorMessage("No Whatsapp Tidak Boleh Kosong");
            setShowError(true);
            return;
        }

        
        if (!data.bukti_transfer) {
            // Show error popup instead of alert
            setErrorMessage("Harap upload bukti transfer!");
            setShowError(true);
            return;
        }
        
        // Show confirmation popup
        setShowConfirmation(true);
    };
    
    const handleConfirmSubmit = () => {
        setShowConfirmation(false);
        
        
    
        post("/samudra-store/checkout/payment",  {
            
            onSuccess: () => {
                setBerhasil(true);
            },
            onError: (errors) => {
                setErrorMessage("Terjadi kesalahan: " + Object.values(errors).join(", "));
                setShowError(true);
            },
        });
       
    };
    
    const handleFileChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
            const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
            if (!allowedTypes.includes(file.type)) {
                setErrorMessage("Format file harus JPG, PNG, atau PDF.");
                return;
            }
    
            if (file.size > 4 * 1024 * 1024) { // 4MB dalam byte
                setErrorMessage("Ukuran file tidak boleh lebih dari 4MB.");
                return;
            }
    
            setErrorMessage(""); // Reset error jika valid
            setSelectedFileName(file.name);
            setData("bukti_transfer", file);
        }
    };
    
    

    return (
        
        <div className="min-h-screen bg-gray-50">
            {showToast && (
    <div
        className={`fixed top-5 right-5 px-4 py-2 rounded-lg shadow-md text-white transition-opacity duration-300 ${
            toastType === "success" ? "bg-green-500" : "bg-red-500"
        }`}
    >
        {toastMessage}
    </div>
)}

<div className="bg-primary1 w-full flex items-center justify-between px-6 py-4 shadow-md">
    <Link href="/samudra-store" className="text-primary5 hover:text-primary3 font-semibold text-lg flex items-center gap-2">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back
    </Link>
    <h1 className="font-montserrat font-bold md:text-3xl text-xl text-primary5 text-center flex-grow">
        Form Pembayaran
    </h1>
    <div className="w-8"></div> 
</div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-6 lg:px- py-8">
                {/* Order Summary */}
                <div className="bg-white p-6 shadow-lg rounded-xl">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Ringkasan Pesanan
                    </h2>
                    <div className="space-y-6">
                        {cartData.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center gap-4 pb-4 border-b border-gray-200"
                            >
                                <img
                                    src={`/storage/${item.image}`}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg border border-gray-200"
                                />
                                <div className="flex-1">
                                    <h3 className="font-medium text-gray-800">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        Jumlah: {item.quantity}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Size:{" "}
                                        <DisplaySize
                                            productId={item.id}
                                        ></DisplaySize>{" "}
                                    </p>
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
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">
                        Detail Pembeli
                    </h2>
                    <form className="space-y-6">
                        {/* Personal Info */}
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
                                    placeholder="email@gmail.com"
                                    required
                                />
                                
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        type="text"
                                        value={data.name}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
                                        placeholder="Nama lengkap"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        NIM
                                    </label>
                                    <input
                                        type="text"
                                        value={data.nim}
                                        onChange={(e) =>
                                            setData("nim", e.target.value)
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
                                        placeholder="Nomor Induk Mahasiswa"
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Academic Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Informasi Akademik
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Fakultas
                                    </label>
                                    <select
                                        value={data.fakultas}
                                        onChange={(e) =>
                                            setData("fakultas", e.target.value)
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
                                        required
                                    >
                                        <option value="">Pilih Fakultas</option>
                                        {Object.keys(fakultasData).map(
                                            (fak) => (
                                                <option key={fak} value={fak}>
                                                    {fak}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Departemen
                                    </label>
                                    <select
                                        value={data.departemen}
                                        onChange={(e) =>
                                            setData(
                                                "departemen",
                                                e.target.value
                                            )
                                        }
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
                                        required
                                        disabled={!data.fakultas}
                                    >
                                        <option value="">
                                            Pilih Departemen
                                        </option>
                                        {data.fakultas &&
                                            fakultasData[data.fakultas].map(
                                                (dep) => (
                                                    <option
                                                        key={dep}
                                                        value={dep}
                                                    >
                                                        {dep}
                                                    </option>
                                                )
                                            )}
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Payment Info */}
                        <div className="space-y-4">
                            <h3 className="text-lg font-medium text-gray-900">
                                Informasi Pembayaran
                            </h3>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nomor WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    value={data.whatsapp}
                                    onChange={(e) =>
                                        setData("whatsapp", e.target.value)
                                    }
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
                                    placeholder="62812-3456-7890"
                                    required
                                />
                            </div>
                            
                            <div>
    <label 
        htmlFor="catatan" 
        className="block text-sm font-medium text-gray-700 mb-2"
    >
        Catatan (Wajib Diisi Untuk Pembelian Jas Lab)
    </label>
    <textarea
        id="catatan"
        value={data.catatan}
        onChange={(e) => setData("catatan", e.target.value)}
        className="w-full h-40 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary3 focus:border-primary3"
        placeholder="Catatan tambahan untuk store [Wajib Diisi Untuk Pembelian Jas Lab - Bordir Nama Maks 10 Huruf (Contoh: SYARIEFFAH)]"
        required
        maxLength={250}
    />
    {data.catatan.length > 0 && (
        <p className="text-xs text-gray-500 mt-1">
            {data.catatan.length} / 250 karakter
        </p>
    )}
</div>

                            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                                <div className="mb-2 text-sm text-gray-600">
                                    <span className="font-medium">
                                        Transfer ke:
                                    </span>
                                    <div className="mt-1 bg-gray-50 p-3 rounded-md">
                                        <div className="font-mono">
                                            9014 1548 5674 
                                        </div>
                                        <div className="text-xs text-gray-500 mt-1">
                                            Sea Bank a.n. MUHAMMMAD SYARIEF HIDAYATULLAH
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">
                Upload Bukti Transfer
            </label>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary3 transition-colors">
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
                        {selectedFileName || "Klik atau drag file bukti transfer max file (4Mb)"}
                    </span>
                </div>
                <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    required
                />
            </label>
            
                            </div>
                            {errorMessage && <p className="text-red-500 text-sm mt-2">{errorMessage}</p>}

                        </div>

                        {/* Submit Button */}
            <button
                type="button"
                onClick={handleSubmitClick}
                disabled={processing}
                className="w-full bg-primary4 text-white py-3 rounded-lg font-medium hover:bg-primary5 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
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
            
            {/* Confirmation Popup */}
            {showConfirmation && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-lg font-bold mb-4">Konfirmasi Pembayaran</h3>
                        <p className="mb-6">Apakah Anda yakin ingin melanjutkan pembayaran ini?</p>
                        
                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={() => setShowConfirmation(false)}
                                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                                disabled={processing}
                            >
                                Batal
                            </button>
                            <button
                                type="button"
                                onClick={() => {
                                    handleConfirmSubmit();
                                    sendEmail();
                                }}
                                className="px-4 py-2 bg-primary4 text-white rounded-lg hover:bg-primary5"
                                disabled={processing}
                            >
                                {processing ? "Memproses..." : "Ya, Saya Yakin"}
                            </button>
                        </div>
                    </div>
                </div>
            )}
            
            {/* Error Popup */}
            {showError && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                        <h3 className="text-lg font-bold mb-4 text-red-600">Peringatan</h3>
                        <p className="mb-6">{errorMessage}</p>
                        
                        <div className="flex justify-end">
                            <button
                                type="button"
                                onClick={() => setShowError(false)}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                            >
                                Tutup
                            </button>
                        </div>
                    </div>
                </div>
            )}
                    </form>
                </div>
            </div>
            {berhasil && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 font-montserrat">
                    <div
                        className="w-4/5 max-w-md p-6 bg-white rounded-2xl shadow-xl relative overflow-hidden text-center"
                        data-aos="zoom-in"
                        data-aos-duration="400"
                    >
                        {/* Ikon sukses */}
                        <div className="flex justify-center mb-4">
                            <svg
                                className="w-16 h-16 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        </div>

                        {/* Pesan sukses */}
                        <h2 className="text-2xl font-semibold text-gray-800">
                            Pembayaran Berhasil!
                        </h2>
                        <h2 className="text-2xl font-semibold text-gray-800">
                            {/* Id pembelian anda : {pembelianId} */}
                        </h2>
                        <p className="text-gray-600 mt-2">
                            Terima kasih telah berbelanja di Samudra Store.
                        </p>
                        <p className="text-gray-600">
                            Pesanan Anda akan segera kami proses.
                        </p>
                        <p className="text-gray-600">
                            Silahkan Cek email masuk atau spam untuk detail pesanan Anda! 😊
                        </p>

                        {/* Tombol kembali ke home */}
                        <button
                            onClick={() => {
                                window.location.href = "/samudra-store";
                            }}
                            className="mt-6 w-full bg-primary4 text-white py-3 rounded-lg font-medium hover:bg-primary5 transition-colors"
                        >
                            Kembali ke Beranda
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
