import { useState, useEffect } from "react";

import { Link, Redirect, useHistory } from "react-router-dom";

import NavBar from "./NavBar";
import FlightSearch from "./FlightSearch";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

import Recommendations from "./Recommendations.jsx";
import { useDispatch } from "react-redux";
import { getAdmin, myId } from "../Redux/Actions";

export default function Home(props) {
  const dispatch = useDispatch();
  let history = useHistory();

  const { user, isAuthenticated } = useAuth0();
  useEffect(() => {
    dispatch(getAdmin(user.sub));
    dispatch(myId(user.sub));
  }, []);

  console.log(user);
  return (
    <>
      {isAuthenticated ? (
        <div className="h-screen w-screen bg-gray-200">
          {/* <button onClick={valor}>holaaa</button> */}
          <NavBar />
          <FlightSearch />
          <Recommendations />
          <Footer />
          {/* {history.push("/home")} */}
        </div>
      ) : (
        window.open("/", "_self")
      )}
    </>
  );
}
