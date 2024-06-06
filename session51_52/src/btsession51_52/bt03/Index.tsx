import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
        <NavLink to={"/element"}>Element</NavLink>
        <NavLink to={"/Contact"}>Contact</NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
