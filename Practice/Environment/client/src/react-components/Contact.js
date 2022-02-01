import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    const getUserData = async () => {
      try {
        const res = await fetch("/getdata", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await res.json();
        setUserData({
          ...userData,
          name: data.name,
          email: data.email,
          phone: data.phone,
          address: data.address,
        });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, []);

  const setMessage = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  const sendMessage = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    console.log(userData);
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    const data = await res.json();
    if (res.status !== 201) {
      console.log(data.error);
      alert(data.error);
    } else {
      console.log(data.message);
      alert(data.message);
      console.log(data);
      setUserData({
        ...userData,
        message: "",
      });
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
        <div>
          <h2>Phone: {userData.phone}</h2>
          <h2>Email: {userData.email}</h2>
          <h2>Address: {userData.address}</h2>
        </div>
        <form method="POST">
          <input
            type="text"
            placeholder="Username"
            name="name"
            value={userData.name}
            onChange={setMessage}
            autoComplete="true"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={userData.email}
            onChange={setMessage}
            autoComplete="true"
          />
          <input
            type="number"
            placeholder="Phone no."
            name="phone"
            value={userData.phone}
            onChange={setMessage}
            autoComplete="true"
          />
          <textarea
            placeholder="Message"
            name="message"
            value={userData.message}
            onChange={setMessage}
            autoComplete="true"
          ></textarea>
          <input type="submit" value="Send Message" onClick={sendMessage} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
