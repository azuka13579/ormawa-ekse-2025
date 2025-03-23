<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Models\AdminSamudraStore;

class AdminSamudraStoreSeeder extends Seeder
{
    public function run()
    {
        $adminSamudra = ([
            [
            'name' => 'Rezki Bima Prabaswara',
            'email' => 'admin1@samudrastore.com',
            'password' => Hash::make('adminekrafss1')
            ],
            [
            'name' => 'Gina Melanie Taufik',
            'email' => 'admin2@samudrastore.com',
            'password' => Hash::make('adminekrafss2')
            ],
            [
            'name' => 'Muhammad Andika Laksono',
            'email' => 'admin3@samudrastore.com',
            'password' => Hash::make('adminekrafss3')
            ]])
    
    ;
    foreach ($adminSamudra as $data) {
        AdminSamudraStore::create($data);
    }
    }
}
