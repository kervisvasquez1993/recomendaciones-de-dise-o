<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resultados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('especialidad_id')->references('id')->on('especialidads')->onDelete('cascade');
            $table->foreignId('estilo_id')->references('id')->on('estilos')->onDelete('cascade');
            $table->foreignId('ilustracion_id')->references('id')->on('ilustracions')->onDelete('cascade');
            $table->foreignId('logotipo_id')->references('id')->on('logotipos')->onDelete('cascade');
            $table->json('colores');
            $table->text('descripcion');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resultados');
    }
}
