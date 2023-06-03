import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
function Header() {
  return (
    <header className="-bg--clr-Dark-Blue-DMode text-white font-cfont shadow-2xl">
      <div className="container flex justify-between m-auto py-7">
        <h1 className="text-2xl font-bold">Where in the world?</h1>
        <button className="flex items-center cursor-pointer">
          <BsFillMoonFill />
          <span className="ml-1">Dark Mode</span>
        </button>
      </div>
    </header>
  );
}

export default Header;
