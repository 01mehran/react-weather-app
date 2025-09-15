// Libraries;
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Pages;
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Landing } from "./pages/Landing";
import { DailyWeather } from "./pages/DailyWeather";
import { UserProfile } from "./pages/UserProfile";
import { ContactUs } from "./pages/ContactUs";


// Components;
import { Dashboard } from "@components/Dashboard";
import { AboutUs } from "./pages/AboutUs";

export const App = () => {
  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <Dashboard />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/landingPage" element={<Landing />} />
        <Route path="/dailyWeather" element={<DailyWeather />} />
        <Route path="/userProfile" element={<UserProfile />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
      </Routes>
    </QueryClientProvider>
  );
};
