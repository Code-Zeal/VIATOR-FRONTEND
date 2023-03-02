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

export default function ConectAir() {
  let history = useHistory();

  const airlines = useSelector((state) => state.getAirliness);
  const Airport = useSelector((state) => state.getAirports);
  const dispatch = useDispatch();

  // const [countrie, setCountrie] = useState(false);
  const [relation, setRelation] = useState({
    airlineId: Number,
    airportsId: Number,
  });
  console.log(relation);

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
          <label htmlFor="airlines">Aeropuerto</label>
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
      <div className="w-[75%] flex justify-evenly ">
        <button
          className="text-[white] bg-[blue]"
          onClick={submitHandlerCreate}
        >
          Crear Conexión
        </button>
        <button className="text-[white] bg-[red]" onClick={submitHandlerDelete}>
          Eliminar Conexión
        </button>
      </div>
    </div>
  );
}
