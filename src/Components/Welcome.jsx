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
import Footer from "./Footer";

const Welcome = () => {
  const dispatch = useDispatch();
  const { user, getAccessTokenSilently } = useAuth0();
  let history = useHistory();
  const dataEmail = useSelector((state) => state?.userEmailExiste);

  const dataID = useSelector((state) => state.userExiste);

  const dataRegister = {
    id: user?.sub,
  };

  // useEffect(() => {
  // }, []);

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

    // history.push("/home");
    // window.location.reload();
  };
  return (
    // es la primera vez que se logea ? False si es su primera vez
    // DataID es un useSelector
    <>
      {dataID === "False" ? (
        <>
          <div className="w-11/12 bg-azulClaro text-[white] flex flex-col items-center justify-evenly h-96 mx-auto my-5 rounded-xl shadow-xl shadow-[#2c2c2c] sm:w-9/12 lg:w-7/12 ">
            <img
              className="animate-pulse"
              src="https://i.imgur.com/clNpPpW.png"
              alt=""
            />
            <h1 className="mx-auto font-bold text-xl sm:text-3xl text-center">
              ¿Deseas rellenar tus datos?
            </h1>
            <p className="text-center px-2 md:text-2xl sm:px-8">
              Es muy importate que ingreses tus datos para completar tu
              registro, realizar compras y recibir recomendaciones de vuelos,
              puedes hacerlo mas tarde
            </p>

            <div className="flex justify-evenly w-full ">
              <div className="bg-[#4F46E5] px-3 py-1 md:px-8 md:py-3 rounded-md font-bold shadow-md shadow-[#0c0c0c] md:hover:bg-[#2f299d]">
                <button onClick={completeToForm}>Ahora</button>
              </div>
              <div className="bg-[#4F46E5] px-3 py-1 md:px-8 md:py-3 md:hover:bg-[#2f299d] rounded-md font-bold shadow-md shadow-[#0c0c0c]">
                <Link to="/home">
                  <button onClick={goHome}>Más Tarde</button>
                </Link>
              </div>
            </div>
          </div>
          <Footer></Footer>
        </>
      ) : (
        // window.open("/home", "_self")

        <Home />
      )}
    </>
  );
};

export default Welcome;
