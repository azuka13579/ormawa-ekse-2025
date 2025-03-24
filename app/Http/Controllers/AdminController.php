<?php

namespace App\Http\Controllers;

use App\Models\Div;
use App\Models\Information;
use App\Models\Proker;
use Illuminate\Http\Request;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

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

        if(Auth::guard('adminormawa')->attempt($credential)){
            $request->session()->regenerate();
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

    public function simpanProker(Request $request){
        $request->validate([
            'namasingkat' => 'required',
            'namaproker' => 'required',
            'tujuan' => 'required',
            'deskripsi' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:8192'
        ]);

        $image_path = "";
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_path = $image->store('proker', 'public');
            $image_path = "storage/" . $image_path;
        }

        $div_id = Div::where('divisi', Auth::user()->div)->first()->id;
        
        Proker::create([
            'div_id' => $div_id,
            'namasingkatan' => $request->namasingkat,
            'nama' => $request->namaproker,
            'deskripsi' => $request->deskripsi,
            'tujuan' => $request->tujuan,
            'start' => $request->startdate,
            'end' => $request->enddate,
            'image_path' => $image_path,
        ]);

        return redirect()->route('admin-index');
    }

    public function editProker($id)
    {
        $proker = Proker::findOrFail($id);
        return view('admin.edit-proker', compact('proker'));
    }

    public function updateProker(Request $request, $id)
    {
        $proker = Proker::findOrFail($id);
        
        $request->validate([
            'namasingkat' => 'required',
            'namaproker' => 'required',
            'tujuan' => 'required',
            'deskripsi' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:8192'
        ]);
        
        if ($request->hasFile('image')) {
            if ($proker->image_path) {
                Storage::delete(str_replace('storage/', '', $proker->image_path));
            }
            $image = $request->file('image');
            $image_path = $image->store('proker', 'public');
            $proker->image_path = "storage/" . $image_path;
        }
        $proker->update([
            'namasingkatan' => $request->namasingkat,
            'nama' => $request->namaproker,
            'deskripsi' => $request->deskripsi,
            'tujuan' => $request->tujuan,
            'start' => $request->startdate,
            'end' => $request->enddate,
            'image_path' => $proker->image_path, // Pastikan ini ada!
        ]);
        
        return redirect()->route('admin-index');
    }
    public function deleteProker($id)
    {
        $proker = Proker::findOrFail($id);
        if ($proker->image_path) {
            Storage::delete(str_replace('storage/', '', $proker->image_path));
        }
        $proker->delete();
        return redirect()->route('admin-index');
    }

    public function simpanInformasi(Request $request){
        $request->validate([
            'judul' => 'required',
            'deskripsi_singkat' => 'required',
            'deskripsi' => 'required',
            'narahubung' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:8192'
        ]);

        $image_path = "";
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_path = $image->store('informasi', 'public');
            $image_path = "storage/" . $image_path;
        }

        $div_id = Div::where('divisi', Auth::user()->div)->first()->id;
        
        Information::create([
            'div_id' => $div_id,
            'judul' => $request->judul,
            'deskripsi_singkat' => $request->deskripsi_singkat,
            'deskripsi' => $request->deskripsi,
            'narahubung' => $request->narahubung,
            'image_path' => $image_path,
        ]);

        return redirect()->route('admin-index');
    }

    public function editInformasi($id)
    {
        $informasi = Information::findOrFail($id);
        return view('admin.edit-informasi', compact('informasi'));
    }

    public function updateInformasi(Request $request, $id)
    {
        $informasi = Information::findOrFail($id);
        
        $request->validate([
            'judul' => 'required',
            'deskripsi_singkat' => 'required',
            'deskripsi' => 'required',
            'narahubung' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:8192'
        ]);
        
        if ($request->hasFile('image')) {
            if ($informasi->image_path) {
                Storage::delete(str_replace('storage/', '', $informasi->image_path));
            }
            $image = $request->file('image');
            $image_path = $image->store('informasi', 'public');
            $informasi->image_path = "storage/" . $image_path;
        }


        $informasi->update([
            'judul' => $request->judul,
            'deskripsi_singkat' => $request->deskripsi_singkat,
            'deskripsi' => $request->deskripsi,
            'narahubung' => $request->narahubung,
            'image_path' => $informasi->image_path,
        ]);
        
        return redirect()->route('admin-index');
    }

    public function deleteInformasi($id)
    {
        $informasi = Information::findOrFail($id);
        if ($informasi->image_path) {
            Storage::delete(str_replace('storage/', '', $informasi->image_path));
        }
        $informasi->delete();
        return redirect()->route('admin-index');
    }
}
