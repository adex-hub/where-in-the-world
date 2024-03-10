import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useCountries } from "./contexts/CountryContext";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

const Homepage = lazy(() => import("./pages/Homepage"));
const CountryDetails = lazy(() => import("./pages/CountryDetails"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export default function App() {
  const { countryData } = useCountries(); // Formerly country name

  if (countryData === null || undefined) return <Loader />;

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/:countryName" element={<CountryDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
