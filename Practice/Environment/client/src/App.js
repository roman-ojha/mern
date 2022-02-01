import React, { createContext, useReducer } from "react";
import NavBar from "./react-components/NavBar";
import "./index.css";
import { Route, Switch } from "react-router-dom";
import Home from "./react-components/Home";
import About from "./react-components/About";
import Contact from "./react-components/Contact";
import Login from "./react-components/Login";
import Signup from "./react-components/Signup";
import Logout from "./react-components/Logout";
import Page404 from "./react-components/Page404";
import { initialState, reducer } from "./reducer/UseReducer";

export const UserContext = createContext();

const Routing = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/logout" component={Logout} />
        <Route component={Page404} />
      </Switch>
    </>
  );
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={{ state, dispatch }}>
        <NavBar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
