<?php

namespace App\Http\Controllers;

use App\Models\Ilustracion;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class IlustracionController extends Controller
{

    private $rules = [
        'nombre' => 'required',
        'src' => 'required',
        'descripcion' => 'required',

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
        $ilustracion->src =  Storage::disk('s3')->put("ilustraciones", $request->file('src'), 'public');
        
        $ilustracion->descripcion = $request->descripcion;
        $ilustracion->save();
        return $this->showOne($ilustracion, 201);
    }

    public function show(Ilustracion $ilustracion)
    {
        return $this->showOne($ilustracion);
    }

    public function update(Request $request, Ilustracion $ilustracion)
    {
        $this->validate($request, $this->rules);
        $ilustracion->nombre = $request->nombre;
        $ilustracion->src = Storage::disk('s3')->put("ilustraciones", $request->file('src'), 'public');
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
