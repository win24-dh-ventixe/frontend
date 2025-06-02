import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Main";
import Nav from "../components/Nav";
import { Outlet } from "react-router-dom";

const PortalLayout = () => {
  return (
    <div className="portal-wrapper">
      <Nav />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PortalLayout;
