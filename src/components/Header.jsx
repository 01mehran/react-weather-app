// Context;
import { useToggleDashboard } from "@/context/DashboardContext";

// Image;
import { useImages } from "@images/useImages";
import { useState } from "react";

import { SearchBox } from "./SearchBox";

export const Header = () => {
  const { toggleDashboard } = useToggleDashboard();

  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  const toggleSearchBox = () => {
    setIsSearchBoxOpen((prev) => !prev);
  };

  return (
    <header className="bg-navy-light relative flex min-h-15 items-center justify-between px-4 py-2">
      {/* Search box */}
      <SearchBox isSearchBoxOpen={isSearchBoxOpen} toggleSearchBox={toggleSearchBox} />    

      {!isSearchBoxOpen && (
        <>
          <img
            src={useImages.menu}
            alt="menuIcon"
            onClick={toggleDashboard}
            className="w-8 cursor-pointer"
          />
          <h2 className="text-lightBlue text-[28px] font-bold">Weather</h2>
          <img
            className="cursor-pointer"
            src={useImages.search}
            alt="searchIcon"
            onClick={toggleSearchBox}
          />
        </>
      )}
    </header>
  );
};
