// import React from "react";
import CountryList from "./CountryList";
import Filter from "./Filter";
import Header from "./Header";
import Search from "./Search";

function Main() {
  return (
    <>
      <Header />
      <main className=" px-4 sm:px-8 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between mt-7 lg:mt-16">
          <Search />
          <Filter />
        </div>
        <CountryList />
      </main>
    </>
  );
}

export default Main;
