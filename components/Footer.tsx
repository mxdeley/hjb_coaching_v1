import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="p-4 sm:p-6 bg-gray-900">
      <div className="mx-auto max-w-screen-xl">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a
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
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6  md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Grow Muscle
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/growmuscle" className="hover:underline text-sm">
                    Training Programs
                  </a>
                </li>
                <li>
                  <a href="/growmuscle" className="hover:underline text-sm">
                    Workout Tracker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase">
                Build Endurance
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/buildendurance" className="hover:underline text-sm">
                    Cardio Exercises
                  </a>
                </li>
                <li>
                  <a href="/buildendurance" className="hover:underline text-sm">
                    Hydration
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Lose Weight
              </h2>
              <ul className=" text-gray-400">
                <li className="mb-4">
                  <a href="/loseweight" className="hover:underline text-sm">
                    Diet Programs
                  </a>
                </li>
                <li>
                  <a href="/loseweight" className="hover:underline text-sm">
                    Calorie Tracker
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
                Eat Great
              </h2>
              <ul className="text-gray-400">
                <li className="mb-4">
                  <a href="/eatgreat" className="hover:underline text-sm ">
                    Recipes
                  </a>
                </li>
                <li>
                  <a href="/eatgreat" className="hover:underline text-sm">
                    Nutrition
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center ">
            © 2023{" "}
            <a href="/" className="hover:underline">
              HJB Coaching™
            </a>
            . All Rights Reserved.{" "}
            <a href="/termsofservice" className="hover:underline">
              Terms of Service
            </a>
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a
              href="https://www.instagram.com/hjb_fit/"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram size={22} />
            </a>

            <a
              href="https://www.tiktok.com/@harrison_bickford?lang=en"
              className="text-gray-500 hover:text-white "
            >
              <BsTiktok size={22} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
