<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Upload Image</title>
</head>
<body>
    <h2>Upload an Image</h2>

    @if(session('success'))
        <p style="color: green;">{{ session('success') }}</p>
        <img src="{{ asset('storage/' . session('image')) }}" width="300">
    @endif

    <form action="{{ url('/upload') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <label>Select Image:</label>
        <input type="file" name="image" required>
        <button type="submit">Upload</button>
    </form>

    @if($errors->any())
        <p style="color: red;">{{ $errors->first() }}</p>
    @endif
</body>
</html>
