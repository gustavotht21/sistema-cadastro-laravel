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

    Category::factory()->create([
        'name'   => 'Category A',
        'status' => true,
    ]);
    Category::factory()->create([
        'name'   => 'Category B',
        'status' => false,
    ]);

    get(route('categories.index', [
        'order'     => 'status',
        'direction' => 'desc',
    ]))
        ->assertOk()
        ->assertSeeInOrder([
            'Category A',
            'Category B',
        ]);
});

it('should users cannot order categories content by invalid order', function () {
    $route = 'categories.index';
    actingAs(User::factory()->create());

    Category::factory()->create([
        'name' => 'Category A',
    ]);
    Category::factory()->create([
        'name' => 'Category B',
    ]);

    get(route($route));

    get(route($route, [
        'order'     => 'invalid',
        'direction' => 'desc',
    ]))
        ->assertRedirect(route($route, [
            'order'     => null,
            'direction' => null,
        ]));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'desc',
    ]));

    get(route($route, [
        'order'     => 'invalid',
        'direction' => 'desc',
    ]))
        ->assertRedirect(route($route, [
            'direction' => 'desc',
            'order'     => 'name',
        ]));
});

it('should users cannot order categories content by invalid direction', function () {
    $route = 'categories.index';
    actingAs(User::factory()->create());

    Category::factory()->create([
        'name'        => 'Category A',
        'description' => 'Category description A',
    ]);
    Category::factory()->create([
        'name'        => 'Category B',
        'description' => 'Category description B',
    ]);

    get(route($route));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'invalid',
    ]))
        ->assertRedirect(route($route, [
            'order'     => null,
            'direction' => null,
        ]));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'desc',
    ]));

    get(route($route, [
        'order'     => 'name',
        'direction' => 'invalid',
    ]))
        ->assertRedirect(route($route, [
            'direction' => 'desc',
            'order'     => 'name',
        ]));
});

it('should users cannot order categories content by invalid status', function () {
    $route = 'categories.index';
    actingAs(User::factory()->create());

    Category::factory()->create([
        'name'   => 'Category A',
        'status' => true,
    ]);
    Category::factory()->create([
        'name'   => 'Category B',
        'status' => false,
    ]);

    get(route($route));

    get(route($route, [
        'status' => 'invalid',
    ]))
        ->assertRedirect(route($route, [
            'status' => null,
        ]));

    get(route($route, [
        'status' => 'active',
    ]));

    get(route($route, [
        'status' => 'invalid',
    ]))
        ->assertRedirect(route($route, [
            'status' => 'active',
        ]));
});
