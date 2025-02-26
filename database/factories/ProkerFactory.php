<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Model>
 */
class ProkerFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'div_id' => 1,
            'nama' => $this->faker->name(),
            'start' => now()->toDateString(),
            'end' => now()->toDateString(),
            'image_path' => 'storage\images\img.jpeg',
            'deskripsi' => $this->faker->paragraph(3, false)
        ];
    }
}
