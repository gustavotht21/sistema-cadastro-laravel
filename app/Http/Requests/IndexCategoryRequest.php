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
            'order'     => [
                'nullable',
                Rule::in('name', 'description', 'status')
            ],
            'direction' => [
                'nullable',
                Rule::in('asc', 'desc')
            ],
            'status'    => [
                'nullable',
                Rule::in('all', 'active', 'inactive')
            ],
        ];
    }
}
