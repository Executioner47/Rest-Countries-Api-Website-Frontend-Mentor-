"use client";
import { useMyStore } from "@/utils/store";
import React, { useState } from "react";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";

function SearchFilterHeader({ regions }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString, setFilterByRegion] = useMyStore(
    (state) => [
      state.searchString,
      state.setSearchString,
      state.setFilterByRegion,
    ]
  );
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  regions.sort((a, b) => {
    if (a.length > b.length) return 1;
    if (a.length < b.length) return -1;
    return 0;
  });
  return (
    <div className="flex flex-col items-center md:items-start gap-y-6 md:gap-0 md:flex-row justify-between py-7">
      <div className="search relative">
        <input
          type="text"
          className="pl-12 pr-52 py-4 dark:-bg--clr-Dark-Blue-DMode shadow-lg dark:text-white rounded-lg focus:outline-none dark:placeholder:text-white placeholder:text-sm"
          placeholder="Search for a country..."
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
        />
        <AiOutlineSearch className="absolute left-3 top-5 h-5 w-5 dark:text-white -text--clr-Dark-Blue-DMode" />
      </div>
      <div className="relative">
        <button
          className="flex items-center px-7 py-4 bg-white dark:text-white shadow-lg dark:-bg--clr-Dark-Blue-DMode rounded-md focus:outline-none"
          onClick={toggleMenu}
          type="button"
        >
          Filter by Region
          <AiFillCaretDown
            className={`ml-2 w-4 h-4 transition-transform duration-200 transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <ul className="absolute top-14 left-0 z-10 w-40 py-2 mt-1 bg-white dark:-bg--clr-Dark-Blue-DMode rounded-md shadow-lg">
            <li
              className="px-4 py-2 dark:hover:-bg--clr-Very-Dark-Blue-DMode cursor-pointer hover:bg-gray-100"
              onClick={() => {
                setFilterByRegion("All");
                toggleMenu();
              }}
            >
              All
            </li>
            {regions.map((region, index) => (
              <li
                className="px-4 py-2 dark:hover:-bg--clr-Very-Dark-Blue-DMode cursor-pointer hover:bg-gray-100"
                key={index}
                onClick={() => {
                  setFilterByRegion(region);
                  toggleMenu();
                }}
              >
                {region}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default SearchFilterHeader;
