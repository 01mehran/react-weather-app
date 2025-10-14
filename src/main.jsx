import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.jsx";

// Libraries;
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

// Context;
import { DashboardProvider } from "./context/DashboardContext.jsx";
import { InputSearchProvider } from "./context/InputSearchContext.jsx";
import { WeatherProvider } from "./context/WeatherContext.jsx";
import { ShareAppProvider } from "./context/ShareAppContext.jsx";
import { SettingsProvider } from "./context/SettingsContext.jsx";

const queyClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queyClient}>
    <StrictMode>
      <BrowserRouter>
        <InputSearchProvider>
          <ShareAppProvider>
            <SettingsProvider>
              <WeatherProvider>
                <DashboardProvider>
                  <App />
                </DashboardProvider>
              </WeatherProvider>
            </SettingsProvider>
          </ShareAppProvider>
        </InputSearchProvider>
      </BrowserRouter>
    </StrictMode>
  </QueryClientProvider>,
);
