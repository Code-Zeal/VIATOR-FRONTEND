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
import CardsFlight from "./Components/CardsFlight";
import Shop from "./Components/Shop";
import Profile from "./Components/Profile";
import MyTickets from "./Components/MyTickets";
import NavBar from "./Components/NavBar";
import FilterShop from "./Components/FilterShop";
import Favorites from "./Components/Favorites";
import Data from "./Components/Data";
import CreateAirport from "./Components/CreateAirport";
import Footer from "./Components/Footer";
import FlightDetails from "./Components/FlightDetails";
import Welcome from "./Components/Welcome";
import CreateAirline from "./Components/CreateAirline";
import CreateFlight from "./Components/CreateFlight";
import FlightsAdmin from "./Components/FlightsAdmin";
import ConectAir from "./Components/ConectAir";
import FlightAdminDetails from "./Components/FlightsAdminDetails";
import FormRegisterAUX from "./Components/FormRegisterAUX";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/cards" component={CardsFlight} />

        <Route exact path="/form" component={FormRegister} />
        <Route exact path="/formaux" component={FormRegisterAUX} />
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
              <NavBar />
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
              <NavBar />
              <Data />
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/createAirport"
          render={() => (
            <div>
              <NavBar />
              <CreateAirport />
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/createAirline"
          render={() => (
            <div>
              <NavBar />
              <CreateAirline></CreateAirline>
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/createFlight"
          render={() => (
            <div>
              <NavBar />
              <CreateFlight></CreateFlight>
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/flights"
          render={() => (
            <div>
              <NavBar />
              <FlightsAdmin></FlightsAdmin>
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/conectAir"
          render={() => (
            <div>
              <NavBar />
              <ConectAir></ConectAir>
              <Profile />
              <Footer></Footer>
            </div>
          )}
        />
        <Route
          exact
          path="/flightAdm/:id"
          render={({ match }) => (
            <FlightAdminDetails flightId={match.params.id} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;
