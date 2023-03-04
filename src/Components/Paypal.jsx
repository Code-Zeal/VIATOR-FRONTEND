import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import {
  PayPalScriptProvider,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, onApprove } from "../Redux/Actions";
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
  const [oder, setOder] = useState({
    name: name,
    description: description,
    quantity: quantity,
    valuePerTicket: valuePerTicket,
    flightId: flightId,
    userId: userId,
  });
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
      <PayPalButton createOrder={createOrders} onApprove={onApprove} />
    </div>
  );
}

export default Paypal;
