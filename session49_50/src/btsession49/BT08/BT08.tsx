import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function BT08() {
  return (
    <div>
      <nav style={{ display: "flex", gap: "20px" }}>
        <NavLink to={"/admin"}>Admin</NavLink>
        <NavLink to={"/account"}>Account</NavLink>
        <NavLink to={"/product"}>Product</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
