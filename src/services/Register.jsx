import axios from "axios";

const API_URL = "https://strapi.arvanschool.ir/api/auth/local/register";

export const Register = async ({ username, password }) => {
  const passPart = password.slice(0, 3) || "xyz";
  const email = `${username}${passPart}@test.com`;

  if (password.length < 6) {
    throw new Error("Password must be at least 6 characteras.");
  }

  const { data } = await axios.post(
    API_URL,
    {
      username,
      email,
      password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return data;
};
