import { createContext, useContext, useState, useEffect } from "react";

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [hourFormat, setHourFormat] = useState("24");

  useEffect(() => {
    const savedHourFormat = localStorage.getItem("hourFormat");

    if (savedHourFormat) setHourFormat(savedHourFormat);
  }, []);

  const handleHourFormat = (hourFormat) => {
    setHourFormat(hourFormat);

    localStorage.setItem("hourFormat", hourFormat);
  };

  return (
    <SettingsContext.Provider value={{ hourFormat, handleHourFormat }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);
