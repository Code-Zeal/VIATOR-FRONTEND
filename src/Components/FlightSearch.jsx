import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { searchFlights } from "../Redux/Actions";

export default function FlightSearch() {
  const flights = useSelector((state) => state.searchedFlights);
  const dispatch = useDispatch();
  const history = useHistory();
  const [originOptions, setOriginOptions] = useState([]);
  const [destinyOptions, setDestinyOptions] = useState([]);
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [formData, setFormData] = useState({
    origin: "",
    destiny: "",
    roundTrip: "",
    dateTimeDeparture: "",
    dateTimeReturn: "",
    passengers: 1,
    class: "",
  });
  const [formValid, setFormValid] = useState(false);

  const handleCheck1Change = (event) => {
    if (event.target.checked) {
      setChecked1(event.target.checked);
      setChecked2(!event.target.checked);
      setFormData({
        ...formData,
        roundTrip: event.target.value,
      });
      console.log(formData);
    }
  };

  const handleCheck2Change = (event) => {
    if (event.target.checked) {
      setChecked2(event.target.checked);
      setChecked1(!event.target.checked);
      setFormData({
        ...formData,
        roundTrip: event.target.value,
      });
      console.log(formData);
    }
  };

  const handleOriginInputChange = (inputValue) => {
    axios
      .get(`http://localhost:4000/getAirportsByInput/${inputValue}`)
      .then((response) => {
        const options = response.data.map((airport) => ({
          value: `${airport.name}, ${airport.city}, ${airport.country}`,
          label: `${airport.name}, ${airport.city}, ${airport.country}`,
        }));
        setOriginOptions(options);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDestinyInputChange = (inputValue) => {
    axios
      .get(`http://localhost:4000/getAirportsByInput/${inputValue}`)
      .then((response) => {
        const options = response.data.map((airport) => ({
          value: `${airport.name}, ${airport.city}, ${airport.country}`,
          label: `${airport.name}, ${airport.city}, ${airport.country}`,
        }));
        setDestinyOptions(options);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function handleOriginChange(selectedOption) {
    setFormData({
      ...formData,
      origin: selectedOption.value,
    });
    validateForm();
    console.log(formData);
  }

  function handleDestinyChange(selectedOption) {
    setFormData({
      ...formData,
      destiny: selectedOption.value,
    });
    validateForm();
    console.log(formData);
  }

  function handleDepartureChange(event) {
    setFormData({
      ...formData,
      dateTimeDeparture: event.target.value,
    });
    validateForm();
    console.log(formData);
  }

  function handleReturnChange(event) {
    setFormData({
      ...formData,
      dateTimeReturn: event.target.value,
    });
    validateForm();
    console.log(formData);
  }

  function handlePassengersChange(event) {
    setFormData({
      ...formData,
      passengers: event.target.value,
    });
    validateForm();
    console.log(formData);
  }

  function handleClassChange(event) {
    setFormData({
      ...formData,
      class: event.target.value,
    });
    validateForm();
    console.log(formData);
  }

  const validateForm = () => {
    if (
      formData.origin !== "" &&
      formData.destiny !== "" &&
      formData.dateTimeDeparture !== "" &&
      formData.passengers !== "" &&
      (checked2 ? formData.dateTimeReturn !== "" : true)
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchFlights(formData));
    console.log(flights[0]);
    history.push("/shop");
  }

  return (
    <div class="bg-azulOscuro py-10">
      <h3 class="text-2xl font-bold mb-6 text-center text-blanco">
        Busca tu vuelo aquí
      </h3>
      <form class="mx-auto lg:w-10/12 xl:w-8/12 px-4 py-2">
        <div class="flex flex-wrap mb-4 w-full justify-around">
          <label>
            <input
              type="checkbox"
              id="Check2"
              name="ida_vuelta"
              checked={checked2}
              value="true"
              onChange={handleCheck2Change}
            />{" "}
            Ida y vuelta
          </label>
          <label>
            <input
              type="checkbox"
              id="Check1"
              name="ida_vuelta"
              value="false"
              checked={checked1}
              onChange={handleCheck1Change}
            />{" "}
            Ida
          </label>

          <div class="w-full lg:w-1/6">
            <label class="block font-medium mb-2 text-blanco">Origen</label>
            <Select
              id="origen"
              options={originOptions}
              placeholder="Ciudad o aeropuerto"
              className="w-full"
              onInputChange={handleOriginInputChange}
              onChange={handleOriginChange}
            />
          </div>

          <div class="w-full lg:w-1/6">
            <label class="block font-medium mb-2 text-blanco">Destino</label>
            <Select
              id="destino"
              options={destinyOptions}
              placeholder="Ciudad o aeropuerto"
              className="w-full"
              onInputChange={handleDestinyInputChange}
              onChange={handleDestinyChange}
            />
          </div>

          <div class="w-full lg:w-1/6">
            <label class="block font-medium mb-2 text-blanco">
              Fecha de ida
            </label>
            <input
              id="fecha-ida"
              type="date"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
              onChange={handleDepartureChange}
            />
          </div>

          <div class="w-full lg:w-1/6">
            <label class="block font-medium mb-2 text-blanco">
              Fecha de vuelta
            </label>
            <input
              id="fecha-vuelta"
              type="date"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
              onChange={handleReturnChange}
            />
          </div>

          <div class="w-full lg:w-auto">
            <label class="block font-medium mb-2 text-blanco">Pasajeros</label>
            <input
              id="pasajeros"
              type="number"
              min="1"
              max="8"
              defaultValue="1"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
              onChange={handlePassengersChange}
            />
          </div>

          <div class="w-full lg:w-auto">
            <label class="block font-medium mb-2 text-blanco">Clase</label>
            <select
              id="clase"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
              onChange={handleClassChange}
            >
              <option value="turist">Turista</option>
              <option value="business">Ejecutiva</option>
              <option value="first">Primera</option>
            </select>
          </div>
        </div>
        <div class="mt-6 text-center">
          <Link to="/shop">
            <button
              type="submit"
              class="w-4/12 bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition-colors duration-300 bg-azulClaro text-blanco"
              onClick={handleSubmit}
              disabled={!formValid}
            >
              Buscar vuelos
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
