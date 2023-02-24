import {
  POST_AUTH0_DATA,
  PUT_USER,
  VERIFICACCION_USER,
  VERIFICACCION_EMAIL,
} from "./Actions";

const initialState = {
  // elprimer login que hace la persona lo llevara a un registro interno
  postRegisterData: [],
  dataAuth0: [],
  userExiste: "",
  userEmailExiste: "",
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

    // defecto
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
