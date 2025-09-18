// Image;
import { useImages } from "@images/useImages";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 px-4 left-0 right-0  bg-navy-dark flex justify-between items-center z-30">
      <img src={useImages.home} alt="homeIcon" className=" cursor-pointer" />
      <img
        src={useImages.calendar}
        alt="calendarIcon"
        className=" cursor-pointer "
      />
      <img
        src={useImages.waterlevel}
        alt="waterlevelIcon"
        className="transform -translate-y-2 translate-x-2  cursor-pointer"
      />
      <img src={useImages.radar} alt="radarIcon" className="  cursor-pointer" />
      <img
        src={useImages.emergency}
        alt="emergencyIcon"
        className=" transform -translate-y-0.5 cursor-pointer"
      />
    </footer>
  );
};
