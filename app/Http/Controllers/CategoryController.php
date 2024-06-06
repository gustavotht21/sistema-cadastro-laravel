<?php

namespace App\Http\Controllers;

use App\Http\Requests\IndexCategoryRequest;
use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Inertia\Inertia;
use Inertia\Response;

class CategoryController extends Controller
{
    public function __construct(
        private readonly CategoryService $categoryService
    )
    {
    }

    public function index(IndexCategoryRequest $request): Response
    {
        return Inertia::render('Category/CategoryIndex', [
            'categories' => Category::search(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render("Category/CategoryCreate");
    }

    public function store(StoreCategoryRequest $request): void
    {
        $this->categoryService->store($request->validated());
    }

    public function edit(Category $category): Response
    {
        return Inertia::render("Category/CategoryEdit", compact('category'));
    }

    public function updateStatus(Category $category): void
    {
        $this->categoryService->updateStatus($category);
    }

    public function update(UpdateCategoryRequest $request, Category $category): void
    {
        $this->categoryService->update($request->validated(), $category);
    }

    public function destroy(Category $category): void
    {
        $this->categoryService->destroy($category);
    }
}
