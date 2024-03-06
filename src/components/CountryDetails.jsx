import { useState } from "react";
import { useCountries } from "../contexts/CountryContext";
import BackButton from "./BackButton";
import Header from "./Header";
import BorderCountries from "./BorderCountries";
import Loader from "./Loader";

function CountryDetails() {
  const lastSegment = window.location.pathname.split("/").pop();
  const sanitizedSegment = lastSegment.includes("%20")
    ? lastSegment.replace(/%20/g, " ")
    : lastSegment;

  const { countryData } = useCountries();
  const clickedCountry = countryData.filter(
    (data) => data.name.common.toLowerCase() === sanitizedSegment
  );

  const [country] = useState(...clickedCountry);
  console.log(...clickedCountry);

  // These variables are created to due to the complexity of data extraction from the API
  // For the languages
  const langArray = Object.values(country.languages);
  const [languages] = useState(...[langArray.join(", ")]);
  console.log(languages);

  // For the currency
  const currencies = Object.values(country.currencies)[0].name;
  console.log(country.borders);

  if (!country.languages) return <Loader />;

  return (
    <>
      <Header />
      <div className="mt-6 p-5 flex flex-col justify-start text-vd_blue dark:text-white px-4 sm:px-8 md:px-16 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 lg:items-center">
        <BackButton />
        <div>
          <img src={country.flags.svg} className="mt-16 w-full" alt="flag" />
        </div>
        <div className="xl:ml-20">
          <div>
            <h2 className="font-bold text-2xl mb-2 mt-8 lg:mt-16">
              {country.name.common}
            </h2>
            <div className="sm:grid sm:grid-cols-2">
              <section className="mb-10">
                <p className="font-semibold text-sm leading-loose">
                  Native Name:{" "}
                  <span className="font-normal">{country.altSpellings[1]}</span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Population:
                  <span className="font-normal">
                    {country.population.toLocaleString()}
                  </span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Region:
                  <span className="font-normal"> {country.region}</span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Sub Region:
                  <span className="font-normal"> {country.subregion}</span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Capital:
                  <span className="font-normal"> {country.capital}</span>
                </p>
              </section>
              <section className="mb-10">
                <p className="font-semibold text-sm leading-loose">
                  Top level Domain:{" "}
                  <span className="font-normal">{country.tld}</span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Currencies: <span className="font-normal">{currencies}</span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Languages: <span className="font-normal">{languages}</span>
                </p>
              </section>
            </div>
          </div>
          <section className="sm:flex sm:flex-row sm:h-fit sm:items-center sm:gap-3 lg:col-[2]">
            <h3 className="font-medium text-xl sm:text-[20px] sm:font-normal md:text-[20px]">
              Border Countries:
            </h3>
            {country.borders === undefined && (
              <p className="dark:text-white text-vd_blue">
                {country.name.common} has no border countries
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {country.borders?.map((border, i) => (
                <BorderCountries key={i}>{border}</BorderCountries>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
