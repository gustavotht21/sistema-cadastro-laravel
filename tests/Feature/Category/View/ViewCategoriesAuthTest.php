<?php

use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('should not authenticated users cannot access category index page', function () {
    get(route('categories.create'))
        ->assertRedirect(route('login'));
});

it('should authenticated users can access category index page', function () {
    actingAs(User::factory()->create());

    get(route('categories.create'))
        ->assertOk();
});
