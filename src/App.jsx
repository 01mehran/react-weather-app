// Libraries;
import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

// Pages;
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Landing } from "./pages/Landing";
import { DailyWeather } from "./pages/DailyWeather";
import { UserProfile } from "./pages/UserProfile";
import { ContactUs } from "./pages/ContactUs";
import { Setting } from "./pages/Setting";
import { NotFound } from "./pages/NotFound";

// Components;
import { Dashboard } from "@components/Dashboard";
import { AboutUs } from "./pages/AboutUs";
import { ScreenSplash } from "./components/ScreenSplash";
import { EmergencyContact } from "./pages/EmergencyContact";
import { HourlyWeather } from "./pages/HourlyWeather";
import { Map } from "./components/Map";

export const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const location = useLocation();

  const customRoutes = [
    "/landingPage",
    "/dailyWeather",
    "/dailyWeather",
    "/userProfile",
    "/contactUs",
    "/aboutUs",
    "/setting",
    "/emergencyContact",
    "/hourlyWeather",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showSplash ? (
        <ScreenSplash />
      ) : (
        <>
          {customRoutes.includes(location.pathname) && <Dashboard />}

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
            <Route path="/map" element={<Map />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </>
  );
};
