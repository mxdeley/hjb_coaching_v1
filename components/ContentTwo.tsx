import {
  PresentationChartBarIcon,
  TrophyIcon,
  BookOpenIcon,
} from "@heroicons/react/20/solid";
import Image from "next/image";

const features = [
  {
    name: "Integrity:",
    description:
      "By delivering an honest and transparent training program, with constant communication throughout, I guarantee we will smash your goals together while also prioritising your health. ",
    icon: PresentationChartBarIcon,
  },
  {
    name: "Hard-work:",
    description:
      "A fundamental part of growth is being able to push the boundaries and leave our comfort zones. I strive to help all my team grow as we work together. ",
    icon: TrophyIcon,
  },
  {
    name: "Knowledge:",
    description:
      "Crucial to performance in and out of the gym. With 4 years practical and laboratory experience within the cutting-edge of S&C science, I have the knowledge available to create bespoke plans targeted at your unique body mechanics. ",
    icon: BookOpenIcon,
  },
];

export default function Example() {
  return (
    <div className="overflow-hidden bg- py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              {/* <h2 className="text-base font-semibold leading-7 text-amber-600">
                Consistency is key...
              </h2> */}
              <p className="mt-2 text-3xl font-bold tracking-tight text-amber-400 sm:text-4xl">
                So, why me?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-400">
                You should be able to trust your coach. And I understand this,
                so to provide the best service possible my core values are VERY
                strong.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-sm leading-7 text-gray-400 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-amber-600"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src="/hero.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[62rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
      <section className="bg-gray-900 mt-20 ">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <div className="grid max-w-screen-md gap-8 mx-auto text-amber-400 sm:grid-cols-3 ">
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">50</dt>
              <dd className="font-light text-white ">lbs lost</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">250+</dt>
              <dd className="font-light text-white ">km ran</dd>
            </div>
            <div className="flex flex-col items-center justify-center">
              <dt className="mb-2 text-3xl md:text-4xl font-extrabold">5</dt>
              <dd className="font-light text-white ">Team Members</dd>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
