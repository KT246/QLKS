import React from "react";
import { Outlet } from "react-router-dom";
import Sidbar from "../components/admin/Sidbar";

const LayoutAdmin = () => {
  return (
    <div className="flex h-screen">
      <Sidbar />
      <div className="overflow-y-auto w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutAdmin;
