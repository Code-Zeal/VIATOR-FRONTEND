import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filteredFlights } from "../Redux/Actions";
import { useHistory } from "react-router-dom";

export default function FlightSearch() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    origin: "",
    destiny: "",
    dateTimeDeparture: "",
    dateTimeArrival: "",
    passengers: "",
    class: "",
  });

  const options = [
    {
      value: "Ciudad de México, Aeropuerto Benito Juárez",
      label: "Ciudad de México, Aeropuerto Benito Juárez",
    },
    {
      value: "Santiago de Chile, Aeropuerto Arturo Merino Benitez",
      label: "Santiago de Chile | Aeropuerto Arturo Merino Benitez",
    },
    { value: "Guadalajara", label: "Guadalajara" },
    { value: "Monterrey", label: "Monterrey" },
    { value: "Cancún", label: "Cancún" },
    { value: "Los Ángeles", label: "Los Ángeles" },
    { value: "Miami", label: "Miami" },
    { value: "Buenos Aires", label: "Buenos Aires" },
  ];

  function handleOriginChange(selectedOption) {
    setFormData({
      ...formData,
      origin: selectedOption.value,
    });
    console.log(formData);
  }

  function handleDestinyChange(selectedOption) {
    setFormData({
      ...formData,
      destiny: selectedOption.value,
    });
    console.log(formData);
  }

  function handleDepartureChange(event) {
    setFormData({
      ...formData,
      dateTimeDeparture: event.target.value,
    });
    console.log(formData);
  }

  function handleArrivalChange(event) {
    setFormData({
      ...formData,
      dateTimeArrival: event.target.value,
    });
    console.log(formData);
  }

  function handlePassengersChange(event) {
    setFormData({
      ...formData,
      passengers: event.target.value,
    });
    console.log(formData);
  }

  function handleClassChange(event) {
    setFormData({
      ...formData,
      class: event.target.value,
    });
    console.log(formData);
  }

  function handleFilterFlights(event) {
    event.preventDefault();
    dispatch(filteredFlights(formData));
  }

  const redirectShop = async () => {
    history.push("/shop");
    window.location.reload();
  };

  return (
    <div class="bg-azulOscuro py-10">
      <h3 class="text-2xl font-bold mb-6 text-center text-blanco">
        Busca tu vuelo aquí
      </h3>
      <form class="mx-auto lg:w-10/12 xl:w-8/12 px-4 py-2">
        <div class="flex flex-wrap mb-4 w-full justify-around">
          <div class="w-full lg:w-1/6">
            <label for="origen" class="block font-medium mb-2 text-blanco">
              Origen
            </label>
            <Select
              id="origen"
              options={options}
              placeholder="Ciudad o aeropuerto"
              className="w-full"
              onChange={handleOriginChange}
            />
          </div>

          <div class="w-full lg:w-1/6">
            <label for="destino" class="block font-medium mb-2 text-blanco">
              Destino
            </label>
            <Select
              id="destino"
              options={options}
              placeholder="Ciudad o aeropuerto"
              className="w-full"
              onChange={handleDestinyChange}
            />
          </div>

          <div class="w-full lg:w-1/6">
            <label for="fecha-ida" class="block font-medium mb-2 text-blanco">
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
            <label
              for="fecha-vuelta"
              class="block font-medium mb-2 text-blanco"
            >
              Fecha de vuelta
            </label>
            <input
              id="fecha-vuelta"
              type="date"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
              onChange={handleArrivalChange}
            />
          </div>

          <div class="w-full lg:w-auto">
            <label for="pasajeros" class="block font-medium mb-2 text-blanco">
              Pasajeros
            </label>
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
            <label for="clase" class="block font-medium mb-2 text-blanco">
              Clase
            </label>
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
          <button
            type="submit"
            class="w-4/12 bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition-colors duration-300 bg-azulClaro text-blanco"
            onClick={redirectShop}
          >
            Buscar vuelos
          </button>
        </div>
      </form>
    </div>
  );
}
