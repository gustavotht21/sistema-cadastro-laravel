import React, {FormEvent, ReactElement} from "react";
import {router, useForm} from "@inertiajs/react";
import {TLink} from "@/types/routing";
import PrimaryButton from "@/Components/PrimaryButton";

export default function TableActionPost({
                                            routePost,
                                            resource,
                                            className = "",
                                            message,
                                        }: {
    routePost: TLink;
    resource: string;
    className?: string;
    message: string | ReactElement;
}) {
    const {patch} = useForm();

    const submit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        patch(route(routePost[0], routePost[1]), {
            onSuccess: () => {
                router.visit(route(route().current() as string), {only: [resource]});
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
