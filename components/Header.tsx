"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Muscles, Endurance, LoseWeight, EatGreat } from "@/components/Images";
import React from "react";

const products = [
  {
    name: "Grow Muscle",
    description: "Grow your muscle",
    href: "/growmuscle",
    icon: Muscles,
  },
  {
    name: "Endurance",
    description: "Build your cardio.",
    href: "/buildendurance",
    icon: Endurance,
  },
  {
    name: "Lose Weight",
    description: "Your customers’ data will be safe and secure",
    href: "/loseweight",
    icon: LoseWeight,
  },
  {
    name: "Eat Great",
    description: "A diet is the foundation of your health and fitness.",
    href: "/eatgreat",
    icon: EatGreat,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-slate-800 border-b border-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <Image
              src="/hjbHeader.svg"
              className="mr-3 "
              alt="HJB Coaching Logo"
              width={100}
              height={80}
            />
          </Link>
        </div>
        {/* Open Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        {/* Navigation */}
        <div className=" divide-x-2 hidden lg:flex">
          <Popover.Group className=" flex lg:gap-x-6">
            <Popover className="relative ">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white ">
                Services
                <ChevronDownIcon
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg  ">
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon
                            // className="h-6 w-6 text-gray-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-800"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-red-800 hover:bg-gray-100"
                      >
                        <item.icon
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div> */}
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link
              href="/mystory"
              className="text-sm font-semibold leading-6 text-white"
            >
              My Story
            </Link>
            <Link
              href="/successstories"
              className="text-sm font-semibold leading-6 text-white"
            >
              Success Stories
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold leading-6 text-white mr-6"
            >
              Blog
            </Link>
          </Popover.Group>
          <div className="lg:flex hidden">
            <Link
              href="https://www.instagram.com/hjb_fit/"
              className="text-white px-6"
            >
              <FaInstagram size={22} />
            </Link>

            <Link
              href="https://www.tiktok.com/@harrison_bickford?lang=en"
              className="text-white "
            >
              <BsTiktok size={22} />
            </Link>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <Image
                className="h-8 w-auto"
                src="/hjbHeader.svg"
                alt=""
                width={100}
                height={100}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-600"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-800/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50">
                        Services
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-800 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50"
                >
                  My Story
                </Link>
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50"
                >
                  Success Stories
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-800 hover:bg-gray-50"
                >
                  Blog
                </Link>
              </div>
              <div className="py-6 flex">
                <Link
                  href="https://www.instagram.com/hjb_fit/"
                  className="text-gray-800"
                >
                  <FaInstagram size={22} />
                </Link>
                <Link
                  href="https://www.tiktok.com/@harrison_bickford?lang=en"
                  className="text-gray-800 px-6"
                >
                  <BsTiktok size={22} />
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
