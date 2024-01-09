import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalContextProvider } from "./components/Context/GlobalContext.jsx";
import { LanguageContextProvider } from "./components/Context/LanguageContext/LanguageContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GlobalContextProvider>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </GlobalContextProvider>
);
