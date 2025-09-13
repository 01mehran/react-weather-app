// Context;
import { useToggleDashboard } from "@/context/DashboardContext";

// Image;
import { useImages } from "@images/useImages";

export const Header = () => {
  const { toggleDashboard } = useToggleDashboard();

  return (
    <header className="bg-navy-light flex items-center justify-between px-4 py-2">
      <img
        src={useImages.menu}
        alt="menuIcon"
        onClick={toggleDashboard}
        className="w-8 cursor-pointer"
      />
      <h2 className="text-lightBlue text-[28px] font-bold">Weather</h2>
      <img src={useImages.search} alt="searchIcon" />
    </header>
  );
};
