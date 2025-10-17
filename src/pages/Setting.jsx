// Image;
import { useImages } from "@images/useImages";

// Libraries;
import { useNavigate } from "react-router-dom";

// Contexts;
import { useSettings } from "@/context/SettingsContext";

export const Setting = () => {
  const navigate = useNavigate();
  const {
    hourFormat,
    handleHourFormat,
    dateFormat,
    handleDateFormat,
    handleConvertWindSpeed,
    windSpeedUnit,
  } = useSettings();

  return (
    <section className="bg-navy flex h-dvh flex-col">
      <header className="bg-navy-dark flex items-center space-x-12 py-6 pl-8">
        <img
          src={useImages.arrow}
          alt="arrowIcon"
          className="max-h-[28px] max-w-[28px] cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-lightBlue text-3xl font-bold tracking-wider">
          Settings
        </h1>
      </header>
      <main className="mt-1 space-y-2 px-6">
        {/* Theme */}
        <article className="space-y-1">
          <h2 className="text-lightBlue text-[22px] font-bold">Theme</h2>
          <div className="relative">
            <select className="border-blue text-lightBlue cursor-pointer rounded-full border px-6 py-px outline-0">
              <option value="" className="text-navy text-[14px] font-bold">
                Dark
              </option>
              <option value="" className="text-navy font-bold">
                Light
              </option>
            </select>
            <div className="bg-blue absolute top-1.5 left-1.5 size-4 rounded-full"></div>
          </div>
        </article>

        {/* Theme format */}
        <article className="flex flex-col gap-3">
          <h2 className="text-lightBlue text-[22px] font-bold tracking-wider">
            Time Format
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleHourFormat("12")}
              className={`${hourFormat === "12" ? "bg-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border px-[4px] py-[4px] text-sm tracking-wide transition-all duration-300`}
            >
              01:00 PM
            </button>
            <button
              onClick={() => handleHourFormat("24")}
              className={`${hourFormat === "24" ? "bg-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border px-[4px] py-[4px] text-sm tracking-wide text-black/80 transition-all duration-300`}
            >
              13:00
            </button>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleDateFormat("m")}
              className={` ${dateFormat === "m" ? "bg-blue border-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border py-[6px] text-[12px] transition-all duration-300`}
            >
              mm dd yy
            </button>
            <button
              onClick={() => handleDateFormat("d")}
              className={`${dateFormat === "d" ? "bg-blue border-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border py-[6px] text-[12px] text-black/80 transition-all duration-300`}
            >
              dd mm yy
            </button>
            <button
              onClick={() => handleDateFormat("y")}
              className={`${dateFormat === "y" ? "bg-blue border-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border py-[6px] text-[12px] transition-all duration-300`}
            >
              yy mm dd
            </button>
          </div>
        </article>

        {/* Wind speed */}
        <article className="space-y-3">
          <h2 className="text-lightBlue text-[22px] font-bold tracking-wider">
            Wind Speed
          </h2>
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleConvertWindSpeed("mph")}
              className={`${windSpeedUnit === "mph" ? "bg-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border p-[4px] px-2 text-[15px] font-normal tracking-wide transition-all duration-300`}
            >
              mph
            </button>
            <button
              onClick={() => handleConvertWindSpeed("km/h")}
              className={`${windSpeedUnit === "km/h" ? "bg-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border p-[4px] px-2 text-[15px] font-normal tracking-wide transition-all duration-300`}
            >
              kmh
            </button>
            <button
              onClick={() => handleConvertWindSpeed("bf")}
              className={`${windSpeedUnit === "bf" ? "bg-blue text-black/80" : "text-lightBlue"} border-blue w-[88px] cursor-pointer rounded-full border p-[4px] px-2 text-[15px] font-normal tracking-wide transition-all duration-300`}
            >
              beaufort
            </button>
          </div>
        </article>

        <article className="space-y-2">
          <h2 className="text-lightBlue text-[22px] font-bold tracking-wider">
            Pressure
          </h2>
          <div className="flex items-center gap-3">
            <button className="border-blue text-lightBlue w-[88px] cursor-not-allowed rounded-full border p-[4px] px-2 text-[15px] font-normal tracking-wide opacity-70">
              psi
            </button>
            <button className="border-blue text-lightBlue w-[88px] cursor-not-allowed rounded-full border p-[4px] px-2 text-[15px] font-normal tracking-wide opacity-70">
              bar
            </button>
            <button className="border-blue bg-blue w-[88px] cursor-pointer rounded-full border p-[4px] px-2 text-[15px] font-normal tracking-wide text-black/80">
              hps
            </button>
          </div>
        </article>
      </main>
    </section>
  );
};
