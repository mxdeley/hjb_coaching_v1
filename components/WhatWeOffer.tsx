import Image from "next/image";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Link from "next/link";

export default function WhatWeOffer() {
  return (
    <div className="bg-gray-800 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="hidden sm:block text-center text-xl font-semibold leading-8 text-white">
          A complete beginner or getting stage ready? Whatever your needs, I’ve
          got you covered.
        </h2>
        <h2 className="text-center text-xl font-semibold leading-8 text-white">
          Bespoke fitness and lifestyle coaching that{" "}
          <span className="uppercase text-amber-400">guarantees</span> your
          goals will be reached.
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-1 items-center gap-x-8 gap-y-10 sm:max-w-3xl sm:grid-cols-2 sm:gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-4 ">
          <div className="border rounded-xl p-3">
            <h3 className="text-white text-center">
              <AlertDialog>
                <AlertDialogTrigger className="text-white">
                  <Image
                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 "
                    src="/muscle.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                  Grow Muscle
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Grow Muscle</AlertDialogTitle>
                    <AlertDialogDescription>
                      Struggling to increase your muscle mass? A training plan
                      tailored to your body mechanics is the perfect solution.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Link href="/growmuscle">Lets go.</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </h3>
          </div>

          <div className="border rounded-xl p-3">
            <h3 className="text-white text-center">
              <AlertDialog>
                <AlertDialogTrigger className="text-white">
                  <Image
                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 "
                    src="/endurance.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                  Build Endurance
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Build Endurance</AlertDialogTitle>
                    <AlertDialogDescription>
                      Unlock your full fitness potential with training
                      techniques specifically designed to increase your overall
                      endurance level, in and out of the gym.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Link href="/buildendurance">Lets go.</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </h3>
          </div>
          <div className="border rounded-xl p-3">
            <h3 className="text-white text-center">
              <AlertDialog>
                <AlertDialogTrigger className="text-white">
                  <Image
                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 "
                    src="/loseWeight.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                  Lose Weight
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Lose Weight</AlertDialogTitle>
                    <AlertDialogDescription>
                      Without effective and attainable training and meal plans,
                      losing weight can seem like climbing a mountain. Let me
                      help you shed that fat you hate and get beach body ready.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Link href="/loseweight">Lets go.</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </h3>
          </div>
          <div className="border rounded-xl p-3">
            <h3 className="text-white text-center">
              <AlertDialog>
                <AlertDialogTrigger className="text-white">
                  <Image
                    className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 "
                    src="/eatGreat.svg"
                    alt="Reform"
                    width={158}
                    height={48}
                  />
                  <h3>Eat Great</h3>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Eat Great</AlertDialogTitle>
                    <AlertDialogDescription>
                      Food is fuel. You may currently underestimate the power
                      food has on your training and even overall quality of
                      life. Meal plans take the guess work out of it and let you
                      focus on your training while indulging in a variety of
                      tasty and healthy options.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>
                      <Link href="/eatgreat">Lets go</Link>
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
