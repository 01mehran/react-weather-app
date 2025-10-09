// Images;
import { useImages } from "@images/useImages";

export const GetWeatherIcon = (weathercode) => {
  const map = {
    0: `${useImages.cloudy_2}`, 
    1: `${useImages.cloudy_2}`, 
    2: `${useImages.cloudy_6}`, 
    3: `${useImages.cloudy_7}`, 
    45: `${useImages.cloudy_9}`, 
    48: `${useImages.cloudy_9}`,
    51: `${useImages.cloudy_5}`,
    53: `${useImages.cloudy_5}`,
    55: `${useImages.cloudy_8}`,
    56: `${useImages.cloudy_8}`,
    57: `${useImages.cloudy_8}`,
    61: `${useImages.cloudy_4}`,
    63: `${useImages.cloudy_4}`,
    65: `${useImages.cloudy_11}`,
    66: `${useImages.cloudy_11}`,
    67: `${useImages.cloudy_11}`,
    71: `${useImages.cloudy_3}`, 
    73: `${useImages.cloudy_3}`, 
    75: `${useImages.cloudy_12}`, 
    77: `${useImages.cloudy_12}`,
    80: `${useImages.cloudy_11}`, 
    81: `${useImages.cloudy_11}`,
    82: `${useImages.cloudy_11}`,
    85: `${useImages.cloudy_12}`,
    86: `${useImages.cloudy_12}`,
    95: `${useImages.cloudy_10}`, 
    96: `${useImages.cloudy_10}`,
    99: `${useImages.cloudy_10}`,
  };
  return map[weathercode] || "❓";
};
