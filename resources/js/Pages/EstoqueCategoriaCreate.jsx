import React from "react";
import {Head} from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.jsx";
import {Link, useForm} from "@inertiajs/inertia-react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import SecondaryButton from "@/Components/SecondaryButton.jsx";

export default function EstoqueCategoriaCreate({ auth }) {

    const { data, setData, post, processing, errors } = useForm({
        name: '',
        description: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault()
        post(route("estoque.categoria.create"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Cadastrar nova categoria</h2>}
        >
            <Head title="Cadastrar nova categoria" />

            <form onSubmit={submit} className={"flex justify-center"} method={"post"}>
                <div className={"w-3/4 mt-6"}>
                    <div className={"w-full mt-2"}>
                        <InputLabel htmlFor={"name"} value={"Nome"}/>
                        <TextInput
                            type="text"
                            id="name"
                            name="name"
                            value={data.name}
                            onChange={onHandleChange}
                            className="w-full"
                        />
                        <p className={'text-sm text-red-600'}>{errors.name}</p>
                    </div>
                    <div className={"w-full mt-2"}>
                        <InputLabel htmlFor={"description"} value={"Descrição"}/>
                        <TextInput
                            type="text"
                            id="description"
                            name="description"
                            value={data.description}
                            onChange={onHandleChange}
                            className="w-full"
                        />
                        <p className={'text-sm text-red-600'}>{errors.description}</p>
                    </div>
                    <div className={"w-full flex justify-between mt-6"}>
                        <Link href={route("estoque.categoria.index")}>
                            <SecondaryButton className={"bg-white focus:ring-indigo-500"} type={"button"}>Cancelar</SecondaryButton>
                        </Link>
                        <SecondaryButton
                            type={"submit"}
                            className={"bg-green-500 flex justify-center text-white bg-green-500 hover:bg-green-700 focus:ring-green-500"}>Cadastrar</SecondaryButton>
                    </div>
                </div>
            </form>

        </AuthenticatedLayout>
    )
}
