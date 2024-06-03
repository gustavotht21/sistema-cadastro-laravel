import {Link} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton";
import {TLink} from "@/types/routing";
import {ReactElement} from "react";

export default function TableActionLink({
                                            redirectRoute,
                                            message,
                                            className = "",
                                        }: {
    redirectRoute: TLink;
    message: string | ReactElement;
    className?: string;
}) {
    return <Link
        href={
            Array.isArray(redirectRoute)
            ? route(redirectRoute[0], redirectRoute[1])
            : route(redirectRoute)
        }
    >
        <PrimaryButton
            type="button"
            className={className}
        >
            {message}
        </PrimaryButton>
    </Link>;
}
