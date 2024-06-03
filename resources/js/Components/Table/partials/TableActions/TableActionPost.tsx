import React, {FormEvent, ReactElement} from "react";
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
    message: string | ReactElement;
}) {
    const {patch} = useForm();

    const submit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        patch(route(routePost[0], routePost[1]));
    };

    return <form
        method={"post"}
        onSubmit={submit}
    >
        <PrimaryButton
            type="submit"
            className={className}
        >
            {message}
        </PrimaryButton>
    </form>;
}
