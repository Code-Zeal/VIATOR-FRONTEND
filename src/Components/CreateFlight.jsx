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

  // const [countrie, setCountrie] = useState(false);
  const [hasRoundTrip, setHasRoundTrip] = useState(true);
  const [hasAirline, setHasAirline] = useState(true);
  const [currentAirline, setCurrentAirline] = useState({
    airline: Number,
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

  useEffect(() => {
    dispatch(getAirlines());
    dispatch(getAirportsAirline(currentAirline.airline));
    dispatch(getCountries());
  }, [dispatch, currentAirline]);

  const redirectHome = async () => {
    history.push("/createFlight");
    window.location.reload();
  };
  const submitCreate = async () => {
    await dispatch(CreateFlights(formFlight));
    alert("Conexión creada correctamente");
    await redirectHome();
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
    } else if (event.target.className.includes("airline")) {
      setHasAirline(false);
      setCurrentAirline({
        airline: event.target.value,
      });
      setFormFlight({
        ...formFlight,
        [event.target.name]: event.target.value,
      });
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
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center  ">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <div className="bg-azulClaro w-4/6 px-6 py-2 my-4 rounded-lg">
        <div className="flex flex-col items-stretch">
          <div className="flex flex-col my-2">
            <label className="text-[white] font-bold" htmlFor="">
              Tipo de vuelo
            </label>
            <select
              onChange={handlerRoundTrip}
              className=" bg-azulOscuro border-2  rounded-lg text-[white] w-1/2"
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
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-bold text-[white]" htmlFor="">
              Vuelo de ida: Fecha y hora de salida
            </label>
            <div>
              <input
                name="dateTimeDeparture"
                onChange={handleFormFlight}
                className="date1 disabled:bg-[#02122c78] disabled:text-[gray]  bg-azulOscuro border-2  rounded-lg text-[white]"
                type="date"
              />
              <input
                disabled={time1}
                name="dateTimeDeparture"
                onChange={handleFormFlight}
                className="time1 disabled:bg-[#02122c78] disabled:text-[gray] bg-azulOscuro border-2  rounded-lg text-[white]"
                type="time"
              />
            </div>
          </div>
          <div className="flex flex-col mt-2">
            <label className="font-bold text-[white]" htmlFor="">
              Vuelo de ida: Fecha y hora de llegada
            </label>
            <div>
              <input
                name="dateTimeArrival1"
                onChange={handleFormFlight}
                className="date2 disabled:bg-[#02122c78] disabled:text-[gray] bg-azulOscuro border-2  rounded-lg text-[white]"
                type="date"
              />
              <input
                disabled={time2}
                name="dateTimeArrival1"
                onChange={handleFormFlight}
                className="time2 disabled:bg-[#02122c78] disabled:text-[gray] bg-azulOscuro border-2  rounded-lg text-[white]"
                type="time"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[white] font-bold" htmlFor="">
            Vuelo de vuelta: Fecha y hora de salida
          </label>
          <div>
            <input
              name="dateTimeReturn"
              onChange={handleFormFlight}
              disabled={hasRoundTrip}
              className="disabled:bg-[#02122c78] disabled:text-[gray] bg-azulOscuro border-2  rounded-lg text-[white] date3"
              type="date"
            />
            <input
              disabled={time3}
              name="dateTimeReturn"
              onChange={handleFormFlight}
              className="time3 disabled:bg-[#02122c78] disabled:text-[gray] bg-azulOscuro border-2  rounded-lg text-[white]"
              type="time"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[white] font-bold" htmlFor="">
            Vuelo de vuelta: Fecha y hora de llegada
          </label>
          <div>
            <input
              name="dateTimeArrival2"
              onChange={handleFormFlight}
              disabled={hasRoundTrip}
              className="bg-azulOscuro border-2  rounded-lg text-[white] disabled:bg-[#02122c78] disabled:text-[gray] date4"
              type="date"
            />
            <input
              disabled={time4}
              name="dateTimeArrival2"
              onChange={handleFormFlight}
              className="time4 disabled:bg-[#02122c78] disabled:text-[gray] bg-azulOscuro border-2  rounded-lg text-[white]"
              type="time"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="flex flex-col w-full">
            <label className="text-[white] font-bold" htmlFor="">
              Asientos Disponibles
            </label>
            <input
              onChange={handleFormFlight}
              name="seatsAvailable"
              className="bg-azulOscuro border-2  rounded-lg text-[white] w-1/2"
              type="number"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-[white] font-bold" htmlFor="">
              Precio
            </label>
            <input
              onChange={handleFormFlight}
              name="ticketPrice"
              className="bg-azulOscuro border-2  rounded-lg text-[white] w-1/2"
              type="number"
            />
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <label className="text-[white] font-bold" htmlFor="">
            Escalas
          </label>
          <select
            onChange={handleFormFlight}
            className="bg-azulOscuro border-2  rounded-lg text-[white] w-1/2"
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
        <div className="flex flex-col py-2">
          <label className="font-bold text-[white]" htmlFor="airlines">
            Aerolinea
          </label>
          {/* <input onChange={handlerChangeAirport} type="checkbox" />
          <label htmlFor="">Nombre de la aerolinea</label> */}
          <select
            onChange={handleFormFlight}
            name="AirlineId"
            id=""
            className="airline bg-azulOscuro border-2  rounded-lg text-[white]"
          >
            <option value="default" disabled="true" selected>
              Selecciona la Aerolinea
            </option>
            {airlines.map((el) => {
              return <option value={el.id}>{el.name}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col py-2">
          <label className="text-[white] font-bold" htmlFor="airlines">
            Aeropuerto Origen
          </label>
          <select
            disabled={hasAirline}
            name="airportOriginId"
            onChange={handleFormFlight}
            id=""
            className="bg-azulOscuro border-2   rounded-lg text-[white]"
          >
            <option value="default" disabled="true" selected>
              Seleccionar Aeropuerto de Origen
            </option>
            {hasAirline === false ? (
              getAirlinesAirports.Airports.map((el) => {
                return (
                  <option value={el.AirlineAirport.AirportId}>{el.name}</option>
                );
              })
            ) : (
              <></>
            )}
          </select>
          <label className="font-bold text-[white] pt-2" htmlFor="airlines">
            Aeropuerto Destino
          </label>
          <select
            className="bg-azulOscuro border-2  rounded-lg text-[white]"
            disabled={hasAirline}
            onChange={handleFormFlight}
            name="airportDestinyId"
            id=""
          >
            <option value="default" disabled="true" selected>
              Seleccionar Aeropuerto de Destino
            </option>
            {hasAirline === false ? (
              getAirlinesAirports.Airports.map((el) => {
                return (
                  <option value={el.AirlineAirport.AirportId}>{el.name}</option>
                );
              })
            ) : (
              <></>
            )}
          </select>
        </div>
        <div className="flex w-full justify-center">
          <button
            className="border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg font-bold my-4"
            onClick={submitCreate}
          >
            Crear Vuelo
          </button>
        </div>
      </div>
    </div>
  );
}
