import { POST_AUTH0_DATA, PUT_USER, VERIFICACCION_USER } from "./Actions";

const initialState = {
  // elprimer login que hace la persona lo llevara a un registro interno
  postRegisterData: [],
  dataAuth0: [],
  userExiste: "",
  getFlightsDataDePrueba: [
    {
      id: 1,
      origin: "chiloe",
      destiny: "arica",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
    },
    {
      id: 2,
      origin: "osorno",
      destiny: "antofagasta",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
    },
    {
      id: 3,
      origin: "arica",
      destiny: "santiago",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
    },
    {
      id: 4,
      origin: "santiago",
      destiny: "puerto  natales",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
    },
    {
      id: 5,
      origin: "´puerto natales",
      destiny: "puerto Montt",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
      vuelta: {
        origin: "puerto montt",
        destiny: "puerto natales",
        dateTimeDeparture: "2023-02-22T19:35:20.000Z",
        dateTimeArrival: "2023-02-22T19:35:20.000Z",
        seatsAvailable: 20,
        ticketPrice: "400.000",
      },
    },
    {
      id: 6,
      origin: "puerto Montt",
      destiny: "Santiago",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
      vuelta: {
        origin: "santiago",
        destiny: "puerto Montt",
        dateTimeDeparture: "2023-02-22T19:35:20.000Z",
        dateTimeArrival: "2023-02-22T19:35:20.000Z",
        seatsAvailable: 20,
        ticketPrice: "400.000",
      },
    },
    {
      id: 7,
      origin: "Nunca mas",
      destiny: "Infinito",
      dateTimeDeparture: "2023-02-22T19:35:20.000Z",
      dateTimeArrival: "2023-02-22T19:35:20.000Z",
      seatsAvailable: 20,
      ticketPrice: "400.000",
      vuelta: {
        origin: "Nunca mas",
        destiny: "puerto Montt",
        dateTimeDeparture: "2023-02-22T19:35:20.000Z",
        dateTimeArrival: "2023-02-22T19:35:20.000Z",
        seatsAvailable: 20,
        ticketPrice: "300.000",
      },
    },
  ],
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

    // defecto
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
