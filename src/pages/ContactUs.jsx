import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Images;
import { useImages } from "@images/useImages";

const ACCESS_KEY = "03090a62-0231-4ad5-b4bc-bff9235fa448";
const URL = "https://api.web3forms.com/submit";

export const ContactUs = () => {
  const navigate = useNavigate();
  const [formResponse, setFormResponse] = useState({ message: "", type: "" });

  const handleSubmitForm = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append("access_key", ACCESS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });

      const data = await res.json();

      if (data.success) {
        setFormResponse({ message: data.message, type: "success" });
        event.target.reset();
        console.log(data);
      } else {
        setFormResponse({
          message: data.message || "Something went wrong!",
          type: "error",
        });
        console.log(data);
      }

      setTimeout(() => {
        setFormResponse({ message: "", type: "" });
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      setFormResponse({ message: "Network error!", type: "error" });
      setTimeout(() => {
        setFormResponse({ message: "", type: "" });
      }, 3000);
    }
  };

  return (
    <section className="bg-navy flex h-dvh flex-col overflow-y-hidden">
      <header className="bg-navy-dark flex items-center space-x-12 py-6 pl-8">
        <div className="cursor-pointer" onClick={() => navigate(-1)}>
          <img
            src={useImages.arrow}
            alt="arrowIcon"
            className="max-h-[28px] max-w-[28px]"
          />
        </div>
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
        <form
          onSubmit={handleSubmitForm}
          className="bg-lightBlue/70 relative flex flex-1 flex-col gap-3 rounded-t-2xl px-4 pt-3 pb-2"
        >
          {formResponse.message && (
            <p
              className={`ease absolute right-7 ${formResponse.message ? "bottom-4" : "-bottom-full"} ${formResponse.type === "success" ? "text-green-700" : "text-red-600"} font-semibold transition-all duration-400`}
            >
              {formResponse.message}
            </p>
          )}

          <h3 className="text-navy text-center text-[23px] font-bold">
            Send a message
          </h3>
          <input
            name="name"
            type="text"
            placeholder="Your name"
            className="bg-lightBlue placeholder:text-red-black/50 ring-navy transition-ring text-navy rounded-[10px] border-0 px-4 py-3 outline-0 duration-200 placeholder:text-[18px] placeholder:font-normal focus:ring-2"
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            className="bg-lightBlue ring-navy transition-ring text-navy rounded-[10px] border-0 px-4 py-3 outline-0 duration-200 placeholder:text-[18px] placeholder:font-normal placeholder:text-black/50 focus:ring-2"
            required
          />
          <textarea
            name="message"
            placeholder="Write your message here"
            className="bg-lightBlue ring-navy transition-ring text-navy flex-1 resize-none rounded-[10px] border-0 px-4 py-4 outline-0 duration-200 placeholder:text-[18px] placeholder:font-normal placeholder:text-black/50 focus:ring-2"
          ></textarea>
          <input type="submit" value="Send" className="border-1 text-navy font-bold border-navy rounded-md px-8 py-1 inline-block w-fit mx-auto cursor-pointer" />
        </form>
      </footer>
    </section>
  );
};
