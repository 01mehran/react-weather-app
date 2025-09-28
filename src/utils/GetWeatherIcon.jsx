// Images;
import { useImages } from "@images/useImages";

export const GetWeatherIcon = (weathercode) => {
  const map = {
    0: `${useImages.cloudy_2}`, // Clear
    1: `${useImages.cloudy_2}`, // Mainly clear
    2: `${useImages.cloudy_6}`, // Partly cloudy
    3: `${useImages.cloudy_6}`, // Cloudy
    45: `${useImages.cloudy_5}`, // Fog
    48: `${useImages.cloudy_5}`, // Depositing rime fog
    51: `${useImages.cloudy_8}`, // Drizzle light
    61: `${useImages.cloudy_8}`, // Rain slight
    63: `${useImages.cloudy_8}`, // Rain moderate
    65: `${useImages.cloudy_8}`, // Rain heavy
    71: `${useImages.cloudy3}`, // Snow slight
    73: `${useImages.cloudy3}`, // Snow moderate
    75: `${useImages.cloudy3}`, // Snow heavy
    80: `${useImages.cloud}`, // Showers
    81: `${useImages.cloud}`,
    82: `${useImages.cloud}`,
    95: `${useImages.cloud}`, // Thunderstorm
    96: `${useImages.cloud}`,
    99: `${useImages.cloud}`,
  };
  return map[weathercode] || "❓";
};
