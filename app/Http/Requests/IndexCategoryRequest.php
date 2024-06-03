<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class IndexCategoryRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    /**
     * @return array<string, ValidationRule|array<string>|string>
     */
    public function rules(): array
    {
        return [
            'order'     => [Rule::in('name', 'description', 'status')],
            'direction' => [Rule::in('asc', 'desc')],
            'status'    => [Rule::in('all', 'active', 'inactive')],
        ];
    }
}
