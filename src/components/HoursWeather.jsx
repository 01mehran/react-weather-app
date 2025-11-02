// Images;
import { GetWeatherIcon } from "@/utils/GetWeatherIcon";

// Custom Hook;
import { useFormatHour } from "@/hooks/useFormatHour";

export const HoursWeather = ({ data }) => {
  const { formatHour } = useFormatHour();

  return (
    <section className="mx-auto small:max-w-[800px] flex w-full flex-1 justify-between px-2 py-4 xl:mx-auto">
      {data &&
        data.map((d, i) => {
          return (
            <div
              className="flex h-full flex-col items-center gap-px text-center"
              key={i}
            >
              <span className="text-lightBlue/90 font-normal">
                {formatHour(d.time)} AM
              </span>
              <div className="flex h-2/3 w-fit flex-col items-center py-3">
                <div
                  className={`w-0.5 bg-gray-400`}
                  style={{ height: `${d.temperature}%` }}
                ></div>
                <div className="flex flex-col justify-center py-2">
                  <img
                    src={GetWeatherIcon(d.weatherCode)}
                    alt="cloud"
                    className="h-12 w-12"
                    loading="lazy"
                  />
                  <span className="text-lightBlue/80">{d.temperature}°</span>
                </div>

                <div className="w-0.5 flex-1 bg-gray-400"></div>
              </div>
              <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
            </div>
          );
        })}
    </section>
  );
};
