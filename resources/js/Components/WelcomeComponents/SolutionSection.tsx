import lightPreview from "../../../../public/preview_light.webp";
import darkPreview from "../../../../public/preview_dark.webp";
import React, {ReactElement} from "react";

export default function SolutionSection(): ReactElement {
    return <section
        className="relative bg-gray-50 dark:bg-gray-900 pt-16 sm:pt-24 lg:pt-32"
        id={"solution"}
    >
        <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
            <div>
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                    Gestão de Simplificada
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight sm:text-4xl">
                    Sem mais problemas, apenas eficiência
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-gray-400">
                    Maximize a eficiência no trabalho. Simplifique processos, garanta a produtividade dentro do
                    ambiente de trabalho com uma interface fluída e amigável, em um sistema ágil e robusto.
                </p>
            </div>
            <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img
                    className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 dark:hidden"
                    src={lightPreview as string}
                    alt="Light Preview"
                />
                <img
                    className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 dark:ring-white dark:ring-opacity-10 hidden dark:block"
                    src={darkPreview as string}
                    alt="Dark Preview"
                />
            </div>
        </div>
    </section>;
}
