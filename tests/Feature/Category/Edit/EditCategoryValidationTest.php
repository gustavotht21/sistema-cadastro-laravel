<?php

use App\Models\Category;
use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\patch;

/*
 * Feature test
 */
it('should be able to edit a category', function () {
    $user = User::factory()->create();
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ]),
    ]), [
        'name'        => 'Updated category name',
        'description' => 'Updated category description',
    ])->assertOk();

    $this->assertDatabaseHas('categories', [
        'name'        => 'Updated category name',
        'description' => 'Updated category description',
    ]);
    $this->assertDatabaseMissing('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});

/*
 * Category name field validation
 */
it('should category has name', function () {
    $user = User::factory()->create();
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ])
    ]), [
        'description' => 'Updated category description',
    ])->assertSessionHasErrors([
        'name' => __('validation.required', ['attribute' => 'name']),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => null,
        'description' => 'Updated category description',
    ]);
    $this->assertDatabaseHas('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});

it('should category name has at least 3 characters', function () {
    $user = User::factory()->create();
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ])
    ]), [
        'name'        => 'Up',
        'description' => 'Updated category description',
    ])->assertSessionHasErrors([
        'name' => __('validation.min.string', [
            'attribute' => 'name',
            'min'       => 3
        ]),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => 'Up',
        'description' => 'Updated category description',
    ]);
    $this->assertDatabaseHas('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});

it('should category name has at most 255 characters', function () {
    $user = User::factory()->create();
    $name = str_repeat('a', 256);
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ])
    ]), [
        'name'        => $name,
        'description' => 'Updated category description',
    ])->assertSessionHasErrors([
        'name' => __('validation.max.string', [
            'attribute' => 'name',
            'max'       => 255
        ]),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => $name,
        'description' => 'Updated category description',
    ]);
    $this->assertDatabaseHas('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});

/*
 * Category description field validation
 */
it('should be able to update a category without description', function () {
    $user = User::factory()->create();
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ])
    ]), [
        'name'        => 'Updated category name',
        'description' => null,
    ])->assertOk();

    $this->assertDatabaseHas('categories', [
        'name'        => 'Updated category name',
        'description' => null,
    ]);
    $this->assertDatabaseMissing('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});

it('should category description can be bigger than 255 characters', function () {
    $user = User::factory()->create();
    $description = str_repeat('a', 256);
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ])
    ]), [
        'name'        => 'Updated category name',
        'description' => $description,
    ])->assertOk();

    $this->assertDatabaseHas('categories', [
        'name'        => 'Updated category name',
        'description' => $description,
    ]);
    $this->assertDatabaseMissing('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});

it('should a new category description has at least 8 characters', function () {
    $user = User::factory()->create();
    actingAs($user);

    patch(route('categories.update', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ])
    ]), [
        'name'        => 'Updated category name',
        'description' => 'Updated',
    ])->assertSessionHasErrors([
        'description' => __('validation.min.string', [
            'attribute' => 'description',
            'min'       => 8
        ]),
    ]);

    $this->assertDatabaseMissing('categories', [
        'name'        => 'Updated category name',
        'description' => 'Updated',
    ]);
    $this->assertDatabaseHas('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
});
