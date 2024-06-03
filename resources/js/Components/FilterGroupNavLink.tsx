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

    return (
        <Link
            href={
                Array.isArray(searchRoute)
                ? route(searchRoute[0], {
                        ...searchRoute[1],
                        ...route().params,
                        status: value,
                    }
                )
                : route(searchRoute, {
                    ...route().params,
                    status: value,
                })
            }
            className={
                "w-full"
            }
            name={"status"}
            value={value}
        >
            <div
                className={
                    twMerge(
                        "w-full inline-flex justify-center items-center py-2 text-sm leading-5 transition duration-300 ease-in-out focus:outline-none rounded-lg",
                        active
                        ? "bg-white text-gray-900 font-semibold border border-gray-400 drop-shadow-lg"
                        : "dark:text-white font-regular dark:hover:bg-gray-950/50 hover:bg-gray-300",
                        className
                    )
                }
            >{children}</div>
        </Link>
    );
}
