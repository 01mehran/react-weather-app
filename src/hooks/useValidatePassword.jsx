import { useState } from "react";

export const useValidatePassword = () => {
  const [error, setError] = useState("");

  const validatePassword = ({ password, confirmPassword }) => {
    if (password !== confirmPassword) {
      setError("password not match!");
      return false;
    }

    if (password.length < 6) {
      setError("password must be 6");
      return false;
    }

    if (password !== confirmPassword) {
      alert("passwords don't match!");
      return false;
    }

    setError("");
    return true;
  };

  return { validatePassword, error, setError };
};
