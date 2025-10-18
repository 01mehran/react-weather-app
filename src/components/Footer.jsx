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
          className="w-6 cursor-pointer"
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
          className="w-6 cursor-pointer"
        />
      </Link>

      <Link to="/hourlyWeather">
        <img
          src={
            currentPath === "/hourlyWeather"
              ? useImages.waterlevel2
              : useImages.waterlevel
          }
          alt="waterlevelIcon"
          className="w-10 translate-x-2 -translate-y-2 transform cursor-pointer"
        />
      </Link>

      <Link to="/map">
        <img
          src={useImages.radar}
          alt="radarIcon"
          className="w-9 cursor-pointer"
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
          className="w-6 -translate-y-0.5 transform cursor-pointer"
        />
      </Link>
    </footer>
  );
};
