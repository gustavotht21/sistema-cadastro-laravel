<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Category extends Model
{
    use HasFactory;

    /**
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'description',
        'status',
    ];

    /**
     * @return Collection<int, Category>
     */
    public static function search(): Collection
    {
        return Category::query()
            ->select([
                'id',
                'name',
                'status',
                DB::raw("CASE WHEN description is null THEN 'No description added' ELSE description END as description"),
            ])
            ->when(!empty(request('status')), static function (Builder $builder) {
                $builder->when(request('status') === 'active', fn(Builder $builder) => $builder->where('status', 1));
                $builder->when(request('status') === 'inactive', fn(Builder $builder) => $builder->where('status', 0));
            })
            ->when(!empty(request('order')), function (Builder $builder) {
                return $builder->orderBy(request('order', 'name'), request('direction', 'asc'));
            })
            ->when(empty(request('order')), function (Builder $builder) {
                return $builder->orderBy('name');
            })
            ->get();
    }

    /**
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'status' => 'boolean',
        ];
    }
}
