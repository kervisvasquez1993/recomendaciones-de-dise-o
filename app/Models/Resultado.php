<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultado extends Model
{
    use HasFactory;
    protected $table = 'resultados';
    protected $fillable = [
        'especialidad_id',
        'estilo_id',
        'ilustracion_id',
        'logotipo_id',
        'colores',
        'descripcion',

    ];
    protected $casts = [
        'colores' => 'array',
    ];

    public function especialidad()
    {
        return $this->belongsTo(Especialidad::class, 'especialidad_id');
    }

    public function estilo()
    {
        return $this->belongsTo(Estilo::class, 'estilo_id');
    }

    public function ilustracion()
    {
        return $this->belongsTo(Ilustracion::class, 'ilustracion_id');
    }

    public function logotipo()
    {
        return $this->belongsTo(Logotipo::class, 'logotipo_id');
    }

    public function fuentes()
    {
        return $this->belongsToMany(Fuente::class, 'fuente_resultados');
    }
}
