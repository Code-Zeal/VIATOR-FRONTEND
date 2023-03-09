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
    if (
      window.confirm(
        "Estás seguro/a de que quieres transferir este boleto?"
      ) === true
    ) {
      if (dataForm.email === "" || dataForm.namePassanger === "") {
        alert("Hay campos obligatorios incompletos");
        onClose();
      } else {
        dispatch(putTicketCompleteForm(id, dataForm));
        alert("Ticket rellenado correctamente");
        onClose();
      }
    } else {
      alert("Ticket no ha sido rellenado");
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
              className=" bg-azulClaro p-8 flex flex-col rounded-lg"
              onSubmit={handleSubmit}
            >
              <h2 className="font-bold text-3xl mx-20 my-6 text-[white]">
                Rellenar Pasaje
              </h2>
              <label className="font-bold text-xl" htmlFor="namePassanger">
                Nombre
              </label>
              <input
                className="bg-azulOscuro border-2  rounded-lg text-[white] p-1 placeholder:text-xl  "
                type="text"
                name="namePassanger"
                placeholder="Ingresa el nombre de el/la pasajero/a"
                onChange={handleChange}
              />
              <label className="font-bold text-xl" htmlFor="email">
                Correo electrónico:
              </label>
              <input
                className="bg-azulOscuro border-2  rounded-lg text-[white] p-1 placeholder:text-xl "
                type="email"
                id="email"
                name="email"
                placeholder="Correo electrónico de el/la pasajero/a"
                onChange={handleChange}
              />
              <div className="button-container my-6 flex justify-evenly items-center">
                <button
                  type="submit"
                  className="transfer-button border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white]  py-2 px-6 text-lg rounded-lg font-bold"
                >
                  Rellenar
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

export default PopupFormPasajero;
