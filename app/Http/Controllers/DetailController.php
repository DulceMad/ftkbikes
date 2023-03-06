<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Detail;

class DetailController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $detail=Detail::all();
        return $detail;
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
            'sale_id' => 'required',
            'product_id' => 'required',
            'quantity' => 'required',
            'price' => 'required',
            'subtotal'=>'required'
        ]);

        $detail = new Detail;
        $detail->sale_id=$request->sale_id;
        $detail->product_id=$request->product_id;
        $detail->quantity = $request->quantity;
        $detail->price=$request->price;
        $detail->subtotal = $request->subtotal;
        $detail->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
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
    public function update(Request $request)
    {
        Detail::where('id', $request->id)
        ->update(['sale_id'=>$request->sale_id,
                 'product_id'=>$request->product_id,
                  'quantity'=>$request->quantity,
                  'price'=>$request->price,
                  'subtotal'=>$request->subtotal]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $detail = Detail::find($id);
        $detail->delete();
    }
}