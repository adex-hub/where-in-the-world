import { useCountries } from "../contexts/CountryContext";
import CountryCard from "./CountryCard";
import "ldrs/grid";

function CountryList() {
  const { darkMode, countryData } = useCountries();

  if (countryData === null)
    return (
      <div className="absolute top-[50%] left-[45%] sm:left-[47.6%]">
        <l-grid
          size="60"
          speed="1.5"
          color={darkMode ? "white" : "black"}
        ></l-grid>
        <p className="dark:text-white text-vd_blue mt-1">loading...</p>
      </div>
    );

  return (
    <div className="mt-10 mx-auto w-full flex flex-col sm:gap-6 md:grid md:gap-6 md:grid-cols-2 md:place-items-center xl:grid-cols-4 justify-center items-center">
      {Array.from({ length: countryData.length }, (_, index) => (
        <CountryCard key={index} index={index} />
      ))}
    </div>
  );
}

export default CountryList;
