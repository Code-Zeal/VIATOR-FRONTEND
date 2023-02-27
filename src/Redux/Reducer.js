import {
  POST_AUTH0_DATA,
  PUT_USER,
  VERIFICACCION_USER,
  FILTRO_SCALE,
  FILTRO_AIRPORT_BY_COUNTRY,
  GET_AIRPORTS,
} from "./Actions";

const initialState = {
  ////////auth0
  // elprimer login que hace la persona lo llevara a un registro interno
  postRegisterData: [],
  dataAuth0: [],
  userExiste: "",
  ////////auth0------^^
  flights: [],
  filteredFlights: [],

  ///// AIRPORTS
  getAirports: [
    {
      id: 1,
      name: "aeropuerto Internacional",
      country: "peruaa",
      city: "lima",
    },
    {
      id: 2,
      name: "aeropuerto de",
      country: "peru",
      city: "tacna",
    },
    {
      id: 3,
      name: "aeropuerto ",
      country: "chile",
      city: "san",
    },
  ],
  getFiltroAirportByCountry: [],
  ///// FILTRO SCALE
  getFiltroFlightsScale: [],
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
    // defecto
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
