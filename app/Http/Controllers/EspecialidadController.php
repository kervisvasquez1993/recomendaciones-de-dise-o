<?php

namespace App\Http\Controllers;

use App\Models\Especialidad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;
use App\Models\Resultado;

class EspecialidadController extends Controller
{
    private $rules  = [
        'nombre' => 'required',
        'etiquetas' => 'required',
        'descripcion' => 'required',
    ];
    public function index(Request $request)
    {
        $resultado = $request->con_reultados;
        if($resultado)
        {
            $resultado = Resultado::with('especialidades')->get()->pluck('especialidades')->unique()->values();
            return $this->showAll($resultado);
        }
        $especialidad = Especialidad::all();
        return $this->showAll($especialidad);
    }


    public function store(Request $request)
    {

        $this->validate($request, $this->rules);
        $especialidad = Especialidad::create(
            $request->all(),
        );
        return $this->showOne($especialidad, 201);
    }


    public function update(Request $request, Especialidad $especialidad)
    {
        $this->validate($request, $this->rules);
        $especialidad->update($request->all());
        return $this->showOne($especialidad);
    }

    public function destroy(Especialidad $especialidad)
    {
        $especialidad->delete();

        return $this->showOne($especialidad);
    }
}