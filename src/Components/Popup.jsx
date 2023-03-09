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
    if (
      window.confirm(
        "Estás seguro/a de que quieres transferir este boleto?"
      ) === true
    ) {
      if (email.emailR === "" || email.idTicketSelect === "") {
        alert("Hay campos obligatorios incompletos");
        onClose();
      } else {
        alert("Transferencia realizada");
        e.preventDefault();
        dispatch(putTicketTransfer(email));
      }
    } else {
      alert("Transferencia cancelada");
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed z-10 inset-0 flex justify-center items-center ">
          <div className="bg-white p-4 space-y-2 text-sm rounded">
            {" "}
            <form
              className=" bg-azulClaro p-8 flex flex-col rounded-lg "
              onSubmit={handleSubmit}
            >
              <h2 className="font-bold text-3xl mx-28 my-10 text-[white]">
                Transferir Ticket
              </h2>
              <label className="font-bold text-xl" htmlFor="email">
                Correo electrónico:
              </label>
              <input
                className="bg-azulOscuro border-2  rounded-lg text-[white] p-1 placeholder:text-xl  "
                type="email"
                id="email"
                name="emailR"
                placeholder="Ingresa el correo electrónico del destinatario"
                onChange={handleChange}
              />
              <div className="button-container my-6 flex justify-evenly items-center">
                <button
                  type="submit"
                  className="transfer-button border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white]  py-2 px-6 text-lg rounded-lg font-bold"
                >
                  Transferir
                </button>
                <button
                  type="button"
                  className="cancel-button border-2 border-[black] hover:bg-[#961d1d] bg-[#e54848] text-[white] py-2 px-6 text-lg rounded-lg font-bold"
                  onClick={onClose}
                >
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
