<?php

namespace App\Http\Controllers;

use App\Models\Ilustracion;
use Illuminate\Http\Request;

class IlustracionController extends Controller
{

    private $rules  = [
        'nombre' => 'required',
        'src' => 'required',
        'descripcion' => 'required'

    ];
    public function index()
    {
        $ilustracion = Ilustracion::all();
        return $this->showAll($ilustracion);
    }

    public function store(Request $request)
    {
        /* TODO:MEJORAR LA INSERCION DE INFORMACION */
        $this->validate($request, $this->rules);
        $ilustracion = new Ilustracion();
        $ilustracion->nombre = $request->nombre;
        $ilustracion->src = $request->file('src')->store('ilustraciones');
        $ilustracion->descripcion = $request->descripcion;
        $ilustracion->save();
        return $this->showOne($ilustracion, 201);
    }



    public function update(Request $request, Ilustracion $ilustracion)
    {
        $this->validate($request, $this->rules);
        $ilustracion->nombre = $request->nombre;
        $ilustracion->src = $request->file('src')->store('ilustraciones');
        $ilustracion->descripcion = $request->descripcion;
        $ilustracion->update();
        return $this->showOne($ilustracion, 201);
    }


    public function destroy(Ilustracion $ilustracion)
    {
        $ilustracion->delete();
        return $this->showOne($ilustracion);
    }
}
