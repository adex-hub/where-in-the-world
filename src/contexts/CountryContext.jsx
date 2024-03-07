import { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext();

const BASE_URL = "https://restcountries.com/v3.1/all";

const fetchCountries = async () => {
  const res = await fetch(`${BASE_URL}`);
  if (!res.ok) {
    throw new Error("Failed to fetch countries");
  }
  const data = await res.json();
  return data;
};

function CountriesProvider({ children }) {
  const [countryData, setCountryData] = useState(null);
  const [dataBank, setDataBank] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("Filter by Region");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove("dark");
      document.body.classList.remove("bg-bg_dark");
      document.body.classList.add("bg-bg_light");
    } else {
      document.documentElement.classList.add("dark");
      document.body.classList.add("bg-bg_dark");
      document.body.classList.remove("bg-bg_light");
    }
  }, [darkMode]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchCountries();

        setTimeout(setCountryData(data), 10000);
        setDataBank(data);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run only once

  // Derived state for search
  const searchedCountries =
    searchQuery.length > 0
      ? countryData.filter((data) =>
          data.name.common.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : countryData;

  // Derived state for filtering. This is a second order derived state, such that if a search is performed, It's results are within the selected filter.
  const selectedRegion =
    selected !== "Filter by Region"
      ? searchedCountries.filter((data) =>
          data.region.toLowerCase().includes(selected.toLowerCase())
        )
      : searchedCountries;

  return (
    <CountriesContext.Provider
      value={{
        countryData: selectedRegion,
        searchQuery,
        setSearchQuery,
        selected,
        setSelected,
        darkMode,
        setDarkMode,
        dataBank,
      }}
    >
      {children}
    </CountriesContext.Provider>
  );
}

function useCountries() {
  const context = useContext(CountriesContext);
  if (context === undefined)
    throw new Error(
      "CountriesContext was used outside of the CountriesProvider"
    );
  return context;
}

export { CountriesProvider, useCountries };
