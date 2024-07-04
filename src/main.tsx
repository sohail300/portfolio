import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { NextUIProvider } from "@nextui-org/system";

ReactDOM.hydrateRoot(
  document.getElementById("root")!,
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
        <ToastContainer />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
