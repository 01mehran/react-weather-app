// Libraries;
import { useState } from "react";

// Context;
import { useToggleDashboard } from "@/context/DashboardContext";

//Components;
import { SearchBox } from "./SearchBox";

// Images;
import { useImages } from "@images/useImages";

export const Header = () => {
  const { toggleDashboard } = useToggleDashboard();

  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);

  const toggleSearchBox = () => {
    setIsSearchBoxOpen((prev) => !prev);
  };

  return (
    <header className="bg-navy-light relative flex min-h-15 items-center justify-between px-4 py-2 small:max-w-[800px] mx-auto w-full  xl:translate-x-30 md:bg-transparent">
      {/* Search box */}
      <SearchBox
        isSearchBoxOpen={isSearchBoxOpen}
        toggleSearchBox={toggleSearchBox}
      />

      {!isSearchBoxOpen && (
        <>
          <img
            src={useImages.menu}
            alt="menu icon"
            onClick={toggleDashboard}
            className="w-8 cursor-pointer xl:hidden"
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
