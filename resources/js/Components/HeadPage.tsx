import {Head} from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function HeadPage({title}: { title: string }) {
    return (
        <Head>
            <title>{title}</title>
            <link rel="icon"/>
        </Head>
    );
}
