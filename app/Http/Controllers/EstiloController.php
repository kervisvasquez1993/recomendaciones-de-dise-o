<?php

namespace App\Http\Controllers;

use App\Models\Estilo;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

class EstiloController extends ApiController
{
    private $rules  = [
        'nombre' => 'required',
        'etiquetas' => 'required',
        'descripcion' => 'required',
    ];
    public function index()
    {
        $estilos =   Estilo::all();
        return $this->showAll($estilos);
    }


    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
        $estilo = Estilo::create(
            $request->all(),
        );
        return $this->showOne($estilo, 201);
    }





    public function update(Request $request, Estilo $estilo)
    {
        $this->validate($request, $this->rules);
        $estilo->update($request->all());

        return $this->showOne($estilo);
    }


    public function destroy(Estilo $estilo)
    {
        $estilo->delete();
        return $this->showOne($estilo);
    }
}
