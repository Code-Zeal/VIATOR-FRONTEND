import React from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });


function Paypal() {

    const createOrder = (data) => { 
        // Order is created on the server and the order id is returned
        return fetch("http://localhost:4000/createOrder", { 
          method: "POST",
           headers: { 
            "Content-Type": "application/json", 
          },
          // use the "body" param to optionally pass additional order information
          // like product skus and quantities
          body: JSON.stringify({ 
            cart: [  
              {
                sku: "YOUR_PRODUCT_STOCK_KEEPING_UNIT",// informacion del producto
                quantity: "YOUR_PRODUCT_QUANTITY",  // cantidad de producto
              }, 
            ], 
          }),
        })
        .then((response) => response.json()) 
        .then((order) =>  window.location.href = order.href); // esto redirige a la pantalla de hacer la compra
    };


    const onApprove = (data) => { 
        // Order is captured on the server and the response is returned to the browser
        return fetch("http://localhost:4000/capture-order", {  
         method: "GET",  
          headers: { 
           "Content-Type": "application/json", 
         },
         body: JSON.stringify({  
           orderID: data.orderID 
         }) 
       })
       .then((response) => response.json())
       .then((data) => window.open("/profile","_self"))
    };
/*

SI EL CLIENTE CANCELA LA COMPRA A QUE COMPONENTE LO ESTARIA REDIRIGIENDO???
(ESO ES POR PARTE DEL BACKEND)
*/

    return (
        <div>

            <PayPalScriptProvider options={{"client-id" : "AfaMUofu1rNM0MNYr3D41w7lErXOthoGbBN_LF1gxRk413RXs-CHwXbcMT-p8H2yTH9GB38BZkXImak6"}} >
                <PayPalButton
                    style={{ layout: "vertical" }}
                    createOrder={() => createOrder()} 
                    onApprove={() => onApprove()} 
                />
            </PayPalScriptProvider>

        </div>
    )
}

export default Paypal