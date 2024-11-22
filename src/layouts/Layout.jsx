import React from "react";
import { Outlet } from "react-router-dom";
import MainNav from "../components/MainNav";
import FooterPage from "../components/FooterPage";
const Layout = () => {
  return (
    <>
      <MainNav />

      <div>
        <Outlet />
      </div>

      <FooterPage />
    </>
  );
};

export default Layout;
