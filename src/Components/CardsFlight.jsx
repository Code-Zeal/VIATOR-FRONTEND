import { useDispatch } from "react-redux";
import CardFlight from "./CardFlight";
// import { putRegister } from "../Redux/Actions";
import { useSelector } from "react-redux";

const CardsFlight = () => {
  const flights = useSelector((state) => state.searchedFlights);

  // const dispatch = useDispatch();

  // AirlineId: 1
  // dateTimeArrival1: "2023-03-22T21:30:00.000Z"
  // dateTimeArrival2: "2023-04-11T00:20:00.000Z"
  // dateTimeDeparture: "2023-03-22T13:40:00.000Z"
  // dateTimeReturn: "2023-04-10T16:00:00.000Z"
  // destiny: "Aeropuerto Internacional Volkyr, Cali, Colombia"
  // id: 1
  // origin: "Aeropuerto Internacional Jorge Chávez, Callao, Peru"
  // roundTrip: true
  // scale: "1"
  // seatsAvailable: 85
  // ticketPrice: "$315"

  return (
    <div className="">
      {flights.map((f) => (
        <CardFlight
          flightId={f.id}
          AirlineId={f.AirlineId}
          origin={f.origin}
          destiny={f.destiny}
          dateTimeDeparture={f.dateTimeDeparture}
          dateTimeArrival1={f.dateTimeArrival1}
          dateTimeArrival2={f.dateTimeArrival2}
          dateTimeReturn={f.dateTimeReturn}
          scale={f.scale}
          roundTrip={f.roundTrip}
          seatsAvailable={f.seatsAvailable}
          ticketPrice={f.ticketPrice}
        />
      ))}
    </div>
  );
};

export default CardsFlight;
