import Image from "next/image";
import { Inter } from "next/font/google";
import { HomePage } from "@/components/home";
import { Hero } from "@/components/home/Hero";
import { Quotes } from "@/components/home/Quotes";
import { Gallery } from "@/components/home/Gallery";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="bg-white">
      <HomePage />
      <Hero />
      <Quotes />
      <Gallery />
      <Contact/>
      <Footer/>
    </div>
  );
}
