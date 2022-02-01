import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [userLogin, updateUserLogin] = useState({
    email: "",
    password: "",
  });
  const getUserLoginFormData = (event) => {
    const { name, value } = event.target;
    updateUserLogin({
      ...userLogin,
      [name]: value,
    });
  };

  const getUserLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userLogin;
    try {
      const res = await fetch("/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      console.log(data);
      if (res.status === 400 || !data) {
        console.log(data.error);
        alert(data.error);
      } else {
        dispatch({ type: "USER", payload: true });
        console.log(data.message);
        alert(data.message);
        history.push("/");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: "30px",
        }}
      >
        <h1>Login</h1>
        <form method="POST">
          <input
            type="email"
            placeholder="Email"
            name="email"
            autoComplete="ture"
            value={userLogin.email}
            autoFocus
            onChange={getUserLoginFormData}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            autoComplete="true"
            value={userLogin.password}
            onChange={getUserLoginFormData}
          />
          <input type="submit" value="Login" onClick={getUserLogin} />
        </form>
      </div>
    </div>
  );
};

export default Login;
