import { useAuth0 } from "@auth0/auth0-react";
import Login from "./Login";
import Logout from "./Logout";
import React from "react";
import Profile from "./Profile";

const Landing = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>hola</h1>
      {isAuthenticated ? (
        <>
          <Profile></Profile>
          <Logout></Logout>
        </>
      ) : (
        <Login></Login>
      )}
    </div>
  );
};

export default Landing;
