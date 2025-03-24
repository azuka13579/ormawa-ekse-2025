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
            'risbang' => 'Biro Riset Pengembangan',
            'humas' => 'Biro Media Branding',
            'kemitraan' => 'Biro Kolaborasi dan Kemitraan',
            'internal' => 'Biro Internal',
            'sosling' => 'Departemen Sosial dan Lingkungan Hidup',
            'senbud' => 'Departemen Seni dan Budaya',
            'ekraf' => 'Departemen Ekonomi Kreatif',
            'kesma' => 'Departemen Advokasi Kesejahteraan Mahasiswa',
            'psdm' => 'Departemen Pengembangan Sumber Daya Mahasiswa',
            'kastrat' => 'Departemen Kajian dan Aksi Strategis',
            'akpres' => 'Departemen Akademik Prestasi',
            'olahraga' => 'Departemen Pemuda dan Olahraga'
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

