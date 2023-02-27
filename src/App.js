import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Landing from "./Components/landing";
import Home from "./Components/Home";
import FormRegister from "./Components/FormRegister";
import CardsFlight from "./Components/CardsFlight";
import Shop from "./Components/Shop";
import Profile from "./Components/Profile";
import MyTickets from "./Components/MyTickets";

import FilterShop from "./Components/FilterShop";
import Favorites from "./Components/Favorites";
import Data from "./Components/Data";
import Admin from "./Components/Admin";
import Footer from "./Components/Footer";
import FlightDetails from "./Components/FlightDetails";
import Welcome from "./Components/Welcome";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cards" component={CardsFlight} />

        <Route exact path="/form" component={FormRegister} />
        <Route exact path="/welcome" component={Welcome} />

        <Route exact path="/shop" component={Shop} />
        <Route
          exact
          path="/flight/:id"
          render={({ match }) => <FlightDetails flightId={match.params.id} />}
        />

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
              <Profile></Profile>
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/favorites"
          render={() => (
            <div>
              <Favorites />
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/data"
          render={() => (
            <div>
              <Data />
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/admin"
          render={() => (
            <div>
              <Admin />
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
