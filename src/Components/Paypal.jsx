import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, onApprove, verificaccionEmail } from "../Redux/Actions";
import FormRegister from "./FormRegister";
import { Redirect } from "react-router-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
const product = {
  name: "boleto",
  description: "boleto de avion",
  quantity: 1,
  valuePerTicket: "1200",
};

function Paypal({
  name,
  description,
  quantity,
  valuePerTicket,
  flightId,
  userId,
}) {
  const onApproveRes = useSelector((state) => state.onApproveRes);
  const dispatch = useDispatch();
  const [isUserRegistered, setIsUserRegistered] = useState();

  const usuarioRegistro = useSelector((state) => state.userEmailExiste);
  const [showRegistrationPopup, setShowRegistrationPopup] = useState(false);
  const [popupAbierto, setPopupAbierto] = useState(false);
  const [oder, setOder] = useState({
    name: name,
    description: description,
    quantity: quantity,
    valuePerTicket: valuePerTicket,
    flightId: flightId,
    userId: userId,
  });
  const [redirect, setRedirect] = useState(false);

  console.log(usuarioRegistro);

  const handleBuyClick = () => {
    if (isUserRegistered) {
      setShowRegistrationPopup(false);
      return;
    }

    setShowRegistrationPopup(true);
  };

  function abrirPopup() {
    setRedirect(true);
  }

  useEffect(() => {
    dispatch(verificaccionEmail(oder.userId));
  }, [oder.userId, usuarioRegistro]);

  useEffect(() => {
    setOder({
      name: name,
      description: description,
      quantity: quantity,
      valuePerTicket: valuePerTicket,
      flightId: flightId,
      userId: userId,
    });
  }, [name, description, valuePerTicket, quantity, flightId, userId]);

  const createOrders = async () => {
    await dispatch(createOrder(oder));
  };

  console.log(oder);

  const onApprove = (data) => {
    let body = {
      orderID: data.orderID,
    };
    dispatch(onApprove(body));
  };

  return (
    <div>
      {redirect && <Redirect to="/formaux" />}
      {usuarioRegistro === "Usuario registrado" ? (
        <PayPalButton createOrder={createOrders} onApprove={onApprove} />
      ) : (
        <>
          <button onClick={abrirPopup}>Completar registro</button>
        </>
      )}
    </div>
  );
}

export default Paypal;
