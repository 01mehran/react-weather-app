export const HoursWeatherSkelton = () => {
  return (
    <div className="small:max-w-175 mx-auto w-full overflow-x-hidden xl:translate-x-30">
      <div className="landing-skelton-effect m-2 h-75"></div>
      <section className="flex items-center justify-between gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="mx-2 flex h-62.5 w-fit flex-col items-center justify-between gap-6"
          >
            <span className="bg-navy-light-2 h-20 w-1 animate-pulse"></span>
            <div className="h-10 w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="mx-auto h-full w-full animate-pulse"
                viewBox="0 0 24 24"
                fill="none"
                strokeWidth="2"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  className="animate-pulse fill-[#143158]"
                />
                <g className="animate-pulse stroke-[#143158]">
                  <line x1="12" y1="1" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="23" />
                  <line x1="4.2" y1="4.2" x2="6.3" y2="6.3" />
                  <line x1="17.7" y1="17.7" x2="19.8" y2="19.8" />
                  <line x1="1" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="23" y2="12" />
                  <line x1="4.2" y1="19.8" x2="6.3" y2="17.7" />
                  <line x1="17.7" y1="6.3" x2="19.8" y2="4.2" />
                </g>
              </svg>
            </div>
            <span className="bg-navy-light-2 h-full w-1 animate-pulse"></span>
          </div>
        ))}
      </section>
    </div>
  );
};
