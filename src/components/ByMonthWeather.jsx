// Utils;
import { GetWeatherIcon } from "@/utils/GetWeatherIcon";

export const ByMonthWeather = ({ data }) => {

  return (
    <section>
      <main className="mx-auto flex h-full w-full max-w-[500px] small:max-w-[800px]  flex-col">
        
        <div>
        {/* Weekays */}
          <div className="border-b-lightBlue text-lightBlue bg-navy sticky top-0 mb-2 grid grid-cols-7 border-b-[1.5px] pb-1 text-xl font-bold">
            {data.dailyForecast.slice(0, 7).map((d, i) => (
              <span key={i} className="text-center">
                {d.dayName.charAt(0).toUpperCase()}
              </span>
            ))}
          </div>
          {/* Weather forecast */}
          <section className="grid grid-cols-7 space-y-4 pb-4">
            {data.dailyForecast.map((d, i) => (
              <div key={i} className="flex flex-col items-center pb-4 [&:not(:nth-last-child(-n+2))]:border-b-1 border-lightBlue/50 ">
                <span className="font-lg text-lightBlue mb-2 text-lg">
                  {d.day}
                </span>
                <article className="flex flex-col text-center">
                  <img
                    src={GetWeatherIcon(d.weatherCode)}
                    className="mb-2 h-[25px] w-[25px]"
                    alt=""
                  />
                  <span className="font-lg text-lightBlue mt-3 inline-block text-lg">
                    {Math.round(d.maxTemp)}°
                  </span>
                  <span className="text-lightBlue/70 inline-block text-lg font-normal">
                    {Math.round(d.minTemp)}°
                  </span>
                </article>
              </div>
            ))}
          </section>
        </div>
      </main>
    </section>
  );
};
