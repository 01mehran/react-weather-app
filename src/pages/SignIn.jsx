// Libraries;
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

// Components;
import { Input } from "@components/Input";
import { Spinner } from "@components/Spinner";

// Image;
import { useImages } from "@images/useImages";

// Api;
import { Login } from "@/services/Login";

export const SignIn = () => {
  
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: Login,
    onSuccess: (data) => {
      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      console.log(data);

      setTimeout(() => navigate("/landingPage"), 2000);
    },
    onError: (error) => {
      console.error(error);
      setError("you need to sign-up first " || error.response?.message);
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username.trim() || !form.password.trim()) {
      setError("Fill out all filds!");
      return;
    }

    mutation.mutate(form);

    setForm({
      username: "",
      password: "",
    });
  };

  return (
    <section className="bg-navy flex h-screen justify-center">
      {/* container */}
      <div className="w-[500px] border-purple-300 pt-12">
        {/* Logo */}
        <header className="w-full">
          <img src={useImages.logo} alt="logo" className="m-auto" />
        </header>
        {/* Inputs; */}
        <form
          onSubmit={handleSubmit}
          className="relative w-full space-y-5 px-5"
        >
          <Input
            id="Username"
            label="Username"
            icon={useImages.user}
            type="text"
            value={form.username}
            onChange={handleChange}
            name="username"
            disabled={mutation.isPending}
          />
          <Input
            id="Password"
            label="Password"
            icon={useImages.lock}
            type="password"
            value={form.password}
            onChange={handleChange}
            name="password"
            disabled={mutation.isPending}
          />
          {error && (
            <p
              className={`text-blue small:text-lg absolute left-1/2 w-full -translate-x-1/2 -translate-y-4 text-center text-[5vw] opacity-0 transition-opacity duration-200 ease-in-out ${error && "opacity-100"} `}
            >
              {error}
            </p>
          )}
          {/* Remember pass*/}
          <div className="mt-8 flex flex-col items-center justify-center space-y-8 text-center">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="rePassword"
                className="cursor-pointer"
              />
              <label
                htmlFor="rePassword"
                className="small:text-base text-lightBlue text-[5vw] font-normal"
              >
                Remember My Password
              </label>
            </div>
            <button
              type="submit"
              className={`bg-blue text-navy small:w-54 small:text-xl mx-auto block w-[50vw] cursor-pointer rounded-[20px] py-2 text-[5.5vw] font-bold tracking-wider transition duration-200 hover:translate-y-0.5 ${mutation.isPending ? "pointer-events-none opacity-50" : ""}`}
            >
              {mutation.isPending ? <Spinner /> : "Sign In"}
            </button>
          </div>
        </form>
        <footer className="mt-5 text-center">
          <span className="small:text-base text-lightBlue text-[5.5vw] font-normal tracking-wider">
            Forgot password?
          </span>
          <div className="small:text-base text-lightBlue text-[5vw] font-normal tracking-wide">
            Don’t have an account ?
            <Link
              to={"/signUp"}
              className="text-blue small:text-base px-2 font-normal tracking-wider"
            >
              Sign up
            </Link>
          </div>
        </footer>
      </div>
    </section>
  );
};
