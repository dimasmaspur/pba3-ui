import { Navbar } from "../global/Navbar"
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Gallery } from "@/components/home/Gallery";
import { Contact } from "@/components/home/Contact";
import { Footer } from "../global/Footer";
export const HomePage: React.FC = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Quotes />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

