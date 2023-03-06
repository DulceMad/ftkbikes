<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    public function detail(){
        return $this->belongsTo(Detail::class);
    }

    public function supplier(){
        return $this->belongsTo(Supplier::class);
    }

    public function categoria(){
        return $this->belongsTo(Categoria::class);
    }
}
