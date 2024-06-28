import {features} from "@/Helpers/WelcomeLayout/Data";
import React, {ReactElement} from "react";

export default function FeaturesSection(): ReactElement {
    return <section
        className="relative bg-white dark:bg-gray-950 py-16 sm:py-24 lg:py-32"
        id={"features"}
    >
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            <h2 className="text-base font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                Sistema poderoso
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
                Tudo o que você precisa em um software
            </p>
            <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-400">
                Desenvolvido para atender as necessidades específicas da área, o sistema
                oferece uma ampla gama de funcionalidades que facilitam a operação diária:
            </p>
            <div className="mt-12">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {features.map((feature: {
                        name: string;
                        description: string;
                        icon: React.ForwardRefExoticComponent<React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
                            title?: string,
                            titleId?: string
                        } & React.RefAttributes<SVGSVGElement>>;
                    }) => (
                        <div
                            key={feature.name}
                            className="pt-6"
                        >
                            <div className="flow-root bg-gray-50 dark:bg-gray-800 rounded-lg px-6 pb-8">
                                <div className="-mt-6">
                                    <div>
                                    <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg">
                                        <feature.icon
                                            className="h-6 w-6 text-white"
                                            aria-hidden="true"
                                        />
                                    </span>
                                    </div>
                                    <h3 className="mt-8 text-lg font-medium text-gray-900 dark:text-gray-100 tracking-tight">
                                        {feature.name}
                                    </h3>
                                    <p className="mt-5 text-base text-gray-500 dark:text-gray-400">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>;
}
