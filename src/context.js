import React from "react";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => React.useContext(AppContext);
