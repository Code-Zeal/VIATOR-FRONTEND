import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import TicketCard from "./TicketCard";

const TicketsCards = () => {
  const ticketsUser = useSelector((state) => state?.getTicketUserData);

  return (
    <div className=" flex items-center bg-azulOscuro text-[white] py-2 w-screen px-4 ">
      {ticketsUser.map((t) => (
        <TicketCard
          idTicket={t.id}
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
