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
