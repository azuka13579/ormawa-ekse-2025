<?php

use App\Http\Controllers\DataController;
use App\Http\Controllers\DivisionController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\LoginMasterController;
use App\Http\Controllers\TentangController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckDivision;
Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/sakarsa-care', function () {
    return Inertia::render('SakarsaCare');
})->name('sakarsa-care');

Route::get('/samudra-store', function () {
    return Inertia::render('SamudraStore');
})->name('samudra-store');

Route::get('/tentang', [TentangController::class, 'index'])->name('tentang');
Route::get('/tentang/{divisi}', [TentangController::class, 'divisi'])->middleware(CheckDivision::class)->name('tentang-divisi');

Route::get('/divisi', function () {
    return Inertia::render('Divisi');
})->name('divisi');

// Route::get('/tentang/{divisi}', [DivisionController::class, 'divisi'])
//     ->middleware(CheckDivision::class)
//     ->name('divisi_dinamis');


Route::get('/api/data', [DataController::class, 'index']);

Route::get('/upload', [ImageController::class, 'create']); // Show form
Route::post('/upload', [ImageController::class, 'store']); // Handle form submission
Route::get('/logmas', [LoginMasterController::class, 'index'])->name('master-login-index');