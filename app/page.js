"use client";
import { AiOutlineSearch } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

let getCountries = async () => {
  let response = await fetch("https://restcountries.com/v3.1/all");
  return response.json();
};

export default async function Home() {
  const [isOpen, setIsOpen] = useState(false);
  let countries = await getCountries();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="-bg--clr-Very-Dark-Blue-DMode text-white font-cfont">
      <div className="container m-auto">
        <div className="flex justify-between py-7">
          <div className="search relative">
            <input
              type="text"
              className="pl-12 pr-52 py-4 -bg--clr-Dark-Blue-DMode shadow-lg text-white rounded-lg focus:outline-none placeholder:text-white placeholder:text-sm"
              placeholder="Search for a country..."
            />
            <AiOutlineSearch className="absolute left-3 top-5 h-5 w-5 text-white" />
          </div>
          <div className="relative">
            <button
              className="flex items-center px-7 py-4 text-white shadow-lg -bg--clr-Dark-Blue-DMode rounded-md focus:outline-none"
              onClick={toggleMenu}
            >
              Filter by Region
              <AiFillCaretDown
                className={`ml-2 w-4 h-4 transition-transform duration-200 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <ul className="absolute top-14 left-0 z-10 w-40 py-2 mt-1 -bg--clr-Dark-Blue-DMode rounded-md shadow-lg">
                <li className="px-4 py-2 hover:-bg--clr-Very-Dark-Blue-DMode cursor-pointer">
                  Option 1
                </li>
                <li className="px-4 py-2 hover:-bg--clr-Very-Dark-Blue-DMode cursor-pointer">
                  Option 2
                </li>
                <li className="px-4 py-2 hover:-bg--clr-Very-Dark-Blue-DMode cursor-pointer">
                  Option 3
                </li>
              </ul>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {countries.map((country, index) => {
            let { name, flags, population, region, capital } = country;
            return (
              <div
                className="max-w-sm rounded overflow-hidden shadow-lg -bg--clr-Dark-Blue-DMode"
                key={index}
              >
                <Image
                  className="w-full h-56 mb-5"
                  src={flags.png}
                  alt={name.common}
                  width={500}
                  height={500}
                />
                <div className="px-6 py-4 mb-14">
                  <div className="font-bold text-xl mb-4">{name.common}</div>
                  <div className="details">
                    <div>
                      <span className="font-bold">Population: </span>
                      {population}
                    </div>
                    <div>
                      <span className="font-bold">Region: </span>
                      {region}
                    </div>
                    <div>
                      <span className="font-bold">Capital: </span>
                      {capital}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
