// import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { MdCancel } from "react-icons/md";
import { useCountries } from "../contexts/CountryContext";

function Search() {
  const { darkMode, searchQuery, setSearchQuery } = useCountries();

  return (
    <div className="flex items-center dark:bg-dark_blue bg-white shadow-md md:gap-2 pl-5 rounded-md w-full lg:w-[480px]">
      <BiSearch size={20} color={darkMode ? "white" : "grey"} />
      <input
        className="dark:bg-dark_blue bg-white focus:outline-none p-4 rounded-md dark:text-white text-vd_blue w-full"
        type="text"
        placeholder="Search for a country..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {searchQuery != "" && (
        <MdCancel
          size={18}
          color={darkMode ? "white" : "grey"}
          className={`z-20 mr-3 ${darkMode ? "bg-gray-200" : "bg-gray-900"}`}
          onClick={() => setSearchQuery("")}
        />
      )}
    </div>
  );
}

export default Search;
