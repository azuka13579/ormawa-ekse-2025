import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PaymentButton({ processing, handleSubmit }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const confirmAndSubmit = () => {
        setIsSubmitting(true);
        setIsOpen(false);
        handleSubmit(); // Fungsi untuk mengirim form
    };

    return (
        <>
            {/* Tombol Konfirmasi */}
            <button
                type="button"
                disabled={processing || isSubmitting}
                onClick={() => setIsOpen(true)}
                className="w-full bg-primary4 text-white py-3 rounded-lg font-medium hover:bg-primary5 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
                {processing || isSubmitting ? (
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

            {/* Modal Konfirmasi */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent>
                    <DialogTitle>Konfirmasi Pembayaran</DialogTitle>
                    <DialogDescription>
                        Apakah Anda yakin bahwa semua informasi telah diisi dengan benar? Pastikan detail pesanan sudah sesuai sebelum melanjutkan.
                    </DialogDescription>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setIsOpen(false)}>
                            Batal
                        </Button>
                        <Button onClick={confirmAndSubmit} disabled={isSubmitting}>
                            Ya, Lanjutkan
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
