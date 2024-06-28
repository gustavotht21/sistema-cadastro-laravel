import {SVGAttributes} from "react";

export default function ApplicationLogo(props: SVGAttributes<SVGElement>) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" {...props}>
            <defs>
                <style>{".cls-4{fill:#6c2e7c}"}</style>
            </defs>
            <g id="Icons">
                <path
                    d="M21 10.66V20a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h5.34a4 4 0 012.83 1.17l5.66 5.66A4 4 0 0121 10.66z"
                    fill="#f19b5f"
                />
                <path
                    d="M21 10.66V15a3 3 0 01-3 3H6a3 3 0 01-3-3V4a3 3 0 013-3h5.34a4 4 0 012.83 1.17l5.66 5.66A4 4 0 0121 10.66z"
                    fill="#ffce69"
                />
                <path
                    d="M20.64 9H16a3 3 0 01-3-3V1.36a4.089 4.089 0 011.17.81l5.66 5.66A4.089 4.089 0 0120.64 9z"
                    fill="#ffe5b6"
                />
            </g>
            <g
                data-name="Layer 4"
                id="Layer_4"
            >
                <path
                    className="cls-4"
                    d="M20.535 7.122l-5.656-5.658a4.981 4.981 0 00-1.417-.977c-.035-.018-.066-.04-.1-.055A4.984 4.984 0 0011.343 0H6a4 4 0 00-4 4v16a4 4 0 004 4h12a4 4 0 004-4v-9.343a4.968 4.968 0 00-.433-2.016.85.85 0 00-.055-.1 4.976 4.976 0 00-.977-1.419zM18.586 8H16a2 2 0 01-2-2V3.414zM20 20a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2h5.343a3 3 0 01.657.078V6a4 4 0 004 4h3.92a2.953 2.953 0 01.08.657z"
                />
                <path
                    className="cls-4"
                    d="M13 15h-2v-2a1 1 0 00-2 0v2H7a1 1 0 000 2h2v2a1 1 0 002 0v-2h2a1 1 0 000-2z"
                />
            </g>
        </svg>
    );
}
