import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useImages } from "@/assets/images/useImages";
import { useNavigate } from "react-router-dom";
import { Icon } from "leaflet";
import { useGeoLocation } from "@/hooks/useGeoLocation";
import { useState } from "react";
import { GetLocationWeather } from "../services/GetLocationWeather";
import { useInputSearchValue } from "../context/InputSearchContext";

export const Map = () => {
  const { GetGeoLocation, error, setError, isLoading, setPosition, position } =
    useGeoLocation();
  const navigation = useNavigate();
  const [locationName, setLocatioName] = useState(null);
  const [city, setCity] = useState("");
  const { setSearch } = useInputSearchValue();

  // Create custom icon;
  const customIcon = new Icon({
    iconUrl: `${useImages.mapMarker}`,
    iconSize: [38, 38],
  });

  const isEnglish = (lan) => {
    return /^[A-Za-z\s]+$/.test(lan);
  };

  //Send marker to current location;
  const ChangeMapMarker = ({ position }) => {
    const map = useMap();
    if (position) map.setView(position);
    return null;
  };

  // Get location clicking on map;
  const ClickHandler = () => {
    useMapEvents({
      async click(e) {
        const { lat, lng } = e.latlng;
        setPosition([lat, lng]);

        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
          );
          const data = await res.json();
          if (data) {
            setLocatioName(data?.address);

            let cityname = data?.address?.city;
            if (!isEnglish(cityname)) return;
            if (cityname) {
              setSearch(cityname);
              await GetLocationWeather(cityname);
            }
          }
        } catch (err) {
          console.error(err);
          setError(err.message);
        }
      },
    });
    return null;
  };

  // Submit;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          const { lat, lon, name } = data[0];
          setPosition([parseFloat(lat), parseFloat(lon)]);
          setLocatioName({ name });
          setSearch(name);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    setCity("");
  };

  return (
    <div className="h-dvh">
      <p className="absolute top-24 right-4 left-4 z-50 text-center text-sm font-medium text-red-700 shadow-sm">
        {error && error}
      </p>
      {/* Search box */}
      <div className="absolute top-8 right-4 left-4 z-50 flex items-center gap-4">
        <img
          src={useImages.mapArrowIcon}
          alt="back arrow"
          className="w-8 cursor-pointer"
          onClick={() => navigation(-1)}
        />
        <div className="relative w-full">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="ring-navy h-10 w-full rounded-full border-0 bg-white px-13 font-medium shadow-lg ring-offset-[1px] outline-0 transition-all duration-300 placeholder:text-black/50 focus:ring-2"
              placeholder="Your location"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </form>
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
        </div>
      </div>

      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        zoomControl={false}
        className="z-20 h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ClickHandler />

        <Marker position={position} icon={customIcon}>
          <Popup>
            {`${locationName?.country || "country"} ${locationName?.city || "city"}`}
          </Popup>
        </Marker>

        <ChangeMapMarker position={position} />

        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};
