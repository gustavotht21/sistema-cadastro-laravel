<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin'       => Route::has('login'),
        'canRegister'    => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion'     => PHP_VERSION,
    ]);
})->name('welcome');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware([
    'auth',
    'verified'
])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [
        ProfileController::class,
        'edit'
    ])->name('profile.edit');
    Route::patch('/profile', [
        ProfileController::class,
        'update'
    ])->name('profile.update');
    Route::delete('/profile', [
        ProfileController::class,
        'destroy'
    ])->name('profile.destroy');

    Route::controller(CategoryController::class)->group(function () {
        Route::get('/categories', 'index')->name('categories.index');
        Route::get('/categories/create', 'create')->name('categories.create');
        Route::post('/categories/create', 'store')->name('categories.store');
        Route::get('/categories/{category}', 'show')->name('categories.show');
        Route::get('/categories/{category}/edit', 'edit')->name('categories.edit');
        Route::patch('/categories/{category}/edit', 'update')->name('categories.update');
        Route::delete('/categories/{category}/delete', 'destroy')->name('categories.destroy');
    });
});

require __DIR__ . '/auth.php';
