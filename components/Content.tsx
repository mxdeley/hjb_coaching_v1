import Image from "next/image";

const Content = () => {
  return (
    <section className="bg-gray-800">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-12 lg:px-6">
        <div className="font-light text-gray-400 sm:text-lg ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            We reinvent the wheel
          </h2>
          <p className="mb-4">
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick, but big enough to
            deliver the scope you want at the pace you need. Small enough to be
            simple and quick, but big enough to deliver the scope you want at
            the pace you need.
          </p>
          <p>
            We are strategists, designers and developers. Innovators and problem
            solvers. Small enough to be simple and quick.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Image
            className="w-full rounded-lg"
            src="/harrison2.jpeg"
            alt="office content 1"
            width={500}
            height={500}
          />
          <Image
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="/harrison3.jpeg"
            alt="office content 2"
            width={500}
            height={500}
          />
        </div>
      </div>
      <section className="bg-gray-900 ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <dl className="grid max-w-screen-md gap-8 mx-auto text-white sm:grid-cols-3 ">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">73M+</dt>
              <dd className="font-light text-gray-400 ">developers</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">1B+</dt>
              <dd className="font-light text-gray-400 ">contributors</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">4M+</dt>
              <dd className="font-light text-gray-400 ">organizations</dd>
            </div>
          </dl>
        </div>
      </section>
    </section>
  );
};

export default Content;
