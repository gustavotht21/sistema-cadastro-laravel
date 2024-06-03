<?php

use App\Models\Category;
use App\Models\User;
use function Pest\Laravel\actingAs;
use function Pest\Laravel\patch;

it('should unauthorized users cannot update category status', function () {
    patch(route('categories.updateStatus', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
            'status'      => 1,
        ]),
    ]))
        ->assertRedirect(route('login'));

    $this->assertDatabaseMissing('categories', [
        'status' => 0
    ]);
    $this->assertDatabaseHas('categories', [
        'status' => 1
    ]);
    $this->assertDatabaseCount('categories', 1);
});

it('should authorized users can update category status', function () {
    actingAs(User::factory()->create());

    patch(route('categories.updateStatus', [
        'category' => Category::factory()->create([
            'name'        => 'Category name',
            'description' => 'Category description',
            'status'      => 1,
        ]),
    ]))->assertOk();

    $this->assertDatabaseMissing('categories', [
        'status' => 1
    ]);
    $this->assertDatabaseHas('categories', [
        'status' => 0
    ]);
    $this->assertDatabaseCount('categories', 1);
});
