<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ilustracion extends Model
{
    use HasFactory;
    protected $table = 'ilustracions';
    protected $fillable = [
        'nombre',
        'src',
        'descripcion'

    ];
}
