import Image from "next/image";

export default function WhatWeOffer() {
  return (
    <div className="bg-gray-800 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Start your fitness journey today.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-3xl sm:grid-cols-2 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
          <div className="border rounded-xl p-3">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/muscle.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <h3 className="text-white text-center">Grow Muscle</h3>
          </div>
          <div className="border rounded-xl p-3">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 "
              src="/endurance.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <h3 className="text-white text-center">Build Endurance</h3>
          </div>
          <div className="border rounded-xl p-3">
            <Image
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="/loseWeight.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <h3 className="text-white text-center">Lose Weight</h3>
          </div>
          <div className="border rounded-xl p-3">
            <Image
              className="col-span-2 max-h-12 w-full object-contain  lg:col-span-1"
              src="/eatGreat.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <h3 className="text-white text-center">Eat Great</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
