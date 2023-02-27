import axios from "axios";

export const POST_AUTH0_DATA = "POST_AUTH0_DATA";
export const PUT_USER = "PUT_USER";
export const VERIFICACCION_USER = "VERIFICACCION_USER";
export const GET_AIRPORTS = "GET_AIRPORTS";

export const FILTRO_AIRPORT_BY_COUNTRY = "FILTRO_AIRPORT_BY_COUNTRY";
export const FILTRO_SCALE = "FILTRO_SCALE";

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

export function getFlights() {
  return async function (dispatch) {
    const res = await axios.get("http://localhost:4000/api/flights/");
    return dispatch({
      type: "GET_FLIGHTS",
      payload: res.data,
    });
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
    const response = await axios.get(
      `http://localhost:4000/api/scaleFlight?scale=${scale}`
    );
    return dispatch({
      type: FILTRO_SCALE,
      payload: response.data,
    });
  };
}

//
