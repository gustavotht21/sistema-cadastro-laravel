<?php

use App\Models\Category;
use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\delete;

it('should unauthorized users cannot delete categories', function () {
    delete(route('categories.destroy', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ]),
    ]))
        ->assertRedirect(route('login'));

    $this->assertDatabaseHas('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 1);
});

it('should authorized users can delete categories', function () {
    actingAs(User::factory()->create());

    delete(route('categories.destroy', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
        ]),
    ]))->assertOk();

    $this->assertDatabaseMissing('categories', [
        'name'        => 'Category name',
        'description' => 'Category description',
    ]);
    $this->assertDatabaseCount('categories', 0);
});
