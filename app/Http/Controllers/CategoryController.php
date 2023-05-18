<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $query = trim($request->searchText);
        $categories = Category::select('id', 'name', 'description')
            ->where('name', 'LIKE', "%".$query."%")
            ->where('condition', '=', '1')
            ->orderBy('name')
            ->paginate(7);
        return Inertia::render("EstoqueCategoriaIndex", [
            'categories' => $categories,
            'searchText' => $query
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("EstoqueCategoriaCreate");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
           'name' => 'required'
        ]);

        $category = new Category();

        $category->name = $request->name;
        $category->description = $request->description;
        $category->condition = 1;
        $category->save();

        return redirect()->route("estoque.categoria.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Inertia::render("EstoqueCategoriaShow", [
            "category" => Category::find($id)
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render("EstoqueCategoriaEdit", [
            "category" => Category::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::find($id);

        $category->name = $request->name;
        $category->description = $request->description;
        $category->update();

        return redirect()->route("estoque.categoria.index");
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::find($id);

        $category->condition = 0;
        $category->update();

        return redirect()->route("estoque.categoria.index");
    }
}
