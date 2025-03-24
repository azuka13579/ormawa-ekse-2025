<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Admin Samudra Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-100 min-h-screen flex items-center justify-center">
    
    <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">Login Admin Samudra Store</h2>
        
        @if ($errors->any())
            <div class="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                @foreach ($errors->all() as $error)
                    <p class="text-sm">{{ $error }}</p>
                @endforeach
            </div>
        @endif
        
        <form method="POST" action="{{ route('admin.login') }}" class="space-y-4">
            @csrf
            
            <div>
                <label class="block text-gray-700 font-medium">Email</label>
                <input type="email" name="email" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            
            <div>
                <label class="block text-gray-700 font-medium">Password</label>
                <input type="password" name="password" class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
    
            <button type="submit" class="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-200">
                Login
            </button>
            <p class="mt-6 text-center text-sm text-gray-500">
                Silahkan menghubungi admin risbang apabila ada masalah! <a href="https://wa.me/+6282179475296" class="font-medium text-indigo-600 hover:text-indigo-500">Hubungi Sekarang!</a>
            </p>
        </form>
    </div>
</body>
</html>
