import { createContext, useContext, useState } from "react";

const InputSearchContext = createContext();

export const InputSearchProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [search, setSearch] = useState("Tehran");

  const handleSearch = (e) => {
    e.preventDefault();

    if (location.trim()) {
      setSearch(location);
    }
    setLocation("");
  };
  const handleChange = (e) => {
    setLocation(e.target.value);
  };

  return (
    <InputSearchContext.Provider
      value={{
        location,
        setLocation,
        search,
        setSearch,
        handleSearch,
        handleChange,
      }}
    >
      {children}
    </InputSearchContext.Provider>
  );
};

export const useInputSearchValue = () => useContext(InputSearchContext);
