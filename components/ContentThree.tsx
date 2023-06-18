import Image from "next/image";

const Content = () => {
  return (
    <section className="bg-gray-800">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-6 lg:px-6">
        <div className="hidden sm:grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/harrison4.jpeg"
            alt="office content 1"
            width={500}
            height={500}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/harrison5.jpeg"
            alt="office content 2"
            width={500}
            height={500}
          />
        </div>
        <div className="font-light text-gray-400 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-amber-400">
            More than gym experience...
          </h2>
          <p>
            My extensive experience working with professional athletes from
            Pro-boxers, Footballers and Bodybuilders has taught me a vast number
            of lessons that are embedded into my coaching. This is what sets HJB
            coaching apart from traditional online coaches that struggle to
            offer creative and adaptable plans for you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Content;
