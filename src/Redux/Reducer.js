import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  POST_AUTH0_DATA,
  PUT_USER,
  VERIFICACCION_USER,
  FILTRO_SCALE,
  FILTRO_AIRPORT_BY_COUNTRY,
  GET_AIRPORTS,
  GET_DATA,
  PUT_DATA,
  VERIFICACCION_EMAIL,
  searchFlights,
  SLIDER_RECOMENDADO,
  GET_AIRLINE,
  FILTRO_AIRLINE_NAME,
  FILTRO_RESET_SHOP,
  CLEAR_DATA,
  GET_TICKET_USER,
} from "./Actions";

const persistConfig = {
  key: "root",
  storage,
};

const initialState = {
  ////////auth0
  // elprimer login que hace la persona lo llevara a un registro interno
  postRegisterData: [],
  dataAuth0: [],
  userExiste: "",

  ////////auth0------^^
  userData: [],
  userEmailExiste: "",
  flights: [],
  searchedFlights: [],
  searchedFlightsAUX: [],

  flightDetails: [],
  filteredFlights: [],

  ///// AIRPORTS
  getAirports: [],
  getFiltroAirportByCountry: [],
  ///// FILTRO SCALE
  getFiltroFlightsScale: [],
  filteredAirports: [],
  recommended: [],
  getAirline: [],

  // Ticket

  getTicketUserData: [
    {
      id: 1,
      namePassanger: "Carlitos Hernandez",
      seat: 12,
      UserId: "auth0id131",
      FlightId: 1,
      Flight: {
        id: 1,
        origin: "Aereopuerto Internacional el Dorado, Bogota D.C, Colombia",
        destiny: "Aeropuerto Internacional Jorge Chávez, Callao, Peru",
        dateTimeDeparture: "2023-03-22T13:40:00.000Z",
        dateTimeArrival1: "2023-03-22T21:30:00.000Z",
        dateTimeReturn: null,
        dateTimeArrival2: null,
        roundTrip: false,
        seatsAvailable: 134,
        ticketPrice: 288,
        scale: "1",
        state: true,
        AirlineId: 1,
      },
    },
  ],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case PUT_USER:
      return {
        ...state,
        postRegisterData: action.payload,
      };
    case POST_AUTH0_DATA:
      return {
        ...state,
        dataAuth0: action.payload,
      };
    case VERIFICACCION_USER:
      return {
        ...state,
        userExiste: action.payload,
      };
    case GET_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case PUT_DATA:
      return {
        ...state,
      };
    case VERIFICACCION_EMAIL:
      return {
        ...state,
        userEmailExiste: action.payload,
      };

    case "GET_FLIGHTS":
      return {
        ...state,
        flights: action.payload,
      };

    // get airport
    case GET_AIRPORTS:
      return {
        ...state,
        getAirports: action.payload,
      };

    //FIltros
    case FILTRO_SCALE:
      return {
        ...state,
        searchedFlights: [
          ...state.searchedFlightsAUX.filter(
            (scal) => scal.scale === action.payload
          ),
        ],
      };

    case FILTRO_AIRPORT_BY_COUNTRY:
      return {
        ...state,
        getFiltroAirportByCountry: action.payload,
        searchedFlights: action.payload,
      };
    case "SEARCH_FLIGHTS":
      return {
        ...state,
        searchedFlights: action.payload,
        searchedFlightsAUX: action.payload,
      };
    case "GET_FLIGHT_DETAILS":
      return {
        ...state,
        flightDetails: action.payload,
      };
    case "GET_AIRPORTS_INPUT":
      return {
        ...state,
        filteredAirports: action.payload,
      };
    case SLIDER_RECOMENDADO: {
      return {
        ...state,
        recommended: action.payload,
      };
    }

    case GET_AIRLINE:
      return {
        ...state,
        getAirline: action.payload,
      };
    case FILTRO_AIRLINE_NAME:
      return {
        ...state,
        searchedFlights: [
          ...state.searchedFlightsAUX.filter(
            (air) => air.AirlineId == action.payload
          ),
        ],
      };

    case FILTRO_RESET_SHOP:
      return {
        ...state,
        searchedFlights: [...state.searchedFlightsAUX],
      };

    case GET_TICKET_USER:
      return {
        ...state,
        getTicketUserData: action.payload,
      };

    // defecto
    default:
      return {
        ...state,
      };
  }
};

const rootReducer = combineReducers({
  user: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
