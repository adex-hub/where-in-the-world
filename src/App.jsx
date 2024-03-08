import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCountries } from "./contexts/CountryContext";
import Homepage from "./components/Homepage";
import CountryDetails from "./components/CountryDetails";
import PageNotFound from "./components/PageNotFound";
import Loader from "./components/Loader";
import ThisWorks from "./components/ThisWorks";

export default function App(){
  const { countryData } = useCountries(); // Formerly country name

  if (countryData === null || undefined) return <Loader />;

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/:countryName" element={<CountryDetails />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="works" element={<ThisWorks />} />
      </Routes>
    </BrowserRouter>
  );
}
