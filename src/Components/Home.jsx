import { useEffect } from "react";
import NavBar from "./NavBar";
import FlightSearch from "./FlightSearch";
import Footer from "./Footer";
import { useAuth0 } from "@auth0/auth0-react";

import Recommendations from "./Recommendations.jsx";
import { useHistory } from "react-router-dom";

export default function Home() {
  const { user } = useAuth0();

  const valor = user?.sub;
  console.log(valor);

  // let history = useHistory();

  // useEffect(() => {
  //   history.push("/home");
  //   window.location.reload();
  // }, [history]);
  return (
    <div className="h-screen w-screen bg-gray-200">
      <NavBar />
      <FlightSearch />
      <Recommendations />
      <Footer />
    </div>
  );
}
