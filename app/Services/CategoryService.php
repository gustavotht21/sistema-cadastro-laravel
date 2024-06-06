<?php

namespace App\Services;

use App\Models\Category;

class CategoryService
{
    /**
     * @param array<string, string> $data
     */
    public function store(array $data): void
    {
        Category::query()->create([
            'name'        => $data['name'],
            'description' => $data['description'],
            'status'      => true,
        ]);
    }

    public function updateStatus(Category $category): void
    {
        $category->update([
            'status' => !$category->getAttribute('status'),
        ]);
    }

    /**
     * @param array<string, string> $data
     */
    public function update(array $data, Category $category): void
    {
        $category->update([
            'name'        => $data['name'],
            'description' => $data['description'],
        ]);
    }

    public function destroy(Category $category): void
    {
        $category->delete();
    }
}
