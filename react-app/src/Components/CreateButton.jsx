import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
    <>
      <Link to="/createpost">
        <button className="btn bg-[#272B51] btn-xs sm:btn-sm md:btn-md lg:btn-lg  cursor-pointer rounded-full m-auto fixed bottom-20 right-5 text-6xl text-white z-50">
          +
        </button>
      </Link>
    </>
  );
}