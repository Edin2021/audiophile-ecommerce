import React from "react";
import { useHistory } from "react-router-dom";

const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const history = useHistory();
  const prevPage = () => {
    history.goBack();
  };
  return (
    <AppContext.Provider value={{ prevPage }}>{children}</AppContext.Provider>
  );
}

export const useGlobalContext = () => React.useContext(AppContext);
