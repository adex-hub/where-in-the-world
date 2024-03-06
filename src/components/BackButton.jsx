import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      className="flex bg-white dark:bg-dark_blue shadow-md lg:shadow-xl text-vd_blue dark:text-white px-4 py-2 lg:px-6 w-fit justify-center items-center gap-2 rounded-sm lg:col-span-full"
      onClick={(e) => {
        e.preventDefault();
        navigate(-1);
      }}
    >
      <FaArrowLeftLong />
      Back
    </button>
  );
}

export default BackButton;
