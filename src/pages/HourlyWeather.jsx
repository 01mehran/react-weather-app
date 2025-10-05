// Components;
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { HoursWeather } from "@components/HoursWeather";


// Utils;
import { GetWeatherIcon } from "@/utils/GetWeatherIcon";

// Images;
import { useImages } from "@images/useImages";
import { useWeatherData } from "@/context/WeatherContext";
import { HoursWeatherSkelton } from "../components/HoursWeatherSkelton";

export const HourlyWeather = () => {
  const { data, error, renderLocationName } = useWeatherData(); 
  return (
    <section className="bg-navy flex h-dvh flex-col">
    {/* error message */}
      <p
        className={`absolute top-17 left-1/2 w-4/5 -translate-x-1/2 rounded-sm bg-[#850a0a] px-4 py-1 text-center text-white transition-transform duration-400 ease-in-out md:w-fit ${error ? "translate-y-0" : "-translate-y-[500px]"} z-10`}
      >
        {error && `${error.message}`}
      </p>
      <Header />
      {data ? (
        <>
          <div className="relative flex h-[300px] flex-col gap-4 text-center shadow-2xl">
            <img
              src={useImages.hourlyBg}
              alt="bg"
              className="h-full w-full object-cover"
            />

            <article className="absolute top-5 left-1/2 flex -translate-x-1/2 transform gap-6 text-center">
              <img
                src={GetWeatherIcon(data.weatherCode)}
                alt="weather-icon"
                className="h-[90px] w-[90px]"
              />
              <div className="flex translate-y-2 flex-col -space-y-3">
                <h2 className="text-lightBlue text-[45px] font-bold">
                  {Math.round(data.temperature)}°
                </h2>
                <span className="text-lightBlue/50 text-left">
                  feels {data.feelsNow}
                </span>
              </div>
            </article>

            <div className="text-lightBlue absolute top-30 left-1/2 -translate-x-1/2 transform">
              <p className="text-xl font-light tracking-wider">
                {renderLocationName(data.city, data.country)}
              </p>
            </div>
          </div>

          <HoursWeather data={data.specificTime}/>
          
        </>
      ) : <HoursWeatherSkelton />}

      <Footer />
    </section>
  );
};
