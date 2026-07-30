// Components;
import { Input } from "@components/Input";
import { ToggleButton } from "@components/ToggleButton";
import { Spinner } from "@/components/Spinner";

// Libraries
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

//Image;
import { useImages } from "@images/useImages";

// Api;
import { Register } from "@/services/Register";
import { useValidatePassword } from "@/hooks/useValidatePassword";
import { Axios } from "axios";

export const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const { validatePassword, error, setError } = useValidatePassword();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
  };

  const { mutate, isPending } = useMutation({
    mutationFn: Register,
    onSuccess: (data) => {
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

    const isValid = validatePassword(form);
    if (!isValid) return;

    mutate(form);
    setError("");
  };

  return (
    <section className="bg-navy flex h-dvh items-center justify-center">
      <div className="w-125">
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
              disabled={isPending}
            />
            <Input
              id="password"
              label="Password"
              icon={useImages.lock}
              type="password"
              value={form.password}
              onChange={handleChange}
              name="password"
              disabled={isPending}
            />
            <Input
              id="confirm Password"
              label="Confirm Password"
              icon={useImages.lock}
              type="password"
              value={form.confirmPassword}
              onChange={handleChange}
              name="confirmPassword"
              disabled={isPending}
            />
          </div>

          {/* Submit Button */}
          <div className="mt-4 space-y-4 text-center">
            <div className="mx-auto mt-7 flex w-fit flex-col items-center gap-2">
              <button
                type="submit"
                className={`bg-blue text-navy small:w-54 small:text-xl mx-auto block h-12 w-[50vw] cursor-pointer rounded-[20px] text-[5.5vw] font-bold tracking-wider transition duration-200 hover:translate-y-0.5 ${isPending ? "pointer-events-none opacity-50" : ""}`}
              >
                {isPending ? <Spinner /> : "Register"}
              </button>

              {error && (
                <p
                  className={`text-blue bg-blue/5 animate-scale-in bottom-12 rounded-full border px-4 py-2 text-sm opacity-0 transition-opacity duration-200 ease-in-out sm:text-base ${error && "opacity-100"} `}
                >
                  {error}
                </p>
              )}
              <Link
                to="/"
                className="text-blue small:text-base px-2 text-sm font-medium tracking-wide"
              >
                Sign in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};
