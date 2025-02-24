<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class AdminHaidarSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('admins')->insert([
            [
                'nama' => 'Muhammad Haidar',
                'nim' => 'M0403241038',
                'div' => 'Master',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Kyla Anggrahita Wahyudin',
                'nim' => 'I3401241148',
                'div' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Azarah Alri',
                'nim' => 'F2401241017',
                'div' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Delvin Adithya',
                'nim' => 'M0403241001',
                'div' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Okta Fitra Vidian',
                'nim' => 'F1401241090',
                'div' => 'Departemen Sosial dan Lingkungan Hidup',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Fitri Aulia Nurinsani',
                'nim' => 'C5401241075',
                'div' => 'Departemen Sosial dan Lingkungan Hidup',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Fahri Rahma Akbarsyah',
                'nim' => 'H3401241117',
                'div' => 'Departemen Sosial dan Lingkungan Hidup',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Elegi Gita Manuella',
                'nim' => 'I3401241076',
                'div' => 'Biro Internal',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Danya Christabel Novelina Silalahi',
                'nim' => 'F2401241025',
                'div' => 'Biro Internal',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Naisya Sarwa Nafisah',
                'nim' => 'M0404241053',
                'div' => 'Biro Internal',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Moura Dwitama',
                'nim' => 'M0404241023',
                'div' => 'Departemen Seni dan Budaya',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Asyaima Putri Maulani Rasyidin',
                'nim' => 'D3401241017',
                'div' => 'Departemen Seni dan Budaya',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Naura Salsabila Putri Ramadhani',
                'nim' => 'M0404241032',
                'div' => 'Departemen Seni dan Budaya',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Zidny Ilman Nafi',
                'nim' => 'M0403241068',
                'div' => 'Departemen Akademik Prestasi',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Muthia Rahma',
                'nim' => 'G0401241007',
                'div' => 'Departemen Akademik Prestasi',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Lara Tria Novita',
                'nim' => 'M0401241122',
                'div' => 'Departemen Akademik Prestasi',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Pascal Arya Nugroho',
                'nim' => 'M0401241078',
                'div' => 'Biro Media Branding',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Salma Rana Mudrikah',
                'nim' => 'A4401241060',
                'div' => 'Biro Media Branding',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Kezia Oktaviani',
                'nim' => 'H2401241033',
                'div' => 'Biro Media Branding',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Radit Anggara',
                'nim' => 'I3401241095',
                'div' => 'Departemen Pengembangan Sumberdaya Mahasiswa',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Lita Thalisa Tiara',
                'nim' => 'C2401241069',
                'div' => 'Departemen Pengembangan Sumberdaya Mahasiswa',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Shaqylla Iqnasia Putri Nugraha',
                'nim' => 'M0404241047',
                'div' => 'Departemen Pengembangan Sumberdaya Mahasiswa',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Muhammad Reza. A',
                'nim' => 'A2401241179',
                'div' => 'Biro Kolaborasi dan Kemitraan',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Yusril Muhammad Firdaus',
                'nim' => 'I3401241010',
                'div' => 'Biro Kolaborasi dan Kemitraan',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Gilan Eka El Ginar',
                'nim' => 'I3401241145',
                'div' => 'Biro Kolaborasi dan Kemitraan',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Joseph Farrel',
                'nim' => 'G7401241021',
                'div' => 'Departemen Kajian dan Aksi Strategis',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Salmaa Maisuun',
                'nim' => 'C5401241068',
                'div' => 'Departemen Kajian dan Aksi Strategis',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Miftah Rizki Abni Husyairi',
                'nim' => 'M0401241088',
                'div' => 'Departemen Kajian dan Aksi Strategis',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Rezki Bima Prabaswara',
                'nim' => 'K1401241015',
                'div' => 'Departemen Ekonomi Kreatif',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Maleeka Ayesha Nugroho',
                'nim' => 'H4401241010',
                'div' => 'Departemen Ekonomi Kreatif',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Muhammad Syarief Hidayatullah',
                'nim' => 'K1401241181',
                'div' => 'Departemen Ekonomi Kreatif',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Khalifa Alfaiz Wicaksono',
                'nim' => 'C5401241030',
                'div' => 'Departemen Pemuda dan Olahraga',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Lysandra Jasmine Latifah Hendra',
                'nim' => 'F1401241095',
                'div' => 'Departemen Pemuda dan Olahraga',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Anes Sulistiawati',
                'nim' => 'C2401241017',
                'div' => 'Departemen Pemuda dan Olahraga',
                'password' => Hash::make('haidarganteng')
            ],
            
            [
                'nama' => 'Alfath Asqar Tsani',
                'nim' => 'M0403241019',
                'div' => 'Biro Riset Pengembangan',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Azzahra Kholisa Aura',
                'nim' => 'I2401241063',
                'div' => 'Biro Riset Pengembangan',
                'password' => Hash::make('haidarganteng')
            ],[
                'nama' => 'Bradja Putra Jajuli',
                'nim' => 'M0401241004',
                'div' => 'Biro Riset Pengembangan',
                'password' => Hash::make('haidarganteng')
            ],
        ]);
    }
}
