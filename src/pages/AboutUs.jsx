// Images;
import { useImages } from "@images/useImages";

export const AboutUs = () => {
  return (
    <section className="bg-navy flex h-svh flex-col">
      <header className="bg-navy-light-2 sticky top-0 flex items-center space-x-12 py-6 pl-8 shadow-xl">
        <img
          src={useImages.arrow}
          alt="arrowIcon"
          className="max-h-[28px] max-w-[28px] cursor-pointer"
        />
        <h1 className="text-lightBlue text-3xl font-bold tracking-wider">
          About Us
        </h1>
      </header>
      <main className="mt-4 grid h-full grid-cols-1 gap-3">
        <article className="bg-navy-dark flex flex-col gap-4 px-6 py-4">
          <h2 className="text-blue text-xl font-bold tracking-wider">
            Who are we?
          </h2>
          <p className="text-lightBlue text-justify text-[15px] leading-[18px] tracking-wider">
            CyberCloud app forecasts weather daily, hourly and monthly. It is a
            weather channel which has accurate weather information. CyberCloud
            detects weather in your current location automatically. CyberCloud
            is very helpful with everybody. If you know weather information, You
            can prepare your plan carefully, you will be sucessful at work and
            have better life.
          </p>
        </article>
        <article className="bg-navy-dark flex flex-col gap-4 px-6 py-4">
          <h2 className="text-blue text-xl font-bold tracking-wider">
            Mission
          </h2>
          <p className="text-lightBlue text-justify text-[15px] leading-[18px] tracking-wider">
            To instantly access forecasts, warnings and other useful weather
            information on our mobile phones. To provide the public with
            unprecedented flexibility: users choose the information they want,
            how they get it and how it looks. Present weather and climate
            information services to the right people, in the right places and at
            the right times, so they can make informed lifesaving, business and
            leisure decisions. Display the weather minute basis accurately,
            hourly, daily, weekly and even monthly. provide information people
            and organizations can use to reduce weather-related losses and
            enhance societal benefits.
          </p>
        </article>
        <article className="bg-navy-dark flex flex-col gap-4 px-6 py-4">
          <h2 className="text-blue text-xl font-bold tracking-wider">Vision</h2>
          <p className="text-lightBlue text-justify text-[15px] leading-[18px] tracking-wider">
            We see a world where everybody lacks information about the weather —
            united in the joy of movement. Driven by our passion for informing
            and our instinct for innovation, we aim to bring weather information
            to every people in the world. To be the world's most successful and
            important information application company. Successful in helping out
            customers apply technology to solve their problems. To create value
            in the community.
          </p>
        </article>
      </main>
    </section>
  );
};
