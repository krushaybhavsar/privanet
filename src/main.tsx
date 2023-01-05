import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import "./fonts/Neometric/Neometric-Regular.woff";
import { appWindow } from "@tauri-apps/api/window";
import { invoke } from "@tauri-apps/api/tauri";

(document.getElementById("titlebar-minimize") as HTMLElement).addEventListener(
  "click",
  () => appWindow.minimize()
);
(document.getElementById("titlebar-maximize") as HTMLElement).addEventListener(
  "click",
  () => appWindow.toggleMaximize()
);
(document.getElementById("titlebar-close") as HTMLElement).addEventListener(
  "click",
  () => appWindow.close()
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
