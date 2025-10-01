export const ByDaySkelton = () => {
  return (
    <section className="bg-navy flex flex-col gap-4 py-4">
      {Array.from({ length: 7 }).map((_, i) => (
        <div
          key={i}
          className="border-navy-light flex items-center justify-between rounded-md border-2 px-4 py-4 shadow-lg"
        >
          {/* 1 */}
          <div>
            <article className="space-y-2">
              <h1 className="landing-skelton-effect h-6 w-14"></h1>
              <span className="landing-skelton-effect block h-4 w-18"></span>
              <span className="landing-skelton-effect block h-4 w-18"></span>
            </article>
          </div>
          {/* 2 */}
          <div className="h-22">
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
          {/* 3 */}
          <div>
            <article className="space-y-2">
              <h1 className="landing-skelton-effect h-6 w-14"></h1>
              <span className="landing-skelton-effect block h-6 w-14"></span>
            </article>
          </div>
        </div>
      ))}
    </section>
  );
};
