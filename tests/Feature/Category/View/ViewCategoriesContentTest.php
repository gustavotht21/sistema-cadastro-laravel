<?php

use App\Models\Category;
use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\get;

it('should users can view categories content', function () {
    actingAs(User::factory()->create());

    Category::factory()->create([
        'name'        => 'New category',
        'description' => 'New category description',
    ]);

    get(route('categories.index'))
        ->assertOk()
        ->assertSee('New category')
        ->assertSee('New category description');
});

it('should users can order categories content by name', function () {
    actingAs(User::factory()->create());

    Category::factory()->create(['name' => 'Category A']);
    Category::factory()->create(['name' => 'Category B']);

    get(route('categories.index', [
        'order'     => 'name',
        'direction' => 'desc',
    ]))
        ->assertOk()
        ->assertSeeInOrder([
            'Category B',
            'Category A',
        ]);
});

it('should users can order categories content by description', function () {
    actingAs(User::factory()->create());

    Category::factory()->create(['description' => 'Category A description']);
    Category::factory()->create(['description' => 'Category B description']);

    get(route('categories.index', [
        'order'     => 'description',
        'direction' => 'desc',
    ]))
        ->assertOk()
        ->assertSeeInOrder([
            'Category B description',
            'Category A description',
        ]);
});

it('should users can order categories content by status', function () {
    actingAs(User::factory()->create());

    Category::factory()->create(['status' => true]);
    Category::factory()->create(['status' => false]);

    get(route('categories.index', [
        'order'     => 'description',
        'direction' => 'desc',
    ]))
        ->assertOk()
        ->assertSeeInOrder([
            'Inactive',
            'Active',
        ]);
});
