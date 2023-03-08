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
    history.push("/conectAir");
    window.location.reload();
  };
  const submitHandlerCreate = async () => {
    if (
      window.confirm("Estás seguro/a de que quieres crear esta conexión?") ===
      true
    ) {
      if (relation.airlineId === Number || relation.airportsId === Number) {
        alert("Hay campos obligatorios incompletos");
        redirectHome();
      } else {
        await dispatch(addAirportToAirline(relation));
        alert("Conexión creada correctamente");
        await redirectHome();
      }
    } else {
      redirectHome();
    }
  };
  const submitHandlerDelete = async () => {
    if (
      window.confirm(
        "Estás seguro/a de que quieres eliminar esta conexión?"
      ) === true
    ) {
      if (relation.airlineId === Number || relation.airportsId === Number) {
        alert("Hay campos obligatorios incompletos");
        redirectHome();
      } else {
        await dispatch(deleteAirportToAirline(relation));
        alert("Conexión eliminada correctamente");
        await redirectHome();
      }
    } else {
      redirectHome();
    }
  };

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <div className="flex flex-col justify-around w-[75%] bg-azulClaro mt-6 p-9 my-20 rounded-xl rounded-lg">
        <div className="flex flex-col justify-around w-full">
          <div className="flex flex-col py-6">
            <label className="text-[white] font-bold" htmlFor="airlines">
              Aerolinea
            </label>
            {/* <input onChange={handlerChangeAirport} type="checkbox" />
          <label htmlFor="">Nombre de la aerolinea</label> */}
            <select
              className="bg-azulOscuro border-2  rounded-lg text-[white] w-full"
              onChange={handlerRelation}
              name="airlineId"
              id=""
            >
              <option value="default" disabled="true" selected>
                Selecciona una Aerolinea
              </option>
              {airlines.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </div>
          <div className="w-full flex justify-center">
            <svg
              width="67"
              height="67"
              viewBox="0 0 67 67"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_327_241)">
                <path d="M67 0H0V67H67V0Z" fill="white" fill-opacity="0.01" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.1666 16.75C14.2501 16.75 16.7499 14.2502 16.7499 11.1667C16.7499 8.08308 14.2501 5.58334 11.1666 5.58334C8.08299 5.58334 5.58325 8.08308 5.58325 11.1667C5.58325 14.2502 8.08299 16.75 11.1666 16.75Z"
                  fill="#4F46E5"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.9583 58.625C18.5836 58.625 22.3333 54.8754 22.3333 50.25C22.3333 45.6246 18.5836 41.875 13.9583 41.875C9.33287 41.875 5.58325 45.6246 5.58325 50.25C5.58325 54.8754 9.33287 58.625 13.9583 58.625Z"
                  fill="#4F46E5"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M53.0417 61.4167C57.6671 61.4167 61.4167 57.667 61.4167 53.0417C61.4167 48.4163 57.6671 44.6667 53.0417 44.6667C48.4164 44.6667 44.6667 48.4163 44.6667 53.0417C44.6667 57.667 48.4164 61.4167 53.0417 61.4167Z"
                  fill="#4F46E5"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.7084 39.0833C36.8756 39.0833 41.8751 34.0839 41.8751 27.9167C41.8751 21.7495 36.8756 16.75 30.7084 16.75C24.5412 16.75 19.5417 21.7495 19.5417 27.9167C19.5417 34.0839 24.5412 39.0833 30.7084 39.0833Z"
                  fill="#4F46E5"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M47.4583 16.75C50.5419 16.75 53.0417 14.2502 53.0417 11.1667C53.0417 8.08308 50.5419 5.58334 47.4583 5.58334C44.3748 5.58334 41.875 8.08308 41.875 11.1667C41.875 14.2502 44.3748 16.75 47.4583 16.75Z"
                  fill="#4F46E5"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.3542 15.3542L20.9376 20.9375"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M41.8749 16.75L39.0833 19.5417"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M47.4583 46.7604L39.0833 36.2917"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M19.5417 43.2708L25.1251 37.6875"
                  stroke="white"
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_327_241">
                  <rect width="67" height="67" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div className="flex flex-col py-6">
            <label className="text-[white] font-bold" htmlFor="airlines">
              Aeropuerto
            </label>
            <select
              className="bg-azulOscuro border-2  rounded-lg text-[white] "
              onChange={handlerRelation}
              name="airportsId"
              id=""
            >
              <option value="default" disabled="true" selected>
                Selecciona una Aeropuerto
              </option>
              {Airport.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-full justify-around">
          <button
            className="border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg font-bold"
            onClick={submitHandlerCreate}
          >
            Crear Conexión
          </button>
          <button
            className="border-2 border-[black] mt-4 hover:bg-[#961d1d] bg-[#e54848] text-[white] py-2 px-6 text-lg rounded-lg font-bold"
            onClick={submitHandlerDelete}
          >
            Eliminar Conexión
          </button>
        </div>
      </div>
    </div>
  );
}
