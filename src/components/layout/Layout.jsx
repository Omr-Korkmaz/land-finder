import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./layout.scss";

const Layout = ({ children }) => {
  return (
    <section className="container">
      <Sidebar className="container__sidebar" />
      <Navbar className="container__navbar" />

      <main className="container__body">{children}</main>

      <footer className="container__footer"> FOOTER COMING</footer>
    </section>
  );
};

export default Layout;
