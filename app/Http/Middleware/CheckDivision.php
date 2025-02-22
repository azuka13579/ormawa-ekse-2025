<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckDivision
{
    public function handle(Request $request, Closure $next): Response
    {
        // Daftar divisi yang diperbolehkan
        $allowedDivisions = [
            'risbang' => 'Riset dan Pengembangan',
            'humas' => 'Media Branding',
            'kemitraan' => 'Kolaborasi dan Kemitraan',
            'internal' => 'Internal',
            'sosling' => 'Sosial Lingkungan Hidup',
            'senbud' => 'Seni Budaya',
            'ekraf' => 'Ekonomi Kreatif',
            'kesma' => 'Advokasi Kesejahteraan Mahasiswa',
            'psdm' => 'Pengembangan Sumber Daya Mahasiswa',
            'kastrat' => 'Kajian Aksi Strategis',
            'akpres' => 'Akademik Prestasi',
            'olahraga' => 'Pemuda Olahraga'
        ];

        // Ambil parameter 'divisi' dari URL
        $divisi = $request->route('divisi');

        // Jika tidak ada di daftar, kembalikan 404 atau redirect ke halaman lain
        if (!in_array($divisi, $allowedDivisions)) {
            return redirect('/tentang');
        }

        return $next($request);
    }
}

