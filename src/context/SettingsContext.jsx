import { createContext, useContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [hourFormat, setHourFormat] = useState("24");
  const [dateFormat, setDateFormat] = useState("m")

  useEffect(() => {
    const savedHourFormat = localStorage.getItem("hourFormat");

    if (savedHourFormat) setHourFormat(savedHourFormat);
  }, []);

  const handleHourFormat = (hourFormat) => {
    setHourFormat(hourFormat);

    localStorage.setItem("hourFormat", hourFormat);
  };

  const handleDateFormat = (dateFormat) => {
    setDateFormat(dateFormat)
  }

  return (
    <SettingsContext.Provider value={{ hourFormat, handleHourFormat, handleDateFormat, dateFormat }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
