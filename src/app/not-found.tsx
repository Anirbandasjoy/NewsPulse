import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="h-[calc(100vh-250px)] flex justify-center items-center">
      <div className="flex justify-center flex-col items-center gap-3">
        <h1 className="text-4xl">Not Found</h1>
        <Link href="/">
          <button className="w-[6rem] bg-red-500 py-2 px-3 text-gray-100 text-xs">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
