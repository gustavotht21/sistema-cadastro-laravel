import {Link} from "@inertiajs/react";
import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {TLink} from "@/types/routing";

export default function FilterGroupNavLink({
                                               children,
                                               value,
                                               searchRoute,
                                               className
                                           }:
                                               {
                                                   children: ReactNode,
                                                   value: string;
                                                   searchRoute: string | TLink;
                                                   className: string;
                                               }
) {

    return (
        <Link
            href={
                Array.isArray(searchRoute)
                ? route(searchRoute[0], [
                    searchRoute[1],
                    route().params
                ])
                : route(searchRoute, route().params)
            }
            className={twMerge("w-40 inline-flex justify-center items-center px-4 py-4 border-b-2 border-t-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none",
                className)}
            name={"status"}
            value={value}
            type={"submit"}
        >
            {children}
        </Link>
    );
}
