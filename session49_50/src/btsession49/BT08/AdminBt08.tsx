import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

export default function AdminBt08() {
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLink to={"/admin/admin1"}>ComponentAdmin1</NavLink>
      </nav>
    </div>
  );
}
