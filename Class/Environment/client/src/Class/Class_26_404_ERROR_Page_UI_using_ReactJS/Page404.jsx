import React from "react";
import { NavLink } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div className="page404">
        <div className="page404_container">
          <h1 className="page404_404text">404</h1>
          <h1 className="page404_sorrytext">WE ARE SORRY, PAGE NOT FOUND</h1>
          <p className="page404_commenttext">
            THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED HAD ITS NAMES
            CHANGED OR IS TEMPORARILY UNAVAILABLE
          </p>
          <div>
            <NavLink className="page404_home_button" to="/">
              BACK TO HOME PAGE
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page404;
