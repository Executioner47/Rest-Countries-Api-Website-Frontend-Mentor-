import { create } from "zustand";

export const useMyStore = create((set) => ({
  countries: [],
  regions: [],
  searchString: "",
  filterByRegion: "",
  choosenCountry: "",
  borderCountry: "",
  setSearchString: (searchString) => {
    set({ searchString });
  },
  setFilterByRegion: (filterByRegion) => {
    set({ filterByRegion });
  },
  getCountires: async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    let regions = [];
    data.forEach((country) => {
      if (country.region && !regions.includes(country.region)) {
        regions.push(country.region);
      }
    });
    let filteredData = data.filter(
      (country) => country.name.common !== "Israel"
    );
    set({ countries: filteredData, regions });
  },
  getCountriesByName: async (name) => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${name}?fullText=true`
    );
    const data = await res.json();
    set({ choosenCountry: data });
  },
  getBorderName: async (name) => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    let borderCountry = data.filter((country) => country.cca3.includes(name));
    set({ choosenCountry: borderCountry });
  },
}));
