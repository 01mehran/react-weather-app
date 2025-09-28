// Images;
import { useImages } from "@images/useImages";

export const TodayHourlyWeather = () => {
  return (
    <section className="flex flex-col gap-1 px-4">
      <div>
        <h1 className="text-lightBlue text-xl font-bold">Today</h1>
      </div>

      <div className="flex flex-nowrap gap-2 overflow-auto px-2">
        <article className="bg-blue flex w-fit items-center gap-px space-x-1 rounded-2xl p-2">
          <div>
            <img
              src={useImages.cloud}
              alt="weatherIcon"
              className="max-w-[60px] -translate-y-2"
            />
          </div>

          <div className="flex flex-col">
            <span className="text-navy-dark text-left text-xl font-bold">
              14.00
            </span>
            <article className="flex">
              <span className="text-navy-dark text-[32px] font-bold">27</span>
              <span className="text-navy-dark text-xl font-normal">°</span>
              <span className="text-navy-dark text-lg font-normal">C</span>
            </article>
          </div>
        </article>
      </div>
    </section>
  );
};
