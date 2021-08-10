import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider(props) {
  //CONTEXT FOR MODALS
  //STATES for modals
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  //Variable with states 
  const values = {
    showError, setShowError,
    showSuccess, setShowSuccess,
  };

  return (
    <AppContext.Provider
      value={values}
    >
      {props.children}
    </AppContext.Provider>
  );
}
