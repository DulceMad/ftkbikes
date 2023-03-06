<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Categoria;
use App\Models\Supplier;
use Validator;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $product = Product::all();
        $categoria= Categoria::all();
        $suppliers=Supplier::all();
        $i=0;
        $collection=array();

        foreach($product as $prod){
            foreach($categoria as $cat){
                foreach($suppliers as $supplier){
                    if($prod->categorias_id == $cat->id && $prod->supplier_id==$supplier->id){
                        $prod->categorias_id=$cat->categoryname;
                        $prod->supplier_id=$supplier->suppliername;
    
                        $collection[$i]=$prod;
                        $i++;
                    }
                }
            }
        }
        return $collection;
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
            'productname' => 'required|min:3',
            'price' => 'required',
            'supplier_id' => 'required',
            'categorias_id' => 'required',
            'description'=>'required|min:5|max:220',
            'stock'=>'required|min:1',
            'image'=>'required'
        ]);

        if($validator->fails()){
            return $validator->errors();
        }

        $product = new Product;
        $product->productname=$request->productname;
        $product->price=$request->price;
        $product->supplier_id = $request->supplier_id;
        $product->categorias_id = $request->categorias_id;
        $product->description=$request->description;
        $product->stock = $request->stock;
        $product->image = $request->image->store('products');
        $product->save();

        return response()->json(['status'=>200], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $product=Product::find($id);
        return $product;
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
        $product=Product::findOrFail($request->id);

        $product->productname=$request->productname;
        $product->price=$request->price;
        $product-> supplier_id=$request->supplier_id;
        $product->categorias_id=$request->categorias_id;
        $product->description=$request->description;
        $product->stock=$request->stock;
        $product->image=$request->image;

        $product->save();

        return $product;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $product = Product::find($id);
        $product->delete();
    }
}