// import React from "react";
import CountryList from "../components/CountryList";
import Filter from "../components/Filter";
import Header from "../components/Header";
import Search from "../components/Search";

function Main() {
  return (
    <>
      <Header />
      <main className="font-nunito px-4 sm:px-8 md:px-16">
        <div className="font-nunito flex flex-col lg:flex-row justify-between mt-32">
          <Search />
          <Filter />
        </div>
        <CountryList />
      </main>
    </>
  );
}

export default Main;
