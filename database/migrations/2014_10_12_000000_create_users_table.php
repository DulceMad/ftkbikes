<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up() //crear la tabla (los campos que ya hicismos)
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('username');
            $table->string('apellidos');
            $table->string('useremail')->unique();
            $table->enum('role',['Admin','Customer']);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->date('datebirthday');
            $table->string('streetNum');
            $table->string('fracc');
            $table->integer('CP');
            $table->string('city');
            $table->string('phone');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down() //rollback a la tabla en caso de que se necesite
    {
        Schema::dropIfExists('users');
    }
};
