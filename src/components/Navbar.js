import React from "react";
// import { Outlet } from 'react-router-dom'
import {
  BrowserRouter as Router,
  Outlet,

} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navheader">
          <li>
            <a href="/Home">Home</a>
          </li>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </nav>

      <Outlet></Outlet>
    </div>
  );
};

export default Navbar;
