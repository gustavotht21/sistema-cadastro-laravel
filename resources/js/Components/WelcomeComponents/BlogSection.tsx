import {blogPosts} from "@/Helpers/WelcomeLayout/Data";
import React, {ReactElement} from "react";

export default function BlogSection(): ReactElement {
    return <section
        className="relative bg-gray-50 dark:bg-gray-900 py-16 sm:py-24 lg:py-32"
        id="blog"
    >
        <div className="relative">
            <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">Aprenda</h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
                    Recursos úteis para você
                </p>
            </div>
            <div className="mt-12 mx-auto max-w-md px-4 gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:max-w-7xl flex flex-wrap justify-center">
                {blogPosts.map((post: {
                    date: string;
                    preview: string;
                    datetime: string;
                    author: { imageUrl: string; name: string; href: string };
                    imageUrl: string;
                    id: number;
                    href: string;
                    title: string;
                    category: { name: string; href: string };
                    readingLength: string
                }) => (
                    <div
                        key={post.id}
                        className="flex flex-col rounded-lg shadow-lg overflow-hidden max-w-sm"
                    >
                        <div className="flex-shrink-0">
                            <img
                                className="h-48 w-full object-cover"
                                src={post.imageUrl}
                                alt=""
                            />
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-800 p-6 flex flex-col justify-between">
                            <div className="flex-1">
                                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                                    <a
                                        href={post.category.href}
                                        className="hover:underline"
                                    >
                                        {post.category.name}
                                    </a>
                                </p>
                                <a
                                    href={post.href}
                                    className="block mt-2"
                                >
                                    <p className="text-xl font-semibold text-gray-900 dark:text-gray-100">{post.title}</p>
                                    <p className="mt-3 text-base text-gray-500 dark:text-gray-400">{post.preview}</p>
                                </a>
                            </div>
                            <div className="mt-6 flex items-center">
                                <div className="flex-shrink-0">
                                    <a href={post.author.href}>
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={post.author.imageUrl}
                                            alt={post.author.name}
                                        />
                                    </a>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                        <a
                                            href={post.author.href}
                                            className="hover:underline"
                                        >
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <div className="flex space-x-1 text-sm text-gray-500 dark:text-gray-400">
                                        <time dateTime={post.datetime}>{post.date}</time>
                                        <span aria-hidden="true">&middot;</span>
                                        <span>{post.readingLength} de leitura</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
