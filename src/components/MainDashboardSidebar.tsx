import React from "react";
import { MainDashboardSidebarTabs } from "../types";
import "./css/MainDashboardSidebar.css";

type MainDashboardSidebarProps = {
  selectedFragment: MainDashboardSidebarTabs;
  setSelectedFragment: React.Dispatch<
    React.SetStateAction<MainDashboardSidebarTabs>
  >;
};

const MainDashboardSidebar = (props: MainDashboardSidebarProps) => {
  return (
    <div className="main-dashboard-sidebar">
      <div className="main-dashboard-sidebar__header">
        <h1>{"privanet"}</h1>
      </div>
      {Object.keys(MainDashboardSidebarTabs).map((key) => (
        <div
          key={key}
          className={`main-dashboard-sidebar__tab ${
            props.selectedFragment ===
            MainDashboardSidebarTabs[
              key as keyof typeof MainDashboardSidebarTabs
            ]
              ? "selected"
              : ""
          }`}
          onClick={() =>
            props.setSelectedFragment(
              MainDashboardSidebarTabs[
                key as keyof typeof MainDashboardSidebarTabs
              ]
            )
          }
        >
          <p className="main-dashboard-sidebar__tab__text">
            {
              MainDashboardSidebarTabs[
                key as keyof typeof MainDashboardSidebarTabs
              ]
            }
          </p>
        </div>
      ))}
    </div>
  );
};

export default MainDashboardSidebar;
