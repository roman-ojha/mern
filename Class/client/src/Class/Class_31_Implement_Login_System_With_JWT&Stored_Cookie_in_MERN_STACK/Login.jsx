import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Login_image from "../Images/Login.png";
import { useState } from "react";

const Login = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  let name, value;
  const getInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const { email, password } = user;
  const Signin = async (e) => {
    e.preventDefault();
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.status == 400 || !data) {
      alert("Invalid Login");
    } else {
      alert("Login Successfull");
      history.push("/");
    }
  };
  return (
    <div>
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
          <form method="POST" className="login_form">
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
                value={user.email}
                onChange={getInputs}
                placeholder="Your Email"
              ></input>
            </div>

            <div className="form_group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                className="form_input"
                type="password"
                name="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={getInputs}
                placeholder="Your Password"
              ></input>
            </div>

            <div className="form_group ">
              <input
                className="form_button"
                type="submit"
                name="signup"
                value="Log In"
                onClick={Signin}
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
