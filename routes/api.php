<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SaleController;
use App\Http\Controllers\PassportAuthController;
use App\Http\Controllers\SupplierController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CategoriaController;
use App\Http\Controllers\DetailController;
use App\Http\Controllers\LoginController;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});



Route:: get('/users',[userController::class, 'index']);

//STORE
Route:: post('/users_store',[userController::class, 'store']);
Route:: post('/sales_store',[SaleController::class, 'store']);
Route:: post('/suppliers_store',[SupplierController::class, 'store']);
Route:: post('/products_store',[ProductController::class, 'store']);
Route:: post('/category_store',[CategoriaController::class, 'store']);
Route:: post('/details_store',[DetailController::class, 'store']);

//UPDATE
Route::post('/users_update',[UserController::class, 'update']);
Route::put('/suppliers_update/{id}',[SupplierController::class, 'update']);
Route::put('/category_update/{id}',[CategoriaController::class, 'update']);
Route::put('/products_update/{id}',[ProductController::class, 'update']);
Route::post('/sales_update',[SaleController::class, 'update']);
Route::post('/details_update',[DetailController::class, 'update']);

//DELETE
Route::delete('/users_destroy/{id}',[UserController::class, 'destroy']);
Route::delete('/suppliers_destroy/{id}',[SupplierController::class, 'destroy']);
Route::delete('/category_destroy/{id}',[CategoriaController::class, 'destroy']);
Route::delete('/products_destroy/{id}',[ProductController::class, 'destroy']);
Route::delete('/sales_destroy/{id}',[SaleController::class, 'destroy']);
Route::delete('/details_destroy/{id}',[DetailController::class, 'destroy']);

//INDEX
Route::get('/users_index',[UserController::class, 'index']);

Route::middleware('auth:api')->group(function (){
    Route::get('/suppliers_index',[SupplierController::class, 'index']);
});



Route::get('/category_index',[CategoriaController::class, 'index']);
Route::get('/products_index',[ProductController::class, 'index']);
Route::get('/details_index',[DetailController::class, 'index']);
Route::get('/sales_index',[SaleController::class, 'index']);

//LOGIN
Route::post('login', [LoginController::class, 'login']);
Route::post('register', [LoginController::class, 'register']);

//SHOW
Route::get('/products_show/{id}',[ProductController::class, 'show']);
Route::get('/suppliers_show/{id}',[SupplierController::class, 'show']);
Route::get('/category_show/{id}',[CategoriaController::class, 'show']);