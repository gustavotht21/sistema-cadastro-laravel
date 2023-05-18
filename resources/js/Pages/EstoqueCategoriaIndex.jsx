import React from "react";
import {Link, useForm} from "@inertiajs/inertia-react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import TableCategories from "@/Components/TableCategories.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";
import Pagination from "@/Components/Pagination.jsx";
import TextInput from "@/Components/TextInput.jsx";
import {Head} from "@inertiajs/react";

export default function EstoqueCategoriaIndex({ auth, categories }) {

    const submit = e => {
        e.preventDefault()
        post(route('estoque.categoria.search'))
    }

    const { data, setData, post} = useForm({
        searchText: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Categorias cadastradas</h2>}
        >
            <Head title="Categorias cadastradas" />

            <div className="flex items-center justify-center mt-12 gap-x-6">
                <h2 className={"text-3xl"}>Lista de categorias</h2>
                <Link href={route('estoque.categoria.create')}>
                    <SecondaryButton className={"bg-green-500 text-white bg-green-500 hover:bg-green-700 focus:ring-green-500"}>Novo</SecondaryButton>
                </Link>
            </div>


            <form className={"flex justify-center"} onSubmit={submit}>
                <label htmlFor="default-search"
                       className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative mt-6 w-3/4">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none"
                             stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <TextInput type="search" id="searchText" name="searchText" value={data.searchText} onChange={onHandleChange} className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
                               placeholder="Buscar"/>

                        <button type="submit"
                                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Buscar
                        </button>
                </div>
            </form>




            <TableCategories categories={categories.data}/>

            <div className={'fixed bottom-0 left-0 right-0 mb-4'}>
                {categories.last_page !== 1 ? <Pagination registries={categories} /> : <></>}
            </div>

        </AuthenticatedLayout>
    )
}
