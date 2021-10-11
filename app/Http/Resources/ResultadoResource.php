<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ResultadoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'colores' => $this->colores,
            'fuentes' => $this->fuentes,
            'descripcion' => $this->descripcion,
            'especialidad_id' => $this->especialidad_id,
            'especialidad' => $this->especialidad,
            'estilo_id' => $this->estilo_id,
            'estilo' => $this->estilo,
            'ilustracion_id' => $this->ilustracion_id,
            'ilustracion' => $this->ilustracion,
            'logotipo_id' => $this->logotipo_id,
            'logotipo' => $this->logotipo,
        ];
    }
}
