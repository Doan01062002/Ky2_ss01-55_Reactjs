import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <nav>
        {/* <Link to="/about">about</Link>
        <Link to='/news'>News</Link> */}
        {/* Sinh ra thêm navLink*/}
        <NavLink to="/about">about</NavLink>
        <NavLink to="/news">News</NavLink>
      </nav>
    </div>
  );
}
