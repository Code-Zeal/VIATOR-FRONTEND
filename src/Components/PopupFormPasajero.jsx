import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { putTicketCompleteForm } from "../Redux/Actions";
import { useHistory } from "react-router-dom";

function PopupFormPasajero({ isOpen, onClose, onSubmit, id }) {
  let history = useHistory();

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [namePassanger, setNamePassanger] = useState("");
  const [dataForm, setDataForm] = useState({
    email: "",
    namePassanger: "",
  });
  // const id = useSelector((state) => state.idUser);
  console.log(dataForm);
  const redirectHome = async () => {
    history.push("/myTickets");
    window.location.reload();
  };
  const handleChange = (event) => {
    let value = event.target.value;
    setDataForm({
      ...dataForm,
      [event.target.name]: value,
    });
  };
  // const encodedUserId = encodeURIComponent(id);
  const handleSubmit = (e) => {
    dispatch(putTicketCompleteForm(id, dataForm));
    alert("Ticket rellenado correctamente");
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className=" fixed z-10 inset-0 flex justify-center items-center ">
          <div className="bg-white p-4 space-y-2 text-sm rounded">
            {" "}
            <h2>Rellenar Pasaje</h2>
            <form
              className=" bg-azulClaro p-9 flex flex-col "
              onSubmit={handleSubmit}
            >
              <label htmlFor="namePassanger">Nombre Quien viaja</label>
              <input
                type="text"
                name="namePassanger"
                placeholder="Ingresa el nombre del pasajero"
                onChange={handleChange}
              />
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa el correo electrónico"
                onChange={handleChange}
              />
              <div className="button-container">
                <button type="submit" className="transfer-button">
                  Rellenar
                </button>
                <button
                  type="button"
                  className="cancel-button"
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

export default PopupFormPasajero;
