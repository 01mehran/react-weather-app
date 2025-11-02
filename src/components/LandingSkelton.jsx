export const LandingSkelton = () => {
  return (
    <div className="bg-navy">
      <div className="small:max-w-[600px] small:mx-auto flex flex-col pt-8">
        <div className="flex flex-col gap-4 text-center">
          <div className="to-navy-light-2 justify mx-auto flex h-42 w-42 items-center rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mx-auto animate-pulse h-full w-full"
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
          <div className="landing-skelton-effect mx-auto h-15 w-40"></div>
          <div className="landing-skelton-effect mx-auto h-10 w-60"></div>
          <div className="landing-skelton-effect mx-auto h-10 w-30"></div>
          <div className="flex h-22 items-baseline justify-between space-x-2 px-4">
            <article className="landing-skelton-effect h-full w-1/3 rounded-l-2xl"></article>
            <article className="landing-skelton-effect h-full w-1/3"></article>
            <article className="landing-skelton-effect h-full w-1/3 rounded-r-2xl"></article>
          </div>
          <div className="px-4 text-left">
            <span className="landing-skelton-effect inline-block h-8 w-20"></span>
            <div className="flex items-center gap-2 overflow-hidden">
              <div className="landing-skelton-effect h-18 min-w-40"></div>
              <div className="landing-skelton-effect h-18 min-w-40"></div>
              <div className="landing-skelton-effect h-18 min-w-40"></div>
              <div className="landing-skelton-effect h-18 min-w-40"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
