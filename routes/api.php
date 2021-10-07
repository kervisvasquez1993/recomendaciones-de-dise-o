<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EspecialidadController;


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
