import { Link } from "react-router-dom";

export default function CreateButton() {
  return (
    <>
      <Link to="/createpost">
        <button className=" bg-[#705D9D] btn-md md:btn-md lg:btn-lg  cursor-pointer rounded-full m-auto fixed bottom-20 right-5 text-3xl text-white z-50">
          +
        </button>
      </Link>
    </>
  );
}