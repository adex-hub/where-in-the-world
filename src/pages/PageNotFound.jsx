import { Link } from "react-router-dom";
import Header from "../components/Header";

function PageNotFound() {
  return (
    <>
      <Header />
      <p className="absolute top-[50%] p-4 text-center flex left-[30%] text-vd_blue dark:text-white ">
        This is not the page you&apos;re looking for. Go{" "}
        <Link className="underline" to="/">
          back
        </Link>{" "}
        to explore more countries 😊{" "}
      </p>
    </>
  );
}

export default PageNotFound;
