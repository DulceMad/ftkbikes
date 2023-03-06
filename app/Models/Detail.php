<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail extends Model
{
    use HasFactory;
    public function sale(){
        return $this->hasMany(Sale::class);
    }

    public function product(){
        return $this->hasMany(Product::class);
    }
}
