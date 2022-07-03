import React from "react";
import { NavLink } from "react-router-dom";
import Registration_image from "../Images/Registration.png";
import { useState } from "react";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const getInputs = (event) => {
    name = event.target.name;
    value = event.target.value;
    // by this we can update the whole form [name] doesn't represent the name of the form but it represent the name of the input form in which the user is typing write now
    setUser({ ...user, [name]: value });
  };
  return (
    <>
      <div className="register_body">
        <div className="register_container">
          <h1 className="signup_text">Sign up</h1>
          <form className="register_form">
            <div className="form_group">
              <label htmlFor="name">
                <i class="zmdi zmdi-account"></i>
              </label>
              <input
                className="form_input"
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                value={user.name}
                onChange={getInputs}
                placeholder="Your Name"
              ></input>
            </div>
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
              <label htmlFor="phone">
                <i class="zmdi zmdi-phone-in-talk"></i>
              </label>
              <input
                className="form_input"
                type="number"
                name="phone"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={getInputs}
                placeholder="Your Phone"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="work">
                <i class="zmdi zmdi-slideshow"></i>
              </label>
              <input
                className="form_input"
                type="text"
                name="work"
                id="work"
                autoComplete="off"
                value={user.work}
                onChange={getInputs}
                placeholder="Your Profession"
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
                value={user.password}
                onChange={getInputs}
                placeholder="Your Password"
              ></input>
            </div>
            <div className="form_group">
              <label htmlFor="password">
                <i class="zmdi zmdi-lock"></i>
              </label>
              <input
                className="form_input"
                type="cpassword"
                name="cpassword"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={getInputs}
                placeholder="Conform Password"
              ></input>
            </div>
            <div className="form_group ">
              <input
                className="form_button"
                type="submit"
                name="signup"
                className="form-submit"
                value="register"
              ></input>
            </div>
          </form>
          <div className="signup_image_div">
            <figure>
              <img
                className="signup_image"
                src={Registration_image}
                alt="registration pic"
              ></img>
            </figure>
            <NavLink to="/login" className="signup_image_link">
              I am already registered
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
