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
            $table->foreignId('especialidades_id')->references('id')->on('especialidads')->onDelete('cascade');
            $table->foreignId('estilos_id')->references('id')->on('estilos')->onDelete('cascade');
            $table->foreignId('ilustracion_id')->references('id')->on('ilustracions')->onDelete('cascade');
            $table->foreignId('logotipos_id')->references('id')->on('logotipos')->onDelete('cascade');
            $table->json('colores')->notNull();
            $table->text('descripcion')->notNull();

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
