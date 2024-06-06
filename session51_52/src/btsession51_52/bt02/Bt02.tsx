import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Bt02() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
