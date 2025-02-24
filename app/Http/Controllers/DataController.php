<?php

namespace App\Http\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;

class DataController extends Controller
{
    public function index()
    {
        $data = Image::all();
        foreach ($data as $value) {
            $value  = $value->relation;
            echo $value->nama;
        }
        //return response()->json($data);
        // return response()->json([
        //     'status' => 'success',
        //     'message' => 'Product list retrieved successfully',
        //     'data' => [
        //         [
        //             "id" => 1,
        //             "name" => "Laptop X220",
        //             "description" => "A lightweight and powerful ThinkPad laptop.",
        //             "price" => "650.00",
        //             "stock" => 10,
        //             "created_at" => "2025-02-03T12:00:00.000000Z",
        //             "updated_at" => "2025-02-03T12:00:00.000000Z"
        //         ],
        //         [
        //             "id" => 2,
        //             "name" => "AI Chatbot Subscription",
        //             "description" => "Access to an AI-powered chatbot service.",
        //             "price" => "15.99",
        //             "stock" => 100,
        //             "created_at" => "2025-02-03T12:05:00.000000Z",
        //             "updated_at" => "2025-02-03T12:05:00.000000Z"
        //         ],
        //         [
        //             "id" => 3,
        //             "name" => "AI Chatbot ",
        //             "description" => "Access to an AI-powered chatbot service.",
        //             "price" => "15.99",
        //             "stock" => 100,
        //             "created_at" => "2025-02-03T12:05:00.000000Z",
        //             "updated_at" => "2025-02-03T12:05:00.000000Z"
        //         ],
        //         [
        //             "id" => 4,
        //             "name" => "AI Chatbot ",
        //             "description" => "Access to an AI-powered chatbot service.",
        //             "price" => "15.99",
        //             "stock" => 100,
        //             "created_at" => "2025-02-03T12:05:00.000000Z",
        //             "updated_at" => "2025-02-03T12:05:00.000000Z"
        //         ]
        //     ],
        // ], 200);
    }
}
