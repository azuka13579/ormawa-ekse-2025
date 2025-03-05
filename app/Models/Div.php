<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Div extends Model
{
    use HasFactory;

    protected $table = 'divs';
    protected $fillable = ['divisi'];

    public function prokers(): HasMany
    {
        return $this->hasMany(Proker::class);
    }
}
