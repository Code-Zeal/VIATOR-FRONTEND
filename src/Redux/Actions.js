import axios from "axios";

export const POST_AUTH0_DATA = "POST_AUTH0_DATA";
export const PUT_USER = "PUT_USER";
export const VERIFICACCION_USER = "VERIFICACCION_USER";
export const GET_DATA = "GET_DATA";
export const PUT_DATA = "PUT_DATA";

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
    // DATA SERIA POR EL EXIOS
    payload: response.data,
  });
};
