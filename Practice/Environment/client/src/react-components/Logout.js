import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../App";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  useEffect(() => {
    const userLogOut = async () => {
      const res = await fetch("/logout", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      history.push("/login", { replace: true });
      if (res.status !== 200) {
        const error = new Error(res.error);
        throw error;
      } else {
        dispatch({ type: "USER", payload: false });
        console.log(data.message);
        alert(data.message);
        history.push("/login", { replace: true });
      }
    };
    userLogOut();
  }, []);
  return <div></div>;
};

export default Logout;
