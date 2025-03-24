<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Proker extends Model
{
    use HasFactory;
    protected $table = 'prokers';
    protected $fillable = ['div_id','namasingkatan', 'nama', 'start', 'end', 'image_path', 'deskripsi', 'tujuan'];
}
