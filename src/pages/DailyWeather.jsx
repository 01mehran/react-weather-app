// Libraries;
import {useState } from "react";

// Components;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HistoryWeatherModal } from "@components/HistoryWeatherModal";
import { ByDayWeather } from "@components/ByDayWeather";
import { ByDaySkelton } from "@components/ByDaySkelton";

import { useWeatherData } from "../context/WeatherContext";

export const DailyWeather = () => {
  const [isHistoryOpen, setIshistoryOpen] = useState(false);

  const toggleHistoryModal = () => {
    setIshistoryOpen((his) => !his);
  };

  const { data, error } = useWeatherData();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Novenber",
    "December",
  ];
  const date = new Date().getMonth();
  const month = months[date];

  return (
    <section className="bg-navy flex h-dvh flex-col overflow-hidden">
      {error && (
        <p
          className={`absolute top-17 left-1/2 w-4/5 -translate-x-1/2 rounded-sm bg-[#850a0a] px-4 py-1 text-center text-white transition-transform duration-400 ease-in-out md:w-fit ${error ? "translate-y-0" : "-translate-y-[500px]"}`}
        >
          {error && `${error.message}`}
        </p>
      )}
      <Header />
      <main className="mx-auto mt-6 flex h-full w-full max-w-[500px] flex-col px-4">
        {/* Day/Month */}
        <div className="text-lightBlue mb-5">
          <article className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{month}</h3>
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
        <section className="flex h-[calc(100%-25%)] flex-col gap-4 pb-0">
          {/* History button */}
          <div>
            <button
              onClick={toggleHistoryModal}
              className="border-blue small:text-sm text-lightBlue float-right w-fit cursor-pointer rounded-full border-2 px-6 py-2 text-right text-[4vw] font-normal tracking-wider"
            >
              History
            </button>
          </div>
          <div className="flex h-full flex-col gap-2 overflow-scroll rounded-t-2xl">
            {/* Weather box */}
            {data ? <ByDayWeather data={data} /> : <ByDaySkelton />}
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
