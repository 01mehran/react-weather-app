const API_URL = "https://strapi.arvanschool.ir/api/auth/local";
import axios from "axios";

export const Login = async ({ username, password }) => {
  const { data } = await axios.post(
    API_URL,
    {
      identifier: username,
      password: password,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );

  return data;
};
