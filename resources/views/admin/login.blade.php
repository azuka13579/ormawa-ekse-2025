<!DOCTYPE html>
<html lang="en" class="h-full bg-white">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Login Master</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="h-full">
    <div class="w-4/6 mx-auto flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white rounded-md shadow-lg p-5">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          {{-- <img class="mx-auto h-2 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"> --}}
          <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Login Admin Sakarsa</h2>
        </div>
        
        {{-- Retrieve Errors --}}
        @if ($errors->any())
            <div class="p-4 mb-4 text-sm text-red-900 rounded-lg bg-red-200" role="alert">
                <ul>
                    @foreach ($errors->all() as $error)
                        <li class="mx-2">{{ $error }}</li>
                    @endforeach
                </ul>
            </div>
        @endif

        <div class="mt-2 sm:mx-auto sm:w-full sm:max-w-sm w-3/4 mx-auto">
          <form class="space-y-6" action="#" method="POST">
            @csrf
            <div>
              <label for="nim" class="block text-sm/6 font-medium text-gray-900">Username</label>
              <div class="mt-2">
                <input type="text" name="nim" id="nim" autocomplete="nim" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required>
              </div>
            </div>
      
            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input type="password" name="password" id="password" autocomplete="current-password" required class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" required>
              </div>
            </div>
      
            <div>
              <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
            </div>
          </form>
      
          {{-- <p class="mt-10 text-center text-sm/6 text-gray-500">
            Not a member?
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
          </p> --}}
        </div>
    </div>
</body>
</html>
