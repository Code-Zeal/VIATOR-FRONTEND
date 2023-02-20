import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="flex justify-center  bg-[blue] w-36 h-9 rounded-full border-2 font-bold">
      <button className="text-blanco" onClick={() => loginWithRedirect()}>
        Iniciar Sesion
      </button>
    </div>
  );
};

export default Login;
