<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\ProgramController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {return view('welcome');});
Route::view('/{path}','welcome');

//Route:: get('/users',[userController::class, 'index']);
//Route:: get('/users',[userController::class, 'store']);
//Route:: post('/student',[StudentController::class, 'store']);
//Route:: get('/show_Token',[StudentController::class, 'showToken']);
//Route:: post('/show_students_by_program',[ProgramController::class, 'show_students_by_program']);
//Route::post('/student_destroy',[StudentController::class, 'destroy']);
//Route::post('/student_Update',[StudentController::class, 'update']);
