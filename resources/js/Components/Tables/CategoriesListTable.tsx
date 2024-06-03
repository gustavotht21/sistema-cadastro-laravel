import React, {ReactElement, useState} from "react";
import {Th} from "@/Components/Table/partials/Th";
import {ICategory} from "@/types";
import Tr from "@/Components/Table/partials/Tr";
import {TChangeElement} from "@/types/forms";
import FilterInput from "@/Components/FilterInput";
import {FilterItems, SortBy} from "@/Helpers/Table/FilterTableData";
import {Table} from "@/Components/Table";
import TableActionLink from "@/Components/Table/partials/TableActions/TableActionLink";
import Td from "@/Components/Table/partials/Td";
import TableActionDelete from "@/Components/Table/partials/TableActions/TableActionDelete";
import {PencilSquareIcon, TrashIcon, XCircleIcon} from "@heroicons/react/16/solid";
import {CheckCircleIcon} from "@heroicons/react/24/solid";
import TableActionPost from "@/Components/Table/partials/TableActions/TableActionPost";

type TForm = {
    name: string;
}

export default function CategoriesListTable({
                                                categories,
                                            }: {
    categories: ICategory[];
}) {
    const [showUsers, setShowUsers] = useState<ICategory[]>(categories);
    const onHandleChange = (e: TChangeElement<TForm>): void => {
        setShowUsers(FilterItems<ICategory, TForm>(categories, e));
    };

    return <>
        <FilterInput<TForm> onHandleChange={onHandleChange}/>

        <Table
            fixed
            head={<Tr>
                {[{
                    field: "name",
                    text : "Name"
                }, {
                    field: "description",
                    text : "Description"
                }, {
                    field: "status",
                    text : "Status"
                },].map((th: {
                    field: string,
                    text: string,
                }): ReactElement => <Th
                    ordering={{
                        field  : th.field,
                        onClick: () => SortBy(th.field)
                    }}
                    text={th.text}
                    key={th.field}
                />)}
                <Th text={"Actions"}/></Tr>}
            body={showUsers.map((category: ICategory, index: number) => {
                return <Tr
                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 border-b border-gray-100 dark:border-gray-700 text-sm text-gray-700 dark:text-gray-200"
                    key={index}
                >
                    <Td>{category.name}</Td>
                    <Td>{category.description}</Td>
                    <Td><span
                        className={
                            category.status
                            ? "text-emerald-500 dark:text-emerald-400 px-3 py-1 bg-emerald-200 dark:bg-emerald-800/50 rounded-md font-semibold"
                            : "text-rose-500 dark:text-rose-400 px-3 py-1 bg-rose-200 dark:bg-rose-800/50 rounded-md font-semibold"}
                    >
                            {category.status
                             ? "Active"
                             : "Inactive"}
                        </span></Td>
                    <Td className={"flex gap-2 justify-center flex-wrap"}>
                        {
                            <TableActionPost
                                routePost={["categories.updateStatus", {
                                    category: category.id
                                }]}
                                urlParameters={["categories", "order", "direction", "status"]}
                                message={category.status
                                         ? <XCircleIcon className="w-5 h-5"/>
                                         : <CheckCircleIcon className="w-5 h-5"/>}
                                className={category.status
                                           ? "bg-rose-500 dark:bg-rose-600 text-white dark:text-white hover:bg-rose-700 dark:hover:bg-rose-400 focus:bg-rose-500 dark:focus:bg-rose-700 active:bg-rose-700 dark:active:bg-rose-400 focus:ring-rose-500 dark:focus:ring-offset-rose-400"
                                           : "bg-emerald-500 dark:bg-emerald-600 text-white dark:text-white hover:bg-emerald-700 dark:hover:bg-emerald-400 focus:bg-emerald-500 dark:focus:bg-emerald-700 active:bg-emerald-700 dark:active:bg-emerald-400 focus:ring-emerald-500 dark:focus:ring-offset-emerald-400"}
                            />
                        }
                        <TableActionLink
                            redirectRoute={["categories.edit", {
                                category: category.id
                            }]}
                            message={<PencilSquareIcon className="w-5 h-5"/>}
                        />
                        <TableActionDelete
                            routePost={["categories.destroy", {
                                category: category.id
                            }]}
                            message={<TrashIcon className="w-5 h-5"/>}
                        />
                    </Td>
                </Tr>;


            })}
        />
    </>
        ;
}
