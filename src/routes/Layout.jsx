import React, { Fragment } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <Fragment>
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Layout;
