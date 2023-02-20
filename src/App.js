import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import FormRegister from "./Components/FormRegister";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route exact path="/form" component={FormRegister} />
      </Switch>
    </Router>
  );
}

export default App;
