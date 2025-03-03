<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Home | Admin</title>
</head>
<body>
    <a href="{{ route('addproker') }}">Tambah Proker</a>
    {{-- List Proker + tombol edit --}}
    <form action="" method="POST">
        @csrf
        <button type="submit">Keluar</button>
    </form>
</body>
</html>