// Images;
import { useImages } from "@images/useImages";

export const HoursWeather = () => {
  return (
    <section className="flex flex-1 justify-between px-2 py-4">
      {/* 1 */}
      <div className="flex flex-col items-center gap-px text-center">
        <span className="text-lightBlue/90 font-normal">7 AM</span>
        <div className="flex h-2/3 w-fit flex-col items-center py-3">
          <div className="h-[3%] w-0.5 bg-gray-400"></div>
          <div className="flex flex-col justify-center py-2">
            <img src={useImages.cloudy_1} alt="cloud" className="h-12 w-12" loading="lazy"/>
            <span className="text-lightBlue/80">12°</span>
          </div>

          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
        <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
      </div>
      {/* 2 */}
      <div className="flex flex-col items-center gap-px text-center">
        <span className="text-lightBlue/90 font-normal">8 AM</span>
        <div className="flex h-2/3 w-fit flex-col items-center py-3">
          <div className="h-[25%] w-0.5 bg-gray-400"></div>
          <div className="flex flex-col justify-center py-2">
            <img src={useImages.cloudy_2} alt="cloud" className="h-12 w-12" loading="lazy"/>
            <span className="text-lightBlue/80 -translate-y-2">30°</span>
          </div>

          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
        <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
      </div>
      {/* 3 */}
      <div className="flex flex-col items-center gap-px text-center">
        <span className="text-lightBlue/90 font-normal">11 AM</span>
        <div className="flex h-2/3 w-fit flex-col items-center py-3">
          <div className="h-[42%] w-0.5 bg-gray-400"></div>
          <div className="flex flex-col justify-center py-2">
            <img src={useImages.cloudy_3} alt="cloud" className="h-12 w-12" loading="lazy"/>
            <span className="text-lightBlue/80">27°</span>
          </div>

          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
        <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
      </div>
      {/* 4 */}
      <div className="flex flex-col items-center gap-px text-center">
        <span className="text-lightBlue/90 font-normal">12 PM</span>
        <div className="flex h-2/3 w-fit flex-col items-center py-3">
          <div className="h-[33%] w-0.5 bg-gray-400"></div>
          <div className="flex flex-col justify-center py-2">
            <img src={useImages.cloudy_4} alt="cloud" className="h-12 w-12" loading="lazy"/>
            <span className="text-lightBlue/80">24°</span>
          </div>

          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
        <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
      </div>
      {/* 5 */}
      <div className="flex flex-col items-center gap-px text-center">
        <span className="text-lightBlue/90 font-normal">1 PM</span>
        <div className="flex h-2/3 w-fit flex-col items-center py-3">
          <div className="h-[28%] w-0.5 bg-gray-400"></div>
          <div className="flex flex-col justify-center py-2">
            <img src={useImages.cloudy_2} alt="cloud" className="h-12 w-12" loading="lazy"/>
            <span className="text-lightBlue/80">29°</span>
          </div>

          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
        <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
      </div>
      {/* 6 */}
      <div className="flex flex-col items-center gap-px text-center">
        <span className="text-lightBlue/90 font-normal">2 PM</span>
        <div className="flex h-2/3 w-fit flex-col items-center py-3">
          <div className="h-4 w-0.5 bg-gray-400"></div>
          <div className="flex flex-col justify-center py-2">
            <img src={useImages.cloudy_6} alt="cloud" className="h-12 w-12" loading="lazy"/>
            <span className="text-lightBlue/80">35°</span>
          </div>

          <div className="w-0.5 flex-1 bg-gray-400"></div>
        </div>
        <article className="bg-navy-lighten h-8 w-full rounded-lg"></article>
      </div>
    </section>
  );
};
