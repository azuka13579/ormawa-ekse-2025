<?php

namespace App\Http\Controllers;

use App\Models\Div;
use App\Models\Information;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class InformationController extends Controller
{
       public function simpan(Request $request){
        $request->validate([
            'judul' => 'required',
            'deskripsi_singkat' => 'required',
            'deskripsi' => 'required',
            'narahubung' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:4096'
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

    public function edit($id)
    {
        $informasi = Information::findOrFail($id);
        return view('admin.edit-informasi', compact('informasi'));
    }

    public function update(Request $request, $id)
    {
        $informasi = Information::findOrFail($id);
        
        $request->validate([
            'judul' => 'required',
            'deskripsi_singkat' => 'required',
            'deskripsi' => 'required',
            'narahubung' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:4096'
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

    public function delete($id)
    {
        $informasi = Information::findOrFail($id);
        if ($informasi->image_path) {
            Storage::delete(str_replace('storage/', '', $informasi->image_path));
        }
        $informasi->delete();
        return redirect()->route('admin-index');
    }
}
