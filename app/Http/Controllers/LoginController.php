<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Ilumitate\Support\Facades\Auth;

class LoginController extends Controller
{
    public function register(Request $request){
       $validator = Validator::make($request->all(),[
            'username' => 'required|min:10',
            'useremail' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'role' => 'required'
        ]);

        $user = User::create([
            'username' => $request->username,
            'useremail' => $request->useremail,
            'password' => bcrypt($request->password),
            'role' => $request->role
        ]);

        $token = $user->createToken('LaravelAuthApp')->accessToken;

        return response()->json(['token' => $token], 200);
        //return $request->username;
    }
    
    //funcion para hacer Login en la página
    public function login(Request $request){
        $credentials = [
            'useremail' => $request->useremail,
            'password' => $request->password
        ];

       // si las credenciales son correctas muestra el usuario y el token
        if(auth()->attempt($credentials)){
            $token=auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token'=>$token, 'status'=>200,'user'=>auth()->user()]);
        }
        //si no, muestra un mensaje de error
        else{
            return response()->json(['error' => 'Unauthorised','status'=>401], 401);
        }
    }
}