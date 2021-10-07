<?php

namespace App\Http\Controllers;

use App\Models\Especialidad;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\ApiController;

class EspecialidadController extends ApiController
{
    private $rules  = [
        'nombre' => 'required',
        'etiquetas' => 'required',
        'descripcion' => 'required',
    ];
    public function index()
    {
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
        $especialidad->update($request->all());
        return $this->showOne($especialidad);
    }

    public function destroy(Especialidad $especialidad)
    {
        $especialidad->delete();

        return $this->showOne($especialidad);
    }
}
