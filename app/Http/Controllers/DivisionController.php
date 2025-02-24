<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class DivisionController extends Controller
{
    public function divisi($divisi){
        // dd($divisi);
       return Inertia::render('Divisicopy',['divisi' => $divisi]);
    }
}
