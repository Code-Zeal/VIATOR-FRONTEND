import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAirports,
  getAirportByCountry2,
  getFlightsScale,
} from "../Redux/Actions";

const FilterShop = () => {
  const dispatch = useDispatch();
  const { user, getAccessTokenSilently } = useAuth0();
  const getAirports = useSelector((state) => state?.getAirports);

  const filtrosAirportFn = (event) => {
    const valor = event.target.value;

    const result = getAirports.find((f) => {
      if (f.name === valor) {
        const country = f.country;
        const name = f.name;
        // dispatch(getAirportByCountry2(name, country))
      }
    });
  };

  const handleChangeScale = (event) => {
    const valor = event.target.value;

    console.log(valor);

    // dispatch(getFlightsScale(valor));
  };

  useEffect(() => {
    // dispatch(getAirports());
  }, []);

  console.log(getAirports);

  return (
    <div className="">
      <div>
        <h1>filtros aeropuertos</h1>
        {getAirports.map((air) => (
          <button className="p-4" onClick={filtrosAirportFn} value={air.name}>
            {air.name}
          </button>
        ))}
      </div>
      <div>
        <h1>Filtros por escala</h1>
        <select onChange={handleChangeScale} name="" id="">
          <option value="default">escalas</option>
          <option value="0">Sin escalas</option>
          <option value="1">con 1 escalas</option>
          <option value="2">con 2 escalas</option>
        </select>
      </div>
    </div>
  );
};

export default FilterShop;
