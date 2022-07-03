import React from "react";
import Navbar from "./React-components/Navbar";
import Home from "./React-components/Home";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Login from "./React-components/Login";
import Signup from "./React-components/Signup";
import { Route } from "react-router";

/*
  -> here we will going to nee bootstrap so to install it go to npmjs.com
      -> npm i bootstrap
*/

const App = () => {
  return (
    <>
      <Navbar />
      {/* Here we are routing all the link link(component) */}
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
    </>
  );
};

export default App;
