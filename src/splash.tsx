import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./fonts/Neometric/Neometric-Regular.woff";

ReactDOM.createRoot(
  document.getElementById("splash-root") as HTMLElement
).render(
  <React.StrictMode>
    <div className="splash">
      <h1>{"privanet"}</h1>
    </div>
  </React.StrictMode>
);
