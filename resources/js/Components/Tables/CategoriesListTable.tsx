import React, {ReactElement, useState} from "react";
import {Th} from "@/Components/Table/partials/Th";
import {ICategory} from "@/types";
import Tr from "@/Components/Table/partials/Tr";
import {TOrdering} from "@/types/search";
import {TChangeElement} from "@/types/forms";
import FilterInput from "@/Components/FilterInput";
import {FilterItems, SortBy} from "@/Helpers/Table/FilterTableData";
import {Table} from "@/Components/Table";
import TableActionLink from "@/Components/Table/partials/TableActions/TableActionLink";
import Td from "@/Components/Table/partials/Td";
import TableActionPost from "@/Components/Table/partials/TableActions/TableActionPost";
import TableActionDelete from "@/Components/Table/partials/TableActions/TableActionDelete";

type TForm = {
    name: string;
}

export default function CategoriesListTable({
                                                categories,
                                            }: {
    categories: ICategory[];
}) {

    const ordering: TOrdering<string> = {
        order          : route().params.order,
        direction      : route().params.direction,
        routeParameters: {
            status: route().params.status,
        }
    };

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
                        onClick: () => SortBy<string>(th.field, ordering)
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
                    <Td>{category.description ?? "No description added"}</Td>
                    <Td>{category.status
                         ?
                         <span className="text-emerald-500 dark:text-emerald-600 px-3 py-1 bg-emerald-200 dark:bg-emerald-800/50 rounded-md font-semibold">
                            Active
                        </span>
                         :
                         <span className="text-rose-500 dark:text-rose-400 px-3 py-1 bg-rose-200 dark:bg-rose-800/50 rounded-md font-semibold">
                            Inactive
                        </span>}</Td>
                    <Td className={"flex gap-2 justify-center flex-wrap"}>
                        <TableActionLink
                            redirectRoute={["welcome", {
                                category: category.id
                            }]}
                            message={"Details"}
                        />
                        <TableActionPost
                            routePost={["welcome", {
                                category: category.id
                            }]}
                            message={"Edit"}
                        />
                        <TableActionDelete
                            routePost={["welcome", {
                                category: category.id
                            }]}
                        />
                    </Td>
                </Tr>;
            })}
        />
    </>;
}
