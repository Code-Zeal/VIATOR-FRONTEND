import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import CardsFlight from "./CardsFlight";

export default function Shop() {
  const flights = useSelector((state) => state.searchedFlights);

  return (
    <div className="h-screen w-screen bg-gray-200">
      <NavBar />
      <CardsFlight />
      <Footer />
    </div>
  );
}
