import axios from "axios";

export const POST_AUTH0_DATA = "POST_AUTH0_DATA";
export const PUT_USER = "PUT_USER";
export const VERIFICACCION_USER = "VERIFICACCION_USER";
export const VERIFICACCION_EMAIL = "VERIFICACCION_EMAIL";
export const SLIDER_RECOMENDADO = "SLIDER_RECOMENDADO"

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

export const sliderRecomendado = () => {
  return async (dispatch) => {
    const info = await axios.get(`http://localhost:4000/api/flights`);
    dispatch({
      type : SLIDER_RECOMENDADO,
      payload : info.data
    })
  }
}