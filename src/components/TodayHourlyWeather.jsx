// Images;
import { GetWeatherIcon } from "@/utils/GetWeatherIcon";

// Contexts;
import { useSettings } from "@/context/SettingsContext";

// Custom Hook;
import { useFormatHour } from "@/hooks/useFormatHour";

export const TodayHourlyWeather = ({ data }) => {
  const { formatHour } = useFormatHour();

  return (
    <section className="flex flex-col gap-1 px-4">
      <div>
        <h1 className="text-lightBlue text-xl font-bold">Today</h1>
      </div>

      <div className="flex flex-nowrap gap-2 overflow-auto px-2">
        {data.map((d, i) => {
          return (
            <article
              key={i}
              className={`${i === 0 ? "bg-blue/70 text-navy" : "bg-navy-dark text-lightBlue"} flex min-w-[145px] items-center gap-px space-x-1 rounded-2xl p-2`}
            >
              <div>
                <img
                  src={GetWeatherIcon(d.weatherCode)}
                  alt="weatherIcon"
                  className="w-[91px] -translate-y-2"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-left text-xl font-bold">
                  {formatHour(d.time)}.00
                </span>
                <article className="flex">
                  <span className="text-[32px] font-bold">{d.temperature}</span>
                  <span className="text-xl font-normal">°</span>
                  <span className="text-lg font-normal">C</span>
                </article>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
