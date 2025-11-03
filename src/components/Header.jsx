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
    <header className="bg-navy-light relative mx-auto flex min-h-15 w-full items-center justify-between px-4 py-2 md:bg-transparent xl:max-w-[800px] xl:translate-x-30 2xl:max-w-[1100px]">
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
