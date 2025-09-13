import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen((prev) => !prev);
  };

  return (
    <DashboardContext.Provider value={{isDashboardOpen, toggleDashboard}}>
      {children}
    </DashboardContext.Provider>
  )
};

export const useToggleDashboard = () => useContext(DashboardContext);
