import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Logout = () => {
  // promises
  const history = useHistory();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        // if response will happen then we will go to the login page because logout will perform by backend by deleting the cookie
        history.push("/login", { replace: true });
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <></>;
};

export default Logout;
