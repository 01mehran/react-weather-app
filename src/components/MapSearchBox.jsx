// Contexts;
import { usemap } from "@/context/MapContext";
import { useInputSearchValue } from "@/context/InputSearchContext";

// Libraries;
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Hooks;
import { useGeoLocation } from "@/hooks/useGeoLocation";

// Images;
import { useImages } from "@/assets/images/useImages";

export const MapSearchBox = () => {
  const navigate = useNavigate();

  const { setLocatioName, city, setCity } = usemap();
  const { GetGeoLocation, setPosition } = useGeoLocation();
  const { setSearch } = useInputSearchValue();

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    setIsLoading(true);
    try {
      const { data } = await axios(
        `https://nominatim.openstreetmap.org/search?format=json&q=${city}`,
      );

      if (data && data.length > 0) {
        const { lat, lon, name } = data[0];
        setPosition([parseFloat(lat), parseFloat(lon)]);
        setLocatioName({ name });
        setSearch(name);

        navigate("/landingPage");
        setIsLoading(false);
      }
    } catch (err) {
      console.error(err);
      setIsLoading(false);
    }

    setCity("");
  };

  return (
    <div className="absolute top-8 right-4 left-4 z-50 flex items-center gap-4 xl:left-16">
      <img
        src={useImages.mapArrowIcon}
        alt="back arrow"
        className="w-8 cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <div className="relative w-full">
        <form onSubmit={handleSubmit} className="relative md:mx-auto md:w-2xl">
          <input
            type="text"
            className="ring-navy h-10 w-full rounded-full border-0 bg-white px-13 font-medium shadow-lg ring-offset-[1px] outline-0 transition-all duration-300 placeholder:text-black/50 focus:ring-2"
            placeholder="Your location"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <img
            src={useImages.mapTelephoneIcon}
            alt="microghon icon"
            className="absolute top-1/2 right-14 -translate-y-1/2 cursor-pointer"
          />
          <img
            src={useImages.mapUserIcon}
            alt="user icon"
            className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          />
          {isLoading ? (
            <p className="border-navy absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 animate-spin rounded-full border-[3px] border-t-transparent"></p>
          ) : (
            <img
              src={useImages.mapLocationIcon}
              alt="map location"
              className="absolute top-1/2 left-4 w-6 -translate-y-1/2 cursor-pointer"
              onClick={GetGeoLocation}
              
            />
          )}
        </form>
      </div>
    </div>
  );
};
