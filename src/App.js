import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing";
import Home from "./Components/Home";
import FormRegister from "./Components/FormRegister";
import Shop from "./Components/Shop";
import Profile from "./Components/Profile";
import MyTickets from "./Components/MyTickets";
import FilterShop from "./Components/FilterShop";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/form" component={FormRegister} />
        <Route exact path="/filtro" component={FilterShop} />

        <Route exact path="/shop" component={Shop} />
        {/* <Route path="/profile" component={Profile} /> */}
        <Route
          exact
          path="/profile"
          render={() => (
            <div>
              <Profile />
            </div>
          )}
        />
        <Route
          exact
          path="/myTickets"
          render={() => (
            <div>
              <MyTickets />
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
