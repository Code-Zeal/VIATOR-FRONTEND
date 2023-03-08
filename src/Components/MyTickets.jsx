import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react"; //--
import { useState, useEffect } from "react";

import { getTicketUser } from "../Redux/Actions";
import TicketsCards from "./TicketsCards";

export default function MyTickets() {
  const { user } = useAuth0();
  const id = user?.sub;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketUser(id));
  }, [id]);

  return (
    <div className="absolute ml-[20%] w-[80%] z-20 bg-azulOscuro flex flex-col items-center">
      <h1 className="text-blanco">Boletos comprados</h1>

      <TicketsCards />
    </div>
  );
}
