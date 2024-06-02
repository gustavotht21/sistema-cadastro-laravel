import {CheckCircleIcon} from "@heroicons/react/24/solid";
import {Transition} from "@headlessui/react";
import React from "react";

interface ISuccessfullyTransition {
    recentlySuccessful: boolean;
    text: string | string[];
}

export default function SuccessfullyTransition({recentlySuccessful, text}: ISuccessfullyTransition) {
    return (
        <Transition
            show={recentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
        >
            <div
                className="fixed top-16 right-4 bg-white shadow-md dark:bg-gray-800 flex items-center p-4 justify-center gap-4 rounded-lg"
            >
                <CheckCircleIcon className="text-emerald-500 w-8"/>
                <div className={"max-w-xl"}>
                    {
                        Array.isArray(text)
                        ? text.map(
                            (line: string, index: number) => <p
                                key={index}
                                className="text-md text-emerald-600 dark:text-emerald-400 text-start"
                            >
                                {line}
                            </p>)
                        : <p className="text-md text-emerald-600 dark:text-emerald-400 text-start">{text}</p>
                    }
                </div>
            </div>
        </Transition>
    );
}
