<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\PaymentController;
use App\Http\Controllers\StoreController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProkerController;
use App\Http\Controllers\TentangController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckDivision;
use App\Models\Information;
use App\Models\Proker;
use App\Models\Div;
use App\Http\Controllers\AdminSamudraStoreController;
use App\Http\Controllers\InformationController;
use App\Http\Controllers\ProductController;
Route::fallback(function () {
    return Inertia::render('Errors/404');
});
Route::middleware(['throttle:4,1'])->group(function(){
    
    // -------------------WEBSITE ORMAWAEKSE-------------------
    // Home
    Route::get('/', function () {
        $proker = Proker::all();
        $informasi = Information::latest()->take(4)->get();
        return Inertia::render('Home',["proker" => $proker,"informasi" => $informasi]);
    })->name('home');
    
// Home - Proker Selengkapnya
Route::get('/proker', function () {
     $proker = Proker::latest()->get(); 
    return Inertia::render('Allproker',["proker" => $proker]);
})->name('proker');

// Home - Informasinya Selengkapnya
Route::get('/informasi', function () {
     $informasi = Information::latest()->get(); 
    return Inertia::render('Informasi',["informasi" => $informasi]);
})->name('informasi');

// Sakarsa Care
Route::get('/sakarsa-care', function () {
    return Inertia::render('SakarsaCare');
})->name('sakarsa-care');

// Tentang
Route::get('/tentang', [TentangController::class, 'index'])->name('tentang');
Route::get('/tentang/{divisi}', [TentangController::class, 'divisi'])->middleware(CheckDivision::class)->name('tentang-divisi');
// -------------------WEBSITE SAMUDRA STORE----------------------
// Home
Route::get('/samudra-store', [StoreController::class, 'index'])->name('samudra.store');

// Checkout Keranjang
Route::get('/samudra-store/checkout', [StoreController::class, 'indexCheckout'])->name('checkout.store');
Route::post('/samudra-store/checkout/payment', [PaymentController::class, 'index'])->name('checkout.payment');
Route::post('/send-order-email', [StoreController::class, 'kirimEmail']);
});




// ----------------------ADMIN ORMAWAEKSE----------------------
// Admin Masuk Page
Route::get('/masuk', [AdminController::class, 'login'])->name('login');
Route::post('/masuk', [AdminController::class, 'authenticate']);

// Bagian Admin Ormawaekse
Route::middleware('auth:adminormawa')->group(function(){
    // Halaman Home - Admin Ormawaekse
    Route::get('/admin',[AdminController::class, 'index'])->name('admin-index');
    Route::post('/admin', [AdminController::class, 'keluar'])->name('keluar');
    
    // Halaman Tambah Proker - Admin Ormawaekse
    Route::get('/add-proker', function(){
        return view('admin.add-proker');
    })->name('addproker');
    Route::post('/add-proker', [AdminController::class, 'simpanProker']);
    Route::get('/edit-proker/{id}', [AdminController::class, 'editProker'])->name('editproker');
    Route::post('/edit-proker/{id}', [AdminController::class, 'updateProker'])->name('updateproker');
    Route::post('/delete-proker/{id}', [AdminController::class, 'deleteProker'])->name('deleteproker');
    
    // Halaman Tambah Informasi - Admin Ormawaekse
    Route::get('/add-informasi', function(){
        return view('admin.add-informasi');
    })->name('addinformasi');
    Route::post('/add-informasi', [AdminController::class, 'simpanInformasi']);
    Route::get('/edit-informasi/{id}', [AdminController::class, 'editInformasi'])->name('editinformasi');
    Route::post('/edit-informasi/{id}', [AdminController::class, 'updateInformasi'])->name('updateinformasi');
    Route::post('/delete-informasi/{id}', [AdminController::class, 'deleteInformasi'])->name('deleteinformasi');
});




// ------------------ADMIN SAMUDRA STORE---------------------------
Route::prefix('samudra-store/admin')->group(function () {
    // Masuk Admin Store
    Route::get('/masuk', [AdminSamudraStoreController::class, 'loginForm'])->name('admin.login');
    Route::post('/masuk', [AdminSamudraStoreController::class, 'login']);
    Route::post('/logout', [AdminSamudraStoreController::class, 'logout'])->name('admin.logout');

    Route::middleware(['auth:adminsamudrastore'])->group(function () {
        // Manajemen Produk
        Route::prefix('products')->group(function () {
            Route::get('/', [ProductController::class, 'dashboard'])->name('admin.products.index');
            Route::get('/create', [ProductController::class, 'create'])->name('admin.products.create');
            Route::post('/', [ProductController::class, 'store'])->name('admin.products.store');
            Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('admin.products.edit');
            Route::post('/{product}/update', [ProductController::class, 'update'])->name('admin.products.update');
            Route::delete('/{product}', [ProductController::class, 'destroy'])->name('admin.products.destroy');
        });

        // Route::get('/show', [PaymentController::class, 'show'])->name('admin.penjualan');
        Route::get('/penjualan', [PaymentController::class, 'show'])->name('admin.products.penjualan');
        Route::post('/penjualan/update-status/', [PaymentController::class, 'updateStatus'])->name('admin.updateStatus');
        Route::delete('/penjualan/delete/{id}', [PaymentController::class, 'deleteOrder'])->name('admin.deleteOrder');
        Route::post('/penjualan/update-diterima/', [PaymentController::class, 'updateDiterima'])->name('admin.updateDiterima');    
    });
});