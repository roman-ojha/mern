import React, { useState, useEffect } from "react";
import Contact_phone from "../Images/Contact_phone.png";
import Contact_email from "../Images/Contact_email.png";
import Contact_address from "../Images/Contact_address.png";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const getData = async () => {
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
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };
  // now send the data to the backend
  const sendMessage = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message not send");
    } else {
      alert("Message Send Sucessfully");
      setUserData({
        ...userData,
        message: "",
      });
    }
    // after that we ahve to use 'method="POST"' on the form tag because we are posting the data to the database
  };
  return (
    <>
      <div className="contact_page">
        <div className="contact_container">
          <div className="contact_info_container">
            <img
              className="contact_info_image"
              src={Contact_phone}
              alt="phone"
            ></img>
            <div className="contact_info">
              <p className="contact_info_content_upper">phone</p>
              <p className="contact_info_content">{userData.phone}</p>
            </div>
          </div>
          <div className="contact_info_container">
            <img
              className="contact_info_image"
              src={Contact_email}
              alt="email"
            ></img>

            <div className="contact_info">
              <p className="contact_info_content_upper">Email</p>
              <p className="contact_info_content">{userData.email}</p>
            </div>
          </div>
          <div className="contact_info_container">
            <img
              className="contact_info_image"
              src={Contact_address}
              alt="address"
            ></img>

            <div className="contact_info">
              <p className="contact_info_content_upper">Address</p>
              <p className="contact_info_content">Kathmandu,Nepal</p>
            </div>
          </div>
        </div>
        <div className="contact_messages_page">
          <div className="messages_container">
            <div className="contact_message_inside_container">
              <h3 id="Get_in_touch_text">Get in Touch</h3>
              <div className="contact_form_container">
                <form method="POST" id="contact_form">
                  <div id="contact_username" className="contact_form_group">
                    <input
                      className="contact_form_input"
                      type="text"
                      autoComplete="off"
                      placeholder="Username"
                      required="true"
                      name="name"
                      value={userData.name}
                      onChange={handleInputs}
                    ></input>
                  </div>
                  <div id="contact_email" className="contact_form_group">
                    <input
                      className="contact_form_input"
                      type="email"
                      autoComplete="off"
                      placeholder="Your Email"
                      required="true"
                      name="email"
                      value={userData.email}
                      onChange={handleInputs}
                    ></input>
                  </div>
                  <div id="contact_phone" className="contact_form_group">
                    <input
                      className="contact_form_input"
                      type="number"
                      autoComplete="off"
                      placeholder="Your Phone"
                      required="true"
                      name="phone"
                      value={userData.phone}
                      onChange={handleInputs}
                    ></input>
                  </div>
                </form>
              </div>
              <textarea
                className="contact_textarea"
                cols="30"
                rows="10"
                placeholder="Message"
                name="message"
                value={userData.message}
                onChange={handleInputs}
              ></textarea>
              <div className="contact_form_button_container ">
                <input
                  className="contact_form_button"
                  type="submit"
                  value="Send Message"
                  onClick={sendMessage}
                ></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
