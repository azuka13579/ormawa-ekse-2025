<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta name="description" content="Ormawa Eksekutif PKU IPB adalah organisasi mahasiswa tingkat PPKU yang menangani kesejahteraan dan problematika mahasiswa IPB. Bergabunglah dengan kami!" />
    <meta name="keywords" content="Ormawa Eksekutif PKU, Samudra Wirakarsa, Organisasi Mahasiswa IPB, PPKU IPB, BEM PPKU, organisasi kampus IPB, mahasiswa IPB, kegiatan mahasiswa IPB" />
    <meta name="author" content="Biro Riset Pengembangan" />
    
    <meta property="og:title" content="Ormawa Eksekutif PKU IPB | Samudra Wirakarsa" />
    <meta property="og:description" content="Ormawa Eksekutif PKU IPB adalah organisasi mahasiswa tingkat PPKU yang menangani kesejahteraan dan problematika mahasiswa IPB." />
    <meta property="og:image" content="https://ormawaeksekutifpku.com/img/Home1.png" />
    <meta property="og:url" content="https://ormawaeksekutifpku.com" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Ormawa Eksekutif PKU IPB | Samudra Wirakarsa" />
    <meta name="twitter:description" content="Ormawa Eksekutif PKU IPB adalah organisasi mahasiswa tingkat PPKU yang menangani kesejahteraan dan problematika mahasiswa IPB." />
    <meta name="twitter:image" content="https://ormawaeksekutifpku.com/img/Home1.png" />

    <link rel="icon" type="image/png" href="/favicon.ico">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Rowdies:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

    @viteReactRefresh
    @vite('resources/js/app.jsx')
    @inertiaHead
</head>
<body>
    @inertia

    <script src="https://code.jquery.com/jquery-3.7.1.js" integrity="sha256-eKhayi8LEQwp4NKxN+CfCh+3qOVUtJn3QNZ0TciWLP4=" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
    <script>
        AOS.init();
    </script>

    <!-- Schema Markup -->
    <script type="application/ld+json">
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Ormawa Eksekutif PKU IPB | Samudra Wirakarsa",
      "url": "{{ url()->current() }}"
    }
    </script>
</body>
</html>
