import { useImages } from "@images/useImages";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-2 px-4 bg-navy-light">
      <img src={useImages.menu} alt="menuIcon" className="w-8 cursor-pointer"/>
      <h2 className="font-bold text-[28px] text-lightBlue">Weather</h2>
      <img src={useImages.search} alt="searchIcon" />
    </header>
  );
};