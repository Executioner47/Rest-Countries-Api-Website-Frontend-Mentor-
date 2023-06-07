"use client";
import { useMyStore } from "@/utils/store";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BsArrowLeft } from "react-icons/bs";

let Page = ({ params }) => {
  const [country, getCountriesByName, getBorderName] = useMyStore((state) => [
    state.choosenCountry,
    state.getCountriesByName,
    state.getBorderName,
  ]);

  useEffect(() => {
    getCountriesByName(params.countryName);
  }, [params.countryName, getCountriesByName]);
  if (!country[0]) return null;

  return (
    <div className="dark:-bg--clr-Very-Dark-Blue-DMode dark:text-white h-full flex flex-col justify-center -bg--clr-Very-Light-Gray-LMode">
      <div className="container mx-auto p-5">
        <Link
          href="/"
          className="flex items-center mb-10 lg:mb-20 dark:-bg--clr-Dark-Blue-DMode shadow-lg dark:text-white dark:hover:-bg--clr-Very-Dark-Blue-DMode dark:hover:ring-2 -ring--clr-Dark-Blue-DMode transition-all w-fit px-6 py-2 rounded-md cursor-pointer"
        >
          <BsArrowLeft />
          <div className="ml-2">Back</div>
        </Link>
        <div className="flex lg:items-center flex-col lg:flex-row justify-center gap-10 lg:gap-20 mx-auto container md:p-0 ">
          <div className="itemLeft lg:w-1/2">
            <Image
              className="w-8/12 lg:w-11/12 h-full object-cover "
              src={country[0]?.flags.png}
              alt={country[0]?.name.common}
              width={300}
              height={500}
            />
          </div>
          <div className="itemRight lg:w-1/2">
            <div className="name text-3xl font-bold mb-6">
              {country[0]?.name.common}
            </div>
            <div className="containerItems flex flex-col lg:flex-row  lg:gap-20">
              <div className="left">
                <div className="description">
                  {country[0]?.name.nativeName ? (
                    <div className="nativeName mb-2">
                      <span className="text-lg">Native Name: </span>
                      <span className="text-gray-400">
                        {Object.values(country[0]?.name.nativeName)[0]
                          .official || "No Name"}
                      </span>
                    </div>
                  ) : null}
                  {country[0]?.population ? (
                    <div className="population mb-2">
                      <span className="text-lg">Population: </span>
                      <span className="text-gray-400">
                        {country[0]?.population}
                      </span>
                    </div>
                  ) : null}
                  <div className="region mb-2">
                    <span className="text-lg">Region: </span>
                    <span className="text-gray-400"> {country[0]?.region}</span>
                  </div>
                  {country[0]?.subregion ? (
                    <div className="subRegion mb-2">
                      <span className="text-lg">Sub Region: </span>
                      <span className="text-gray-400">
                        {country[0]?.subregion}
                      </span>
                    </div>
                  ) : null}
                  {country[0]?.capital ? (
                    <div className="capital mb-2 ">
                      <span className="text-lg">Capital: </span>
                      <span className="text-gray-400">
                        {country[0]?.capital[0] || "No Capital"}
                      </span>
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="right">
                {country[0]?.tld[0] ? (
                  <div className="topLevelDomain mb-2 ">
                    <span className="text-lg">Top Level Domain: </span>
                    <span className="text-gray-400">{country[0]?.tld[0]}</span>
                  </div>
                ) : null}
                {country[0]?.currencies ? (
                  <div className="currencies mb-2">
                    <span className="text-lg">Currencies: </span>
                    <span className="text-gray-400 ">
                      {Object.keys(country[0]?.currencies)[0]}
                    </span>
                  </div>
                ) : null}
                {country[0]?.languages ? (
                  <div className="languages">
                    <span className="text-lg">Languages: </span>
                    <span className="text-gray-400">
                      {Object.keys(country[0]?.languages)
                        .map(
                          (str) => str.charAt(0).toUpperCase() + str.slice(1)
                        )
                        .join(", ")}
                    </span>
                  </div>
                ) : null}
              </div>
            </div>
            {country[0]?.borders ? (
              <div className="borderCountries flex items-center self-center flex-wrap gap-2 mt-10">
                <div className="borderCountriesTitle text-lg">
                  Border Countries:
                </div>
                {country[0]?.borders.map((border, index) => {
                  if (border === "ISR") return null;
                  return (
                    <div
                      key={index}
                      onClick={() => getBorderName(border)}
                      className="borderCountryItem cursor-pointer
                      dark:-bg--clr-Dark-Blue-DMode shadow-lg dark:text-white dark:hover:-bg--clr-Very-Dark-Blue-DMode
                       dark:hover:ring-2 -ring--clr-Dark-Blue-DMode transition-all text-sm
                        bg-gray-200 px-10 rounded-md bg--clr-Very-Light-Gray-LMode dark:bg--clr-Very-Dark-Blue-DMode"
                    >
                      {border}
                    </div>
                  );
                })}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="container flex items-center justify-start mx-auto mb-10 -bg--clr-Dark-Blue-DMode"></div>
    </div>
  );
};

export default Page;
