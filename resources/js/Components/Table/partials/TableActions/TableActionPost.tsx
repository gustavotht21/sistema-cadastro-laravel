import React, {FormEvent, ReactElement} from "react";
import {router, useForm} from "@inertiajs/react";
import {TLink} from "@/types/routing";
import PrimaryButton from "@/Components/PrimaryButton";

export default function TableActionPost({
                                            routePost,
                                            urlParameters,
                                            className = "",
                                            message,
                                        }: {
    routePost: TLink;
    urlParameters: string[];
    className?: string;
    message: string | ReactElement;
}) {
    const {patch} = useForm();

    const submit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        patch(route(routePost[0], routePost[1]), {
            preserveScroll: true,
            onSuccess     : (): void => {
                router.visit(route(route().current() as string, {
                        ...route().params
                    }),
                    {
                        only          : [...urlParameters],
                        preserveScroll: true,
                    });
            }
        });
    };

    return <form
        method={"post"}
        onSubmit={submit}
    >
        <PrimaryButton
            className={className}
        >
            {message}
        </PrimaryButton>
    </form>;
}
