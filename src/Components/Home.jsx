import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./NavBar";
import FlightSearch from "./FlightSearch";
import Footer from "./Footer";
import Recommendations from "./Recommendations.jsx";

export default function Home(props) {
  const { user, isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <div className="h-screen w-screen bg-gray-200">
          {/* <button onClick={valor}>holaaa</button> */}
          <NavBar />
          <FlightSearch />
          <Recommendations />
          <Footer />
        </div>
      ) : (
        window.open("/", "_self")
      )}
    </>
  );
}
