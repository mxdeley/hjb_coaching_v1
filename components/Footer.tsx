import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-gray-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link
              href="https://flowbite.com"
              className="flex items-center justify-center md:justify-start"
            >
              <Image
                src="/hjbHeader.svg"
                className="mr-3 h-20"
                alt="Company Logo"
                width={100}
                height={80}
              />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6  md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Grow Muscle
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link href="/growmuscle" className="hover:underline text-sm">
                    Training Programs
                  </Link>
                </li>
                <li>
                  <Link href="/growmuscle" className="hover:underline text-sm">
                    Workout Tracker
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Build Endurance
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/buildendurance"
                    className="hover:underline text-sm"
                  >
                    Cardio Exercises
                  </Link>
                </li>
                <li>
                  <Link
                    href="/buildendurance"
                    className="hover:underline text-sm"
                  >
                    Hydration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Lose Weight
              </h2>
              <ul className=" text-gray-400">
                <li className="mb-4">
                  <Link href="/loseweight" className="hover:underline text-sm">
                    Diet Programs
                  </Link>
                </li>
                <li>
                  <Link href="/loseweight" className="hover:underline text-sm">
                    Calorie Tracker
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Eat Great
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <Link href="/eatgreat" className="hover:underline text-sm ">
                    Recipes
                  </Link>
                </li>
                <li>
                  <Link href="/eatgreat" className="hover:underline text-sm">
                    Nutrition
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <Link href="/" className="hover:underline">
              HJB Coaching™
            </Link>
            . All Rights Reserved.{" "}
            <Link href="/termsofservice" className="hover:underline">
              Terms of Service
            </Link>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <Link
              href="https://www.instagram.com/hjb_fit/"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram size={22} />
            </Link>

            <Link
              href="https://www.tiktok.com/@harrison_bickford?lang=en"
              className="text-gray-500 hover:text-white "
            >
              <BsTiktok size={22} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
