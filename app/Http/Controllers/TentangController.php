<?php

namespace App\Http\Controllers;

use App\Models\Anggota;
use App\Models\Div;
use App\Models\Kapten;
use App\Models\Proker;
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
        
        $id = Div::where('divisi', $divisi)->select('id')->get();
        $data = Kapten::where('div_id', $id[0]->id)->get();
        $anggota = Anggota::where('div_id', $id[0]->id)->get();
        $proker = Proker::where('div_id', $id[0]->id)->get();
        // dd($proker);
        return Inertia::render('Divisicopy',['divisi' => $divisi, 'data' => $data, 'anggota' => $anggota, 'proker' => $proker]);
    }
}
