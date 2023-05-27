import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";

export default function Header() {
  return (
    <header>
      <nav className="px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-6xl">
          <a href="/" className="flex items-center">
            <Image
              src="/hjbHeader.svg"
              className="mr-3 "
              alt="Flowbite Logo"
              width={100}
              height={80}
            />
          </a>
          <div className="flex items-center divide-x-2 font-light">
            <ul className="space-x-8 px-4">
              <a href="" className="text-white">
                My Story
              </a>
              <a href="" className="text-white">
                Blog
              </a>
              <a href="" className="text-white">
                Success Stories
              </a>
              <a href="" className="text-white">
                Contact
              </a>
            </ul>

            <div className="flex">
              {" "}
              <a href="" className="text-white px-4">
                <FaInstagram size={22} />
              </a>
              <a href="" className="text-white">
                <BsFacebook size={22} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
