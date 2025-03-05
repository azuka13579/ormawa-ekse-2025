<?php

namespace App\Http\Controllers;

use App\Models\Div;
use App\Models\Proker;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class ProkerController extends Controller
{
    public function simpan(Request $request){
        $request->validate([
            'namasingkat' => 'required',
            'namaproker' => 'required',
            'tujuan' => 'required',
            'deskripsi' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
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

    public function edit($id)
    {
        $proker = Proker::findOrFail($id);
        return view('admin.edit-proker', compact('proker'));
    }

    public function update(Request $request, $id)
    {
        $proker = Proker::findOrFail($id);
        
        $request->validate([
            'namasingkat' => 'required',
            'namaproker' => 'required',
            'tujuan' => 'required',
            'deskripsi' => 'required',
            'startdate' => 'required',
            'enddate' => 'required',
            'image' => 'image|mimes:jpeg,png,jpg,gif|max:2048'
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

    public function delete($id)
    {
        $proker = Proker::findOrFail($id);
        if ($proker->image_path) {
            Storage::delete(str_replace('storage/', '', $proker->image_path));
        }
        $proker->delete();
        return redirect()->route('admin-index');
    }
}
