import React, { useState } from "react";
import { putTicketTransfer } from "../Redux/Actions";
import { useDispatch } from "react-redux";

function Popup({ isOpen, onClose, onSubmit, id }) {
  const [email, setEmail] = useState({
    emailR: "",
    idTicketSelect: id,
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    let value = event.target.value;
    setEmail({
      ...email,
      [event.target.name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(putTicketTransfer(email));
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed z-10 inset-0 flex justify-center items-center ">
          <div className="bg-white p-4 space-y-2 text-sm rounded">
            {" "}
            <h2>Transferir Ticket</h2>
            <form
              className=" bg-azulClaro p-9 flex flex-col "
              onSubmit={handleSubmit}
            >
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="emailR"
                placeholder="Ingresa el correo electrónico"
                onChange={handleChange}
              />
              <div className="button-container">
                <button type="submit" className="transfer-button">
                  Transferir
                </button>
                <button type="button" className="" onClick={onClose}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
