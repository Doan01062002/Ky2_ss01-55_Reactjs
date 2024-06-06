import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function BT06() {
  return (
    <div>
      <nav>
        <NavLink style={{ margin: "20px" }} to={"/home"}>
          Home
        </NavLink>
        <NavLink style={{ margin: "20px" }} to={"/contact"}>
          Conatact
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
