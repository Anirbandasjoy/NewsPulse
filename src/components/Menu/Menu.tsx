import Link from "next/link";

const Menu = () => {
  return (
    <div className="mt-5">
      <div className="w-full py-[0.15rem] bg-[#bd5ed1] "></div>
      <div className="w-full h-14  bg-[#303030] flex items-center justify-center sm:justify-start">
        <ul className="flex items-center gap-1 sm:gap-5 ml-1 sm:ml-9">
          <li>
            <Link
              className="font-semibold text-xs sm:text-[1.1rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/signIn"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-xs sm:text-[1.1rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/lifestyle"
            >
              Lifesyle
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-xs sm:text-[1.1rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/fashion"
            >
              Fashion
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-xs sm:text-[1.1rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/travel"
            >
              Travel
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-xs sm:text-[1.1rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/videos"
            >
              Videos
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-xs sm:text-[1.1rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/more"
            >
              More
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
