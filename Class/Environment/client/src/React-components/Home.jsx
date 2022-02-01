import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setUserName] = useState("");
  const [show, setShow] = useState(false);
  const userHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setUserName(data.name);
      setShow(true);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userHomePage();
  }, []);
  return (
    <div>
      <div className="Home_page_body">
        <div className="container_inside_home_page">
          <p className="welcome_text">Welcome</p>
          <h1 className="MERN_Developer">{userName}</h1>
          <h4 className="see_you_back_text">
            {show ? "Happy, to see you back" : "We Are The MERN Developer"}
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
