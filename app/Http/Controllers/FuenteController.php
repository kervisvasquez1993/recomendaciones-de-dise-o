<?php

namespace App\Http\Controllers;

use App\Models\Fuente;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class FuenteController extends Controller
{
    private $rules = [
        'nombre' => 'required',
        'src' => 'required | file',

    ];

    public function index()
    {
        $fuente = Fuente::all();
        return $this->showAll($fuente);
    }

    public function store(Request $request)
    {
        /* TODO:MEJORAR LA INSERCION DE INFORMACION */
        $this->validate($request, $this->rules);
        $fuente = new Fuente();
        $fuente->nombre = $request->nombre;
        // $fuente->src = $request->file('src')->store('fuentes', 's3');
        $file = $request->file('src');
        $fuente->src  = Storage::disk('s3')->put("fuentes", $file, 'public');
        // $pivot_file->url = Storage::disk('s3')->put("negociacion_archivos",  $file, 'public');
        $fuente->save();
        return $this->showOne($fuente, 201);
    }

    public function show(Fuente $fuente)
    {
        return $this->showOne($fuente);
    }

    public function update(Request $request, Fuente $fuente)
    {
        $this->validate($request, $this->rules);
        $fuente->nombre = $request->nombre;
        $file = $request->file('src');
        $fuente->src = Storage::disk('s3')->put("fuentes", $file, 'public');
        $fuente->update();
        return $this->showOne($fuente, 201);
    }

    public function destroy(Fuente $fuente)
    {
        $fuente->delete();
        return $this->showOne($fuente);
    }
}
