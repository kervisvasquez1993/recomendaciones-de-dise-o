<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class UserResultadoResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'resultado_id' => $this->resultado_id,
            'logo_empresa' => $this->logo_empresa,
            'resultado' => new ResultadoResource($this->resultado),
            'nombre_empresa' => $this->nombre_empresa,
        ];
    }
}
