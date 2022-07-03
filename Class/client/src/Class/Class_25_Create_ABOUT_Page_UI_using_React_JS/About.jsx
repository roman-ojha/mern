import React from "react";
import User_image from "../Images/User.jpg";

const About = () => {
  return (
    <>
      <div className="about_page">
        <div className="About_container">
          <form method="">
            <div className="row1">
              <div className="user_image_container">
                <img className="user_image" src={User_image} alt="user" />
              </div>
              <div className="user_row1_info">
                <div className="img_right_info_container">
                  <p className="img_right_info">Roman Ojha</p>
                  <p className="img_right_info">web Developer</p>
                  <p className="profile_rating img_right_info">
                    Ranking: <span>1/10</span>
                  </p>
                </div>
                <ul className="nav nav-tabs about_tab" role="tablist">
                  <li className="active">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="active">
                    <a
                      className="nav-link "
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="true"
                    >
                      timeline
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <input
                  type="button"
                  className="Edit_profile_button"
                  name="btnAddMore"
                  value="Edit Profile"
                />
              </div>
            </div>
            <div className="row2">
              <div className="Work_Link_tab">
                <div className="Profile-work">
                  <p id="work_link_text">Wrok Link</p>
                  <a
                    className="work_link_links"
                    href="https://youtube.com"
                    target="_blank"
                  >
                    youtube
                  </a>
                  <a
                    className="work_link_links"
                    href="https://www.instagram.com/"
                    target="_blank"
                  >
                    Instagram
                  </a>
                  <a
                    className="work_link_links"
                    href="https://www.facebook.com/"
                    target="_blank"
                  >
                    Facebook
                  </a>
                  <a
                    className="work_link_links"
                    href="https://www.linkedin.com/"
                    target="_blank"
                  >
                    Linkedin
                  </a>
                  <a
                    className="work_link_links"
                    href="https://github.com/"
                    target="_blank"
                  >
                    Github
                  </a>
                </div>
              </div>
              <div className="col-md-8 pl-5 about-info all_tab_data">
                <div className="tab-content profile-tab" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label className="user_info_key">User ID</label>
                      </div>
                      <div className="col-md-6">
                        <p className="user_info_value">fdsaasffdsafds</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="user_info_key">Name</label>
                      </div>
                      <div className="col-md-6">
                        <p className="user_info_value">Roman Ojha</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="user_info_key">Email</label>
                      </div>
                      <div className="col-md-6">
                        <p className="user_info_value">razz@roman.com</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="user_info_key">Phone</label>
                      </div>
                      <div className="col-md-6">
                        <p className="user_info_value">4328197473298</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label className="user_info_key">Profession</label>
                      </div>
                      <div className="col-md-6">
                        <p className="user_info_value">Web Developer</p>
                      </div>
                    </div>
                  </div>
                  <div
                    class="tab-pane fade "
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <label>Experience</label>
                      </div>
                      <div className="col-md-6">
                        <p>Export</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Hourly Rate</label>
                      </div>
                      <div className="col-md-6">
                        <p>10$/hr</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Total Project</label>
                      </div>
                      <div className="col-md-6">
                        <p>230</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>English level</label>
                      </div>
                      <div className="col-md-6">
                        <p>Expert</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <label>Avilability</label>
                      </div>
                      <div className="col-md-6">
                        <p>6 Months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
