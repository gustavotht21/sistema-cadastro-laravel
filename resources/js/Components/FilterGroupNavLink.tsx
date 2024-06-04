import {Link} from "@inertiajs/react";
import React, {ReactNode} from "react";
import {twMerge} from "tailwind-merge";
import {TLink} from "@/types/routing";

export default function FilterGroupNavLink({
                                               children,
                                               value,
                                               searchRoute,
                                               className,
                                               active,
                                           }:
                                               {
                                                   children: ReactNode,
                                                   value: string;
                                                   searchRoute: string | TLink;
                                                   active: boolean;
                                                   className?: string;
                                               }
) {
    const defaultUrlParameters: {
        status: string;
    } & Record<string, string | number> = {
        ...route().params,
        status: value,
    };

    return (
        <Link
            href={
                Array.isArray(searchRoute)
                ? route(searchRoute[0], {
                        ...searchRoute[1],
                        ...defaultUrlParameters
                    }
                )
                : route(searchRoute, {
                    ...defaultUrlParameters
                })
            }
            className="w-full"
        >
            <div
                className={
                    twMerge(
                        "w-full inline-flex justify-center items-center py-2 text-sm leading-5 transition duration-300 ease-in-out focus:outline-none rounded-lg",
                        active
                        ? "bg-white text-gray-900 font-semibold border border-gray-400 drop-shadow-lg"
                        : "dark:text-white font-regular dark:hover:bg-gray-700 hover:bg-gray-300",
                        className
                    )
                }
            >{children}</div>
        </Link>
    );
}
