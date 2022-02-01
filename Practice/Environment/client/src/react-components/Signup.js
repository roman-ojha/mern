import React, { useState } from "react";
import { useHistory } from "react-router";

/**
 *@type {number}
 * amount is required
 * by X to make Y work
 */

const Signup = () => {
  const history = useHistory();
  const [userRegisterData, setUserRegisterData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    cpassword: "",
  });
  const getUserData = (event) => {
    let { name, value } = event.target;
    setUserRegisterData({ ...userRegisterData, [name]: value });
  };
  const sendUserDataToServer = async (e) => {
    e.preventDefault();
    const { name, email, phone, address, password, cpassword } =
      userRegisterData;
    try {
      const res = await fetch("/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          password,
          cpassword,
        }),
      });
      const userData = await res.json();
      if (res.status === 422 || !userData) {
        console.log(userData.error);
        alert(userData.error);
      } else {
        console.log(userData.message);
        alert(userData.message);
        history.push("/login");
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
        <h1>Sign up</h1>
        <form method="POST">
          <input
            type="text"
            placeholder="name"
            autoFocus
            name="name"
            value={userRegisterData.name}
            onChange={getUserData}
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userRegisterData.email}
            onChange={getUserData}
          />
          <input
            type="number"
            placeholder="Phone no."
            name="phone"
            value={userRegisterData.phone}
            onChange={getUserData}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={userRegisterData.address}
            onChange={getUserData}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={userRegisterData.password}
            onChange={getUserData}
          />
          <input
            type="password"
            placeholder="Confirm password"
            name="cpassword"
            value={userRegisterData.cpassword}
            onChange={getUserData}
          />
          <input
            type="submit"
            value="Register"
            onClick={sendUserDataToServer}
          />
        </form>
      </div>
    </div>
  );
};

export default Signup;
