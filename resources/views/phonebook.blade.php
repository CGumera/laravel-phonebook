<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Phonebook</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
    </head>
    <body>
        <div id="app">
            <my-header></my-header>
            <div class="container">
                <router-view></router-view>
            </div>
            <my-footer></my-footer>
        </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
