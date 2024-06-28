import React from "react";
import WelcomeLayout from "@/Layouts/WelcomeLayout";
import {PageProps} from "@/types";
import SolutionSection from "@/Components/WelcomeComponents/SolutionSection";
import FeaturesSection from "@/Components/WelcomeComponents/FeaturesSection";
import BlogSection from "@/Components/WelcomeComponents/BlogSection";
import CTASection from "@/Components/WelcomeComponents/CTASection";
import InitialSection from "@/Components/WelcomeComponents/InitialSection";
import TeamSection from "@/Components/WelcomeComponents/TeamSection";
import {Head} from "@inertiajs/react";
import Footer from "@/Components/Footer";


export default function Welcome({auth}: PageProps) {
    return (
        <WelcomeLayout user={auth.user}>
            <Head title="Sistema Cadastro"/>

            <InitialSection user={auth.user}/>

            <SolutionSection/>

            <FeaturesSection/>

            <BlogSection/>

            <CTASection/>

            <TeamSection/>

            <Footer/>
        </WelcomeLayout>
    );
}
