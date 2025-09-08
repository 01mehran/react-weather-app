// Components;
import { Input } from "@components/Input";
import { useImages } from "@images/useImages";

//Image;
import { ToggleButton } from "@components/ToggleButton";

export const SignUp = () => {
  return (
    <section className="bg-navy h-dvh flex justify-center items-center">
      <div className="w-[500px] ">
        {/* title; */}
        <header className="py-10 ">
          <h1 className="text-center font-bold text-lightBlue text-[8.5vw] small:text-3xl">
            Create Account
          </h1>
        </header>
        <main>
          {/* Inputs; */}
          <div className="space-y-5 w-full px-5 ">
            <Input
              id="Enter Username"
              label="Enter Username"
              icon={useImages.user}
              type="text"
            />
            <Input
              id="password"
              label="Password"
              icon={useImages.lock}
              type="password"
            />
            <Input
              id="confirm Password"
              label="Confirm Password"
              icon={useImages.lock}
              type="password"
            />
          </div>
          <ToggleButton />
          {/* Regester button */}
          <div className="text-center mt-4 space-y-8">
            <button className="bg-blue text-navy w-[50vw] small:w-54  rounded-[20px] font-bold tracking-wider mx-auto block text-[5.5vw] small:text-xl py-2 cursor-pointer transition duration-200 hover:translate-y-0.5">
              Regester
            </button>
            <span className="text-lightBlue">or</span>
          </div>

          {/* Socila media icons; */}
          <footer className="flex gap-4 justify-center py-8">
            <img
              src={useImages.google}
              alt="googleIcon"
              className="w-[18vw] small:w-[50px] cursor-pointer tansform transition duration-200 hover:scale-110 shadow-blue hover:shadow-[0_0_2px_2px] rounded-full"
            />
            <img
              src={useImages.facebook}
              alt="facebookIcon"
              className="w-[18vw] small:w-[50px] cursor-pointer tansform transition duration-200 hover:scale-110 shadow-blue hover:shadow-[0_0_2px_2px] rounded-full"
            />
            <img
              src={useImages.twitter}
              alt="twitterIcon"
              className="w-[18vw] small:w-[50px] cursor-pointer tansform transition duration-200 hover:scale-110 shadow-blue hover:shadow-[0_0_2px_2px] rounded-full"
            />
          </footer>
        </main>
      </div>
    </section>
  );
};
