import React from "react";
import {Link} from "@inertiajs/inertia-react";
import OptionsTable from "./OptionsTable";
import ComponentDelete from "./ComponentDelete";

export default function TableCategories({categories}) {

    const buttonText = ['Editar', 'Excluir']

    const dataAction = (item, id) => {
        switch (item) {
            case 'Editar':
                return (
                    <Link href={route('estoque.categoria.edit', [id])}
                          className="inline-flex items-center px-4 py-2 bg-zinc-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-zinc-500 active:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 transition ease-in-out duration-150 font-medium font-black hover:bg-zinc-800 text-white text-sm rounded border border-zinc-600"
                          type={"submit"}>{item}</Link>
                )
            case 'Excluir':
                const deleteComponentData = {
                    routePost: "estoque.categoria.delete",
                    item: "categoria",
                    id: id
                }
                return (
                    <ComponentDelete routePost={deleteComponentData.routePost} item={deleteComponentData.item}
                     id={deleteComponentData.id}/>
                )
        }
    }

    const buttons = (category) => {
        let button = []
        buttonText.map(action => {
            button.push(dataAction(action, category.id))
        })
        return button
    }

    return (
        <>
            <div className={"flex justify-center mt-12"}>
                <div className="w-3/4 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="table-fixed w-full text-sm text-left text-gray-700">
                        <thead className="text-xs uppercase bg-gray-700 text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Descrição
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Opções
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {categories.map((category) => {
                            return <tr className="bg-white border-b">
                                <td className="px-6 py-4 break-words">
                                    {category.id}
                                </td>
                                <td className="px-6 py-4 break-words">
                                    {category.name}
                                </td>
                                <td className="px-6 py-4 break-words">
                                    {category.description}
                                </td>
                                <td className="break-words">
                                    <OptionsTable buttons={buttons(category)} />
                                </td>
                            </tr>
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
