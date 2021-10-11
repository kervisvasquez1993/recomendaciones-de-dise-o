<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Estilo;
use App\Models\Logotipo;
use App\Models\Resultado;
use App\Models\Ilustracion;
use App\Models\Especialidad;
use Illuminate\Http\Request;
use App\Models\UserResultado;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
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
    ];

    public function index(Request $request)
    {
        $especialidad = $request->query('especialidad');
        $estilo = $request->query('estilo');

        $especialidades = Resultado::with("especialidad")
            ->with("estilo")
            ->with("estilo")
            ->with("ilustracion")
            ->with("logotipo");

        if ($especialidad && $estilo) {
            $especialidades = $especialidades
                ->where('especialidad_id', $especialidad)
                ->where('estilo_id', $estilo);
        }

        $especialidades = $especialidades->get();

        return $this->showAll($especialidades);
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
        
        foreach($request->fuentes as $e){
            DB::table('fuente_resultados')->insert([
                'resultado_id' => $resultado->id,
                'fuente_id' => $e,
                'created_at' => Carbon::now()
            ]);
        }
        return $this->showOne($resultado, 201);
    }

    public function show(Resultado $resultado)
    {
        return $this->showOne($resultado->with("especialidad")
                ->with("estilo")
                ->with("estilo")
                ->with("ilustracion")
                ->with("logotipo")->first());
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

    // resultado asociado a cada usuario

    private $rules2 = [
        'nombre_empresa' => 'required',
        "logo_empresa" => 'required'
    ];
    public function resultado_user_store(Request $request, Resultado $resultado)
    {
        $this->validate($request, $this->rules2);
        $resultado = $request->query('resultado');


        if (empty($resultado)) {
            return $this->successMessages("Debe pasar el argumento de resultado como parametro", 401);
        }
        $user_resultado = new UserResultado();

        $user_resultado->user_id = auth()->user()->id;
        $user_resultado->resultado_id = $resultado;
        $user_resultado->logo_empresa = Storage::disk('s3')->put("ilustraciones", $request->file('logo_empresa'), 'public');

        $user_resultado->nombre_empresa = $request->nombre_empresa;
        $user_resultado->save();
        return $this->showOne($user_resultado);
    }

    public function resultado_user_show(UserResultado $user_resultado)
    {
        return $this->showOne($user_resultado);
    }

    public function resultado_user_delete(UserResultado $user_resultado)
    {
        $user_resultado->delete();
        return $this->showOne($user_resultado);
    }

    public function resultado_user_index(Request $request)
    {

        if (auth()->user()->rol === "admin") {
            return $this->showAll(UserResultado::all());
        }
        return $this->showAll(auth()->user()->UserResultado);
    }
}
