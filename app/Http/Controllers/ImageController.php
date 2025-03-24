<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Image;

class ImageController extends Controller
{
    public function create()
    {
        return view('upload');  // Return the form view
    }

    public function store(Request $request)
    {
        // Validate the uploaded image
        $request->validate([
            'image' => 'required|image|mimes:jpeg,png,jpg,gif|max:10000'
        ]);

        // Store the image in storage/app/public/images
        $path = $request->file('image')->store('public/images');

        // Save the image path into the database (images table)
        $filename = str_replace('public/', '', $path);  // Remove the "public/" prefix
        Image::create([
            'image_path' => $filename
        ]);

        return back()->with('success', 'Image uploaded and saved successfully!')->with('image', $filename);
    }
}
