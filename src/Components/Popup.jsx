import React, { useState } from "react";

function Popup({ isOpen, onClose, onSubmit }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email);
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
                name="email"
                placeholder="Ingresa el correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
