import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner"

import { App } from "./app";

import "./assets/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Toaster richColors />
    <App />
  </React.StrictMode>
);
