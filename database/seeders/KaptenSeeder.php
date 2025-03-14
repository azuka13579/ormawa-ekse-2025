<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KaptenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('kaptens')->insert([
            [
                'div_id' => 1,
                'nama' => 'Kyla Anggrahita Wahyudin',
                'image_path' => 'images/kapten/adkesmah1.jpeg'
            ],[
                'div_id' => 1,
                'nama' => 'Azarah Alri',
                'image_path' => 'images/kapten/adkesmah2.jpeg'
            ],[
                'div_id' => 1,
                'nama' => 'Delvin Adithya',
                'image_path' => 'images/kapten/adkesmah3.jpeg'
            ],
            
            [
                'div_id' => 2,
                'nama' => 'Okta Fitra Vidian',
                'image_path' => 'images/kapten/slh1.jpeg'
            ],[
                'div_id' => 2,
                'nama' => 'Fitri Aulia Nurinsani',
                'image_path' => 'images/kapten/slh2.jpeg'
            ],[
                'div_id' => 2,
                'nama' => 'Fahri Rahma Akbarsyah',
                'image_path' => 'images/kapten/slh3.jpeg'
            ],
            
            [
                'div_id' => 3,
                'nama' => 'Elegi Gita Manuella',
                'image_path' => 'images/kapten/internal1.jpeg'
            ],[
                'div_id' => 3,
                'nama' => 'Danya Christabel Novelina Silalahi',
                'image_path' => 'images/kapten/internal2.jpeg'
            ],[
                'div_id' => 3,
                'nama' => 'Naisya Sarwa Nafisah',
                'image_path' => 'images/kapten/internal3.jpeg'
            ],
            
            [
                'div_id' => 4,
                'nama' => 'Moura Dwitama',
                'image_path' => 'images/kapten/senbud1.jpeg'
            ],[
                'div_id' => 4,
                'nama' => 'Asyaima Putri Maulani Rasyidin',
                'image_path' => 'images/kapten/senbud2.jpeg'
            ],[
                'div_id' => 4,
                'nama' => 'Naura Salsabila Putri Ramadhani',
                'image_path' => 'images/kapten/senbud3.jpeg'
            ],
            
            [
                'div_id' => 5,
                'nama' => 'Zidny Ilman Nafi',
                'image_path' => 'images/kapten/akpres1.jpeg'
            ],[
                'div_id' => 5,
                'nama' => 'Muthia Rahma',
                'image_path' => 'images/kapten/akpres2.jpeg'
            ],[
                'div_id' => 5,
                'nama' => 'Lara Tria Novita',
                'image_path' => 'images/kapten/akpres3.jpeg'
            ],
            
            [
                'div_id' => 6,
                'nama' => 'Pascal Arya Nugroho',
                'image_path' => 'images/kapten/medbrand1.jpeg'
            ],[
                'div_id' => 6,
                'nama' => 'Salma Rana Mudrikah',
                'image_path' => 'images/kapten/medbrand2.jpeg'
            ],[
                'div_id' => 6,
                'nama' => 'Kezia Oktaviani',
                'image_path' => 'images/kapten/medbrand3.jpeg'
            ],
            
            [
                'div_id' => 7,
                'nama' => 'Radit Anggara',
                'image_path' => 'images/kapten/psdm1.jpeg'
            ],[
                'div_id' => 7,
                'nama' => 'Lita Thalisa Tiara',
                'image_path' => 'images/kapten/psdm2.jpeg'
            ],[
                'div_id' => 7,
                'nama' => 'Shaqylla Iqnasia Putri Nugraha',
                'image_path' => 'images/kapten/psdm3.jpeg'
            ],
            
            [
                'div_id' => 8,
                'nama' => 'Muhammad Reza. A',
                'image_path' => 'images/kapten/komit1.jpeg'
            ],[
                'div_id' => 8,
                'nama' => 'Yusril Muhammad Firdaus',
                'image_path' => 'images/kapten/komit2.jpeg'
            ],[
                'div_id' => 8,
                'nama' => 'Gilan Eka El Ginar',
                'image_path' => 'images/kapten/komit3.jpeg'
            ],
            
            [
                'div_id' => 9,
                'nama' => 'Joseph Farrel',
                'image_path' => 'images/kapten/kastrat1.jpeg'
            ],[
                'div_id' => 9,
                'nama' => 'Salmaa Maisuun',
                'image_path' => 'images/kapten/kastrat2.jpeg'
            ],[
                'div_id' => 9,
                'nama' => 'Miftah Rizki Abni Husyairi',
                'image_path' => 'images/kapten/kastrat3.jpeg'
            ],
            
            [
                'div_id' => 10,
                'nama' => 'Rezki Bima Prabaswara',
                'image_path' => 'images/kapkomit.jpeg'
            ],[
                'div_id' => 10,
                'nama' => 'Maleeka Ayesha Nugroho',
                'image_path' => 'images/kapten/ekraf2.jpeg'
            ],[
                'div_id' => 10,
                'nama' => 'Muhammad Syarief Hidayatullah',
                'image_path' => 'images/kapten/ekraf3.jpeg'
            ],
            
            [
                'div_id' => 11,
                'nama' => 'Khalifa Alfaiz Wicaksono',
                'image_path' => 'images/kapten/peraga1.jpeg'
            ],[
                'div_id' => 11,
                'nama' => 'Lysandra Jasmine Latifah Hendra',
                'image_path' => 'images/kapten/peraga2.jpeg'
            ],[
                'div_id' => 11,
                'nama' => 'Anes Sulistiawati',
                'image_path' => 'images/kapten/peraga3.jpeg'
            ],
            
            [
                'div_id' => 12,
                'nama' => 'Alfath Asqar Tsani',
                'image_path' => 'images/kapten/risbang1.jpeg'
            ],[
                'div_id' => 12,
                'nama' => 'Azzahra Kholisa Aura',
                'image_path' => 'images/kapten/risbang2.jpeg'
            ],[
                'div_id' => 12,
                'nama' => 'Bradja Putra Jajuli',
                'image_path' => 'images/kapten/risbang3.jpeg'
            ],
        ]);
    }
}
