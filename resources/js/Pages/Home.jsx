import React, { useRef } from "react";
import Navbar from "../Components/Navbar";
import Card4 from "../Components/CardPrestasi";
import SakarsaDaily from "../Components/SakarsaDaily";
import Footer from "../Components/Footer";
import { Head, Link, usePage } from "@inertiajs/react";
import Visi from "../Components/Visi";
import Misi from "../Components/Misi";
import { useState } from "react";

export default function Home({ proker, informasi }) {
    const [informasiUtama, ...informasi2] = informasi;
    const [showFull, setShowFull] = useState(false);

    return (
        <div>
            <div className="md:h-screen bg-white flex flex-col">
                <Navbar></Navbar>
                <Head title="Ormawa Eksekutif PKU IPB | Samudra Wirakarsa - Organisasi Mahasiswa PPKU">
                    <meta charSet="UTF-8" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />

                    <meta
                        name="description"
                        content="Ormawa Eksekutif PKU IPB adalah organisasi mahasiswa tingkat PPKU yang menangani kesejahteraan dan problematika mahasiswa IPB. Bergabunglah dengan kami!"
                    />
                    <meta
                        name="keywords"
                        content="Ormawa Eksekutif PKU, Samudra Wirakarsa, Organisasi Mahasiswa IPB, PPKU IPB, BEM PPKU, organisasi kampus IPB, mahasiswa IPB, kegiatan mahasiswa IPB"
                    />
                    <meta name="author" content="Biro Riset Pengembangan" />

                    <meta
                        property="og:title"
                        content="Ormawa Eksekutif PKU IPB | Samudra Wirakarsa"
                    />
                    <meta
                        property="og:description"
                        content="Ormawa Eksekutif PKU IPB adalah organisasi mahasiswa tingkat PPKU yang menangani kesejahteraan dan problematika mahasiswa IPB."
                    />
                    <meta
                        property="og:image"
                        content="https://ormawaeksekutifpku.com/img/Home1.png"
                    />
                    <meta
                        property="og:url"
                        content="https://ormawaeksekutifpku.com"
                    />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta
                        name="twitter:title"
                        content="Ormawa Eksekutif PKU IPB | Samudra Wirakarsa"
                    />
                    <meta
                        name="twitter:description"
                        content="Ormawa Eksekutif PKU IPB adalah organisasi mahasiswa tingkat PPKU yang menangani kesejahteraan dan problematika mahasiswa IPB."
                    />
                    <meta
                        name="twitter:image"
                        content="https://ormawaeksekutifpku.com/img/Home1.png"
                    />

                    <meta name="robots" content="index, follow" />
                    <link
                        rel="canonical"
                        href="https://ormawaeksekutifpku.com"
                    />
                </Head>

                {/* Bagian Header untuk mobile */}
                <div className="md:hidden bg-primary1 p-3 mb-20">
                    <img src="img/Logowir.png" alt="gambar" />
                </div>

                {/* Animasi untuk bagian pertama */}
                <div
                    className="h-full block md:flex flex-1 mx-auto"
                    data-aos=""
                    data-aos-duration="1000"
                >
                    {/* Bagian kiri konten */}
                    <div className="md:w-3/5  text-primary5 flex justify-center text-center md:gap-6 flex-col px-5">
                        <div
                            className="font-rowdies font-bold md:text-6xl text-4xl"
                            data-aos="fade-right"
                            data-aos-duration="800"
                        >
                            <p>Arungi Samudra,</p>
                            <p>Gapai Cakrawala,</p>
                            <p>Wujudkan Cita</p>
                        </div>
                        <p
                            className="font-montserrat text-2xl"
                            data-aos="fade-right"
                            data-aos-duration="800"
                            data-aos-delay="200"
                        >
                            Kami Hadir Untuk Membantu KM PKU IPB!
                        </p>
                    </div>

                    {/* Bagian kanan gambar */}
                    <div
                        className="kanan flex-1 flex justify-center items-center px-5 md:px-0"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <img
                            loading="lazy"
                            src="img/Home1.png"
                            alt="Home"
                            className="w-full h-auto max-w-[600px] object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* Animasi untuk bagian kedua */}
            <div className="p-3">
                <div
                    data-aos="fade-up"
                    data-aos-duration="800"
                    className="px-5 py-9 md:px-10 md:py-10 md:max-w-screen-xl max-w-96 max-h-[1200px] mx-auto bg-fontcolors rounded-3xl shadow-md"
                >
                    <div className="text-center mb-8">
                        <h1 className="md:text-6xl text-4xl font-bold text-white font-rowdies">
                            Selayang Pandang
                        </h1>
                        <p className="md:text-2xl text-xl text-white pt-5 font-montserrat">
                            Ormawa Eksekutif PKU IPB
                        </p>
                    </div>

                    <div className="block md:flex md:space-x-4 font-montserrat md:pl-10 md:pr-10">
                        {/* Kiri */}
                        <div className="w-full md:w-1/2">
                            <h2 className="md:text-3xl text-2xl font-semibold text-white italic">
                                Ormawa Eksekutif PKU IPB
                            </h2>
                            <p className="md:text-lg text-sm text-white pt-4 max-w-[549px] text-justify">
                                <span className="font-bold">
                                    Ormawa Eksekutif PKU IPB
                                </span>{" "}
                                merupakan organisasi kemahasiswaan di lingkup
                                Pendidikan Kompetensi Umum yang dikhususkan
                                dari, oleh, dan untuk mahasiswa tingkat PKU IPB.
                                Fungsinya melibatkan pemberian kesejahteraan
                                penanganan segala problematika yang dialami
                                mahasiswa PKU IPB.
                            </p>
                        </div>

                        {/* Gambar hanya muncul di tampilan mobile */}
                        <div className="block md:hidden my-2 w-full h-auto">
                            <img src="img/LineHp.png" alt="Line Image" />
                        </div>

                        {/* Gambar hanya muncul di tampilan desktop atau tablet ke atas */}
                        <div className="justify-center items-center mx-1 hidden md:flex ">
                            <img
                                src="img/Line.png"
                                alt="Line Image"
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Kanan */}
                        <div className="w-full md:w-1/2">
                            <h2 className="md:text-3xl text-2xl font-semibold text-white italic">
                                Peran Ormawa Eksekutif PKU IPB
                            </h2>
                            <p className="md:text-lg text-sm text-white pt-4 max-w-[549px] text-justify">
                                Perannya sangat signifikan dalam 4 Pilar
                                kehidupan kampus mahasiswa PKU, yaitu dengan
                                pergerakan, pengembangan, pelayanan, dan
                                pengabdian. Dengan demikian, organisasi ini
                                bukan hanya berfungsi sebagai penanganan
                                masalah, tetapi juga sebagai penggerak
                                pengembangan dan kesejahteraan mahasiswa PKU IPB
                                melalui berbagai kegiatan dan program yang
                                dijalankan.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Animasi teks saat scroll */}
            <div
                data-aos="fade-up"
                data-aos-duration="700"
                className="text-center"
            >
                <div
                    data-aos="fade-up"
                    data-aos-duration="600"
                    className="px-10 pt-10 pb-10 max-w-[1000px] mx-auto rounded-3xl"
                >
                    <h2 className="md:text-7xl text-5xl font-bold text-fontcolors font-rowdies">
                        Kabinet
                    </h2>
                    <h2 className="md:text-7xl text-5xl font-bold text-fontcolors font-rowdies">
                        Samudra Wirakarsa
                    </h2>
                    <div className="mt-4 max-md:hidden">
                        <div
                            data-aos="fade-up"
                            data-aos-duration="700"
                            className="bg-biru rounded-3xl text-align max-w-[150px] mx-auto"
                        >
                            <h1 className="font-montserrat md:text-2xl text-xl font-bold text-white p-2">
                                Samudra
                            </h1>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="700"
                            className="py-5 max-w-[1200px] mx-auto rounded-3xl"
                        >
                            <p className="md:text-2xl text-lg text-fontcolors font-montserrat ">
                                <span className="font-bold">Samudra</span>{" "}
                                melambangkan dimensi tak terhingga dari potensi
                                manusia, tak terbatas, mendalam, dan penuh
                                misteri. Setiap gelombang membawa kisah
                                perjuangan, setiap arus mengandung kekuatan
                                transformasi.
                            </p>
                        </div>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="800"
                            className="bg-biru rounded-3xl text-align max-w-[150px] mx-auto"
                        >
                            <h1 className="font-montserrat md:text-2xl text-xl font-bold text-white p-2">
                                Wirakarsa
                            </h1>
                        </div>
                        <div
                            data-aos="fade-right"
                            data-aos-duration="800"
                            className="py-5 max-w-[1200px] mx-auto rounded-3xl"
                        >
                            <p className="md:text-2xl text-lg text-fontcolors font-montserrat">
                                <span className="font-bold">Wirakarsa</span>{" "}
                                adalah spirit kami, semangat para pejuang yang
                                tidak sekadar bermimpi, namun menciptakan
                                realitas.
                            </p>
                        </div>

                        <div
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            className="md:py-5  max-w-[1200px] mx-auto rounded-3xl"
                        >
                            <p className="md:text-2xl text-lg text-fontcolors font-montserrat">
                                <span className="font-bold">
                                    Samudra Wirakarsa{" "}
                                </span>
                                menjadi navigator peradaban, mengarungi
                                tantangan dengan keberanian, mendobrak
                                batas-batas dengan kreativitas, dan membangun
                                jembatan menuju masa depan yang lebih cerah.
                                Samudra Wirakarsa adalah pernyataan bahwa
                                pemimpin sejati tidak menunggu perubahan,
                                melainkan menciptakannya. Kami adalah gelegar
                                inspirasi yang memecah kesunyian, cahaya yang
                                menembus kegelapan, dan harapan yang tak pernah
                                padam. Ini lah Samudra Wirakarsa, di mana setiap
                                pikiran adalah gelombang perubahan, setiap
                                gelombang adalah revolusi, dan setiap
                                derap adalah sejarah.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <Visi />
                <Misi />
            </div>
            {/* Konten lain */}
            <div className="p-3">
                <SakarsaDaily Proker={proker} />
            </div>

            <div className="flex flex-row justify-between items-end mt-8 md:px-16 px-4">
                <div
                    className="space-y-3"
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <h1 className="text-2xl md:text-5xl font-bold text-primary5 font-rowdies">
                        Informasi
                    </h1>
                    <h2 className="text-xl md:text-3xl text-primary4 font-semibold font-montserrat">
                        KM PKU IPB
                    </h2>
                </div>
                <div className="">
                    {" "}
                    <Link
                        href="/informasi"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        className="text-base md:text-xl font-semibold text-primary4 hover:text-primary5 transition-colors border-b-2 max-w-[280px] border-transparent hover:border-primary5 duration-300"
                    >
                        Lihat Semua Informasi →
                    </Link>
                </div>
            </div>
            <div className="py-8 md:py-12 -mt-4 bg-white md:px-16 px-4">
                <div className="flex flex-col lg:flex-row gap-8 font-montserrat">
                    {/* Main Featured Content */}
                    <div
                        className="lg:w-2/3"
                        data-aos="fade-up"
                        data-aos-duration="800"
                    >
                        <article className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow">
                            <div className="aspect-[16/9] overflow-hidden">
                                <img
                                    src={informasiUtama?.image_path || null}
                                    alt=""
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                                    <h1 className="text-2xl md:text-3xl font-bold text-primary5">
                                        {informasiUtama?.judul ||
                                            "Belum ada informasi tersedia"}
                                    </h1>
                                    <time className="text-sm text-gray-500 shrink-0">
                                        {informasiUtama?.created_at
                                            ? new Date(
                                                  informasiUtama.created_at
                                              ).toLocaleDateString("id-ID", {
                                                  year: "numeric",
                                                  month: "long",
                                                  day: "numeric",
                                              })
                                            : "-"}
                                    </time>
                                </div>
                                {/* <div className="space-y">
                                    <p className="text-2xl md:text-3xl font-semibold text-primary5">
                                        {informasiUtama?.deskripsi_singkat ||
                                            "-"}
                                    </p>
                                </div> */}

                                <div className="space-y-4">
                                    <p
                                        className={`whitespace-pre-line text-gray-600 leading-relaxed ${
                                            showFull ? "" : "line-clamp-5"
                                        }`}
                                    >
                                        {informasiUtama?.deskripsi ||
                                            "Deskripsi belum tersedia."}
                                    </p>

                                    {informasiUtama?.deskripsi &&
                                        informasiUtama.deskripsi.length >
                                            150 && (
                                            <button
                                                onClick={() =>
                                                    setShowFull(!showFull)
                                                }
                                                className="text-primary5 font-medium hover:underline"
                                            >
                                                {showFull
                                                    ? "Tampilkan lebih sedikit"
                                                    : "Baca selengkapnya"}
                                            </button>
                                        )}
                                    {informasiUtama?.narahubung && (
                                        <div className="bg-primary5/5 p-4 rounded-lg border border-primary5/20">
                                            <p className="text-sm font-medium text-primary5">
                                                Kontak Informasi:
                                                <span className="block mt-1 font-normal">
                                                    {informasiUtama.narahubung}
                                                </span>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </article>
                    </div>

                    {/* Secondary Cards */}
                    <div className="lg:w-1/3">
                        <div className="grid gap-6">
                            {informasi2.length > 0 ? (
                                informasi2.map((informasi, index) => (
                                    <Card4
                                        key={index}
                                        {...informasi}
                                        className="transform transition-transform hover:-translate-y-1"
                                    />
                                ))
                            ) : (
                                <div className="text-center p-6 bg-gray-50 rounded-xl">
                                    <p className="text-gray-500">
                                        Belum ada informasi tambahan
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer></Footer>
        </div>
    );
}
