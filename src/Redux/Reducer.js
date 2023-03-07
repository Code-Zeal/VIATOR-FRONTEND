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
  CREATE_AIRPORT,
  GET_AIRLINES,
  ADD_AIRLINE_TO_AIRPORT,
  GET_COUNTRIES,
  CREATE_AIRLINE,
  ADD_AIRPORT_TO_AIRLINE,
  DELETE_AIRPORT_TO_AIRLINE,
  GET_AIRLINE,
  FILTRO_AIRLINE_NAME,
  FILTRO_RESET_SHOP,
  CLEAR_DATA,
  GET_TICKET_USER,
  PUT_TICKET_TRANSFER,
  PUT_TICKET_FORM,
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
  airlineFlights: [],
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
  onApproveRes: "",
  getAirliness: [],
  getCountries: [],
  getAirline: [],

  getTicketUserData: [],
  // Ticket
  getAirlinesAirports: [],
  cloudinaryAirline: "",
  cloudinaryUsers: "",
  flightsAdm: "",
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
    case "CREATE_ORDER": {
      window.location.href = action.payload.href;
      return {
        ...state,
      };
    }

    case CREATE_AIRPORT: {
      return {
        ...state,
      };
    }
    case "ON_APPROVE": {
      return {
        ...state,
      };
    }
    case GET_AIRLINES: {
      return {
        ...state,
        getAirliness: action.payload,
      };
    }
    case ADD_AIRLINE_TO_AIRPORT: {
      return {
        ...state,
      };
    }
    case ADD_AIRPORT_TO_AIRLINE: {
      return {
        ...state,
      };
    }
    case GET_COUNTRIES: {
      return {
        ...state,
        getCountries: action.payload,
      };
    }
    case CREATE_AIRLINE: {
      return {
        ...state,
      };
    }
    case DELETE_AIRPORT_TO_AIRLINE: {
      return {
        ...state,
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
            (air) => air.AirlineId === action.payload
          ),
        ],
      };

    case FILTRO_RESET_SHOP:
      return {
        ...state,
        searchedFlights: [...state.searchedFlightsAUX],
      };
    case "CREATE_FLIGHT":
      return {
        ...state,
      };
    case "GET_AIRPORTS_AIRLINE":
      return {
        ...state,
        getAirlinesAirports: action.payload,
      };
    case "PUT_AIRPORTS_AIRLINE":
      return {
        ...state,
      };
    case "CLOUDINARY_FLIGHTS":
      return {
        ...state,
        cloudinaryAirline: action.payload,
      };
    case "CLOUDINARY_USERS":
      return {
        ...state,
        cloudinaryUsers: action.payload,
      };
    case "GET_FLIGHTS_ADM":
      return {
        ...state,
        flightsAdm: action.payload,
      };

    case "GET_AIRLINE_FLIGHTS":
      return {
        ...state,
        airlineFlights: action.payload,
      };

    case "CLEAR_STATE":
      return {
        ...state,
        airlineFlights: [],
      };

    case GET_TICKET_USER:
      return {
        ...state,
        getTicketUserData: action.payload,
      };

    case PUT_TICKET_TRANSFER:
      return {
        ...state,
      };
    case PUT_TICKET_FORM:
      return {
        ...state,
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
