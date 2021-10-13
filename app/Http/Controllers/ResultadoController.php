<?php

namespace App\Http\Controllers;

use App\Http\Resources\ResultadoResource;
use App\Http\Resources\UserResultadoResource;
use App\Models\Especialidad;
use App\Models\Estilo;
use App\Models\Ilustracion;
use App\Models\Logotipo;
use App\Models\Resultado;
use App\Models\UserResultado;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ResultadoController extends Controller
{
    private $rules = [
        'especialidad_id' => 'required',
        'estilo_id' => 'required',
        'ilustracion_id' => 'required',
        'logotipo_id' => 'required',
        'colores' => 'required',
        'descripcion' => 'required',
        'fuentes' => 'required|array|min:1'
    ];

    private function fuentes($fuentes, $resultado)
    {
        foreach ($fuentes as $e) {
            DB::table('fuente_resultados')->insert([
                'resultado_id' => $resultado->id,
                'fuente_id' => $e,
                'created_at' => Carbon::now(),
            ]);
        }
    }

    public function index(Request $request)
    {
        $especialidad = $request->query('especialidad');
        $estilo = $request->query('estilo');

        if ($especialidad && $estilo) {
            $resultados = Resultado::where('especialidad_id', $especialidad)
                ->where('estilo_id', $estilo)->get();
        } else {
            $resultados = Resultado::all();
        }

        return $this->showAllResources(ResultadoResource::collection($resultados));
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

        $this->fuentes($request->fuentes, $resultado);

        return $this->showOneResource(new ResultadoResource($resultado), 201);
    }

    public function show(Resultado $resultado)
    {
        return $this->showOneResource(new ResultadoResource($resultado));
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

        DB::table('fuente_resultados')->where('resultado_id', $resultado->id)->delete();
        $this->fuentes($request->fuentes, $resultado);

        // hola
        return $this->showOneResource(new ResultadoResource($resultado));
    }

    public function destroy(Resultado $resultado)
    {
        $resultado->delete();
        return $this->showOneResource(new ResultadoResource($resultado));
    }

    // resultado asociado a cada usuario

    private $rules2 = [
        'resultado_id' => 'required',
        'nombre_empresa' => 'required',
    ];

    public function resultado_user_store(Request $request)
    {
        $this->validate($request, $this->rules2);
        $resultado = Resultado::findOrFail($request->resultado_id);

        if (empty($resultado)) {
            return $this->successMessages("Debe pasar el argumento de resultado como parametro", 401);
        }
        $user_resultado = new UserResultado();
        $user_resultado->user_id = auth()->user()->id;
        $user_resultado->resultado_id = $resultado->id;
        
        $archivo = $request->file('logo_empresa');
        if ($archivo) {
            $user_resultado->logo_empresa = Storage::disk('s3')->put("ilustraciones", $archivo, 'public');
        }

        $user_resultado->nombre_empresa = $request->nombre_empresa;
        $user_resultado->save();
        return $this->showOneResource(new UserResultadoResource($user_resultado));
    }

    public function resultado_user_show(UserResultado $user_resultado)
    {
        return $this->showOneResource(new UserResultadoResource($user_resultado));
    }

    public function resultado_user_delete(UserResultado $user_resultado)
    {
        $user_resultado->delete();
        return $this->showOneResource(new UserResultadoResource($user_resultado));
    }

    public function resultado_user_index(Request $request)
    {
        if (auth()->user()->rol === "admin") {
            $resultados = UserResultado::all();
        } else {
            $resultados = auth()->user()->UserResultado;
        }

        return $this->showAllResources(UserResultadoResource::collection($resultados));
    }
}
