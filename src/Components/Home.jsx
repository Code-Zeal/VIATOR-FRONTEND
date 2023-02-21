import { useEffect } from "react";
import NavBar from "./NavBar";
import FlightSearch from "./FlightSearch";
import Footer from "./Footer";
import Recommendations from "./Recommendations.jsx";
import { useHistory } from "react-router-dom";

export default function Home() {
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
