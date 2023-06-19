import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div>
      {/* MD and above */}
      <div className="hidden md:block relative isolate overflow-hidden bg-gray-800 py-24 sm:py-44">
        <Image
          src="/heroC.jpeg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-25"
          width={1097}
          height={845}
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-amber-400 to-amber-600 opacity-10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-amber-400 to-amber-600 opacity-10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 my-auto">
            <h2 className="text-4xl font-bold tracking-tight text-amber-400 sm:text-6xl text-center">
              Unlock your potential.
            </h2>
            <h3 className="text-lg leading-8 text-white text-center font-bold">
              Lets smash your goals together.
            </h3>
            <Link href="/programquiz">
              <button
                type="submit"
                className="block rounded-md bg-amber-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 w-[200px] mx-auto m-6"
              >
                Start your journey here!
              </button>
            </Link>

            {/* <p className="mt-6 text-md leading-8 text-white mb-20">
          A complete beginner or getting stage ready? Whatever your needs, I
          have you covered. Bespoke fitness and lifestyle coaching, which{" "}
          <span className="uppercase font-bold">guarantees</span> you will
          reach your goals.
        </p> */}
          </div>
        </div>
      </div>
      <div className="md:hidden relative isolate overflow-hidden bg-gray-800 py-24 sm:py-44">
        <Image
          src="/heroD.jpeg"
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center opacity-25"
          width={1097}
          height={845}
        />
        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-amber-400 to-amber-600 opacity-10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-amber-400 to-amber-600 opacity-10"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0 my-auto">
            <h2 className="text-4xl font-bold tracking-tight text-amber-400 sm:text-6xl text-center">
              Unlock your potential.
            </h2>
            <h3 className="text-lg leading-8 text-white text-center font-bold">
              Lets smash your goals together.
            </h3>
            <Link href="/programquiz">
              <button
                type="submit"
                className="block rounded-md bg-amber-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600 w-[200px] mx-auto m-6"
              >
                Start your journey here!
              </button>
            </Link>

            {/* <p className="mt-6 text-md leading-8 text-white mb-20">
          A complete beginner or getting stage ready? Whatever your needs, I
          have you covered. Bespoke fitness and lifestyle coaching, which{" "}
          <span className="uppercase font-bold">guarantees</span> you will
          reach your goals.
        </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
