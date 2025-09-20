// Libraries;
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";

// Pages;
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Landing } from "./pages/Landing";
import { DailyWeather } from "./pages/DailyWeather";
import { UserProfile } from "./pages/UserProfile";
import { ContactUs } from "./pages/ContactUs";
import { Setting } from "./pages/Setting";

// Components;
import { Dashboard } from "@components/Dashboard";
import { AboutUs } from "./pages/AboutUs";
import { ScreenSplash } from "./components/ScreenSplash";
import { EmergencyContact } from "./pages/EmergencyContact";
import { HourlyWeather } from "./pages/HourlyWeather";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <Dashboard />

      {showSplash ? (
        <ScreenSplash />
      ) : (
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/landingPage" element={<Landing />} />
          <Route path="/dailyWeather" element={<DailyWeather />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/emergencyContact" element={<EmergencyContact />} />
          <Route path="/hourlyWeather" element={<HourlyWeather />} />
        </Routes>
      )}
    </QueryClientProvider>
  );
};
