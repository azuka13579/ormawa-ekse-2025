<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'productsamudra'; // Menentukan tabel
    protected $fillable = ['name', 'description', 'size', 'price', 'stock', 'image'];
}
