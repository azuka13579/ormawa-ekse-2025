<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Home');
})->name('home');

Route::get('/sakarsa-help', function () {
    return Inertia::render('SakarsaHelp');
})->name('sakarsa-help');

Route::get('/samudra-store', function () {
    return Inertia::render('SamudraStore');
})->name('samudra-store');

Route::get('/tentang', function () {
    return Inertia::render('Tentang');
})->name('tentang');