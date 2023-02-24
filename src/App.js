import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import FormRegister from "./Components/FormRegister";
import Shop from "./Components/Shop";
import FlightDetails from "./Components/FlightDetails";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={FormRegister} />
        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/flight/:id"
          render={({ match }) => <FlightDetails flightId={match.params.id} />}
        />
      </Switch>
    </Router>
  );
}

export default App;
