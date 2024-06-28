import React, {ReactElement} from "react";
import {Link} from "@inertiajs/react";
import {User} from "@/types";

export default function InitialSection({user}: {
    user: User
}): ReactElement {

    return <section
        className="pt-24 bg-gray-900 dark:bg-gray-950 sm:pt-24 lg:pt-32 lg:pb-32 lg:overflow-hidden"
        id={"start"}
    >
        <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                        <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                            <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        Register System
                      </span>
                        </h1>
                        <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                            Um sistema simples de cadastro feito utilizando as melhores práticas em Laravel, em conjunto
                            com o ReactJS, InertiaJS, TailwindCSS e Docker.
                        </p>
                        <Link
                            className="block w-32 py-3 px-4 mt-6 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            href={route(user
                                        ? "dashboard"
                                        : "login")}
                            as="button"
                        >
                            {user
                             ? "Dashboard"
                             : "Entrar"}
                        </Link>
                    </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                        <img
                            className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                            src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>;
}
