// Libraries;
import { Link, useLocation } from "react-router-dom";

// Image;
import { useImages } from "@images/useImages";

export const Footer = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="bg-navy-dark fixed right-0 bottom-0 left-0 z-30 flex items-center justify-between px-4">
      <Link to="/landingPage">
        <img
          src={
            currentPath === "/landingPage" ? useImages.home : useImages.home2
          }
          alt="homeIcon"
          className="cursor-pointer"
        />
      </Link>

      <Link to="/dailyWeather">
        <img
          src={
            currentPath === "/dailyWeather"
              ? useImages.calendar2
              : useImages.calendar
          }
          alt="calendarIcon"
          className="cursor-pointer"
        />
      </Link>

      <Link to="">
        <img
          src={useImages.waterlevel}
          alt="waterlevelIcon"
          className="translate-x-2 -translate-y-2 transform cursor-pointer"
        />
      </Link>

      <Link to="/emergencyContact">
        <img
          src={
            currentPath === "/emergencyContact"
              ? useImages.emergency2
              : useImages.emergency
          }
          alt="emergencyIcon"
          className="-translate-y-0.5 transform cursor-pointer"
        />
      </Link>

      <Link to="/contactUs">
        <img src={useImages.radar} alt="radarIcon" className="cursor-pointer" />
      </Link>
    </footer>
  );
};
