import { useCountries } from "../contexts/CountryContext";
import CountryCard from "./CountryCard";

function CountryList() {
  const { countryData } = useCountries();

  return (
    <div className="mt-10 w-full flex flex-col sm:gap-6 md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 md:place-items-center xl:grid-cols-4 justify-center items-center">
      {Array.from({ length: countryData.length }, (_, index) => (
        <CountryCard key={index} index={index} />
      ))}
    </div>
  );
}

export default CountryList;
