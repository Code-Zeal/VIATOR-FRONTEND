import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import PaginatedMyTickets from "./PaginatedMyTickets";
import TicketCard from "./TicketCard";

const TicketsCards = () => {
  const ticketsUser = useSelector((state) => state?.getTicketUserData);
  console.log(ticketsUser);
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(3);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = ticketsUser.slice(
    indexOfFirstRecipes,
    indexOfLastRecipes
  );
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  console.log(currentRecipes);
  return (
    <div className=" flex flex-col items-center bg-azulOscuro text-[white] py-2 w-full px-4 ">
      {currentRecipes ? (
        currentRecipes.map((t) => (
          <TicketCard
            activatedTicket={t.activatedTicket}
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
        ))
      ) : (
        <></>
      )}
      <div>
        <PaginatedMyTickets
          recipesPerPage={recipesPerPage}
          allRecipes={ticketsUser.length}
          pagination={pagination}
          currentRecipes={currentRecipes}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default TicketsCards;
