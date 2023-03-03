import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react"; //--
import { useState, useEffect } from "react";

import { getTicketUser } from "../Redux/Actions";
import TicketsCards from "./TicketsCards";

export default function MyTickets() {
  const { user, isAuthenticated } = useAuth0();
  const id = user?.sub;
  const dispatch = useDispatch();
  const ticketsUser = useSelector((state) => state.getTicketUserData);
  useEffect(() => {}, [ticketsUser]);
  // const valor = useSelector((state) => state.getAirports);

  console.log(ticketsUser);

  // getAirports;

  // useEffect(() => {
  //   dispatch(getTicketUser(id));
  // }, []);

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[pink]  flex flex-col items-center">
      {/* <TicketsCards /> */}
      {/* <h1 className="text-[white] my-2">MyTickets</h1>
      <h1 className="text-[white] my-2">MyTickets</h1>
      <h1 className="text-[white] my-2">MyTickets</h1>
      <h1 className="text-[white] my-2">MyTickets</h1>
      <h1 className="text-[white] my-2">MyTickets</h1>
      <h1 className="text-[white] my-2">MyTickets</h1>
      <h1 className="text-[white] my-2">MyTickets</h1> */}
    </div>
  );
}
