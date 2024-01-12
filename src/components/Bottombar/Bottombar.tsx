import { RiLoginBoxLine } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { FaBlog } from "react-icons/fa";
import { MdRoundaboutRight } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import Link from "next/link";
const Bottombar = () => {
  return (
    <div className="sm:hidden">
      <div className="flex justify-around absolute bottom-0 bg-gray-200 text-gray-500 w-full py-6 shadow-md">
        <div>
          <Link href="/">
            <IoHome className="text-2xl" />
          </Link>
        </div>

        <div>
          <Link href="/signIn">
            <RiLoginBoxLine className="text-2xl" />
          </Link>
        </div>
        <div>
          <Link href="/blog">
            <FaBlog className="text-2xl" />
          </Link>
        </div>
        <div>
          <Link href="/about">
            <MdRoundaboutRight className="text-2xl" />
          </Link>
        </div>
        <div>
          <Link href="/contact">
            <BiSolidContact className="text-2xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
