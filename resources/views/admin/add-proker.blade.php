<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Tambah Proker | Admin</title>
</head>
<body>
    <form action="#" method="POST"  enctype="multipart/form-data">
        @csrf
        Nama Proker : <input type="text" name="namaproker" required>
        Tujuan : <input type="text" name="tujuan" required>
        Deskripsi : <textarea name="deskripsi" required></textarea>
        Gamber : 
        <input type="file" name="image" required>
        Tanggal dimulai proker : 
        <input type="date" name="startdate">
        Tanggal berakhir proker :
        <input type="date" name="enddate">
        <button type="submit">Simpan</button>
    </form>
</body>
</html>