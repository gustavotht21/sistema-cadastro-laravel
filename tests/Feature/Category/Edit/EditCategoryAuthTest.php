<?php

use App\Models\Category;
use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;
use function Pest\Laravel\patch;

it('should not be able to not authenticated users access category edit page', function () {
    get(route('categories.edit', [
        'category' => Category::factory()->create(),
    ]))
        ->assertRedirect(route('login'));
});

it('should not be able to not authenticated users update a category', function () {
    patch(route('categories.update', [
        'category' => Category::factory()->create(),
    ]), [
        'name'        => 'Updated category name',
        'description' => 'Updated category description',
    ])->assertRedirect(route('login'));

    $this->assertDatabaseMissing('categories', [
        'name'        => 'Updated category name',
        'description' => 'Updated category description',
    ]);
    $this->assertDatabaseCount('categories', 1);
});

it('should be able to authenticated users access category edit page', function () {
    actingAs(User::factory()->create());

    get(route('categories.create', [
        'category' => Category::factory()->create(),
    ]))
        ->assertOk();
});
