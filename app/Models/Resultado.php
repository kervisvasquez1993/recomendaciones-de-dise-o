<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultado extends Model
{
    use HasFactory;
    protected $table = 'resultados';
    protected $fillable = [
        'especialidades_id',
        'estilos_id',
        'ilustracion_id',
        'logotipos_id',
        'colores',
        'descripcion'

    ];
   /*  public function especialidades(){
        return $this->belongsTo(Especialidad::class, 'especialidades_id');
    }

    public function estilos()
    {
        return $this->belongsTo(Estilo::class, 'estilos_id');
    }

    public function ilustracion(){
        return $this->belongsTo(Ilustracion::class, 'ilustracion_id');
    }

    public function logotipos(){
        return $this->belongsTo(Logotipo::class, 'logotipos_id');
    } */
}
