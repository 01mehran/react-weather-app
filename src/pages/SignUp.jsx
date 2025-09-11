// Components;
import { Input } from "@components/Input";
import { ToggleButton } from "@components/ToggleButton";
import { Spinner } from "../components/Spinner";

// Libraries
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

//Image;
import { useImages } from "@images/useImages";

// Api;
import { Regester } from "@/services/Regester";

export const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const mutaion = useMutation({
    mutationFn: Regester,
    onSuccess: (data) => {
      console.log(data);

      localStorage.setItem("jwt", data.jwt);
      localStorage.setItem("user", JSON.stringify(data.user));
      setError("You signed-up successfully!");

      setTimeout(() => navigate("/"), 2000);
    },
    onError: (error) => {
      setError("something went wrong!" || error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.username.trim() ||
      !form.password.trim() ||
      !form.confirmPassword.trim()
    ) {
      setError("Fill out all filds!");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("password not match!");
      return;
    }

    if (form.password.length < 6) {
      setError("password must be 6");
      return;
    }

    if (form.password !== form.confirmPassword) {
      alert("passwords don't match!");
      return;
    }
    mutaion.mutate(form);
    setForm({
      username: "",
      password: "",
      confirmPassword: "",
    });
    setError("");
    console.log(mutaion);
  };

  return (
    <section className="bg-navy flex h-dvh items-center justify-center">
      <div className="w-[500px]">
        {/* title; */}
        <header className="py-10">
          <h1 className="text-lightBlue small:text-3xl text-center text-[8.5vw] font-bold">
            Create Account
          </h1>
        </header>
        <form onSubmit={handleSubmit} className="relative">
          {/* Inputs; */}
          <div className="w-full space-y-5 px-5">
            <Input
              id="Enter Username"
              label="Enter Username"
              icon={useImages.user}
              type="text"
              value={form.username}
              onChange={handleChange}
              name="username"
              disabled={mutaion.isPending}
            />
            <Input
              id="password"
              label="Password"
              icon={useImages.lock}
              type="password"
              value={form.password}
              onChange={handleChange}
              name="password"
              disabled={mutaion.isPending}
            />
            <Input
              id="confirm Password"
              label="Confirm Password"
              icon={useImages.lock}
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              disabled={mutaion.isPending}
            />
          </div>
          {error && (
            <p
              className={`text-blue small:text-lg absolute left-1/2 mt-2 w-full -translate-x-1/2 text-center text-[5vw] opacity-0 transition-opacity duration-200 ease-in-out ${error && "opacity-100"} `}
            >
              {error}
            </p>
          )}
          <ToggleButton />
          {/* Regester button */}
          <div className="mt-4 space-y-8 text-center">
            <button
              type="submit"
              className={`bg-blue text-navy small:w-54 small:text-xl mx-auto block h-12 w-[50vw] cursor-pointer rounded-[20px] text-[5.5vw] font-bold tracking-wider transition duration-200 hover:translate-y-0.5 ${mutaion.isPending ? "pointer-events-none opacity-50" : ""}`}
            >
              {mutaion.isPending ? <Spinner /> : "Regester"}
            </button>
            <span className="text-lightBlue">or</span>
          </div>
        </form>
        {/* Socila media icons; */}
        <footer className="flex justify-center gap-4 py-8">
          <a href="https://www.google.com" target="blank">
            <img
              src={useImages.google}
              alt="googleIcon"
              className="small:w-[50px] tansform shadow-blue w-[18vw] cursor-pointer rounded-full transition duration-200 hover:scale-110 hover:shadow-[0_0_2px_2px]"
            />
          </a>
          <a href="https://www.facebook.com" target="blank">
            <img
              src={useImages.facebook}
              alt="facebookIcon"
              className="small:w-[50px] tansform shadow-blue w-[18vw] cursor-pointer rounded-full transition duration-200 hover:scale-110 hover:shadow-[0_0_2px_2px]"
            />
          </a>
          <a href="https://www.twitter.com" target="blank">
            <img
              src={useImages.twitter}
              alt="twitterIcon"
              className="small:w-[50px] tansform shadow-blue w-[18vw] cursor-pointer rounded-full transition duration-200 hover:scale-110 hover:shadow-[0_0_2px_2px]"
            />
          </a>
        </footer>
      </div>
    </section>
  );
};

