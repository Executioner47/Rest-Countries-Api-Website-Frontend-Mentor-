"use client";
import { useTheme } from "next-themes";
import React from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

function DarkModelToggle() {
  let { theme, setTheme } = useTheme();
  let [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <>
      {theme === "light" ? (
        <button
          className="flex items-center cursor-pointer"
          onClick={() => setTheme("dark")}
        >
          <BsFillMoonFill />
          <span className="ml-1 hidden sm:block">Dark Mode</span>
        </button>
      ) : (
        <button
          className="flex items-center cursor-pointer"
          onClick={() => setTheme("light")}
        >
          <BsFillSunFill />
          <span className="ml-1 hidden sm:block">Light Mode</span>
        </button>
      )}
    </>
  );
}

export default DarkModelToggle;
