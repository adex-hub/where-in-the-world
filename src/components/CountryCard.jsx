import { Link } from "react-router-dom";
import { useCountries } from "../contexts/CountryContext";
import PropTypes from "prop-types";

CountryCard.propTypes = {
  index: PropTypes.number,
};

function CountryCard({ index }) {
  const { countryData, countryName, setCountryName } = useCountries();

  if (!countryData || !countryData[index]) return <p>Loading...</p>;
  const country = countryData[index];

  return (
    <Link to={{ pathname: `/${countryName}` }}>
      <div
        onMouseOver={() => setCountryName(country.name.common.toLowerCase())}
        className="dark:text-white text-vd_blue w-[327px] h-[416px] bg-white dark:bg-dark_blue dark:shadow-sm shadow-xl rounded-md mb-12 cursor-pointer hover:scale-105 duration-300"
      >
        <div className="flag">
          {countryData === null ? (
            <p>Loading...</p>
          ) : (
            <img
              src={country.flags.png}
              className="w-full h-[200px] rounded-t-md"
              alt=""
            />
          )}
        </div>
        <div className="pry-info p-8">
          <div className="country-name text-xl font-bold mb-4">
            {country.name.common}
          </div>
          <p className="font-medium leading-7">
            Population:{" "}
            <span className="font-normal">
              {country.population.toLocaleString()}
            </span>
          </p>
          <p className="font-medium leading-7">
            Region: <span className="font-normal">{country.region}</span>
          </p>
          <p className="font-medium leading-7">
            Capital: <span className="font-normal">{country.capital}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

// function CountryCard() {
//   const { countryData } = useCountries();

//   const [random, setRandom] = useState(null);

//   if (!countryData) return <p>Loading...</p>;
//   countryData && setRandom(Math.trunc(Math.random() * 250));
//   const country = countryData[random];

//   return (
//     <div className="text-white w-[327px] h-[416px] bg-dark_blue shadow-sm rounded-md mb-12">
//       <div className="flag">
//         {countryData === null ? (
//           <p>Loading...</p>
//         ) : (
//           <img src={country.flags.png} className="w-full rounded-t-md" alt="" />
//         )}
//       </div>
//       <div className="pry-info p-8">
//         <div className="country-name text-xl font-bold mb-4">
//           {country.name.common}
//         </div>
//         <p className="font-medium leading-7">
//           Population:{" "}
//           <span className="font-normal">
//             {country.population.toLocaleString()}
//           </span>
//         </p>
//         <p className="font-medium leading-7">
//           Region: <span className="font-normal">{country.region}</span>
//         </p>
//         <p className="font-medium leading-7">
//           Capital: <span className="font-normal">{country.capital[0]}</span>
//         </p>
//       </div>
//     </div>
//   );
// }

export default CountryCard;
