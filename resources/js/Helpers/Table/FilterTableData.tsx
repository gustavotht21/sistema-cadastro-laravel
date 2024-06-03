import {TChangeElement} from "@/types/forms";
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

export function SortBy(field: string, routeParameters?: Record<string, string>): void {
    const order: string = route().params.order;
    const direction: string = route().params.direction;

    let dir: string = order !== field
                      ? "asc"
                      : {
                          asc : "desc",
                          desc: "asc"
                      }[direction] || "asc";

    router.visit(route(route().current() as string, {
        ...route().params,
        order    : field,
        direction: dir,
        ...routeParameters,
    }));
}

