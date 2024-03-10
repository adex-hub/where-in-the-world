import { useEffect, useState } from "react";
import { useCountries } from "../contexts/CountryContext";
import BackButton from "../components/BackButton";
import Header from "../components/Header";
import BorderCountries from "../components/BorderCountries";
import Loader from "../components/Loader";
import { NavLink, useNavigate, useParams } from "react-router-dom";

function CountryDetails() {
  const { countryName } = useParams();
  const { countryData, dataBank } = useCountries();
  const navigate = useNavigate();

  const country = countryData.find(
    (data) => data.name.common.toLowerCase() === countryName
  );

  useEffect(
    function () {
      if (country === undefined) {
        navigate("*");
      }
    },
    [navigate, country]
  );

  console.log(country);

  // For the borders
  function borderNames(codes) {
    return codes?.map((code) => {
      const country = dataBank.find((data) => data.cca3 === code);
      return country ? country.name.common : null;
    });
  }
  const borders = country.borders ? borderNames(country.borders) : "";

  // These variables are created to due to the complexity of data extraction from the API
  // For the languages
  const langArray = Object.values(country.languages);
  const [languages] = useState(...[langArray.join(", ")]);
  console.log(languages);

  // For capital
  const capital =
    country.capital.length > 1 ? country.capital.join(", ") : country.capital;

  // For the currency
  const currencies = country.currencies
    ? Object.values(country.currencies)[0].name
    : "";

  if (!country.languages) return <Loader />;

  return (
    <>
      <Header />
      <div className="font-nunito mt-20 p-5 flex flex-col justify-start text-vd_blue dark:text-white px-4 sm:px-8 md:px-16 lg:mt-28 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-8 lg:items-center">
        <BackButton />
        <div>
          <img src={country.flags.svg} className="mt-16 w-full" alt="flag" />
        </div>
        <div className="xl:ml-20">
          <div>
            <h2 className="font-bold text-2xl mb-2 mt-8 lg:mt-16">
              {country.name.common}
            </h2>
            <div className="sm:grid sm:grid-cols-2 gap-8">
              <section className="mb-10">
                <p className="font-semibold text-sm leading-loose">
                  Native Name:{" "}
                  <span className="font-normal">{country.altSpellings[1]}</span>
                </p>
                <p className="font-semibold text-sm leading-loose">
                  Population:{" "}
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
                  <span className="font-normal"> {capital}</span>
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
          <section className="sm:flex sm:flex-row h-fit sm:items-start sm:gap-3 lg:col-[2]">
            <h3 className="font-medium text-xl mb-4 sm:mb-0 sm:text-[20px] sm:font-normal md:text-[20px]">
              Border&nbsp;Countries:
            </h3>
            {country.borders === undefined && (
              <p className="dark:text-white text-vd_blue">
                {country.name.common} has no border countries
              </p>
            )}
            <div className="flex flex-wrap gap-3">
              {borders
                ? borders.map((border, i) => (
                    <NavLink to={`/${border.toLowerCase()}`} key={i}>
                      <BorderCountries key={i}>{border}</BorderCountries>
                    </NavLink>
                  ))
                : null}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default CountryDetails;
