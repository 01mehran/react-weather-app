// Components;
import { Input } from "@components/Input";

// Image;
import { useImages } from "@images/useImages";

export const SignIn = () => {
  return (
    <section className="bg-navy h-screen flex justify-center items-center">
      {/* container */}
      <div className="w-[500px] border-purple-300 ">
        {/* Logo */}
        <header className="w-full">
          <img src={useImages.logo} alt="logo" className="m-auto" />
        </header>
        {/* Inputs; */}
        <main className="space-y-5 w-full px-5 small:px-10 ">
          <Input
            id="username"
            label="Username"
            icon={useImages.user}
            type="text"
          />
          <Input
            id="password"
            label="Password"
            icon={useImages.lock}
            type="password"
          />
        </main>
        {/* Remember pass*/}
        <div className="flex mt-8 text-center justify-center items-center flex-col space-y-8  ">
          <div className="flex items-center gap-2">
            <input type="checkbox" id="rePassword" className="cursor-pointer" />
            <label
              htmlFor="rePassword"
              className="font-normal text-[5vw] small:text-base text-lightBlue "
            >
              Remember My Password
            </label>
          </div>
          <button
            type="submit"
            className="bg-blue text-black w-[50vw] small:w-54  rounded-[20px] font-medium tracking-wider mx-auto block text-[5.5vw] small:text-xl py-1 cursor-pointer"
          >
            Sign In
          </button>
        </div>
        <footer className="text-center mt-5">
          <span className="font-normal tracking-wider text-[5.5vw] small:text-base text-lightBlue">
            Forgot password?
          </span>
          <div className="text-[5vw] small:text-base font-normal text-lightBlue tracking-wide">
            Don’t have an account ?
            <span className="text-blue tracking-wider px-2  small:text-base font-normal">
              Sign up
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
};
