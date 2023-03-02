import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAirlineToAirport,
  addAirportToAirline,
  CreateAirlines,
  CreateAirports,
  deleteAirportToAirline,
  getAirlines,
  getAirports,
  getCountries,
} from "../Redux/Actions";
import { useHistory } from "react-router-dom";

export default function CreateFlight() {
  let history = useHistory();

  const airlines = useSelector((state) => state.getAirliness);
  const Airport = useSelector((state) => state.getAirports);
  const dispatch = useDispatch();

  // const [countrie, setCountrie] = useState(false);
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
    seatsAvailable: "",
    ticketPrice: "",
    scale: Number,
    AirlineId: "",
  });

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
    dispatch(getAirports());
    dispatch(getCountries());
  }, [dispatch]);

  const redirectHome = async () => {
    history.push("/createAirline");
    window.location.reload();
  };
  const submitHandlerCreate = async () => {
    await dispatch(addAirportToAirline(relation));
    alert("Conexión creada correctamente");
    await redirectHome();
  };
  const submitHandlerDelete = async () => {
    await dispatch(deleteAirportToAirline(relation));
    alert("Conexión eliminada correctamente");

    await redirectHome();
  };

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <div className="flex flex-col">
        <label htmlFor="">Tipo de vuelo</label>
        <div className="flex flex-col">
          <label className="bg-azulOscuro text-[white]" htmlFor="">
            Vuelo de ida: Fecha y hora de salida
          </label>
          <input
            className="bg-azulClaro rounded-lg border-2 border-[gray]"
            type="text"
          />
        </div>
        <div className="flex flex-col">
          <label className="bg-azulOscuro text-[white]" htmlFor="">
            Vuelo de ida: Fecha y hora de llegada
          </label>
          <input
            className="bg-azulClaro rounded-lg border-2 border-[gray]"
            type="text"
          />
        </div>
        <select className="bg-azulClaro my-4 text-[white]" name="roundTrip">
          <option disabled="true" selected type="text">
            Seleccionar tipo de vuelo
          </option>
          <option value="true" type="text">
            Ida y Vuelta
          </option>
          <option value="false" type="text">
            Solo Ida
          </option>
        </select>
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Vuelo de vuelta: Fecha y hora de salida
        </label>
        <input
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Vuelo de vuelta: Fecha y hora de llegada
        </label>
        <input
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Asientos Disponibles
        </label>
        <input
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Precio
        </label>
        <input
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          type="text"
        />
      </div>
      <div className="flex flex-col">
        <label className="text-[white] bg-azulOscuro" htmlFor="">
          Escalas
        </label>
        <select
          className="bg-azulClaro rounded-lg border-2 border-[gray]"
          name=""
          id=""
        >
          <option value="">0 Escalas</option>
          <option value="">1 Escala</option>
          <option value="">2 Escalas</option>
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
          <select onChange={handlerRelation} name="airlineId" id="">
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
          <select onChange={handlerRelation} name="airportsId" id="">
            <option value="default" disabled="true" selected>
              Aeropuerto
            </option>
            {Airport.map((el) => {
              return <option value={el.id}>{el.name}</option>;
            })}
          </select>
          <label htmlFor="airlines">Aeropuerto Destino</label>
          <select onChange={handlerRelation} name="airportsId" id="">
            <option value="default" disabled="true" selected>
              Aeropuerto
            </option>
            {Airport.map((el) => {
              return <option value={el.id}>{el.name}</option>;
            })}
          </select>
        </div>
      </div>
      {/* <div className="w-[75%] flex justify-evenly ">
        <button
          className="text-[white] bg-[blue]"
          onClick={submitHandlerCreate}
        >
          Crear Conexión
        </button>
        <button className="text-[white] bg-[red]" onClick={submitHandlerDelete}>
          Eliminar Conexión
        </button>
      </div> */}
    </div>
  );
}
