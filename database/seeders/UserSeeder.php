<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => 'kervis vasquez',
            'rol' => "admin",
            'email' => 'kervisvasquez24@gmail.com',
            'password' => Hash::make("123456789"),
            'created_at' => Carbon::now(),
        ]);

        DB::table('users')->insert([
            'name' => 'Cliente Prueba',
            'rol' => "cliente",
            'email' => 'cliente@gmail.com',
            'password' => Hash::make("123456789"),
            'created_at' => Carbon::now(),
        ]);
    }
}
