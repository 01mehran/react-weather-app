// Components;
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { HoursWeather } from "@components/HoursWeather";

// Images;
import { useImages } from "@images/useImages";

export const HourlyWeather = () => {
  return (
    <section className="bg-navy flex h-dvh flex-col">
      <Header />
      <div className="relative flex h-[300px] flex-col gap-4 text-center shadow-2xl">
        <img
          src={useImages.hourlyBg}
          alt="bg"
          className="h-full w-full object-cover"
        />

        <article className="absolute top-5 left-1/2 flex -translate-x-1/2 transform gap-6 text-center">
          <img
            src={useImages.cloud}
            alt="weather-icon"
            className="h-[90px] w-[90px]"
          />
          <div className="flex translate-y-2 flex-col -space-y-3">
            <h2 className="text-lightBlue text-[45px] font-bold">27°</h2>
            <span className="text-lightBlue/50 text-left">feels 25</span>
          </div>
        </article>

        <div className="text-lightBlue absolute top-30 left-1/2 -translate-x-1/2 transform">
          <p className="text-xl font-light tracking-wider">
            Labangone, <span>Cebue</span>
          </p>
          <p className="font-light tracking-wider">Philippiens</p>
        </div>
      </div>

      <HoursWeather />

      <Footer />
    </section>
  );
};
