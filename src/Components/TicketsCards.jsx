import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getFlightsScale,
  get_airline,
  filtroAirlineName,
  resetFiltrosShop,
} from "../Redux/Actions";
import TicketCard from "./TicketCard";

const TicketsCards = () => {
  const ticketsUser = useSelector((state) => state?.getTicketUserData);
  console.log(ticketsUser);

  //   useEffect(() => {
  //     dispatch(get_airline());
  //   }, []);
  //  useEffect(() => {
  // }, [ticketsUser]);

  return (
    <div className=" flex items-center bg-azulOscuro text-[white] py-2 w-screen px-4 ">
      {ticketsUser.map((t) => (
        <TicketCard
          seatUser={t.seat}
          flightId={t.id}
          AirlineId={t.AirlineId}
          origin={t.Flight.origin}
          destiny={t.Flight.destiny}
          dateTimeDeparture={t.Flight.dateTimeDeparture}
          dateTimeArrival1={t.Flight.dateTimeArrival1}
          dateTimeArrival2={t.Flight.dateTimeArrival2}
          dateTimeReturn={t.Flight.dateTimeReturn}
          scale={t.Flight.scale}
          roundTrip={t.Flight.roundTrip}
          //   ticketPrice={t.Flight.ticketPrice}
          // nameAerolinea={t.}
        />
      ))}
    </div>
  );
};

export default TicketsCards;
