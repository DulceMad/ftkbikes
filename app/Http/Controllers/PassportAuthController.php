<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;

class PassportAuthController extends Controller
{
    public function register(Request $request){
        $validator = Validator::make($request->all(),[
            'username' => 'required|min:4',
            'useremail' => 'required|email|unique:users',
            'password' => 'required|min:8',
            'role' => 'required'
        ]);

        if($validator-> fails()){
            return $this->sendError('Validation Error', $validator->errors());
        }

        $user = User::create([
            'username' => $request->username,
            'useremail' => $request->useremail,
            'password' => bcrypt($request->password),
            'role' => 'Admin'
        ]);

        $token = $user->createToken('LaravelAuthApp')->accessToken;

        return response()->json(['token' => $token], 200);
    }

    public function login(Request $request){
        $data = [
            'useremail' => $request->useremail,
            'password' => $request->password
        ];

        if (auth()->attempt($data)){
            $token = auth()->user()->createToken('LaravelAuthApp')->accessToken;
            return response()->json(['token'=>$token],200);
        } else{
            return response()->json(['error' => 'Unauthorised'], 401);
        }    

        //$var = User::find(1);
        //echo $request->password;

    }
}
