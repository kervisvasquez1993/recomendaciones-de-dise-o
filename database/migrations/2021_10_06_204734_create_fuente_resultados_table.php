<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFuenteResultadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('fuente_resultados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('resultado_id')->references('id')->on('resultados')->onDelete('cascade');
            $table->foreignId('fuente_id')->references('id')->on('fuentes')->onDelete('cascade');
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
        Schema::dropIfExists('fuente_resultados');
    }
}
