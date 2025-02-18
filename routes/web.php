<?php

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


Route::get('/beranda', function () {
    return Inertia::render('Beranda');
})->name('beranda');

Route::get('/divisi', function () {
    return Inertia::render('Divisi');
})->name('divisi');