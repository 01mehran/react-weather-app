import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Landing } from "./pages/Landing";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DailyWeather } from "./pages/DailyWeather";
import { Dashboard } from "@components/Dashboard";

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
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </QueryClientProvider>
  );
};
