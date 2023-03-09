import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react"; //--
import { useState, useEffect } from "react";

import { getTicketUser } from "../Redux/Actions";
import TicketsCards from "./TicketsCards";

export default function MyTickets() {
  const { user } = useAuth0();
  const id = useSelector((state) => state.idUser);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketUser(id));
  }, [id]);

  return (
    <div className="absolute ml-[21%]  w-[80%] z-20 flex flex-col items-center">
      <h1 className="text-[black] font-bold text-xl">Tus Boletos</h1>

      <TicketsCards />
    </div>
  );
}
