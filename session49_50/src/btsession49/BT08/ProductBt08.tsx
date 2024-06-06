import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function ProductBt08() {
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLink to={"/product/componentProduct"}>ComponentProduct1</NavLink>
      </nav>
    </div>
  );
}
