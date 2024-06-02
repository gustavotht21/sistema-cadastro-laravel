<?php

use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\post;

/*
 * Feature test
 */
it('should be able to create a category', function () {
    $user = User::factory()->create();
    actingAs($user);

    post(route('categories.store'), [
        'name'        => 'New category',
        'description' => 'Category description',
    ])->assertOk();

    $this->assertDatabaseHas('categories', [
        'name'        => 'New category',
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 1);
});

/*
 * Category name field validation
 */
it('should category name cannot be nullable', function () {
    $user = User::factory()->create();
    actingAs($user);

    post(route('categories.store'), [
        'description' => 'Category description',
    ])->assertSessionHasErrors([
        'name' => __('validation.required', ['attribute' => 'name']),
    ]);

    $this->assertDatabaseMissing('categories', [
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 0);
});

it('should category name has at least 3 characters', function () {
    $user = User::factory()->create();
    actingAs($user);

    post(route('categories.store'), [
        'name'        => 'Ne',
        'description' => 'Category description',
    ])->assertSessionHasErrors([
        'name' => __('validation.min.string', [
            'attribute' => 'name',
            'min'       => 3
        ]),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => 'Ne',
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 0);
});

it('should category name has at most 255 characters', function () {
    $user = User::factory()->create();
    $name = str_repeat('a', 256);
    actingAs($user);

    post(route('categories.store'), [
        'name'        => $name,
        'description' => 'Category description',
    ])->assertSessionHasErrors([
        'name' => __('validation.max.string', [
            'attribute' => 'name',
            'max'       => 255
        ]),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => $name,
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 0);
});

/*
 * Category description field validation
 */
it('should category description be nullable', function () {
    $user = User::factory()->create();
    actingAs($user);

    post(route('categories.store'), [
        'name'        => 'New category',
        'description' => null,
    ])->assertOk();

    $this->assertDatabaseHas('categories', [
        'name'        => 'New category',
        'description' => null,
    ]);
    $this->assertDatabaseCount('categories', 1);
});

it('should category description has at least 8 characters', function () {
    $user = User::factory()->create();
    $description = str_repeat('a', 7);
    actingAs($user);

    post(route('categories.store'), [
        'name'        => 'New category',
        'description' => $description,
    ])->assertSessionHasErrors([
        'description' => __('validation.min.string', [
            'attribute' => 'description',
            'min'       => 8
        ]),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => 'New category',
        'description' => $description,
    ]);
    $this->assertDatabaseCount('categories', 0);
});

it('should category description be bigger than 255 characters', function () {
    $user = User::factory()->create();
    $description = str_repeat('a', 256);
    actingAs($user);

    post(route('categories.store'), [
        'name'        => 'New category',
        'description' => $description,
    ])->assertOk();

    $this->assertDatabaseHas('categories', [
        'name'        => 'New category',
        'description' => $description,
    ]);
    $this->assertDatabaseCount('categories', 1);
});
