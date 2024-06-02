import Authenticated from "@/Layouts/AuthenticatedLayout";
import {ICategory, PageProps} from "@/types";
import React from "react";
import CategoriesListTable from "@/Components/Tables/CategoriesListTable";
import PrimaryButton from "@/Components/PrimaryButton";
import {Link} from "@inertiajs/react";

export default function CategoryIndex({auth, categories}: PageProps<{
    categories: ICategory[];
}>) {
    return <Authenticated
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Category index
        </h2>}
    >

        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-end">
            <Link href={route("categories.create")}>
                <PrimaryButton
                    className=
                        "bg-emerald-500 dark:bg-emerald-600 text-white dark:text-white hover:bg-emerald-700 dark:hover:bg-emerald-400 focus:bg-emerald-500 dark:focus:bg-emerald-700 active:bg-emerald-700 dark:active:bg-emerald-400 focus:ring-emerald-500 dark:focus:ring-offset-emerald-400"
                >
                    New category
                </PrimaryButton>
            </Link>
        </div>

        <CategoriesListTable categories={categories}/>

    </Authenticated>;
};
