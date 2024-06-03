import React from "react";
import FilterGroupNavLink from "@/Components/FilterGroupNavLink";
import {TLink} from "@/types/routing";

export default function FilterGroup({
                                        searchRoute,
                                        buttons = [
                                            {
                                                text: "All",
                                                link: "all",
                                            },
                                            {
                                                text: "Actives",
                                                link: "active",
                                            },
                                            {
                                                text: "Inactives",
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
        className={"max-w-3xl mx-auto p-1 mt-6 gap-2 flex justify-center items-center bg-gray-200 dark:bg-gray-800 rounded-lg"}
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
                    active={(route().params.status
                             ? route().params.status === button.link
                             : button.link === buttons[0].link
                    )}
                >
                    {button.text}
                </FilterGroupNavLink>;
            })
        }
    </form>;
}
