<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('penjualans', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('nim');
            $table->string('fakultas');
            $table->string('departemen');
            $table->string('email');
            $table->string('no_wa');
            $table->string('catatan');
            $table->jsonb(
                'produk'
            );
            $table->string('image_path');
            $table->enum('status', ['pending', 'accepted', 'rejected'])->default('pending');
            $table->boolean('status_diterima')->default(false);
            $table->timestamps();
        });
        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('penjualans');
    }
};
