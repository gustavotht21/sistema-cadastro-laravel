export type TOrdering<T> = {
    order: string;
    direction: string;
    routeParameters: Record<string, T>;
}
