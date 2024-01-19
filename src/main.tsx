import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import { ThemeProvider } from "./contexts/ThemeContext";
import UserContextProvider from "./contexts/UserContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserContextProvider>
        <BrowserRouter children={<App />} />
      </UserContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
