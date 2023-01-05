import React, { useEffect } from "react";
import MainDashboardScreen from "./screens/MainDashboardScreen";
import "./App.css";
import { invoke } from "@tauri-apps/api/tauri";

function App() {
  return (
    <div className="app">
      <MainDashboardScreen />
    </div>
  );
}

export default App;
