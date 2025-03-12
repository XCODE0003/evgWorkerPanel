<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/domain', function () {
    return Inertia::render('Domain');
});
Route::get('/statistics', function () {
    return Inertia::render('Statistics');
});

Route::get('/users', function () {
    return Inertia::render('Users');
});
Route::get('/user/{id}', function ($id) {
    return Inertia::render('User');
});

Route::get('/wallet', function () {
    return Inertia::render('Wallet');
});

Route::get('/promocode', function () {
    return Inertia::render('Promocode');
});


Route::get('/settings', function () {
    return Inertia::render('Settings');
});


require __DIR__ . '/auth.php';

