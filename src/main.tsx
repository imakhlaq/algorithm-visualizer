import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import ContextProvider from "./store/contextProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
