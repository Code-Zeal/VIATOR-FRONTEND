import axios from "axios";

export const POST_AUTH0_DATA = "POST_AUTH0_DATA";
export const PUT_USER = "PUT_USER";
export const VERIFICACCION_USER = "VERIFICACCION_USER";
export const GET_AIRPORTS = "GET_AIRPORTS";
export const FILTRO_AIRPORT_BY_COUNTRY = "FILTRO_AIRPORT_BY_COUNTRY";
export const FILTRO_SCALE = "FILTRO_SCALE";
export const GET_DATA = "GET_DATA";
export const PUT_DATA = "PUT_DATA";
export const VERIFICACCION_EMAIL = "VERIFICACCION_EMAIL";
export const SLIDER_RECOMENDADO = "SLIDER_RECOMENDADO";
export const CREATE_AIRPORT = "CREATE_AIRPORT";
export const CREATE_AIRLINE = "CREATE_AIRLINE";
export const GET_AIRLINES = "GET_AIRLINES";
export const ADD_AIRLINE_TO_AIRPORT = "ADD_AIRLINE_TO_AIRPORT";
export const ADD_AIRPORT_TO_AIRLINE = "ADD_AIRLINE_TO_AIRPORT";
export const DELETE_AIRPORT_TO_AIRLINE = "DELETE_AIRPORT_TO_AIRLINE";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_AIRLINE = "GET_AIRLINE";
export const FILTRO_AIRLINE_NAME = "FILTRO_AIRLINE_NAME";
export const FILTRO_RESET_SHOP = "FILTRO_RESET_SHOP";
export const CLEAR_DATA = "CLEAR_DATA";
export const GET_TICKET_USER = "GET_TICKET_USER";
export const PUT_TICKET_TRANSFER = "PUT_TICKET_TRANSFER";
export const PUT_TICKET_FORM = "PUT_TICKET_FORM";

export const putRegister = (fromRegister, token) => async (dispatch) => {
  const response = await axios.put(
    "http://localhost:4000/setInfo",
    fromRegister,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  dispatch({
    type: PUT_USER,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};

export const postDataAuth0Inicial =
  (dataRegister, token) => async (dispatch) => {
    console.log(token);

    const response = await axios.post(
      "http://localhost:4000/register",
      dataRegister,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    dispatch({
      type: POST_AUTH0_DATA,
      // DATA SERIA POR EL EXIOS
      payload: response.data,
    });
  };

export const verificaccionUser = (subAuth0) => async (dispatch) => {
  const response = await axios.post("http://localhost:4000/login", subAuth0);

  dispatch({
    type: VERIFICACCION_USER,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};
export const getDataUser = (id) => async (dispatch) => {
  console.log(id);
  const response = await axios.get(`http://localhost:4000/User/getUser/${id}`);

  dispatch({
    type: GET_DATA,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};

export const putDataUser = (id, formPut) => async (dispatch) => {
  console.log(formPut);
  const response = await axios.put(
    `http://localhost:4000/User/updateUser/${id}`,
    formPut
  );

  dispatch({
    type: PUT_DATA,
    payload: response.data,
  });
};

export const verificaccionEmail = (subAuth0) => async (dispatch) => {
  const response = await axios.get(
    `http://localhost:4000/isRegistered?id=${subAuth0}`
  );

  dispatch({
    type: VERIFICACCION_EMAIL,
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};

export function getFlights() {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:4000/api/flights/");
    return dispatch({
      type: "GET_FLIGHTS",
      payload: res.data,
    });
  };
}
export function getFlightsAdm() {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:4000/api/flightsAdmin");
    return dispatch({
      type: "GET_FLIGHTS_ADM",
      payload: res.data,
    });
  };
}

export function searchFlights({
  origin,
  destiny,
  roundTrip,
  dateTimeDeparture,
  dateTimeReturn,
  passengers,
}) {
  return async function (dispatch) {
    const res = await axios.get(
      `http://localhost:4000/getFlightsByQuery?origin=${origin}&destiny=${destiny}&dateTimeDeparture=${dateTimeDeparture}&dateTimeReturn=${dateTimeReturn}&roundTrip=${roundTrip}&passengers=${passengers}`
    );
    return dispatch({
      type: "SEARCH_FLIGHTS",
      payload: res.data,
    });
  };
}

export function getFlightDetails(id) {
  return async function (dispatch) {
    try {
      const res = await axios.get("http://localhost:4000/api/flights/" + id);
      return dispatch({
        type: "GET_FLIGHT_DETAILS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function filteredFlights(payload) {
  return {
    type: "FILTERED_FLIGHTS",
    payload,
  };
}

// Airports
export function getAirports() {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:4000/getAirports`);
    return dispatch({
      type: GET_AIRPORTS,
      payload: response.data,
    });
  };
}

// FIltros Front

export function getAirportByCountry2(airlineName, country) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:4000/getAirportsByCountry?airlineName=${airlineName}&country=${country}`
    );
    return dispatch({
      type: FILTRO_AIRPORT_BY_COUNTRY,
      payload: response.data,
    });
  };
}

export function getFlightsScale(scale) {
  return async function (dispatch) {
    return dispatch({
      type: FILTRO_SCALE,
      payload: scale,
    });
  };
}

export function getAirportsByInput(payload) {
  return async function (dispatch) {
    const res = await axios.get(
      `http://localhost:4000/getAirportsByInput/${payload}`
    );
    return dispatch({
      type: "GET_AIRPORTS_INPUT",
      payload: res.data,
    });
  };
}
export function createOrder(oder) {
  console.log(oder);
  return async function (dispatch) {
    const res = await axios.post(`http://localhost:4000/createOrder`, oder);
    return dispatch({
      type: "CREATE_ORDER",
      payload: res.data,
    });
  };
}
export function onApprove(body) {
  return async function (dispatch) {
    const res = await axios.get(`http://localhost:4000/capture-order`, body);
    return dispatch({
      type: "ON_APPROVE",
      payload: res,
    });
  };
}

export const sliderRecomendado = () => {
  return async (dispatch) => {
    const info = await axios.get(`http://localhost:4000/api/recommended`);
    dispatch({
      type: SLIDER_RECOMENDADO,
      payload: info.data,
    });
  };
};
export const CreateAirports = (formAirport) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/createAirport",
      formAirport
    );
    dispatch({
      type: CREATE_AIRPORT,
      payload: response.data,
    });
  };
};
export const CreateAirlines = (formAiline) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/api/airlines",
      formAiline
    );
    dispatch({
      type: CREATE_AIRLINE,
      payload: response.data,
    });
  };
};
export const getAirlines = () => {
  return async (dispatch) => {
    const response = await axios.get("http://localhost:4000/api/airlines");
    dispatch({
      type: GET_AIRLINES,
      payload: response.data,
    });
  };
};
export const getCountries = () => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://countriesnow.space/api/v0.1/countries"
    );
    dispatch({
      type: GET_COUNTRIES,
      payload: response.data.data,
    });
  };
};
export const addAirlineToAirport = (data) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/addAirlineToAirport",
      data
    );
    dispatch({
      type: ADD_AIRLINE_TO_AIRPORT,
      payload: response.data,
    });
  };
};
export const addAirportToAirline = (data) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/api/addAirportToAirline",
      data
    );
    dispatch({
      type: ADD_AIRPORT_TO_AIRLINE,
      payload: response.data,
    });
  };
};
export const deleteAirportToAirline = (data) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/api/deleteAirportToAirline",
      data
    );
    dispatch({
      type: DELETE_AIRPORT_TO_AIRLINE,
      payload: response.data,
    });
  };
};

export function get_airline() {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:4000/api/airlines`);
    console.log(response);
    return dispatch({
      type: GET_AIRLINE,
      payload: response.data,
    });
  };
}
export function filtroAirlineName(airlineID) {
  console.log(airlineID);
  return async function (dispatch) {
    return dispatch({
      type: FILTRO_AIRLINE_NAME,
      payload: airlineID,
    });
  };
}
export function resetFiltrosShop() {
  return async function (dispatch) {
    return dispatch({
      type: FILTRO_RESET_SHOP,
      payload: "RESET_FILTROS_SHOP",
    });
  };
}

export const limpiarReduxData = () => {
  return (dispatch) => {
    dispatch({
      type: POST_AUTH0_DATA,
      payload: [],
    });
    dispatch({
      type: PUT_USER,
      payload: [],
    });
    dispatch({
      type: VERIFICACCION_USER,
      payload: "",
    });
    dispatch({
      type: FILTRO_SCALE,
      payload: [],
    });
    dispatch({
      type: FILTRO_AIRPORT_BY_COUNTRY,
      payload: "",
    });
    dispatch({
      type: GET_AIRPORTS,
      payload: [],
    });
    dispatch({
      type: GET_DATA,
      payload: [],
    });
    dispatch({
      type: PUT_DATA,
      payload: [],
    });
    dispatch({
      type: VERIFICACCION_EMAIL,
      payload: [],
    });
    dispatch({
      type: searchFlights,
      payload: [],
    });
    dispatch({
      type: SLIDER_RECOMENDADO,
      payload: [],
    });
    dispatch({
      type: GET_AIRLINE,
      payload: [],
    });
    dispatch({
      type: FILTRO_AIRLINE_NAME,
      payload: [],
    });
    dispatch({
      type: FILTRO_RESET_SHOP,
      payload: [],
    });
    dispatch({
      type: "RECOMMENDED",
      payload: [],
    });
    dispatch({
      type: "GET_AIRLINE",
      payload: [],
    });

    dispatch({
      type: "GET_FLIGHTS",
      payload: [],
    });

    dispatch({
      type: "SEARCH_FLIGHTS",
      payload: [],
    });

    dispatch({
      type: "GET_FLIGHT_DETAILS",
      payload: [],
    });

    dispatch({
      type: "GET_AIRPORTS_INPUT",
      payload: [],
    });

    dispatch({
      type: "GET_TICKET_USER",
      payload: [],
    });
  };
};

export function getTicketUser(id) {
  return async function (dispatch) {
    console.log(id);
    const response = await axios.get(
      `http://localhost:4000/User/getUserTickets?id=${id}`
    );
    console.log(response);
    return dispatch({
      type: GET_TICKET_USER,
      payload: response.data,
    });
  };
}

export function putTicketTransfer(data) {
  return async function (dispatch) {
    console.log(data);
    const response = await axios.put(
      `http://localhost:4000/transferTickets`,
      data
    );
    return dispatch({
      type: PUT_TICKET_TRANSFER,
      payload: response.data,
    });
  };
}

export const CreateFlights = (formFlight) => {
  return async (dispatch) => {
    const response = await axios.post(
      "http://localhost:4000/api/flights",
      formFlight
    );
    dispatch({
      type: "CREATE_FLIGHT",
      payload: response.data,
    });
  };
};
export const getAirportsAirline = (id) => {
  return async (dispatch) => {
    const response = await axios.get(
      `http://localhost:4000/api/airlines/${id}`
    );
    dispatch({
      type: "GET_AIRPORTS_AIRLINE",
      payload: response.data,
    });
    console.log(response.data);
  };
};
export function putFlightDetails(idState) {
  return async function (dispatch) {
    const res = await axios.put(
      "http://localhost:4000/api/setStateFlights",
      idState
    );
    return dispatch({
      type: "PUT_FLIGHT_DETAILS",
      payload: res.data,
    });
  };
}

export function putTicketCompleteForm(id, data) {
  return async function (dispatch) {
    console.log(data);
    console.log(id);

    const response = await axios.put(
      `http://localhost:4000/api/tickets/${id}`,
      data
    );
    return dispatch({
      type: PUT_TICKET_FORM,
      payload: response.data,
    });
  };
}
export function getFlightsByAirline(airline) {
  return async function (dispatch) {
    try {
      const res = await axios.get(
        "http://localhost:4000/api/getFlightByAirline?airlineName=" + airline
      );
      return dispatch({
        type: "GET_AIRLINE_FLIGHTS",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function cloudinaryFlights(payload) {
  return {
    type: "CLOUDINARY_FLIGHTS",
    payload,
  };
}
export function cloudinaryUsers(payload) {
  return {
    type: "CLOUDINARY_USERS",
    payload,
  };
}

export const clearState = () => ({
  type: "CLEAR_STATE",
  payload: [],
});
