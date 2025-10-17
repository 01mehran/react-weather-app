import { createContext, useContext, useState, useEffect } from "react";
import { useWeatherData } from "@/context/WeatherContext";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [hourFormat, setHourFormat] = useState("24");
  const [dateFormat, setDateFormat] = useState("m");
  const [windSpeedUnit, setWindSpeedUnit] = useState("km/h");
  const [convertedWindSpeed, setConvertedWindSpeed] = useState(0);
  const { data: { windSpeed } = {} } = useWeatherData();

  useEffect(() => {
    const savedHourFormat = localStorage.getItem("hourFormat");
    const savedWindUnits = localStorage.getItem("windSpeedUnits");

    if (savedHourFormat) setHourFormat(savedHourFormat);
    if (savedWindUnits) setWindSpeedUnit(savedWindUnits);
  }, []);

  const handleHourFormat = (hourFormat) => {
    setHourFormat(hourFormat);

    localStorage.setItem("hourFormat", hourFormat);
  };

  const handleDateFormat = (dateFormat) => {
    setDateFormat(dateFormat);
  };

  const handleConvertWindSpeed = (windSpeedUnit) => {
    setWindSpeedUnit(windSpeedUnit);

    let newWindSpeed = windSpeed;

    switch (windSpeedUnit) {
      case "mph":
        newWindSpeed = windSpeed / 1.609;
        break;
      case "bf":
        if (windSpeed < 1) newWindSpeed = 0;
        else if (windSpeed <= 5) newWindSpeed = 1;
        else if (windSpeed <= 11) newWindSpeed = 2;
        else if (windSpeed <= 19) newWindSpeed = 3;
        else if (windSpeed <= 28) newWindSpeed = 4;
        else if (windSpeed <= 38) newWindSpeed = 5;
        else if (windSpeed <= 49) newWindSpeed = 6;
        else if (windSpeed <= 61) newWindSpeed = 7;
        else if (windSpeed <= 74) newWindSpeed = 8;
        else if (windSpeed <= 88) newWindSpeed = 9;
        else if (windSpeed <= 102) newWindSpeed = 10;
        else if (windSpeed <= 117) newWindSpeed = 11;
        else newWindSpeed = 12;
        break;

      default:
        newWindSpeed = windSpeed;
    }
    setConvertedWindSpeed(newWindSpeed);

    localStorage.setItem("windSpeedUnits", windSpeedUnit);
  };

  return (
    <SettingsContext.Provider
      value={{
        hourFormat,
        handleHourFormat,
        handleDateFormat,
        dateFormat,
        handleConvertWindSpeed,
        windSpeedUnit,
        convertedWindSpeed,
        windSpeedUnit,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
