<?php

namespace App\Http\Controllers;

use App\Models\Especialidad;
use App\Models\Estilo;
use App\Models\Ilustracion;
use App\Models\Logotipo;
use App\Models\Resultado;
use Illuminate\Http\Request;

class ResultadoController extends Controller
{
    private $rules = [
        'especialidad_id' => 'required',
        'estilo_id' => 'required',
        'ilustracion_id' => 'required',
        'logotipo_id' => 'required',
        'colores' => 'required',


    ];
    public function index(Request $request)
    {
        $especialidad = $request->query('especialidad');
        $estilo = $request->query('estilo');
        if ($especialidad && $estilo) {
            return $this->showAll(Resultado::where('especialidad_id', $especialidad)->where('estilo_id', $estilo)->get());
        }


        $resultado = Resultado::all();
        return $this->showAll($resultado);
    }


    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
        /* validacion de llaves forey key */
        $especialida = Especialidad::where('id', $request->especialidad_id)->first();
        $estilo = Estilo::where('id', $request->estilo_id)->first();
        $ilustracion = Ilustracion::where('id', $request->ilustracion_id)->first();
        $logotipo_id = Logotipo::where('id', $request->logotipo_id)->first();


        if (!$especialida || !$estilo || !$ilustracion || !$logotipo_id) {

            return $this->successMessages("Llave forenea incorrecta", 404);
        }


        $resultado = Resultado::create(
            $request->all(),
        );
        return $this->showOne($resultado, 201);
    }

    public function update(Request $request, Resultado $resultado)
    {
        $this->validate($request, $this->rules);
        $especialida = Especialidad::where('id', $request->especialidad_id)->first();
        $estilo = Estilo::where('id', $request->estilo_id)->first();
        $ilustracion = Ilustracion::where('id', $request->ilustracion_id)->first();
        $logotipo_id = Logotipo::where('id', $request->logotipo_id)->first();


        if (!$especialida || !$estilo || !$ilustracion || !$logotipo_id) {

            return $this->successMessages("Llave forenea incorrecta", 404);
        }

        $resultado->update($request->all());
        return $this->showOne($resultado);
    }


    public function destroy(Resultado $resultado)
    {
        //
    }
}
