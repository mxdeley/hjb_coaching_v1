import Content from "@/components/Content";
import WhatWeOffer from "@/components/WhatWeOffer";
import Contact from "@/components/Contact";
import ContentTwo from "@/components/ContentTwo";
import Image from "next/image";
import Gallery from "@/components/Gallery";

export default function Home() {
  return (
    <main className="bg-gray-800">
      <WhatWeOffer />
      <Content />
      <ContentTwo />
      <Gallery />
      <Contact />
    </main>
  );
}
