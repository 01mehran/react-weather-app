//Icon;
import { IoClose } from "react-icons/io5";

export const SearchBox = ({ isSearchBoxOpen, toggleSearchBox }) => {
  return (
    <div
      className={`absolute top-1.5 left-0 w-full px-4 transition-transform duration-400 ease-in-out ${
        isSearchBoxOpen ? "translate-y-0" : "-translate-y-[500px]"
      }`}
    >
      <div className="relative w-full rounded-xl">
        <input
          type="text"
          className="bg-blue/90 text-navy h-12 w-full flex-1 rounded-md border-0 px-4 text-lg font-medium outline-0"
          placeholder="Enter your location..."
        />
        <button
          className="text-navy bg-blue/90 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full text-2xl shadow-md transition-colors duration-200 hover:text-red-700"
          onClick={toggleSearchBox}
        >
          <IoClose />
        </button>
      </div>
    </div>
  );
};
