import Content from "@/components/Content";
import WhatWeOffer from "@/components/WhatWeOffer";
import Contact from "@/components/Contact";
import ContentTwo from "@/components/ContentTwo";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import ContentThree from "@/components/ContentThree";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <Hero />
      <WhatWeOffer />
      <ContentTwo />
      <Content />
      <ContentThree />
      <Gallery />
      <Contact />
    </main>
  );
}
