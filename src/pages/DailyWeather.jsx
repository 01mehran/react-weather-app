// Libraries;
import { useState } from "react";

// Components;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HistoryWeatherModal } from "@components/HistoryWeatherModal";

// Image;
import { useImages } from "@images/useImages";

export const DailyWeather = () => {
  const [isHistoryOpen, setIshistoryOpen] = useState(false);

  const toggleHistoryModal = () => {
    setIshistoryOpen((his) => !his);
  };

  return (
    <section className="bg-navy flex h-dvh flex-col overflow-hidden">
      <Header />
      <main className="mx-auto mt-6 w-full max-w-[500px] px-4">
        {/* Day/Month */}
        <div className="text-lightBlue mb-5">
          <article className="flex items-center justify-between">
            <h3 className="text-xl font-bold">March</h3>
            <div className="small:w-[220px] border-blue flex w-[60vw] justify-between rounded-full border-[2px]">
              <button className="small:text-sm text-navy-dark bg-blue w-1/2 cursor-pointer rounded-full py-2 text-[4vw] font-normal tracking-wider uppercase">
                by day
              </button>
              <button className="small:text-sm w-1/2 cursor-pointer rounded-full py-2 text-[4vw] font-normal tracking-wider uppercase">
                by month
              </button>
            </div>
          </article>
        </div>

        {/* Weather */}
        <section className="flex flex-col gap-4">
          {/* History button */}
          <div>
            <button
              onClick={toggleHistoryModal}
              className="border-blue small:text-sm text-lightBlue float-right w-fit cursor-pointer rounded-full border-2 px-6 py-2 text-right text-[4vw] font-normal tracking-wider"
            >
              History
            </button>
          </div>
          <div className="flex h-[500px] flex-col gap-2 overflow-scroll rounded-t-2xl pb-20">
            {/* Weather box */}
            <div className="bg-navy-light-2 flex items-center justify-between rounded-xl px-4">
              {/* Temprature */}
              <article className="text-lightBlue">
                <div className="flex place-items-center gap-1">
                  <h1 className="text-lightBlue text-[64px] font-bold">27</h1>
                  <span className="-translate-y-3 text-[32px] font-normal">
                    °
                  </span>
                </div>
                <div className="flex -translate-y-4 flex-col">
                  <span className="text-[16px] font-normal tracking-wider">
                    Cloudy
                  </span>
                  <span className="text-[16px] font-normal tracking-wider">
                    Cebu, City
                  </span>
                </div>
              </article>
              {/* Weather icon */}
              <article className="h-full max-h-25 w-full max-w-25">
                <img
                  src={useImages.cloud}
                  alt="weatherIcon"
                  className="h-full w-full object-cover"
                />
              </article>
              {/* Date */}
              <article className="text-lightBlue/70">
                <h1 className="text-5xl font-bold">30</h1>
                <span className="text-2xl font-bold uppercase">mon</span>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <HistoryWeatherModal
        isHistoryOpen={isHistoryOpen}
        toggleHistoryModal={toggleHistoryModal}
      />
    </section>
  );
};
