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
                'nim' => 'adkesy1',
                'div' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'password' => Hash::make('sayanganak')
            ],[
                'nama' => 'Azarah Alri',
                'nim' => 'adkesy2',
                'div' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'password' => Hash::make('sekremeong')
            ],[
                'nama' => 'Delvin Adithya',
                'nim' => 'adkesy3',
                'div' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
                'password' => Hash::make('bendesigma')
            ],
            
            [
                'nama' => 'Okta Fitra Vidian',
                'nim' => 'slhkapten1',
                'div' => 'Departemen Sosial dan Lingkungan Hidup',
                'password' => Hash::make('solihun')
            ],[
                'nama' => 'Fitri Aulia Nurinsani',
                'nim' => 'slhkapten2',
                'div' => 'Departemen Sosial dan Lingkungan Hidup',
                'password' => Hash::make('solihun')
            ],[
                'nama' => 'Fahri Rahma Akbarsyah',
                'nim' => 'slhkapten3',
                'div' => 'Departemen Sosial dan Lingkungan Hidup',
                'password' => Hash::make('solihun')
            ],
            
            [
                'nama' => 'Daffa Naufal F',
                'nim' => 'Birbat',
                'div' => 'Biro Internal',
                'password' => Hash::make('Birosahabat')
            ],[
                'nama' => 'Micko Fahraezi',
                'nim' => 'Samudracintaa4',
                'div' => 'Biro Internal',
                'password' => Hash::make('Sayangikamusedalamsamudraa')
            ],[
                'nama' => 'Naisya Sarwa Nafisah',
                'nim' => 'Pinus',
                'div' => 'Biro Internal',
                'password' => Hash::make('PinusianGen4')
            ],
            
            [
                'nama' => 'Moura Dwitama',
                'nim' => 'ibukosbucend',
                'div' => 'Departemen Seni dan Budaya',
                'password' => Hash::make('budakcenibudaya')
            ],[
                'nama' => 'Ahmad Faizullah Kianafa Rizwan',
                'nim' => 'sssenbuddd',
                'div' => 'Departemen Seni dan Budaya',
                'password' => Hash::make('ppinniped')
            ],
            [
                'nama' => 'Zidny Ilman Nafi',
                'nim' => 'akprezzz',
                'div' => 'Departemen Akademik Prestasi',
                'password' => Hash::make('otwmapres')
            ],[
                'nama' => 'Daffa Nasywan Islamy',
                'nim' => 'daffawn',
                'div' => 'Departemen Akademik Prestasi',
                'password' => Hash::make('1sampai77')
            ],[
                'nama' => 'Annisa Marwah',
                'nim' => 'akpraise',
                'div' => 'Departemen Akademik Prestasi',
                'password' => Hash::make('calonmaprezzzz')
            ],
            
            [
                'nama' => 'Pascal Arya Nugroho',
                'nim' => 'adminekse',
                'div' => 'Biro Media Branding',
                'password' => Hash::make('nita123')
            ],[
                'nama' => 'Salma Rana Mudrikah',
                'nim' => 'salmasekre',
                'div' => 'Biro Media Branding',
                'password' => Hash::make('hijauhijaufaperta')
            ],[
                'nama' => 'Kezia Oktaviani',
                'nim' => 'ecakezia',
                'div' => 'Biro Media Branding',
                'password' => Hash::make('menedahsyat')
            ],
            
            [
                'nama' => 'Admin Departemen Pengembangan Sumberdaya Mahasiswa',
                'nim' => 'psdm_ormawaeksepku',
                'div' => 'Departemen Pengembangan Sumberdaya Mahasiswa',
                'password' => Hash::make('psdmanjay123')
            ],[
                'nama' => 'Lita Thalisa Tiara',
                'nim' => 'tiaralita',
                'div' => 'Departemen Pengembangan Sumberdaya Mahasiswa',
                'password' => Hash::make('Tata1011')
            ],[
                'nama' => 'COPM PSDM',
                'nim' => 'medcompsdm',
                'div' => 'Departemen Pengembangan Sumberdaya Mahasiswa',
                'password' => Hash::make('medcom123')
            ],
            
            [
                'nama' => 'Admin Biro Kolaborasi dan Kemitraan',
                'nim' => 'calling',
                'div' => 'Biro Kolaborasi dan Kemitraan',
                'password' => Hash::make('justcalling')
            ],
            
            [
                'nama' => 'Admin Departemen Kajian Aksi Strategis',
                'nim' => 'kastrateksekutifpku',
                'div' => 'Departemen Kajian dan Aksi Strategis',
                'password' => Hash::make('neo_otorianitarisme')
            ],
            [
                'nama' => 'Admin Departemen Ekraf',
                'nim' => 'Ekrafeksepku',
                'div' => 'Departemen Ekonomi Kreatif',
                'password' => Hash::make('2025cuancuancuan')
            ],
            
            [
                'nama' => 'Alfath Asqar Tsani',
                'nim' => 'alfathganteng',
                'div' => 'Biro Riset Pengembangan',
                'password' => Hash::make('salma3012')
            ],[
                'nama' => 'Azzahra Kholisa Aura',
                'nim' => 'aura_aneh',
                'div' => 'Biro Riset Pengembangan',
                'password' => Hash::make('aura1234')
            ],[
                'nama' => 'Bradja Putra Jajuli',
                'nim' => 'bradja_aja',
                'div' => 'Biro Riset Pengembangan',
                'password' => Hash::make('bradja123')
            ],
        ]);
    }
}
