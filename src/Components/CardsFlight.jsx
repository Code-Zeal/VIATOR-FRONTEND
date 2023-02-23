import { useDispatch } from "react-redux";
import CardFlight from "./CardFlight";
// import { putRegister } from "../Redux/Actions";
import { useSelector } from "react-redux";

const CardsFlight = () => {
  const flights = useSelector((state) => state.getFlights);

  // const dispatch = useDispatch();

  //   getFlights
  //   id: 1,
  //   origin: "chiloe",
  //   destiny: "arica",
  //   dateTimeDeparture: "2023-02-22T19:35:20.000Z",
  //   dateTimeArrival: "2023-02-22T19:35:20.000Z",
  //   seatsAvailable: 20,
  //   ticketPrice: "400.000",

  // useEffect(() => {
  // dispatch(putRegister())

  //   }, [flights]);
  return (
    <div className="">
      {flights.map((f) => (
        <CardFlight
          id={f.id}
          origin={f.origin}
          destiny={f.destiny}
          dateTimeDeparture={f.dateTimeDeparture}
          dateTimeArrival={f.dateTimeArrival}
          seatsAvailable={f.seatsAvailable}
          ticketPrice={f.ticketPrice}
          // le esyoy pasando la propiedad vuelta para obtener sus valores
          vueltaData={f.vuelta}
          // comprobando si tengo la propiedad vuelta me devuelve un true o false
          propiedadVueltaTrueOrFalse={f.hasOwnProperty("vuelta")}
        />
      ))}
    </div>
  );
};

export default CardsFlight;
