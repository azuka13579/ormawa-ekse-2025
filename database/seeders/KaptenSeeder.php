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
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 1,
                'nama' => 'Azarah Alri',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 1,
                'nama' => 'Delvin Adithya',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 2,
                'nama' => 'Okta Fitra Vidian',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 2,
                'nama' => 'Fitri Aulia Nurinsani',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 2,
                'nama' => 'Fahri Rahma Akbarsyah',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 3,
                'nama' => 'Elegi Gita Manuella',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 3,
                'nama' => 'Danya Christabel Novelina Silalahi',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 3,
                'nama' => 'Naisya Sarwa Nafisah',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 4,
                'nama' => 'Moura Dwitama',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 4,
                'nama' => 'Asyaima Putri Maulani Rasyidin',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 4,
                'nama' => 'Naura Salsabila Putri Ramadhani',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 5,
                'nama' => 'Zidny Ilman Nafi',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 5,
                'nama' => 'Muthia Rahma',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 5,
                'nama' => 'Lara Tria Novita',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 6,
                'nama' => 'Pascal Arya Nugroho',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 6,
                'nama' => 'Salma Rana Mudrikah',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 6,
                'nama' => 'Kezia Oktaviani',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 7,
                'nama' => 'Radit Anggara',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 7,
                'nama' => 'Lita Thalisa Tiara',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 7,
                'nama' => 'Shaqylla Iqnasia Putri Nugraha',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 8,
                'nama' => 'Muhammad Reza. A',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 8,
                'nama' => 'Yusril Muhammad Firdaus',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 8,
                'nama' => 'Gilan Eka El Ginar',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 9,
                'nama' => 'Joseph Farrel',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 9,
                'nama' => 'Salmaa Maisuun',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 9,
                'nama' => 'Miftah Rizki Abni Husyairi',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 10,
                'nama' => 'Rezki Bima Prabaswara',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 10,
                'nama' => 'Maleeka Ayesha Nugroho',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 10,
                'nama' => 'Muhammad Syarief Hidayatullah',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 11,
                'nama' => 'Khalifa Alfaiz Wicaksono',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 11,
                'nama' => 'Lysandra Jasmine Latifah Hendra',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 11,
                'nama' => 'Anes Sulistiawati',
                'image_path' => 'storage\images\img.jpeg'
            ],
            
            [
                'div_id' => 12,
                'nama' => 'Alfath Asqar Tsani',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 12,
                'nama' => 'Azzahra Kholisa Aura',
                'image_path' => 'storage\images\img.jpeg'
            ],[
                'div_id' => 12,
                'nama' => 'Bradja Putra Jajuli',
                'image_path' => 'storage\images\img.jpeg'
            ],
        ]);
    }
}
