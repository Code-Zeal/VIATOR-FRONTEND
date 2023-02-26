import {
  POST_AUTH0_DATA,
  PUT_USER,
  VERIFICACCION_USER,
  VERIFICACCION_EMAIL,
  searchFlights, 
} from "./Actions";

const initialState = {
  // elprimer login que hace la persona lo llevara a un registro interno
  postRegisterData: [],
  dataAuth0: [],
  userExiste: "",
  userEmailExiste: "",
  flights: [],
  searchedFlights: [],
  flightDetails: [],
  filteredFlights: [],
  filteredAirports: [],
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
    // defecto
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
