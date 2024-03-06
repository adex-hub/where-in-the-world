import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCountries } from "./contexts/CountryContext";
import Homepage from "./components/Homepage";
import CountryDetails from "./components/CountryDetails";
import Loader from "./components/Loader";

export default function App() {
  const { countryData } = useCountries(); // Formerly country name

  if (countryData === null || undefined) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        {countryData.map((data, i) => (
          <Route
            key={i}
            path={`/${data.name.common.toLowerCase()}`}
            element={<CountryDetails />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route index element={<Homepage />} />
  //       <Route path={countryName} element={<CountryDetails />} />
  //     </Routes>
  //   </BrowserRouter>
  // );
}

{
  /*

export default function App() {
  const { countryData } = useCountries();

  if (countryData === null || undefined) return <p>Loading</p>;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        {Array.from({ length: countryData.length }, (data, i) => (
          <Route
            key={i}
            path={data?.name.common.toLowerCase()}
            element={<CountryDetails />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}


*/
}
