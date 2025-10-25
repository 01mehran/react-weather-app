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
import axios from "axios";
import { MapSearchBox } from "./MapSearchBox";

export const Map = () => {
  const { GetGeoLocation, error, setError, isLoading, setPosition, position } =
    useGeoLocation();
  const navigate = useNavigate();
  const [locationName, setLocatioName] = useState(null);
  const { setSearch } = useInputSearchValue();
  const [errorMsg, setErrormsg] = useState("");

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
          const { data } = await axios(
            `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`,
          );
          if (data) {
            setLocatioName(data?.address);

            let cityName = data?.address?.city;
            if (!isEnglish(cityName)) {
              setErrormsg("No data found! search your location");

              setTimeout(() => {
                setErrormsg("");
              }, 3000);
            }
            if (cityName) {
              setSearch(cityName);
              await GetLocationWeather(cityName);
              navigate("/landingPage");
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

  return (
    <div className="h-dvh">
      <p className="absolute top-24 right-4 left-4 z-50 text-center text-sm font-medium text-red-700 shadow-sm">
        {error && error}
      </p>
      {/* MapSearchBox */}
      <MapSearchBox />

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
