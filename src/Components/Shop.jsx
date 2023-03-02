import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import CardsFlight from "./CardsFlight";
import FlightSearch from "./FlightSearch";
import FilterShop from "./FilterShop";
import { useState, useEffect } from "react";
import LoadingPage from "./LoadingPage";

export default function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const flights = useSelector((state) => state.searchedFlights);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // espera 3 segundos antes de mostrar la aplicación
  }, []);

  return (
    <div className={isLoading ? "loading-page" : ""}>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div>
          <div className="h-screen w-screen bg-gray-200">
            <NavBar />
            <FilterShop />
            <FlightSearch />
            <CardsFlight />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}
