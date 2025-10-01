import { GetWeatherIcon } from "@/utils/GetWeatherIcon";
import { useWeatherData } from "../context/WeatherContext";

export const ByDayWeather = ({ data }) => {
  // const renderLocationName = (city, country) => {
  //   if (!country || !city) return "";
  //   return city === country ? country : `${country}, ${city}`;
  // };

const {renderLocationName} = useWeatherData();

  return (
    <>
      {data.dailyForecast.map((d) => (
        <div
          className="bg-navy-light-2 sticky top-0 flex items-center justify-between gap-2 rounded-xl px-4"
          key={d.day}
        >
          {/* Temprature */}

          <article className="text-lightBlue w-1/3">
            <div className="flex place-items-center gap-1">
              <h1 className="text-lightBlue text-[64px] font-bold">
                {Math.round(d.maxTemp)}
              </h1>
              <span className="-translate-y-3 text-[32px] font-normal">°</span>
            </div>
            <div className="flex -translate-y-4 flex-col">
              <span className="text-[3.5vw] font-normal tracking-wider sm:text-[16px]">
                {d.weatherDescription}
              </span>
              <span className="text-[3.5vw] font-normal tracking-wider text-nowrap sm:text-[16px]">
                {renderLocationName(data.city, data.country)}
              </span>
            </div>
          </article>
          {/* Weather icon */}
          <article className="w-1/3">
            <img
              src={GetWeatherIcon(d.weatherCode)}
              alt="weatherIcon"
              className="h-25 w-25 object-cover"
            />
          </article>
          {/* Date */}
          <article className="text-lightBlue/70 w-fit text-center">
            <h1 className="text-5xl font-bold tracking-wider">
              {d.day < 10 ? `0${d.day}` : d.day}
            </h1>
            <span className="text-2xl font-bold tracking-wider uppercase">
              {d.dayName}
            </span>
          </article>
        </div>
      ))}
    </>
  );
};
