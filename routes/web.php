<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\DataController;
use App\Http\Controllers\PaymentController;
use App\Models\Penjualan;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\ProkerController;
use App\Http\Controllers\TentangController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Middleware\CheckDivision;
use App\Models\Proker;
use App\Models\Div;
use App\Http\Controllers\AdminSamudraStoreController;

use App\Http\Controllers\ProductController;
Route::get('/', function () {
    $proker = Proker::all();
   return Inertia::render('Home',["proker" => $proker]);
})->name('home');

Route::get('/sakarsa-care', function () {
    return Inertia::render('SakarsaCare');
})->name('sakarsa-care');

Route::get('/samudra-store', [ProductController::class, 'index'])->name('samudra.store');
Route::get('/samudra-store/checkout', [ProductController::class, 'checkout'])->name('checkout.store');
Route::post('/samudra-store/checkout/payment', [PaymentController::class, 'index'])->name('checkout.payment');
// Route::get('/samudra-store/checkout/berhasil', [PaymentController::class, 'berhasil'])->name('checkout.berhasil');

Route::get('/tentang', [TentangController::class, 'index'])->name('tentang');
Route::get('/tentang/{divisi}', [TentangController::class, 'divisi'])->middleware(CheckDivision::class)->name('tentang-divisi');

Route::get('/divisi', function () {
    return Inertia::render('Divisi');
})->name('divisi');
Route::get('/proker', function () {
     $proker = Proker::all();
    return Inertia::render('Allproker',["proker" => $proker]);
})->name('proker');

Route::get('/login', function () {
    return view('master.login');
})->name('divisi');

Route::get('/api/data', [DataController::class, 'index']);

Route::get('/upload', [ImageController::class, 'create']); // Show form
Route::post('/upload', [ImageController::class, 'store']); // Handle form submission
// Route::get('/logmas', [LoginMasterController::class, 'index'])->name('master-login-index');
Route::get('/masuk', [AdminController::class, 'login'])->name('login');
Route::post('/masuk', [AdminController::class, 'authenticate']);

Route::middleware('auth')->group(function(){
    Route::get('/admin', function(){
        $div_id = Div::where('divisi', Auth::user()->div)->value('id');
        $prokers = Proker::where('div_id', $div_id)->get();
        return view('admin.index', compact('prokers'));
    })->name('admin-index');

    Route::post('/admin', [AdminController::class, 'keluar'])->name('keluar');

    Route::get('/add-proker', function(){
        return view('admin.add-proker');
    })->name('addproker');
    Route::post('/add-proker', [ProkerController::class, 'simpan']);

    Route::get('/edit-proker/{id}', [ProkerController::class, 'edit'])->name('editproker');
    Route::post('/edit-proker/{id}', [ProkerController::class, 'update'])->name('updateproker');

    Route::post('/delete-proker/{id}', [ProkerController::class, 'delete'])->name('deleteproker');
});

Route::prefix('adminsamudra')->group(function () {
    Route::get('/login', [AdminSamudraStoreController::class, 'loginForm'])->name('admin.login');
    Route::post('/login', [AdminSamudraStoreController::class, 'login']);
    Route::post('/logout', [AdminSamudraStoreController::class, 'logout'])->name('admin.logout');

    Route::middleware(['auth:adminsamudrastore'])->group(function () {
        // Dashboard Utama
        Route::get('/dashboard', [ProductController::class, 'dashboard'])->name('admin.dashboard');
        Route::get('/show', [PaymentController::class, 'show'])->name('admin.penjualan');
        Route::get('/penjualan', [PaymentController::class, 'show'])->name('admin.products.penjualan');
        Route::post('/penjualan/update-status/', [PaymentController::class, 'updateStatus'])->name('admin.updateStatus');
        Route::delete('/admin/delete/{id}', [PaymentController::class, 'deleteOrder'])->name('admin.deleteOrder');
        Route::post('/penjualan/update-diterima/', [PaymentController::class, 'updateDiterima'])->name('admin.updateDiterima');

        
        // Manajemen Produk
        Route::prefix('products')->group(function () {
            Route::get('/', [ProductController::class, 'dashboard'])->name('admin.products.index');
            Route::get('/create', [ProductController::class, 'create'])->name('admin.products.create');
            Route::post('/', [ProductController::class, 'store'])->name('admin.products.store');
            Route::get('/{product}/edit', [ProductController::class, 'edit'])->name('admin.products.edit');
            Route::post('/{product}/update', [ProductController::class, 'update'])->name('admin.products.update');
            Route::delete('/{product}', [ProductController::class, 'destroy'])->name('admin.products.destroy');

        });
    });
});