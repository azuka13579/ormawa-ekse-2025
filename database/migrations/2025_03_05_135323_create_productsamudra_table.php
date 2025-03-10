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
        Schema::create('productsamudra', function (Blueprint $table) {
            $table->id();
        $table->string('name');
        $table->text('description');
        $table->string('size');
        $table->unsignedBigInteger('price');
        $table->integer('stock');
        $table->string('image');
        $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down() {
        Schema::table('productsamudra', function (Blueprint $table) {
            $table->decimal('price', 10, 2)->change(); // Jika ingin rollback
        });
    }
};
