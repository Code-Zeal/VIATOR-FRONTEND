import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import FormRegister from "./Components/FormRegister";
import Shop from "./Components/Shop";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} exact />
        <Route exact path="/form" component={FormRegister} />
        <Redirect from="*" to="/" />

        <Route exact path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

export default App;
