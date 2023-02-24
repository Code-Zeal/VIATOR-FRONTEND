import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlightDetails } from "../Redux/Actions";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function FlightDetails({ flightId }) {
  const dispatch = useDispatch();
  const detailedFlight = useSelector((state) => state.flightDetails);

  useEffect(() => {
    dispatch(getFlightDetails(flightId));
  }, [flightId]);

  return (
    <div>
      <NavBar />
      <div>
        <h3>
          Origen <p> {detailedFlight.origin} </p>
        </h3>
        <h3>
          Destino <p> {detailedFlight.destiny}</p>
        </h3>
        <p>Fecha y hora de ida {detailedFlight.dateTimeDeparture}</p>
        <p>Fecha y hora de llegada {detailedFlight.dateTimeArrival}</p>
        <p>Asientos disponibles {detailedFlight.seatsAvailable} </p>
        <p>Precio {detailedFlight.ticketPrice} </p>

        <div>
          <h3>
            Aerolínea{" "}
            {detailedFlight.Airline
              ? detailedFlight.Airline.name
              : "No hay información disponible sobre el nombre de la aerolínea"}
          </h3>
          <p>
            Valoración{" "}
            {detailedFlight.Airline
              ? detailedFlight.Airline.rating
              : "No hay información disponible sobre el rating de la aerolínea"}
          </p>
        </div>
      </div>
    </div>
  );
}
