import React from "react";
import { Link } from "react-router-dom";

export default function FlightSearch() {
  return (
    <div class="bg-azulOscuro py-10">
      <h3 class="text-2xl font-bold mb-6 text-center text-blanco">
        Busca tu vuelo aquí
      </h3>
      <form class="mx-auto lg:w-8/12 xl:w-6/12">
        <div class="flex flex-wrap mb-4 w-full justify-around">
          <div class="w-full lg:w-auto">
            <label for="origen" class="block font-medium mb-2 text-blanco">
              Origen
            </label>
            <input
              id="origen"
              type="text"
              placeholder="Ciudad o aeropuerto"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
          </div>

          <div class="w-full lg:w-auto">
            <label for="destino" class="block font-medium mb-2 text-blanco">
              Destino
            </label>
            <input
              id="destino"
              type="text"
              placeholder="Ciudad o aeropuerto"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
          </div>
          <div class="w-full lg:w-auto">
            <label for="fecha-ida" class="block font-medium mb-2 text-blanco">
              Fecha de ida
            </label>
            <input
              id="fecha-ida"
              type="date"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
          </div>

          <div class="w-full lg:w-auto">
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
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
            />
          </div>
          <div class="w-full lg:w-auto">
            <label for="clase" class="block font-medium mb-2 text-blanco">
              Clase
            </label>
            <select
              id="clase"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400 transition-colors duration-300"
            >
              <option value="turist">Turista</option>
              <option value="business">Ejecutiva</option>
              <option value="first">Primera</option>
            </select>
          </div>
        </div>
        <div class="mt-6 text-center">
          <Link to={"/shop"}>
            <button
              type="submit"
              class="w-4/12 bg-blue-500 hover:bg-blue-600 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-800 transition-colors duration-300 bg-azulClaro text-blanco "
            >
              Buscar vuelos
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}
