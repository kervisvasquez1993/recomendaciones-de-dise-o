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
        'especialidades_id' => 'required',
        'estilos_id' => 'required',
        'ilustracion_id' => 'required',
        'logotipos_id' => 'required',
        'colores' => 'required',
        'descripcion' => 'required'

    ];
    public function index()
    {
        //
    }


    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
        /* validacion de llaves forey key */
        $especialida = Especialidad::where('id', $request->especialidades_id)->first();
        $estilo = Estilo::where('id', $request->estilos_id)->first();
        $ilustracion = Ilustracion::where('id', $request->ilustracion_id)->first();
        $logotipos_id = Logotipo::where('id', $request->logotipos_id)->first();


        if (!$especialida || !$estilo || !$ilustracion || !$logotipos_id) {

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
        $especialida = Especialidad::where('id', $request->especialidades_id)->first();
        $estilo = Estilo::where('id', $request->estilos_id)->first();
        $ilustracion = Ilustracion::where('id', $request->ilustracion_id)->first();
        $logotipos_id = Logotipo::where('id', $request->logotipos_id)->first();


        if (!$especialida || !$estilo || !$ilustracion || !$logotipos_id) {

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
