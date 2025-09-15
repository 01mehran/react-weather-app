// Images;
import { useImages } from "@images/useImages";


export const ContactUs = () => {
  return (
    <section className="bg-navy flex h-dvh flex-col overflow-y-hidden">
      <header className="bg-navy-dark flex items-center space-x-12 py-6 pl-8">
        <img
          src={useImages.arrow}
          alt="arrowIcon"
          className="max-h-[28px] max-w-[28px] cursor-pointer"
        />
        <h1 className="text-lightBlue text-3xl font-bold tracking-wider">
          Contact Us
        </h1>
      </header>
      <main className="mt-4 flex flex-col gap-px">
        <article className="bg-navy-light-2 flex flex-col -space-y-1 px-6 py-3">
          <span className="text-xl font-normal tracking-wider text-[#ffff]/40">
            Name
          </span>
          <p className="text-lightBlue text-lg font-bold tracking-wider">
            CyberCloud Inc.
          </p>
        </article>
        <article className="bg-navy-light-2 flex flex-col -space-y-1 px-6 py-3">
          <span className="text-xl font-normal tracking-wider text-[#ffff]/40">
            Location
          </span>
          <p className="text-lightBlue text-lg font-bold tracking-wider">
            N.Baclaso Ave. Cebu City
          </p>
        </article>
        <article className="bg-navy-light-2 flex flex-col -space-y-1 px-6 py-3">
          <span className="text-xl font-normal tracking-wider text-[#ffff]/40">
            Email
          </span>
          <p className="text-lightBlue text-lg font-bold tracking-wider">
            cybercloud@email.com
          </p>
        </article>
        <article className="bg-navy-light-2 flex flex-col -space-y-1 px-6 py-3">
          <span className="text-xl font-normal tracking-wider text-[#ffff]/40">
            Phone
          </span>
          <p className="text-lightBlue text-lg font-bold tracking-wider">
            +032 5643 3245
          </p>
        </article>
      </main>
      <footer className="mt-2 flex flex-1 flex-col px-4">
        <form className="bg-lightBlue/70 flex flex-1 flex-col gap-3 rounded-t-2xl px-4 pt-3 pb-2">
          <h3 className="text-navy text-center text-[23px] font-bold">
            Send a message
          </h3>
          <input
            type="text"
            placeholder="Your name"
            className="bg-lightBlue placeholder:text-red-black/50 ring-navy transition-ring text-navy rounded-[10px] border-0 px-4 py-3 outline-0 duration-200 placeholder:text-[18px] placeholder:font-normal focus:ring-2"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="bg-lightBlue ring-navy transition-ring text-navy rounded-[10px] border-0 px-4 py-3 outline-0 duration-200 placeholder:text-[18px] placeholder:font-normal placeholder:text-black/50 focus:ring-2"
          />
          <textarea
            placeholder="Write your message here"
            className="bg-lightBlue ring-navy transition-ring text-navy flex-1 resize-none rounded-[10px] border-0 px-4 py-4 outline-0 duration-200 placeholder:text-[18px] placeholder:font-normal placeholder:text-black/50 focus:ring-2"
          ></textarea>
        </form>
      </footer>
    </section>
  );
};
