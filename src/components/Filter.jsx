import { useCountries } from "../contexts/CountryContext";

function Filter() {
  const { selected, setSelected } = useCountries();

  return (
    <select
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      className="w-[248px] lg:w-[200px] dark:bg-dark_blue bg-white rounded-md p-4 shadow-md focus:outline-none mt-12 md:mt-4 lg:mt-0 dark:text-white text-vd_blue"
    >
      <option value="Filter by Region">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}

export default Filter;
