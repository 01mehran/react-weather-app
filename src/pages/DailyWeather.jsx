// Libraries;
import { useState, useEffect } from "react";

// Components;
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HistoryWeatherModal } from "@components/HistoryWeatherModal";
import { ByDayWeather } from "@components/ByDayWeather";
import { ByDaySkelton } from "@components/ByDaySkelton";
import { ByMonthWeather } from "@components/ByMonthWeather";
import { useWeatherData } from "@/context/WeatherContext";
import { ByMonthWeatherSkelton } from "@components/ByMonthWeatherSkelton";

export const DailyWeather = () => {
  const [isHistoryOpen, setIshistoryOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("day");
  const toggleHistoryModal = () => {
    setIshistoryOpen((prev) => !prev);
  };

  useEffect(() => {
    const savedTab = localStorage.getItem("savedTab");

    if (savedTab) {
      setCurrentTab(savedTab);
    }
  }, [])

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
    "November",
    "December",
  ];
  const date = new Date().getMonth();
  const month = months[date];

  const toggleTab = (time) => {
    setCurrentTab(time);
    setIshistoryOpen(false);

    localStorage.setItem("savedTab", time);
  };

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
      <main className="mx-auto mt-6 flex h-full w-full max-w-[500px] flex-col px-4 small:max-w-[800px] xl:translate-x-30">
        {/* Day/Month */}
        <div className="text-lightBlue mb-5">
          <article className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{month}</h3>
            <div className="small:w-[220px] border-blue flex w-[60vw] justify-between rounded-full border-[2px]">
              <button
                onClick={() => toggleTab("day")}
                className={`${!isHistoryOpen && currentTab === "day" ? "bg-blue text-navy-dark" : "text-lightBlue"} ease small:text-sm text-lightBlue w-1/2 cursor-pointer rounded-full py-2 text-[4vw] font-normal tracking-wider uppercase transition-all duration-300`}
              >
                by day
              </button>
              <button
                onClick={() => toggleTab("month")}
                className={`${!isHistoryOpen && currentTab === "month" ? "bg-blue text-navy-dark" : "text-lightBlue"} ease small:text-sm w-1/2 cursor-pointer rounded-full py-2 text-[4vw] font-normal tracking-wider uppercase transition-all duration-300`}
              >
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
              className={`${isHistoryOpen ? "bg-blue text-navy-dark" : "text-lightBlue"} border-blue ease small:text-sm text-lightBlue float-right w-fit cursor-pointer rounded-full border-2 px-6 py-2 text-right text-[4vw] font-normal tracking-wider transition-all duration-300`}
            >
              History
            </button>
          </div>
          <div className="flex h-full flex-col gap-2 overflow-scroll">
            {/* Weather box */}
            {currentTab === "day" ? (
              data ? (
                <ByDayWeather data={data} />
              ) : (
                <ByDaySkelton />
              )
            ) : currentTab === "month" ? (
              data ? (
                <ByMonthWeather data={data} />
              ) : (
                <ByMonthWeatherSkelton />
              )
            ) : null}
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
