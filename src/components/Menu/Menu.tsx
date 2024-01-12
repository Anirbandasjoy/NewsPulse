import Link from "next/link";

const Menu = () => {
  return (
    <div className="mt-5">
      <div className="w-full py-[0.15rem] bg-[#bd5ed1] "></div>
      <div className="w-full h-14  bg-[#303030] flex items-center justify-center ">
        <ul className="flex items-center gap-1 sm:gap-5 ">
          <li>
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/add-articles"
            >
              Add Articles
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/all-articles"
            >
              All Articles
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/subscription"
            >
              Subscription
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/dashboard"
            >
              Dashboard
            </Link>
          </li>
          <li className="hidden lg:flex">
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/my-articles"
            >
              My Articles
            </Link>
          </li>
          <li className="hidden lg:flex">
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/premium-articles"
            >
              Premium Articles
            </Link>
          </li>
          <li className="hidden lg:flex">
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/premium-articles"
            >
              Premium Articles
            </Link>
          </li>
          <li className="hidden lg:flex">
            <Link
              className="font-semibold text-[10px] sm:text-[.9rem] text-gray-300 px-2  py-4 hover:bg-gray-900"
              href="/user-photo"
            >
              User Photo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
