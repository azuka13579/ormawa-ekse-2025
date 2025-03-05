<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AdminSamudraStoreController extends Controller
{
    public function loginForm()
    {
        return view('admin_samudra_store.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Ubah guard jadi 'adminsamudrastore'
        if (Auth::guard('adminsamudrastore')->attempt($credentials)) {
            return redirect()->route('admin.dashboard'); // Sesuaikan dengan rute admin Samudra Store
        }

        return back()->withErrors(['email' => 'Email atau password salah']);
    }

    public function logout()
    {
        Auth::guard('adminsamudrastore')->logout();
        return redirect()->route('admin.login'); // Sesuaikan dengan rute login admin Samudra Store
    }
}
