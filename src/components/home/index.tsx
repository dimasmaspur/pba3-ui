import { Navbar } from "../global/Navbar"
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Rewards } from "@/components/home/Rewards";
import { Gallery } from "@/components/home/Gallery";
import { Contact } from "@/components/home/Contact";
import { Footer } from "../global/Footer";
export const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Quotes />
            <Rewards />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

