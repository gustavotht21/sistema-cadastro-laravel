import React, {ReactElement, SVGAttributes} from "react";
import {footerNavigation} from "@/Helpers/WelcomeLayout/Data";

export default function TeamSection(): ReactElement {

    const people: {
        name: string;
        role: string;
        imageUrl: string;
    }[] = [
        {
            name    : "Gustavo Casagrande Borges",
            role    : "Full-Stack Web Developer | Designer UI & UX",
            imageUrl:
                "https://github.com/gustavotht21.png",
        },
    ];

    return <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
                <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                    <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl text-gray-900 dark:text-white">
                        Nosso time
                    </h2>
                    <p className="text-xl text-gray-500 dark:text-gray-400">
                        Pessoas envolvidas no desenvolvimento desse sistema.
                    </p>
                </div>
                <ul
                    role="list"
                    className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
                >
                    {people.map((person: {
                            name: string;
                            role: string;
                            imageUrl: string;
                        }) => <li key={person.name}>
                            <div className="space-y-4">
                                <div className="aspect-w-3 aspect-h-2">
                                    <img
                                        className="object-cover shadow-lg rounded-lg"
                                        src={person.imageUrl}
                                        alt={`Foto do ${person.name}`}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <div className="text-lg leading-6 font-medium space-y-1">
                                        <h3 className="text-gray-900 dark:text-white">{person.name}</h3>
                                        <p className="text-indigo-600 dark:text-indigo-400">{person.role}</p>
                                    </div>
                                    <ul
                                        role="list"
                                        className="flex space-x-5"
                                    >
                                        {footerNavigation.social.map((item: {
                                            name: string;
                                            href: string;
                                            icon: (props: SVGAttributes<SVGElement>) => ReactElement
                                        }) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="text-gray-400 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-400"
                                                target="_blank"
                                            >
                                                <span className="sr-only">{item.name}</span>
                                                <item.icon
                                                    className="h-6 w-6"
                                                    aria-hidden="true"
                                                />
                                            </a>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    </div>;
}
