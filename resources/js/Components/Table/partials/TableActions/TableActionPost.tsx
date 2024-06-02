import React, {FormEvent, ReactNode} from "react";
import {useForm} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {TLink} from "@/types/routing";

export default function TableActionPost({
                                            routePost,
                                            className = "",
                                            message,
                                        }: {
    routePost: TLink
    className?: string;
    message: string;
}) {
    const submit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        useForm().post(route(routePost[0], routePost[1]));
    };

    return <form
        method={"post"}
        onSubmit={submit}
    >
        <PrimaryButton
            type="button"
            className={className}
        >
            {message}
        </PrimaryButton>
    </form>;
}
