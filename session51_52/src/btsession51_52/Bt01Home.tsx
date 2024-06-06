import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Bt01Home() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
