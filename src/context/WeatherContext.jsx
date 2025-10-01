// Libraries;
import { useQuery } from "@tanstack/react-query";

// Api;
import { GetLocationWeather } from "@/services/GetLocationWeather";

// Context;
import { createContext, useContext } from "react";
import { useInputSearchValue } from "./InputSearchContext";

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
  const { search } = useInputSearchValue();

  const { data, error } = useQuery({
    queryKey: ["weather", search],
    queryFn: () => GetLocationWeather(search),
    enabled: !!search,
    staleTime: 1000 * 60 * 15,
    refetchIntereval: 1000 * 60 * 15,
    refetchOnWindowFocus: false,
  });

  const renderLocationName = (city, country) => {
    if (!country || !city) return "";
    return city === country ? country : `${country}, ${city}`;
  };

  return (
    <WeatherContext.Provider value={{ data, error, renderLocationName }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherData = () => useContext(WeatherContext);
