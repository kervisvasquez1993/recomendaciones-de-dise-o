<?php

namespace App\Http\Controllers;

use App\Models\Fuente;
use Illuminate\Http\Request;


class FuenteController extends Controller
{
    private $rules  = [
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
        $fuente->src = $request->file('src')->store('fuentes');
        $fuente->save();
        return $this->showOne($fuente, 201);
    }

    public function update(Request $request, Fuente $fuente)
    {
        $this->validate($request, $this->rules);
        $fuente->nombre = $request->nombre;
        $fuente->src = $request->file('src')->store('fuentes');
        $fuente->update();
        return $this->showOne($fuente, 201);
    }


    public function destroy(Fuente $fuente)
    {
        $fuente->delete();
        return $this->showOne($fuente);
    }
}
