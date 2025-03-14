<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Penjualan extends Model
{
    use HasFactory;
    protected $table = 'penjualans';
    protected $fillable = ['nama', 'nim', 'fakultas', 'departemen', 'email', 'no_wa', 'produk', 'image_path', 'status','status_diterima'];
    protected $casts = [
        'produk' => 'array'
    ];
}
