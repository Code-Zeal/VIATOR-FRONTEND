import { useState, useEffect } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  verificaccionUser,
  postDataAuth0Inicial,
  verificaccionEmail,
} from "../Redux/Actions";

import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";

const Welcom = () => {
  const dispatch = useDispatch();
  const { user, getAccessTokenSilently } = useAuth0();
  let history = useHistory();
  const dataEmail = useSelector((state) => state?.userEmailExiste);

  const dataID = useSelector((state) => state.userExiste);

  const dataRegister = {
    id: user?.sub,
  };

  useEffect(() => {
    const redirectForm = async () => {
      if (dataID === "False") {
        history.push("/welcom");
      } else {
        history.push("/home");
      }
    };
    redirectForm();
  }, [dataID]);

  useEffect(() => {
    // reviso en mi base de datos si tengo el id de la persona que acaba de iniciar sesion
    //  si tengo el id muetro el home em caso contrario muestro el formulario

    // verifico si es su primera vez que se logea, antes ya se habia registrado
    //  me da un true y no seria un False
    dispatch(verificaccionUser(dataRegister));
  }, [dataEmail]);
  const registro = async () => {
    const token = await getAccessTokenSilently({});
    const dataRegister = {
      picture: user.picture,
      email: "No registrado",
      sub: user?.sub,
    };
    dispatch(postDataAuth0Inicial(dataRegister, token));
  };

  const completeToForm = () => {
    history.push("/form");
    window.location.reload();
  };

  const goHome = async () => {
    await registro();

    history.push("/home");
    window.location.reload();
  };
  return (
    // es la primera vez que se logea ? False si es su primera vez
    // DataID es un useSelector
    <>
      {dataID === "False" ? (
        <>
          <div className="">
            <h1>¿Deseas rellenar tus datos?</h1>
            <p>
              Es muy importate que ingrese tus datos para realizar compras y
              recibir recomendacionesde los vuelos disponibles
            </p>

            <div className="">
              <div>
                <button onClick={completeToForm}>Completar ahora</button>
              </div>
              <div>
                <button onClick={goHome}>Completar mas tarde</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Link to="/home">
          <Home />
        </Link>
      )}
    </>
  );
};

export default Welcom;
