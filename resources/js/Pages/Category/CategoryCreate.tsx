import React, {ChangeEventHandler, FormEvent, FormEventHandler, ReactElement} from "react";
import Authenticated from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import {useForm} from "@inertiajs/react";
import {TChangeElement} from "@/types/forms";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import SuccessfullyTransition from "@/Components/SuccesfullyTransition";

type TForm = {
    name: string,
    description: string,
}

export default function CategoryCreate({auth}: PageProps): ReactElement {

    const {
        data,
        setData,
        errors,
        post,
        recentlySuccessful,
    } = useForm<TForm>({
        name       : "",
        description: "",
    });

    const onHandleChange: ChangeEventHandler = (e: TChangeElement<TForm>): void => {
        setData(e.target.name, e.target.value);
    };

    const submit: FormEventHandler = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        post(route("categories.store"));
    };

    return <Authenticated
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
            Category create
        </h2>}
    >

        <SuccessfullyTransition
            recentlySuccessful={recentlySuccessful}
            text={[
                "Category registered.",
            ]}
        />

        <form
            onSubmit={submit}
            className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 space-y-6"
        >

            <div>
                <InputLabel
                    htmlFor="name"
                    value="Name"
                />
                <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={onHandleChange}
                    isFocused={true}
                />
                <InputError message={errors.name}/>
            </div>

            <div>
                <InputLabel
                    htmlFor="description"
                    value="Description"
                />
                <TextInput
                    id="description"
                    name="description"
                    value={data.description}
                    onChange={onHandleChange}
                />
                <InputError message={errors.description}/>
            </div>

            <div className="w-full flex justify-end gap-4">
                <PrimaryButton>
                    Save
                </PrimaryButton>

                <SecondaryButton>
                    Cancel
                </SecondaryButton>
            </div>

        </form>
    </Authenticated>;
}
