import React from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import FlightSearch from "./FlightSearch";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-200">
      <NavBar />
      <FlightSearch />
      <Footer />
    </div>
  );
}