<?php

namespace Database\Seeders;

use Illuminate\Support\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UsuarioSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'admin',
            'rol' => "admin",
            'email' => 'pypageagency@gmail.com',
            'password' =>Hash::make("123456789"),
            'created_at' => Carbon::now()
        ]);
    }
}
