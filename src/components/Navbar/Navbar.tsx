import Link from "next/link";

import { LuFacebook, LuInstagram, LuTwitter, LuYoutube } from "react-icons/lu";
const Navbar = () => {
  return (
    <div className="py-2 border-b border-gray-300 hidden sm:block px-2 lg:px-0">
      <div className="flex justify-between">
        <div className="">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                className="font-semibold text-gray-600 hover:text-[#bd5ed1]"
                href="/signIn"
              >
                SIGN IN / JOIN
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-gray-600 hover:text-[#bd5ed1]"
                href="/blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-gray-600 hover:text-[#bd5ed1]"
                href="/about"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="font-semibold text-gray-600 hover:text-[#bd5ed1]"
                href="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-5 ">
          <div>
            <LuFacebook className="text-lg sm:text-xl text-gray-700 hover:text-[#bd5ed1]" />
          </div>
          <div>
            <LuInstagram className="text-lg sm:text-xl text-gray-700 hover:text-[#bd5ed1]" />
          </div>
          <div>
            <LuTwitter className="text-lg sm:text-xl text-gray-700 hover:text-[#bd5ed1]" />
          </div>
          <div>
            <LuYoutube className="text-lg sm:text-xl text-gray-700 hover:text-[#bd5ed1]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
