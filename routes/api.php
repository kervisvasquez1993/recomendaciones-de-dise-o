<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EstiloController;
use App\Http\Controllers\FuenteController;
use App\Http\Controllers\LogotipoController;
use App\Http\Controllers\IlustracionController;
use App\Http\Controllers\EspecialidadController;
use App\Http\Controllers\ResultadoController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
/* crud de especialidades */

Route::get('/especialidad', [EspecialidadController::class, 'index']);
Route::post('/especialidad', [EspecialidadController::class, 'store']);
Route::put('/especialidad/{especialidad}', [EspecialidadController::class, 'update']);
Route::delete('/especialidad/{especialidad}', [EspecialidadController::class, 'destroy']);
/* rutas para estilos */
Route::get('/estilos', [EstiloController::class, 'index']);
Route::post('/estilos', [EstiloController::class, 'store']);
Route::put('/estilos/{estilo}', [EstiloController::class, 'update']);
Route::delete('/estilos/{estilo}', [EstiloController::class, 'destroy']);
/* rutas para fuentes */
Route::get('/fuentes', [FuenteController::class, 'index']);
Route::post('/fuentes', [FuenteController::class, 'store']);
Route::post('/fuentes/{fuente}', [FuenteController::class, 'update']);
Route::delete('/fuentes/{fuente}', [FuenteController::class, 'destroy']);
/* rutas para ilustracion */
Route::get('/ilustraciones', [IlustracionController::class, 'index']);
Route::post('/ilustraciones', [IlustracionController::class, 'store']);
Route::post('/ilustraciones/{ilustracion}', [IlustracionController::class, 'update']);
Route::delete('/ilustraciones/{ilustracion}', [IlustracionController::class, 'destroy']);
/* logotipo */
Route::get('/logotipos', [LogotipoController::class, 'index']);
Route::post('/logotipos', [LogotipoController::class, 'store']);
Route::put('/logotipos/{logotipo}', [LogotipoController::class, 'update']);
Route::delete('/logotipos/{logotipo}', [LogotipoController::class, 'destroy']);


// resultados
Route::get('/resultados', [ResultadoController::class, 'index']);
Route::post('/resultados', [ResultadoController::class, 'store']);
Route::put('/resultados/{resultado}', [ResultadoController::class, 'update']);
/* Route::get('/resultados', [ResultadoController::class, 'index']); */

