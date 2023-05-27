import Content from "@/components/Content";
import WhatWeOffer from "@/components/WhatWeOffer";
import Contact from "@/components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <WhatWeOffer />
      <Content />
      <Contact />
    </main>
  );
}
