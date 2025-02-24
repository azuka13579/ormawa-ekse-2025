<?php

namespace App\Http\Controllers;

use App\Models\Div;
use App\Models\Kapten;
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

    public function divisi($divisi){
        // dd($divisi_route);
        // $data = Kapten::all();
        // $data_div = [];
        // foreach ($data as $value) {
        //     $prop = $value->relation->divisi;
        //     if($prop != NULL){
        //         if($prop == $divisi_route){
        //             array_push($data_div, $value);
        //         }
        //     }
        // }
        // $data = Kapten::whereHas('relation', function ($query) use($divisi) {
        //     $query->where('divisi', $divisi);
        // })->with('relation')->get();
        $id = Div::where('divisi', $divisi)->select('id')->get();
        $data = Kapten::where('div_id', $id[0]->id)->get();
        return Inertia::render('Divisicopy',['divisi' => $divisi, 'data' => $data]);
    }
}
