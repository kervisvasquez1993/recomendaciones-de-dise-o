<?php

namespace App\Models;

use App\Models\User;
use App\Models\Resultado;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class UserResultado extends Model
{
    use HasFactory;
    protected $table = 'user_resultados';
    protected $casts = [
        'fuentes' => 'array'
    ];
    

    public function resultado(){
        return $this->belongsTo(Resultado::class, 'resultado_id');
    }

    public function user(){ 
        return $this->belongsTo(User::class, 'user_id');
    }
}
