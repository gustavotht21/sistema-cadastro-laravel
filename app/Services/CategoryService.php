<?php

namespace App\Services;

use App\Models\Category;
use Inertia\Inertia;
use Inertia\Response;

class CategoryService
{
    public function index(): Response
    {
        return Inertia::render('Category/CategoryIndex', [
            'categories' => Category::search(),
        ]);
    }

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

    public function create(): Response
    {
        return Inertia::render("Category/CategoryCreate");
    }

    public function show(Category $category): void
    {
        //
    }

    public function edit(Category $category): Response
    {
        return Inertia::render("Category/CategoryEdit", [
            'category' => $category,
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
