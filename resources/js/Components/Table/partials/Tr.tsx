import {ReactNode} from "react";

export default function Tr({children, className}: {
    children: ReactNode;
    className?: string;
}) {
    return <tr
        className={className}
    >
        {children}
    </tr>;
}
