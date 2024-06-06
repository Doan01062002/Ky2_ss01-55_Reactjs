import React from "react";
import { NavLink } from "react-router-dom";

export default function AccountBt08() {
  return (
    <div>
      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <NavLink to={"/account/componentAccount"}>ComponentAccount1</NavLink>
      </nav>
    </div>
  );
}
