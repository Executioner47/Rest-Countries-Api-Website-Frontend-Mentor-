import React from "react";
import DarkModelToggle from "./DarkModelToggle";
import Link from "next/link";
function Header() {
  return (
    <header className="dark:-bg--clr-Dark-Blue-DMode dark:text-white font-cfont border-gray-200 ">
      <div className="container px-5 md:px-0 flex justify-between m-auto py-7">
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold dark:text-white"
        >
          Where in the world?
        </Link>
        <DarkModelToggle />
      </div>
    </header>
  );
}

export default Header;
