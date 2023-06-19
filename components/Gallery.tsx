import Image from "next/image";

const Gallery = () => {
  return (
    <div className="bg-gray-600 p-8 rounded-3xl">
      <h1 className="p-4 text-4xl tracking-tight font-extrabold text-amber-400 text-center mb-8">
        Check out some of the team wins.{" "}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={400}
            loading="lazy"
            height={80}
            src="/1.png"
            alt="progress pic"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={400}
            height={80}
            loading="lazy"
            src="/2.png"
            alt="progress pic"
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            width={400}
            height={80}
            loading="lazy"
            src="/3.png"
            alt=""
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/4.png"
            alt=""
            loading="lazy"
            width={400}
            height={80}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/10.png"
            loading="lazy"
            alt=""
            width={400}
            height={80}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/6.png"
            loading="lazy"
            alt=""
            width={400}
            height={80}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/9.png"
            loading="lazy"
            alt=""
            width={400}
            height={80}
          />
        </div>
        <div>
          <Image
            className="h-auto max-w-full rounded-lg"
            src="/7.png"
            loading="lazy"
            alt=""
            width={400}
            height={80}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
