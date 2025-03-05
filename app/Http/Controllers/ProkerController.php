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
        // dd($request);
        $request->validate([
            'namaproker' => 'required',
            'tujuan' => 'required',
            'deskripsi' => 'required',
            'startdate' => 'required',
            'enddate' => 'required'
        ]);
        // dd($request);
        $image_path = "";
        //if($request->file('image')){
            $image = $request->file('image');
            // dd($image);
            // $image_path = $image->store('proker');
            // $image_path = "storage/".$image_path;
            $image_path = Storage::putFile(
                'proker', $image
            );
            $image_path = "storage/".$image_path;
            // dd($image_path);
            //}
        // $image_path = $image->storeAs('public/storage/proker', $image->hashName());
        $div_id = Div::where('divisi', Auth::user()->div)->select('id')->get();
        $data = [
            'div_id' => $div_id[0]->id,
            'nama' => $request['namaproker'],
            'deskripsi' => $request['deskripsi'],
            'tujuan' => $request['tujuan'],
            'start' => $request['startdate'],
            'end' => $request['enddate'],
            'image_path' => $image_path,
        ];
        // dd($d/ata);
        Proker::create($data);
        return to_route('admin-index');
    }
}
