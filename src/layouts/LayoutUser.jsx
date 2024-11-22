import React from "react";
import MainNav from "../components/MainNav";
import FooterPage from "../components/FooterPage";
import { Outlet } from "react-router-dom";

const LayoutUser = () => {
  return (
    <>
      <MainNav />

      <div className=" relative">
        <Outlet />
      </div>

      <FooterPage />
    </>
  );
};

export default LayoutUser;
