import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getFlightsScale,
  get_airline,
  filtroAirlineName,
  resetFiltrosShop,
} from "../Redux/Actions";

const FilterShop = () => {
  const dispatch = useDispatch();
  const getAirlineName = useSelector((state) => state?.getAirline);

  const filtrosAirlineFn = (event) => {
    const valor = event.target.value;
    console.log(valor);
    dispatch(filtroAirlineName(valor));
  };

  const defaultFiltros = () => {
    dispatch(resetFiltrosShop());
  };
  const handleChangeScale = (event) => {
    const valor = event.target.value;

    dispatch(getFlightsScale(valor));
  };
  console.log(getAirlineName);

  useEffect(() => {
    dispatch(get_airline());
  }, []);

  return (
    <div className=" flex items-center bg-azulOscuro text-[white] py-2 w-screen px-4 ">
      <img
        className="hidden md:flex animate-pulse px-2"
        src="https://i.imgur.com/clNpPpW.png"
        alt=""
      />
      <div className="flex flex-col w-full items-center">
        <h1 className="text-lg md:text-3xl font-bold bg-[white] text-[black] px-10 py-1 rounded-tr-2xl rounded-bl-2xl">
          Filtros
        </h1>
        <h2 className="font-bold lg:text-xl py-2">Aeropuertos</h2>
        <div className="flex">
          <button
            onClick={defaultFiltros}
            className="px-2 py-1 bg-blanco text-[black]  rounded-lg hover:bg-[#6644c1] hover:text-[white] hover:shadow-lg hover:shadow-[white] md:m-2 m-1"
          >
            Resetear Filtros
          </button>
          {getAirlineName.map((air) => (
            <button
              className="px-2 py-1 bg-blanco text-[black]  rounded-lg hover:bg-[#6644c1] hover:text-[white] hover:shadow-lg hover:shadow-[white] md:m-2 m-1"
              onClick={filtrosAirlineFn}
              value={air.id}
            >
              {air.name}
            </button>
          ))}
        </div>
        <div className="">
          <select
            onChange={handleChangeScale}
            name=""
            id=""
            className="text-[black] my-2 rounded-md"
          >
            <option value="default" selected="true" disabled="true">
              Escalas
            </option>
            <option value="0">Sin Escalas</option>
            <option value="1">1 Escala</option>
            <option value="2">2 Escalas</option>
          </select>
        </div>
      </div>
      <img
        className=" hidden animate-pulse px-2 md:flex"
        src="https://i.imgur.com/clNpPpW.png"
        alt=""
      />
    </div>
  );
};

export default FilterShop;
