import { useImages } from "@images/useImages";
export const HistoryWeatherModal = ({ isHistoryOpen, toggleHistoryModal }) => {
  return (
    <>
      <div
        onClick={toggleHistoryModal}
        className={`fixed inset-0 z-10 bg-black/60 transition-transform duration-200 ${isHistoryOpen ? "block" : "hidden"}`}
      ></div>

      <section
        className={`bg-navy-light-2 border-t-lightBlue fixed bottom-0 left-0 z-20 h-[500px] w-full transform rounded-t-xl border border-t-2 border-transparent transition-transform duration-500 ease-in-out ${isHistoryOpen ? "translate-y-auto" : "translate-y-[500px]"}`}
      >
        <header className="border-b-lightBlue/40 relative border-b-2 px-6 py-7">
          <img
            src={useImages.arrow}
            alt="arrowIcon"
            className="w-7 cursor-pointer"
            onClick={toggleHistoryModal}
          />
          <p className="text-lightBlue absolute top-1/2 left-1/2 -translate-1/2 transform text-xl font-bold tracking-wider">
            History
          </p>
        </header>

        <main className="px-4 py-6">
          <h2 className="text-lightBlue text-center text-xl font-normal">
            Monday 31 March
          </h2>
          <div className="mt-4">
            <div className="text-lightBlue flex items-center justify-end gap-4 px-px font-extralight">
              <span className="text-sm tracking-wider">HIGHT</span>
              <span className="text-sm tracking-wider">LOW</span>
            </div>
            <div className="text-lightBlue mt-2 flex flex-col gap-2">
              <article className="border-b-lightBlue/50 flex items-center justify-between border-b-2 py-2">
                <p className="text-lg font-normal tracking-wide">
                  Today's Forcecast
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">30°</span>
                  <span className="text-2xl font-bold">27°</span>
                </div>
              </article>
              <article className="border-b-lightBlue/50 flex items-center justify-between border-b-2 py-2">
                <p className="text-lg font-normal tracking-wide">Normal</p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">32°</span>
                  <span className="text-2xl font-bold">25°</span>
                </div>
              </article>
              <article className="border-b-lightBlue/50 flex items-center justify-between border-b-2 py-2">
                <p className="text-lg font-normal tracking-wide">
                  Last Year on this date
                </p>
                <div className="flex items-center gap-4">
                  <span className="text-2xl font-bold">32°</span>
                  <span className="text-2xl font-bold">26°</span>
                </div>
              </article>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};
