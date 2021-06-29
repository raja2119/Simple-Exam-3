import React, { createContext, useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const ThemeContext = createContext();

const useThemeContext = () => {
  return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const showAlert = (messageBody, messageType) => {
    // let alertFunc;
    const options = {
      position: "top-right",
      autoClose: 7000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    switch (messageType) {
      case "success":
        toast.success(messageBody, options);
        break;
      case "error":
        toast.error(messageBody, options);

        break;
      case "info":
        toast.info(messageBody, options);

        break;
      case "dark":
        toast.dark(messageBody, options);

        break;
      case "warning":
        toast.warning(messageBody, options);

        break;
      default:
        toast(messageBody, options);
    }
  };
  const value = {
    theme,
    setTheme,
    showAlert,
  };
  return (
    <ThemeContext.Provider value={value}>
      <ToastContainer
        position="top-right"
        autoClose={7000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={4}
      />
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider, useThemeContext };
