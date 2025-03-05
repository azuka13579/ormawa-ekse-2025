<?php

namespace App\Http\Controllers;

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

            return redirect()->intended('/admin');
        }
        return back()->withErrors(['Login Gagal!']);
    }
    public function keluar(){
        Auth::logout();
        return to_route('home');
    }
}
