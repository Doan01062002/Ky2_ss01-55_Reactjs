import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Bt07.css";

export default function BT07() {
  return (
    <div>
      <nav className="nav">
        <NavLink className="nav-link" to={"/home"}>
          Home
        </NavLink>
        <NavLink className="nav-link" to={"/product"}>
          Product
        </NavLink>
        <NavLink className="nav-link" to={"/detail"}>
          Detail
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
