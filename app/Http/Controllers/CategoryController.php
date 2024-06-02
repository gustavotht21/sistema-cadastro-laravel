<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Inertia\Response;

class CategoryController extends Controller
{

    public function __construct(
        private readonly CategoryService $categoryService
    )
    {
    }

    public function create(): Response
    {
        return $this->categoryService->index();
    }

    public function index(): void
    {
        //
    }

    public function store(StoreCategoryRequest $request): void
    {
        $this->categoryService->store($request->validated());
    }

    public function show(Category $category): void
    {
        //
    }

    public function edit(Category $category): void
    {
        //
    }

    public function update(UpdateCategoryRequest $request, Category $category): void
    {
        //
    }

    public function destroy(Category $category): void
    {
        //
    }
}
