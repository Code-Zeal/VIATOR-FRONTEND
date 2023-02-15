import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
