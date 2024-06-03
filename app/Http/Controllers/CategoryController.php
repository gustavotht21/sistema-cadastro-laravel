<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCategoryRequest;
use App\Http\Requests\UpdateCategoryRequest;
use App\Models\Category;
use App\Services\CategoryService;
use Illuminate\Http\RedirectResponse;
use Inertia\Response;

class CategoryController extends Controller
{
    public function __construct(
        private readonly CategoryService $categoryService
    )
    {
    }

    public function index(): Response
    {
        return $this->categoryService->index();
    }

    public function create(): Response
    {
        return $this->categoryService->create();
    }

    public function store(StoreCategoryRequest $request): void
    {
        $this->categoryService->store($request->validated());
    }

    public function show(Category $category): void
    {
        //
    }

    public function edit(Category $category): Response
    {
        return $this->categoryService->edit($category);
    }

    public function updateStatus(Category $category): RedirectResponse
    {
        $this->categoryService->updateStatus($category);

        return redirect()->back();
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
