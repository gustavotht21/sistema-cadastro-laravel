import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import TextInput from "@/Components/TextInput";
import React from "react";
import {TChangeElement} from "@/types/forms";

export default function FilterInput<TForm>({onHandleChange}: {
    onHandleChange: (e: TChangeElement<TForm>) => void;
}) {
    return <div className="w-full flex justify-center">
        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center gap-8 content-stretch">
            <div className="w-full relative">
                <div className="w-full absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <MagnifyingGlassIcon className="w-4 h-4 text-gray-500 dark:text-gray-400"/>
                </div>
                <TextInput
                    type="search"
                    id="search"
                    placeholder="Search"
                    className="ps-10 w-full"
                    onChange={onHandleChange}
                />
            </div>
        </div>
    </div>;
}
