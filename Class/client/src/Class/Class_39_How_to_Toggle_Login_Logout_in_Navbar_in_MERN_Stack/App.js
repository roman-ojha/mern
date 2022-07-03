import React, { createContext } from "react";
import "./App.css";
import Navbar from "./React-components/Navbar";
import Home from "./React-components/Home";
import About from "./React-components/About";
import Contact from "./React-components/Contact";
import Login from "./React-components/Login";
import Signup from "./React-components/Signup";
import Page404 from "./React-components/Page404";
import Logout from "./React-components/Logout";
import { Route, Switch } from "react-router";
import "bootstrap/dist/css/bootstrap.css";
import { initialState, reducer } from "./reducer/UseReducer";
import { useReducer } from "react";

/*
  ->To toggle Login and Logout we have to deal with a lot of hooks and they are 
      -> contextAPI
      -> useReducer
      -> useContext
      -> Reducer
      -> useState
      -> useEffect
*/
// contextAPI
export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Switch>
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
        <Route path="/logout">
          <Logout />
        </Route>
        <Route>
          <Page404 />
        </Route>
      </Switch>
    </>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // Here we have to define the 'reducer' function
  // to do that you have to make a new folder called 'reducer' and after that you have to create file called 'UseReducer.jsx'

  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        {/*  how we have a better alternative of '.Consumer' using usereducer */}
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
