import { grid } from "ldrs";
import { useCountries } from "../contexts/CountryContext";

function Loader() {
  const { darkMode } = useCountries();
  grid.register();
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
}

export default Loader;
