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
                'divisi' => 'Departemen Advokasi Kesejahteraan Mahasiswa'
            ],
            [
                'divisi' => 'Departemen Sosial dan Lingkungan Hidup'
            ],
            [
                'divisi' => 'Biro Internal'
            ],
            [
                'divisi' => 'Departemen Seni dan Budaya'
            ],
            [
                'divisi' => 'Departemen Akademik Prestasi'
            ],
            [
                'divisi' => 'Biro Media Branding'
            ],
            [
                'divisi' => 'Departemen Pengembangan Sumber Daya Mahasiswa'
            ],
            [
                'divisi' => 'Biro Kolaborasi dan Kemitraan'
            ],
            [
                'divisi' => 'Departemen Kajian dan Aksi Strategis'
            ],
            [
                'divisi' => 'Departemen Ekonomi Kreatif'
            ],
            [
                'divisi' => 'Departemen Pemuda dan Olahraga'
            ],
            [
                'divisi' => 'Biro Riset Pengembangan'
            ]
            ]);
    }
}
