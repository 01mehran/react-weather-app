import { createContext, useContext, useState } from "react";

export const MapContext = createContext();

export const MapProvider = ({ children }) => {
  const [locationName, setLocatioName] = useState(null);
  const [city, setCity] = useState("");

  return (
    <MapContext.Provider
      value={{ locationName, setLocatioName, city, setCity }}
    >
      {children}
    </MapContext.Provider>
  );
};

export const usemap = () => useContext(MapContext);
