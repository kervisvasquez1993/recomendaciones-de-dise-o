<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Logotipo extends Model
{
    use HasFactory;
    protected $table = 'logotipos';
    protected $fillable = [
        'nombre',
        'descripcion'

    ];
}
