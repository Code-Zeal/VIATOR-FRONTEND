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
  SLIDER_RECOMENDADO
} from "./Actions";

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
  flightDetails: [],
  filteredFlights: [],

  ///// AIRPORTS
  getAirports: [],
  getFiltroAirportByCountry: [],
  ///// FILTRO SCALE
  getFiltroFlightsScale: [],
  filteredAirports: [],
  recommended : []
};

const rootReducer = (state = initialState, action) => {
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
        getFiltroFlightsScale: action.payload,
        searchedFlights: action.payload,
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
        recommended : action.payload
      }
    }
    // defecto
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
