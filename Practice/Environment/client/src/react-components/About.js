import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [showUserData, updateShowUserData] = useState({});
  const getUserData = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      updateShowUserData(data);
      if (res.status !== 200) {
        console.logo(data);
        history.push("/");
      } else {
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <>
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
        <h3>Username: {showUserData.name}</h3>
        <h3>Gmail: {showUserData.email}</h3>
        <h3>Address: {showUserData.address}</h3>
        <h3>Phone: {showUserData.phone}</h3>
      </div>
    </>
  );
};

export default About;
