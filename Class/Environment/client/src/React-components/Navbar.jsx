import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { NavLink } from "react-router-dom";
// here now you can import logo
import logo from "../Images/logo03.png";
import { UserContext } from "../App";

const HACPage = () => {
  return (
    <>
      <NavLink className="nav-link active " aria-current="page" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link  " to="/about">
        About
      </NavLink>
      <NavLink className="nav-link " to="/contact">
        Contact
      </NavLink>
    </>
  );
};

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const RenderMenu = () => {
    if (state) {
      return (
        <>
          <HACPage />
          <NavLink className="nav-link " to="/logout">
            Logout
          </NavLink>
        </>
      );
    } else {
      return (
        <>
          <>
            <HACPage />
            <NavLink className="nav-link " to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link " to="/signup">
              Register
            </NavLink>
          </>
          ;
        </>
      );
    }
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light Nav_color">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <RenderMenu />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
