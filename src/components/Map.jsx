import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useImages } from "../assets/images/useImages";
import { useNavigate } from "react-router-dom";

export const Map = () => {
  const position = [51.505, -0.09];
  const navigation = useNavigate();
  return (
    <div className="h-dvh">
      {/* Search box */}
      <div className="absolute top-8 right-4 left-4 z-50 flex items-center gap-4">
        <img
          src={useImages.mapArrowIcon}
          alt="back arrow"
          className="w-8 cursor-pointer"
          onClick={() => navigation(-1)}
        />
        <div className="relative w-full">
          <input
            type="text"
            className="ring-navy h-10 w-full rounded-full border-0 bg-white px-13 font-medium shadow-lg ring-offset-[1px] outline-0 transition-all duration-300 placeholder:text-black/50 focus:ring-2"
            placeholder="Your location"
          />
          <img
            src={useImages.mapLocationIcon}
            alt="map location"
            className="absolute top-1/2 left-4 w-6 -translate-y-1/2 cursor-pointer"
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
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};
