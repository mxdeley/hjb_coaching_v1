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

export default function WhatWeOffer() {
  return (
    <div className="bg-gray-800 py-16 sm:py-">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-white">
          Start your fitness journey today.
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
                    <AlertDialogTitle>
                      So you want to grow muscle?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Find my most efficient muscle building program here.
                      Remember tracking your progress is key to success.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Find out more...</AlertDialogAction>
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
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Find out more...</AlertDialogAction>
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
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Find out more...</AlertDialogAction>
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
                  Eat Great
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Find out more...</AlertDialogAction>
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
