<?php

namespace App\Http\Controllers;

use App\Models\Logotipo;
use Illuminate\Http\Request;
use App\Http\Controllers\ApiController;

class LogotipoController extends ApiController
{

    private $rules  = [
        'nombre' => 'required',
        'descripcion' => 'required',
    ];
    public function index()
    {
        $logotipo = Logotipo::all();
        return $this->showAll($logotipo);
    }



    public function store(Request $request)
    {
        $this->validate($request, $this->rules);
        $logotipo = Logotipo::create(
            $request->all(),
        );
        return $this->showOne($logotipo, 201);
    }



    public function update(Request $request, Logotipo $logotipo)
    {
        $this->validate($request, $this->rules);
        $logotipo->update($request->all());
        return $this->showOne($logotipo);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Logotipo  $logotipo
     * @return \Illuminate\Http\Response
     */
    public function destroy(Logotipo $logotipo)
    {
        $logotipo->delete();
        return $this->showOne($logotipo);
    }
}
