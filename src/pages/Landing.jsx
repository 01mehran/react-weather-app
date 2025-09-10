import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { useImages } from "@images/useImages";

export const Landing = () => {
  return (
    <section className=" bg-navy flex flex-col h-dvh  ">
      <Header />
      <main className=" small:max-w-[500px] small:mx-auto h-dvh ">
        <div className="flex flex-col bg-red- h-full ">
          {/* weather icon; */}
          <div className="w-[180px] h-[180px] flex justify-center  -translate-y-4 items-center mx-auto">
            <img
              src={useImages.cloud}
              alt="weatherIcon"
              className="block mx-auto object-cover w-full h-full"
            />
          </div>

          <div className="h-full flex flex-col justify-evenly py-5 -translate-y-10">
            {/* middle */}
            <section className="text-lightBlue font-normal text-center">
              {/* Temperature; */}
              <article className="flex justify-center items-center">
                <span className="text-[64px] font-bold">27</span>
                <span className=" text-4xl -translate-y-3 pl-1">°</span>
                <span className="text-4xl transform translate-y-2">C</span>
              </article>
              {/* City; */}
              <article className="flex flex-col gap-1">
                <span className="text-xl capitalize">cebu, Philippines</span>
                <span className="text-xl capitalize">Cloudy</span>
              </article>
            </section>

            {/* Wind/Humi/Pre */}
            <section className="flex justify-between items-baseline px-4 space-x-1">
              {/* Wind; */}
              <article className="landing-details-box rounded-l-2xl">
                <div className="text-[5vw] small:text-xl font-bold">
                  <span>15</span>
                  <span>km/h</span>
                </div>
                <span className="text-[3.5vw] small:text-base font-normal">
                  Wind
                </span>
              </article>

              {/* Humidity */}
              <article className="landing-details-box">
                <div className="text-[5vw] small:text-xl font-bold">
                  <span>89</span>
                  <span>%</span>
                </div>
                <span className="text-[3.5vw] small:text-base font-normal">
                  Humidity
                </span>
              </article>

              {/* Preception */}
              <article className="landing-details-box rounded-r-2xl">
                <div className="text-[5vw] small:text-xl font-bold">
                  <span>52</span>
                </div>
                <span className="text-[3.5vw] small:text-base font-normal">
                  Preception
                </span>
              </article>
            </section>

            {/* hour weather; */}
            <section className="px-4 flex flex-col gap-1 ">
              <div>
                <h1 className="text-xl font-bold text-lightBlue">Today</h1>
              </div>

              <div className="flex flex-nowrap gap-2 px-2 overflow-auto">
                <article className="bg-blue flex items-center gap-px rounded-2xl p-2 space-x-1 w-fit">
                  <div>
                    <img
                      src={useImages.cloud}
                      alt="weatherIcon"
                      className="max-w-[60px] -translate-y-2 "
                    />
                  </div>

                  <div className="flex flex-col ">
                    <span className="font-bold text-xl text-navy-dark text-left">
                      14.00
                    </span>
                    <article className="flex">
                      <span className=" font-bold text-[32px] text-navy-dark">
                        27
                      </span>
                      <span className=" text-xl text-navy-dark font-normal ">
                        °
                      </span>
                      <span className=" text-lg text-navy-dark font-normal">
                        C
                      </span>
                    </article>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </section>
  );
};
