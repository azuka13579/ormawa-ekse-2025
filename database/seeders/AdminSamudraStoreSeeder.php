<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\AdminSamudraStore;

class AdminSamudraStoreSeeder extends Seeder
{
    public function run()
    {
        AdminSamudraStore::create([
            'name' => 'Admin Samudra',
            'email' => 'admin@samudrastore.com',
            'password' => Hash::make('password123')
        ]);
    }
}
