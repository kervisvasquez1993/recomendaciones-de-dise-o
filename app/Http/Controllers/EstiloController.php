<?php

namespace App\Http\Controllers;

use App\Models\Estilo;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;
use App\Models\Especialidad;
use App\Models\Resultado;

class EstiloController extends Controller
{
    private $rules  = [
        'nombre' => 'required',
        'etiqueta' => 'required',
        'descripcion' => 'required',
    ];
    public function index(Request $request)
    {
        $especialidad = $request->query('especialidad');
        if ($especialidad) {
            $resultado = Resultado::where('especialidad_id', $especialidad)->with('estilos')->get()->pluck('estilos')->unique("nombre");
            return $this->showAll($resultado);
        }


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
