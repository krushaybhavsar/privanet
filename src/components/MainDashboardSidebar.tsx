import React from "react";
import { MainDashboardSidebarTabs } from "../types";
import "./css/MainDashboardSidebar.css";
import { MyFilesIcon } from "../assets/MyFilesIcon";
import { SettingsIcon } from "../assets/SettingsIcon";
import { TrashIcon } from "../assets/TrashIcon";

type MainDashboardSidebarProps = {
  selectedFragment: MainDashboardSidebarTabs;
  setSelectedFragment: React.Dispatch<
    React.SetStateAction<MainDashboardSidebarTabs>
  >;
};

const MainDashboardSidebar = (props: MainDashboardSidebarProps) => {
  const getIcon = (tab: MainDashboardSidebarTabs) => {
    switch (tab) {
      case MainDashboardSidebarTabs.MyFiles:
        return <MyFilesIcon className="main-dashboard-sidebar__tab__icon" />;
      case MainDashboardSidebarTabs.SharedFiles:
        return (
          <img
            className="main-dashboard-sidebar__tab__icon"
            src={"/assets/logos/white.png"}
          />
        );
      case MainDashboardSidebarTabs.Trash:
        return <TrashIcon className="main-dashboard-sidebar__tab__icon" />;
      case MainDashboardSidebarTabs.Settings:
        return <SettingsIcon className="main-dashboard-sidebar__tab__icon" />;
    }
  };

  return (
    <div className="main-dashboard-sidebar">
      <div className="main-dashboard-sidebar__header">
        <img src={"/assets/logos/white.png"} />
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
          {getIcon(
            MainDashboardSidebarTabs[
              key as keyof typeof MainDashboardSidebarTabs
            ]
          )}
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
