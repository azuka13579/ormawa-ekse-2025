<!DOCTYPE html>
<html lang="en" class="h-full bg-gray-100">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Admin Sakarsa</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-full flex items-center justify-center">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <div class="text-center">
            <h2 class="text-2xl font-bold text-gray-900">Login Admin Sakarsa</h2>
            <p class="text-gray-500 mt-1">Silakan masuk untuk mengakses dashboard</p>
        </div>

        <!-- Retrieve Errors -->
        @if ($errors->any())
            <div class="mt-4 p-3 text-sm text-red-700 bg-red-100 rounded-md">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li>{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <form class="mt-6" action="#" method="POST">
            @csrf
            <div class="mb-4">
                <label for="nim" class="block text-sm font-medium text-gray-700">Username</label>
                <input type="text" name="nim" id="nim" required class="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            </div>

            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" required class="w-full mt-1 p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500">
            </div>

            

            <button type="submit" class="w-full py-2 px-4 text-white bg-indigo-600 hover:bg-indigo-500 rounded-md shadow-md text-sm font-semibold focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Masuk</button>
        </form>

        <p class="mt-6 text-center text-sm text-gray-500">
            Silahkan menghubungi admin risbang apabila ada masalah! <a href="https://wa.me/+6282179475296" class="font-medium text-indigo-600 hover:text-indigo-500">Hubungi Sekarang!</a>
        </p>
    </div>
</body>
</html>
