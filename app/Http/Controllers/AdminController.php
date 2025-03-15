<?php

namespace App\Http\Controllers;

use App\Models\Div;
use App\Models\Information;
use App\Models\Proker;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;

class AdminController extends Controller
{
    public function login(){
        return view('admin.login');
    }
    public function authenticate(Request $request){
       

        $credential = $request->validate([
            'nim' => 'required',
            'password' => 'required'
        ], [
            'nim.required' => 'Kolom NIM harus diisi',
            'password.required' => 'Kolom Password harus diisi'
        ]);
        // dd($request);
        if(Auth::attempt($credential)){
            $request->session()->regenerate();
            // dd(Auth::user()->nama);
            

            return redirect()->intended('/admin');
        }
        return back()->withErrors(['Login Gagal!']);
    }

    public function index(){
        $div_id = Div::where('divisi', Auth::user()->div)->value('id');
        $prokers = Proker::where('div_id', $div_id)->latest()->get();
        $information = Information::where('div_id', $div_id)->latest()->get();
        return view('admin.index',['prokers' => $prokers, 'information' => $information]);
    }


    public function keluar(){
        Auth::logout();
        return to_route('login');
    }
}
