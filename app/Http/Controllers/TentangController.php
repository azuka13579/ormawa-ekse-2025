<?php

namespace App\Http\Controllers;

use App\Models\Div;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TentangController extends Controller
{
    public function index(){
        $data = Div::all();
        $biro = [];
        $departemen = [];
        foreach ($data as $value) {
            if(Str::contains($value, 'Biro')){
                array_push($biro, $value);
            }
            if(Str::contains($value, 'Departemen')){
                array_push($departemen, $value);
            }
        }
        // dd($biro);
        return Inertia::render('Tentang', ['biro' => $biro, 'departemen' => $departemen]);
        //return Inertia::render('Tentang');
    }
}
