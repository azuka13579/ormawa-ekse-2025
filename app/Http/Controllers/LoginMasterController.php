<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LoginMasterController extends Controller
{
    public function index(){
        return view('master.login');
    }
    
}
