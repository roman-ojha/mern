import React from "react";
import { NavLink } from "react-router-dom";
import Login_image from "../Images/Login.png";

const Login = () => {
  return (
    <>
      <div className="register_body">
        <div className="register_container">
          <div className="login_image_div">
            <figure>
              <img
                className="login_image"
                src={Login_image}
                alt="registration pic"
              ></img>
            </figure>
            <NavLink to="/signup" className="login_image_link">
              Create an Account
            </NavLink>
          </div>
          <form className="login_form">
            <h1 className="login_text">Sign In</h1>
            <div className="form_group">
              <label htmlFor="email">
                <i className="zmdi zmdi-email"></i>
              </label>
              <input
                className="form_input"
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                placeholder="Your Email"
              ></input>
            </div>

            <div className="form_group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock"></i>
              </label>
              <input
                className="form_input"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                placeholder="Your Password"
              ></input>
            </div>

            <div className="form_group ">
              <input
                className="form_button"
                type="submit"
                name="signup"
                className="form-submit"
                value="Log In"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
