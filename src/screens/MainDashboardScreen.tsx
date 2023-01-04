import React, { useState } from "react";
import MainDashboardSidebar from "../components/MainDashboardSidebar";
import { MainDashboardSidebarTabs } from "../types";
import "./css/MainDashboardScreen.css";
import MyFilesFragment from "./fragments/MyFilesFragment";

const MainDashboardScreen = () => {
  const [selectedFragment, setSelectedFragment] =
    useState<MainDashboardSidebarTabs>(MainDashboardSidebarTabs.MyFiles);

  const currentFragment = (): JSX.Element => {
    switch (selectedFragment) {
      case MainDashboardSidebarTabs.MyFiles:
        return <MyFilesFragment />;
      default:
        return <MyFilesFragment />;
    }
  };

  return (
    <div className="main-dashboard-screen">
      <MainDashboardSidebar
        selectedFragment={selectedFragment}
        setSelectedFragment={setSelectedFragment}
      />
      <div className="main-dashboard-screen__content">{currentFragment()}</div>
    </div>
  );
};

export default MainDashboardScreen;
