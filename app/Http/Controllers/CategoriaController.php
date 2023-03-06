<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;
use Validator;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

     //PARA MOSTRAR TODOS LOS REGISTROS DE LA TABLA
    public function index()
    {
        $category = Categoria::all();
        return $category;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),[
            'categoryname' => 'required|min:3'
        ]);

        if($validator->fails()){
            return $validator->errors();
        }


        $categoria = new Categoria;
        $categoria->categoryname=$request->categoryname;
        $categoria->save();

        return response()->json(['status'=>200], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    //PARA MOSTRAR REGISTROS ESPECIFICOS
    public function show($id)
    {
        $category=Categoria::find($id);
        return $category;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
   
    public function update(Request $request, $id)
    {
        $validator = Validator::make($request->all(),[
            'categoryname' => 'required',
        ]);

        if($validator->fails()){
            return $validator->errors();
        }


        $category=Categoria::findOrFail($request->id);

        $category->categoryname=$request->categoryname;
        
        $category->save();

        return $category;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $category = Categoria::find($id);
        $category->delete();
    }
}
