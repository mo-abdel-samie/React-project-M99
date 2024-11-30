import React from "react";
import MainNavbar from "../Components/MainNavbar";
import MainFooter from "../Components/MainFooter";

export default function MainLayout({ children }) {
  return (
    <>
      <MainNavbar />
      {children}
      <MainFooter />
    </>
  );
}
