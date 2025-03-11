<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Admin Samudra Store</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-br min-h-screen flex items-center justify-center">
    
    <div class="w-full max-w-md p-6 font-montserrat bg-white rounded-lg shadow-lg transform transition duration-500">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login Admin Samudra Store</h2>
        
        <form method="POST" action="{{ route('admin.login') }}">
            @csrf
            
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold">Email:</label>
                <input type="email" name="email" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>
            
            <div class="mb-4">
                <label class="block text-gray-700 font-semibold">Password:</label>
                <input type="password" name="password" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required>
            </div>

            <button type="submit" class="w-full bg-blue-600 text-white font-bold py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                Login
            </button>
            
            
        </form>
    </div>

</body>
</html>
