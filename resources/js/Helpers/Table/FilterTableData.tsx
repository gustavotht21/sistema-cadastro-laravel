import {TChangeElement} from "@/types/forms";
import {TOrdering} from "@/types/search";
import {router} from "@inertiajs/react";

export function FilterItems<T extends object, TForm>(
    items: T[],
    e: TChangeElement<TForm>
): T[] {
    return items.filter((item: T) => {
        return Object
            .values(item)
            .some(item => item !== null
                && item?.toString()
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()));
    });
}

export function SortBy<T>(field: string, sorting: TOrdering<T>): void {
    let dir: string = sorting.order !== field
                      ? "asc"
                      : {
                          asc : "desc",
                          desc: "asc"
                      }[sorting.direction] || "asc";
    router.visit(`${route(route().current() as string, sorting.routeParameters)}?ordem=${field}&direcao=${dir}`);
}

