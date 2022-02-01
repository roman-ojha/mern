import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import Registration_image from "../Images/Registration.png";
import { useState } from "react";

const Signup = () => {
  const history = useHistory();
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
  const postData = async (e) => {
    e.preventDefault();
    // here we are preventing the default beheviour of the click
    const { name, email, phone, work, password, cpassword } = user;
    // here we are using object ditructureing to assign the object value to the variable
    let url = "/register";
    let params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, work, password, cpassword }),
    };
    const res = await fetch(url, params);
    const data = await res.json();
    if (data.status === 422 || !data) {
      // we know we had use the 422 error in the server site when some error will occure
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successfull");
      console.log("Sucessfull Registration");
      // now after registration sucessfull we have to take the use to the login page
      history.push("/login");
    }
    // after finished the process of posting the data you have to add the proxy field to your client package.json file:
    // -> "proxy":"http://localhost:8080",
    // because backend is running in 8080 port
  };
  return (
    <>
      <div className="register_body">
        <div className="register_container">
          <h1 className="signup_text">Sign up</h1>
          {/* Here we have to use the 'POST'method because we are sending data to the server */}
          <form method="POST" className="register_form">
            <div className="form_group">
              <label htmlFor="name">
                <i className="zmdi zmdi-account"></i>
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
                <i className="zmdi zmdi-phone-in-talk"></i>
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
                <i className="zmdi zmdi-slideshow"></i>
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
            <div className="form_group">
              <label htmlFor="password">
                <i className="zmdi zmdi-lock"></i>
              </label>
              <input
                className="form_input"
                type="password"
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
                onClick={postData}
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
