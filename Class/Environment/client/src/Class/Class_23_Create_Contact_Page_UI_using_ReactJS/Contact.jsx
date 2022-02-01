import React from "react";
import Contact_phone from "../Images/Contact_phone.png";
import Contact_email from "../Images/Contact_email.png";
import Contact_address from "../Images/Contact_address.png";

const Contact = () => {
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
              <p className="contact_info_content">+91 1111 543 2198</p>
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
              <p className="contact_info_content">razz@roman.com</p>
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
                <form id="contact_form">
                  <div id="contact_username" className="contact_form_group">
                    <input
                      className="contact_form_input"
                      type="text"
                      autoComplete="off"
                      placeholder="Username"
                      required="true"
                    ></input>
                  </div>
                  <div id="contact_email" className="contact_form_group">
                    <input
                      className="contact_form_input"
                      type="email"
                      autoComplete="off"
                      placeholder="Your Email"
                      required="true"
                    ></input>
                  </div>
                  <div id="contact_phone" className="contact_form_group">
                    <input
                      className="contact_form_input"
                      type="number"
                      autoComplete="off"
                      placeholder="Your Phone"
                      required="true"
                    ></input>
                  </div>
                </form>
              </div>
              <textarea
                className="contact_textarea"
                cols="30"
                rows="10"
                placeholder="Message"
              ></textarea>
              <div className="contact_form_button_container ">
                <input
                  className="contact_form_button"
                  type="submit"
                  value="Send Message"
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
