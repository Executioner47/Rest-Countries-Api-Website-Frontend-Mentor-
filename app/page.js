"use client";
import SearchFilterHeader from "@/Components/SearchFilterHeader";
import { useMyStore } from "../utils/store";
import Image from "next/image";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  let [countries, regions, getCountries, searchString, filterByRegion] =
    useMyStore((state) => [
      state.countries,
      state.regions,
      state.getCountires,
      state.searchString,
      state.filterByRegion,
    ]);
  useEffect(() => {
    getCountries();
  }, [getCountries]);
  return (
    <main className="dark:-bg--clr-Very-Dark-Blue-DMode dark:text-white -bg--clr-Very-Light-Gray-LMode  font-cfont">
      <div className="container m-auto">
        <SearchFilterHeader regions={regions} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center md:justify-items-stretch gap-6">
          {countries.map((country, index) => {
            let { name, flags, population, region, capital } = country;
            if (
              !name.common.toLowerCase().includes(searchString?.toLowerCase())
            )
              return null;
            if (
              filterByRegion &&
              filterByRegion !== "All" &&
              region !== filterByRegion
            ) {
              return false;
            }
            return (
              <Link
                href={`/country/${name.common}`}
                className="max-w-sm rounded overflow-hidden shadow-lg dark:-bg--clr-Dark-Blue-DMode"
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
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
