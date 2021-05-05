import React from "react";

// components
import Header from "../Header";
import SideBar from "../sidebar";

const DashBoardTemplate = ({ children }) => {
  return (
    <div className="flex flex-col h-screen w-full r">
      <SideBar />

      <Header />
      <div className="h-full w-full">{children}</div>
    </div>
  );
};

export default DashBoardTemplate;
