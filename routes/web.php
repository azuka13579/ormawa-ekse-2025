<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\ImageController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/sakarsa-care', function () {
    return Inertia::render('SakarsaCare');
})->name('sakarsa-care');

Route::get('/samudra-store', function () {
    return Inertia::render('SamudraStore');
})->name('samudra-store');

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
})->name('tentang');
Route::get('/divisi', function () {
    return Inertia::render('Divisi');
})->name('divisi');
Route::get('/api/data', [DataController::class, 'index']);

Route::get('/upload', [ImageController::class, 'create']); // Show form
Route::post('/upload', [ImageController::class, 'store']); // Handle form submission
