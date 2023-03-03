import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAirlineToAirport,
  addAirportToAirline,
  CreateAirlines,
  CreateAirports,
  CreateFlights,
  deleteAirportToAirline,
  getAirlines,
  getAirports,
  getAirportsAirline,
  getCountries,
} from "../Redux/Actions";
import { useHistory } from "react-router-dom";

export default function CreateFlight() {
  let history = useHistory();

  const airlines = useSelector((state) => state.getAirliness);
  const getAirlinesAirports = useSelector((state) => state.getAirlinesAirports);
  const dispatch = useDispatch();
  console.log(getAirlinesAirports);

  // const [countrie, setCountrie] = useState(false);
  const [hasRoundTrip, setHasRoundTrip] = useState(true);
  const [hasAirline, setHasAirline] = useState(true);
  const [currentAirline, setCurrentAirline] = useState({
    airline: "",
  });
  const [time1, setTime1] = useState(true);
  const [time2, setTime2] = useState(true);
  const [time3, setTime3] = useState(true);
  const [time4, setTime4] = useState(true);
  const [dateAndTime, setDateAndTime] = useState({
    idaDateSalida: "",
    idaTimeSalida: "",
    idaDateLlegada: "",
    idaTimeLlegada: "",
    idavueltaDateSalida: "",
    idavueltaTimeSalida: "",
    idavueltaDateLlegada: "",
    idavueltaTimeLlegada: "",
  });
  const concatTimeDate = () => {
    if (
      formFlight.roundTrip === "true" &&
      formFlight.dateTimeArrival1 === "" &&
      formFlight.dateTimeDeparture === "" &&
      formFlight.dateTimeReturn === "" &&
      formFlight.dateTimeArrival2 === ""
    ) {
      setFormFlight({
        ...formFlight,
        dateTimeDeparture: dateAndTime.idaDateSalida.concat(
          ` ${dateAndTime.idaTimeSalida}`
        ),
        dateTimeArrival1: dateAndTime.idaDateLlegada.concat(
          ` ${dateAndTime.idaTimeLlegada}`
        ),
        dateTimeReturn: dateAndTime.idavueltaDateSalida.concat(
          ` ${dateAndTime.idavueltaTimeSalida}`
        ),
        dateTimeArrival2: dateAndTime.idavueltaDateLlegada.concat(
          ` ${dateAndTime.idavueltaTimeLlegada}`
        ),
      });
    } else if (
      formFlight.roundTrip === "false" &&
      formFlight.dateTimeArrival1 === "" &&
      formFlight.dateTimeDeparture === ""
    ) {
      setFormFlight({
        ...formFlight,
        dateTimeDeparture: dateAndTime.idaDateSalida.concat(
          ` ${dateAndTime.idaTimeSalida}`
        ),
        dateTimeArrival1: dateAndTime.idaDateLlegada.concat(
          ` ${dateAndTime.idaTimeLlegada}`
        ),
      });
    }
  };

  const [relation, setRelation] = useState({
    airlineId: Number,
    airportsId: Number,
  });
  const [formFlight, setFormFlight] = useState({
    roundTrip: "",
    airportOriginId: Number,
    airportDestinyId: Number,
    dateTimeDeparture: "",
    dateTimeArrival1: "",
    dateTimeReturn: "",
    dateTimeArrival2: "",
    seatsAvailable: Number,
    ticketPrice: "",
    scale: "",
    AirlineId: Number,
  });
  const handlerRoundTrip = (event) => {
    if (event.target.value === "ida") {
      setHasRoundTrip(true);
      setFormFlight({
        ...formFlight,
        roundTrip: "false",
        dateTimeReturn: null,
        dateTimeArrival2: null,
      });
    } else if (event.target.value === "ida y vuelta") {
      setHasRoundTrip(false);
      setFormFlight({
        ...formFlight,
        roundTrip: "true",
        dateTimeReturn: "",
        dateTimeArrival2: "",
      });
    }
  };

  const handlerRelation = (event) => {
    const propiedad = event.target.name;
    let value;
    value = Number(event.target.value);

    setRelation({
      ...relation,
      [propiedad]: value,
    });
  };
  useEffect(() => {
    dispatch(getAirlines());
    dispatch(getAirportsAirline(1));
    dispatch(getCountries());
  }, [dispatch]);

  const redirectHome = async () => {
    history.push("/createAirline");
    window.location.reload();
  };
  const submitCreate = async () => {
    await dispatch(CreateFlights(formFlight));
  };
  const handleFormFlight = (event) => {
    //DATES
    if (event.target.className.includes("date1")) {
      setTime1(false);
      setDateAndTime({
        ...dateAndTime,
        idaDateSalida: event.target.value,
      });
    }
    if (event.target.className.includes("date2")) {
      setTime2(false);
      setDateAndTime({
        ...dateAndTime,
        idaDateLlegada: event.target.value,
      });
    }
    if (event.target.className.includes("date3")) {
      setTime3(false);
      setDateAndTime({
        ...dateAndTime,
        idavueltaDateSalida: event.target.value,
      });
      return;
    }
    if (event.target.className.includes("date4")) {
      setTime4(false);
      setDateAndTime({
        ...dateAndTime,
        idavueltaDateLlegada: event.target.value,
      });
    }
    //TIMES
    if (event.target.className.includes("time1")) {
      setDateAndTime({
        ...dateAndTime,
        idaTimeSalida: event.target.value,
      });
    }
    if (event.target.className.includes("time2")) {
      setDateAndTime({
        ...dateAndTime,
        idaTimeLlegada: event.target.value,
      });
    }
    if (event.target.className.includes("time3")) {
      setDateAndTime({
        ...dateAndTime,
        idavueltaTimeSalida: event.target.value,
      });
    }
    if (event.target.className.includes("time4")) {
      setDateAndTime({
        ...dateAndTime,
        idavueltaTimeLlegada: event.target.value,
      });
    } else if (
      event.target.className.includes("time") ||
      event.target.className.includes("date")
    ) {
      return;
    } else {
      setFormFlight({
        ...formFlight,
        [event.target.name]: event.target.value,
      });
    }

    return;
  };

  if (
    formFlight.roundTrip === "false" &&
    dateAndTime.idaTimeSalida !== "" &&
    dateAndTime.idaTimeLlegada !== "" &&
    dateAndTime.idaDateSalida !== "" &&
    dateAndTime.idaDateLlegada !== ""
  ) {
    concatTimeDate();
  }
  if (
    formFlight.roundTrip === "true" &&
    dateAndTime.idaTimeSalida !== "" &&
    dateAndTime.idaTimeLlegada !== "" &&
    dateAndTime.idavueltaTimeSalida !== "" &&
    dateAndTime.idavueltaTimeLlegada !== "" &&
    dateAndTime.idaDateSalida !== "" &&
    dateAndTime.idaDateLlegada !== "" &&
    dateAndTime.idavueltaDateSalida !== "" &&
    dateAndTime.idavueltaDateLlegada !== ""
  ) {
    concatTimeDate();
  }

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <div className="flex flex-col">
        <label htmlFor="">Tipo de vuelo</label>
        <select
          onChange={handlerRoundTrip}
          className="bg-azulClaro my-4 text-[white]"
          name="roundTrip"
        >
          <option disabled="true" selected type="text">
            Seleccionar tipo de vuelo
          </option>
          <option value="ida" type="text">
            Solo Ida
          </option>
          <option value="ida y vuelta" type="text">
            Ida y Vuelta
          </option>
        </select>
        <div className="flex flex-col">
          <label className="bg-azulOscuro text-[white]" htmlFor="">
            Vuelo de ida: Fecha y hora de salida
          </label>
          <div>
            <input
              name="dateTimeDeparture"
              onChange={handleFormFlight}
              className="date1 bg-azulClaro rounded-lg border-2 border-[gray]"
              type="date"
            />
            <input
              disabled={time1}
              name="dateTimeDeparture"
              onChange={handleFormFlight}
              className="time1 bg-azulClaro rounded-lg border-2 border-[gray]"
              type="time"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label className="bg-azulOscuro text-[white]" htmlFor="">
            Vuelo de ida: Fecha y hora de llegada
          </label>
          <div>
            <input
              name="dateTimeArrival1"
              onChange={handleFormFlight}
              className="date2 bg-azulClaro rounded-lg border-2 border-[gray]"
              type="date"
            />
            <input
              disabled={time2}
              name="dateTimeArrival1"
              onChange={handleFormFlight}
              className="time2 bg-azulClaro rounded-lg border-2 border-[gray]"
              type="time"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Vuelo de vuelta: Fecha y hora de salida
        </label>
        <div>
          <input
            name="dateTimeReturn"
            onChange={handleFormFlight}
            disabled={hasRoundTrip}
            className="bg-azulClaro rounded-lg border-2 border-[gray] date3"
            type="date"
          />
          <input
            disabled={time3}
            name="dateTimeReturn"
            onChange={handleFormFlight}
            className="time3 bg-azulClaro rounded-lg border-2 border-[gray]"
            type="time"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Vuelo de vuelta: Fecha y hora de llegada
        </label>
        <div>
          <input
            name="dateTimeArrival2"
            onChange={handleFormFlight}
            disabled={hasRoundTrip}
            className="bg-azulClaro rounded-lg border-2 border-[gray] date4"
            type="date"
          />
          <input
            disabled={time4}
            name="dateTimeArrival2"
            onChange={handleFormFlight}
            className="time4 bg-azulClaro rounded-lg border-2 border-[gray]"
            type="time"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Asientos Disponibles
        </label>
        <input
          onChange={handleFormFlight}
          name="seatsAvailable"
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="number"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Precio
        </label>
        <input
          onChange={handleFormFlight}
          name="ticketPrice"
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Escalas
        </label>
        <select
          onChange={handleFormFlight}
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          name="scale"
          id=""
        >
          <option value={0}>0 Escalas</option>
          <option value={1}>1 Escala</option>
          <option value={2}>2 Escalas</option>
        </select>
        {/* <input
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="text"
        /> */}
      </div>
      <div className="flex justify-around w-[75%] ">
        <div className="flex flex-col py-6">
          <label htmlFor="airlines">Aerolinea</label>
          {/* <input onChange={handlerChangeAirport} type="checkbox" />
          <label htmlFor="">Nombre de la aerolinea</label> */}
          <select
            onChange={handleFormFlight}
            name="AirlineId"
            id=""
            className=""
          >
            <option value="default" disabled="true" selected>
              Aerolinea
            </option>
            {airlines.map((el) => {
              return <option value={el.id}>{el.name}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col py-6">
          <label htmlFor="airlines">Aeropuerto Origen</label>
          <select name="airportOriginId" onChange={handleFormFlight} id="">
            <option value="default" disabled="true" selected>
              Aeropuerto
            </option>
            {airlines.map((el) => {
              return <option value={el.id}>{el.name}</option>;
            })}
          </select>
          <label htmlFor="airlines">Aeropuerto Destino</label>
          <select onChange={handleFormFlight} name="airportDestinyId" id="">
            <option value="default" disabled="true" selected>
              Aeropuerto
            </option>
            {airlines.map((el) => {
              return <option value={el.id}>{el.name}</option>;
            })}
          </select>
        </div>
      </div>
      {/* <div className="w-[75%] flex justify-evenly "> */}
      <button className="text-[white] bg-azulOscuro" onClick={submitCreate}>
        Crear Vuelo
      </button>
      {/*
        <button className="text-[white] bg-[red]" onClick={submitHandlerDelete}>
          Eliminar Conexión
        </button>
      </div> */}
    </div>
  );
}
