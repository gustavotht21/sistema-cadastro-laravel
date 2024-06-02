<?php

use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;
use function Pest\Laravel\post;

it('should not be able to not authenticated users access category create page', function () {
    get(route('categories.create'))
        ->assertRedirect(route('login'));
});

it('should not be able to not authenticated users to create a new category', function () {
    post(route('categories.store'), [
        'name'        => 'New Category',
        'description' => 'Category description',
    ])->assertRedirect(route('login'));

    $this->assertDatabaseMissing('categories', [
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 0);
});

it('should be able to authenticated users access category create page', function () {
    actingAs(User::factory()->create());

    get(route('categories.create'))
        ->assertOk();
});
