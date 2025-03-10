<?php

namespace Database\Seeders;

use App\Models\Div;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DivisiSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('divs')->insert([
            [
                'divisi' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',
                'image_path' => 'images/logo/adkesmah.png'
            ],
            [
                'divisi' => 'Departemen Sosial dan Lingkungan Hidup',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',
                'image_path' => 'images/logo/slh.png'
            ],
            [
                'divisi' => 'Biro Internal',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',
                'image_path' => 'images/logo/internal.png'
            ],
            [
                'divisi' => 'Departemen Seni dan Budaya',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/senbud.png'
            ],
            [
                'divisi' => 'Departemen Akademik Prestasi',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/akpres.png'
            ],
            [
                'divisi' => 'Biro Media Branding',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/medbrand.png'
            ],
            [
                'divisi' => 'Departemen Pengembangan Sumber Daya Mahasiswa',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/psdm.png'
            ],
            [
                'divisi' => 'Biro Kolaborasi dan Kemitraan',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/komit.png'
            ],
            [
                'divisi' => 'Departemen Kajian dan Aksi Strategis',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/kastrat.png'
            ],
            [
                'divisi' => 'Departemen Ekonomi Kreatif',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/ekraf.png'
            ],
            [
                'divisi' => 'Departemen Pemuda dan Olahraga',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/peraga.png'
            ],
            [
                'divisi' => 'Biro Riset Pengembangan',
                'deskripsi' => 'Ormawa Eksekutif PKU IPB merupakan organisasi kemahasiswaan di lingkup Pendidikan Kompetensi Umum yang dikhususkan untuk mahasiswa tingkat PKU IPB. Fungsinya melibatkan pemberian kesejahteraan penanganan segala problematika yang dialami mahasiswa PKU IPB.',

                'image_path' => 'images/logo/risbang.png'
            ]
            ]);
    }
}
