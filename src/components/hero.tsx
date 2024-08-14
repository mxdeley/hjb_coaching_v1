import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div>
      <Image
        src="/hjb-hero.webp"
        alt="Harrison Bickford"
        fill
        className="object-cover"
      />
    </div>
  );
};

export default Hero;
