import React from "react";
import {twMerge} from "tailwind-merge";
import FilterGroupNavLink from "@/Components/FilterGroupNavLink";
import {TLink} from "@/types/routing";

export default function FilterGroup({
                                        searchRoute,
                                        buttons = [
                                            {
                                                text: "Active",
                                                link: "active",
                                            },
                                            {
                                                text: "Inactive",
                                                link: "inactive",
                                            },
                                        ]
                                    }: {
    searchRoute: string | TLink;
    buttons?: {
        text: string,
        link: string,
    }[];
}) {

    return <form
        method="GET"
        className={"w-full flex justify-center flex-wrap gap-6 my-6"}
    >
        {
            buttons.map((button: {
                text: string,
                link: string,
            }, index: number) => {
                return <FilterGroupNavLink
                    key={index}
                    searchRoute={searchRoute}
                    value={button.link}
                    className={twMerge(
                        route().params.status === button.link || button.link === buttons[0].link
                        ? "border-gray-400 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:border-gray-700"
                        : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-rose-300 dark:hover:border-rose-700 focus:text-gray-700 dark:focus:text-gray-300 focus:border-rose-300 dark:focus:border-rose-700"
                    )}
                >
                    {button.text}
                </FilterGroupNavLink>;
            })
        }
    </form>;
}
