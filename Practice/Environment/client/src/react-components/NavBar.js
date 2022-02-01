import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const NavBar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <NavLink to="/" className="NavbarLink" aria-current="page">
            Home
          </NavLink>
          <NavLink to="/about" className="NavbarLink">
            About
          </NavLink>
          <NavLink to="/contact" className="NavbarLink">
            Contact
          </NavLink>
          <NavLink to="/logout" className="NavbarLink">
            Logout
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/" className="NavbarLink" aria-current="page">
            Home
          </NavLink>
          <NavLink to="/login" className="NavbarLink">
            Login
          </NavLink>
          <NavLink to="/signup" className="NavbarLink">
            Register
          </NavLink>
        </>
      );
    }
  };

  return (
    <>
      <div className="Navbar_Container">
        <RenderMenu />
      </div>
    </>
  );
};

export default NavBar;
