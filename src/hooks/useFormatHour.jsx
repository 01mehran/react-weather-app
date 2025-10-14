import { useSettings } from "@/context/SettingsContext";

export const useFormatHour = () => {
  const { hourFormat } = useSettings();

  const formatHour = (hour) => {
    if (hourFormat === "12") {
      const displayHour = hour % 12 || 12;
      return displayHour;
    } else {
      return hour;
    }
  };

  return { formatHour };
};
