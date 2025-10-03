// Components;
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { TodayHourlyWeather } from "@components/TodayHourlyWeather";
import { LandingSkelton } from "@components/LandingSkelton";

// Images;
import { GetWeatherIcon } from "@/utils/GetWeatherIcon";
import { useWeatherData } from "@/context/WeatherContext";

export const Landing = () => {
  
  const { data, error, renderLocationName } = useWeatherData();

  return (
    <section className="bg-navy flex h-dvh flex-col">
      {/* Error message; */}
      <p
        className={`absolute top-17 left-1/2 w-4/5 -translate-x-1/2 rounded-sm bg-[#850a0a] px-4 py-1 text-center text-white transition-transform duration-400 ease-in-out md:w-fit ${error ? "translate-y-0" : "-translate-y-[500px]"}`}
      >
        {error && `${error.message}`}
      </p>

      {/* Header */}
      <Header />
      <main className="small:max-w-[600px] small:mx-auto h-dvh w-full">
        {data ? (
          <div className="bg-red- flex h-full flex-col">
            {/* weather icon; */}
            <div className="relative mt-7 flex items-center justify-center">
              <img
                className="h-42 w-42 object-contain"
                src={GetWeatherIcon(data.weatherCode)}
                alt="weather-icon"
              />
            </div>

            <div className="flex h-full -translate-y-10 flex-col justify-evenly py-5">
              {/* middle */}
              <section className="text-lightBlue mx-auto w-fit text-center font-normal">
                {/* Temperature; */}
                <article className="flex items-center justify-center">
                  <span className="text-[64px] font-bold">
                    {Math.round(data.temperature)}
                  </span>
                  <span className="-translate-y-3 pl-1 text-4xl">°</span>
                  <span className="translate-y-2 transform text-4xl">C</span>
                </article>
                {/* City; */}
                <article className="flex flex-col gap-1">
                  <span className="text-xl capitalize">
                    {renderLocationName(data.city, data.country)}
                  </span>
                  <span className="text-xl capitalize">
                    {data.weatherDescription}
                  </span>
                </article>
              </section>
              {/* Wind/Humi/Pre */}
              <section className="flex items-baseline justify-between space-x-1 px-4">
                {/* Wind; */}
                <article className="landing-details-box rounded-l-2xl">
                  <div className="small:text-xl text-[5vw] font-bold">
                    <span>{Math.round(data.windSpeed)}km/h</span>
                  </div>
                  <span className="small:text-base text-[3.5vw] font-normal">
                    Wind
                  </span>
                </article>

                {/* Humidity */}
                <article className="landing-details-box">
                  <div className="small:text-xl text-[5vw] font-bold">
                    <span>{data.humidity}%</span>
                  </div>
                  <span className="small:text-base text-[3.5vw] font-normal">
                    Humidity
                  </span>
                </article>

                {/* Precipitation */}
                <article className="landing-details-box rounded-r-2xl">
                  <div className="small:text-xl text-[5vw] font-bold">
                    <span>{data.precipitation}mm</span>
                  </div>
                  <span className="small:text-base text-[3.5vw] font-normal">
                    Precipitation
                  </span>
                </article>
              </section>

                {data &&   <TodayHourlyWeather data={data.hourlyWeather}/>}
            
            </div>
          </div>
        ) : (
          <LandingSkelton />
        )}
      </main>
      <Footer />
    </section>
  );
};
