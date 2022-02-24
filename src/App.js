import React from "react";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "./App.css";
import AddContact from "./components/AddContact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="App_main">
      <ToastContainer />
      <Navbar />
      <Switch>
        <Route exact path="/" component={() => <Home />} />
        <Route path="/add">
          <AddContact />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
