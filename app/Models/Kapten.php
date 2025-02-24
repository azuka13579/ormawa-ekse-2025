<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Kapten extends Model
{
    use HasFactory;
    protected $table = 'kaptens';
    protected $fillable = ['div_id', 'nama', 'image_path'];

    public function relation(): BelongsTo
    {
        return $this->belongsTo(Div::class, 'id');
    }
}
