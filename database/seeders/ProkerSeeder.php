<?php

namespace Database\Seeders;

use App\Models\Proker;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ProkerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Proker::factory()->count(4)->create();
    }
}
