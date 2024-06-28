import React, {PropsWithChildren, ReactNode, useEffect, useState} from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import {Link} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {User} from "@/types";
import SecondaryButton from "@/Components/SecondaryButton";

export default function WelcomeLayout({
                                          header,
                                          user,
                                          children
                                      }: PropsWithChildren<{ user: User, header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    const [focusSection, setFocusSection] = useState<string>("");

    useEffect(() => {
        function handleScroll(): void {
            const sections: NodeListOf<HTMLElement> = document.querySelectorAll("section");
            sections.forEach((section: HTMLElement): void => {
                const firstSection: number = section.offsetTop;
                const lastSection: number = firstSection + section.offsetHeight;
                const scrollPosition: number = window.scrollY + window.innerHeight / 2;
                if (scrollPosition >= firstSection && scrollPosition <= lastSection)
                    setFocusSection(section.id);
            });
        }

        window.addEventListener("scroll", handleScroll);
        return (): void => window.removeEventListener("scroll", handleScroll);
    }, []);

    const activeNavLink = (index: string): boolean => {
        const windowHref: string[] = window.location.href.split("#");

        if (!windowHref[1] && !focusSection && index === "start")
            return true;

        return focusSection
               ? windowHref.length > 1
                 ? windowHref[1] === focusSection
                   ? windowHref[1] === index
                   : focusSection === index
                 : focusSection === index
               : windowHref[1] === index;
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
            <nav className="z-20 bg-white/75 dark:bg-gray-800/75 backdrop-blur-lg w-full fixed">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="shrink-0 flex items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800 dark:text-gray-200"/>
                                </Link>
                            </div>

                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                                {[{
                                    text   : "Início",
                                    section: "start",
                                }, {
                                    text   : "Solução",
                                    section: "solution",
                                }, {
                                    text   : "Ferramentas",
                                    section: "features",
                                }, {
                                    text   : "Blog",
                                    section: "blog",
                                }, {
                                    text   : "Suporte",
                                    section: "cta",
                                }].map(({text, section}: { text: string; section: string; }) => <NavLink
                                    href={`${route("welcome")}#${section}`}
                                    active={activeNavLink(section)}
                                    key={section}
                                >
                                    {text}
                                </NavLink>)}
                            </div>
                        </div>

                        <div className="hidden sm:flex sm:items-center sm:ml-6">
                            <div className="ml-3 relative flex gap-x-6">
                                <Link
                                    href={user
                                          ? route("dashboard")
                                          : route("login")}
                                >
                                    <PrimaryButton
                                        type="button"
                                    >
                                        {user
                                         ? "Dashboard"
                                         : "Entrar"}
                                    </PrimaryButton>
                                </Link>
                                <Link href={route("register")}>
                                    <SecondaryButton>
                                        Cadastro
                                    </SecondaryButton>
                                </Link>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 focus:outline-none focus:bg-gray-100 dark:focus:bg-gray-900 focus:text-gray-500 dark:focus:text-gray-400 transition duration-150 ease-in-out"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={!showingNavigationDropdown
                                                   ? "inline-flex"
                                                   : "hidden"}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={showingNavigationDropdown
                                                   ? "inline-flex"
                                                   : "hidden"}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={(showingNavigationDropdown
                                ? "block"
                                : "hidden") + " sm:hidden"}
                >
                    <div className="pt-2 pb-3 space-y-1">
                        {[{
                            text   : "Início",
                            section: "start",
                        }, {
                            text   : "Solução",
                            section: "solution",
                        }, {
                            text   : "Ferramentas",
                            section: "features",
                        }, {
                            text   : "Blog",
                            section: "blog",
                        }, {
                            text   : "Suporte",
                            section: "cta",
                        }].map(({text, section}: { text: string; section: string; }) => <ResponsiveNavLink
                            href={`${route("welcome")}#${section}`}
                            key={section}
                            active={activeNavLink(section)}
                        >
                            {text}
                        </ResponsiveNavLink>)}
                    </div>


                    <div className="pt-4 pb-1 border-t border-gray-200 dark:border-gray-600">
                        <div className="my-3 space-y-1">
                            <ResponsiveNavLink
                                href={user
                                      ? route("dashboard")
                                      : route("login")}
                            >
                                <PrimaryButton
                                    type="button"
                                >
                                    {user
                                     ? "Dashboard"
                                     : "Entrar"}
                                </PrimaryButton>
                            </ResponsiveNavLink>
                            <ResponsiveNavLink href={route("register")}>
                                <SecondaryButton>
                                    Cadastro
                                </SecondaryButton>
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            {header && (
                <header className="bg-white dark:bg-gray-800 shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
