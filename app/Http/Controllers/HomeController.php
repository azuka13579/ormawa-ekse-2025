<?php

namespace App\Http\Controllers;

use App\Models\Information;
use App\Models\Proker;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index(){
         $proker = Proker::all();
        $informasi = Information::latest()->take(4)->get();
        return Inertia::render('Home',["proker" => $proker,"informasi" => $informasi]);
    }

    public function proker(){
         $proker = Proker::latest()->get(); 
         return Inertia::render('Allproker',["proker" => $proker]);
    }

    public function informasi(){
         $informasi = Information::latest()->get(); 
        return Inertia::render('Informasi',["informasi" => $informasi]);
    }

    public function detailinformasi($judul){
        $informasi = Information::where('judul',$judul)->first();

        if(!$informasi){
            return redirect()->route('home');
        }
         return Inertia::render('InformasiDetail',["informasi" => $informasi]);
    }
}
