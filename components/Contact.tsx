import Image from "next/image";
import { HiChevronDown } from "react-icons/hi";

export default function Contact() {
  return (
    <section
      id="contact"
      className="flex justify-between max-w-6xl mx-auto bg-gray-800"
    >
      <div className="w-2/5 my-auto mx-auto bg-gray-800 relative h-full hidden lg:block">
        <Image
          src="/harrison1.png"
          width={200}
          height={160}
          alt="Harrison"
          sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                33vw"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="isolate bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 w-3/5 mx-auto">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        ></div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Lets get started on your fitness journey.
          </h2>
        </div>

        {/* Form */}
        <form
          action="#"
          method="POST"
          className="mx-auto mt-8 max-w-xl sm:mt-14"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            {/* FirstName */}
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border border-gray-400 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>
            {/* Last Name */}
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border border-gray-400 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>
            {/* Email */}
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border border-gray-400 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>
            {/* Phone Number */}
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <div className="absolute inset-y-0 left-0 flex items-center">
                  <label htmlFor="country" className="sr-only">
                    Country
                  </label>
                  <select
                    id="country"
                    name="country"
                    className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400  sm:text-sm appearance-none"
                  >
                    <option>EU</option>
                    <option>UK</option>
                    <option>US</option>
                  </select>
                  <HiChevronDown
                    className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  placeholder="+44 123 456 7890"
                  className="block w-full rounded-md border border-gray-400 px-3.5 py-2 pl-20 text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-transparent"
                />
              </div>
            </div>
            {/* Message */}
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm font-semibold leading-6 text-white"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full rounded-md border border-gray-400 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset placeholder:text-gray-400  sm:text-sm sm:leading-6 bg-transparent"
                  placeholder="What are your goals?"
                />
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-amber-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600"
            >
              Lets talk
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
