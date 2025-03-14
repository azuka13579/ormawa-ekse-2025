<?php

namespace Database\Seeders;

use App\Models\Anggota;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AnggotaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // DB::table('anggota')->insert([
        //     [
        //         'div_id' => 1,
        //         'image_path' => 'storage\images\img.jpeg'
        //     ]
        // ]);
        $dept = ['adkesmah','slh','internal','senbud', 'akpres', 'medbrand', 'psdm', 'komit', 'kastrat', 'ekraf', 'peraga', 'risbang'];

        for ($i=1; $i < 13; $i++) { 
            for ($j=1; $j < 16; $j++) { 
                Anggota::factory()->create([
                    'div_id' => $i,
                    'image_path' => 'images/anggota/' . $dept[$i - 1] .'/' .$j .'.jpeg'
                ]);
            }
        }
    }
}
