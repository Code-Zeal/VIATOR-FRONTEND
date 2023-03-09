import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Popup from "./Popup";
import { useAuth0 } from "@auth0/auth0-react";

import {
  putTicketTransfer,
  putTicketCompleteForm,
  getTicketUser,
} from "../Redux/Actions";

import moment from "moment";
import PopupFormPasajero from "./PopupFormPasajero";

const TicketCard = (props) => {
  const history = useHistory();
  const redirectHome = async () => {
    history.push("/myTickets");
    window.location.reload();
  };
  const { user } = useAuth0();
  const sub = user?.sub;
  const dispatch = useDispatch();

  const [showPopup, setShowPopup] = useState(false);
  const [showPopupForm, setShowPopupForm] = useState(false);

  //////////////////////tranferir
  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleOpenPopupForm = () => {
    setShowPopupForm(true);
  };

  const handleClosePopupForm = () => {
    setShowPopupForm(false);
  };

  const handleTransfer = (email) => {
    const dataTransfer = {
      emailR: email,
      idTicketSelect: props.idTicket,
    };
    console.log(dataTransfer);
    dispatch(putTicketTransfer(dataTransfer));
    dispatch(getTicketUser(sub));
    redirectHome();

    // Aquí puedes agregar la lógica para transferir el ticket
    console.log("Ticket transferido a: " + email);
    // Cerrar el popup después de transferir el ticket
    setShowPopup(false);
  };
  console.log(props.picture);

  const handleFormPassanger = ({ email, namePassanger }) => {
    const id = props.idTicket;
    const dataPassanger = {
      email: email,
      namePassanger: namePassanger,
    };

    dispatch(putTicketCompleteForm(id, dataPassanger));
    dispatch(getTicketUser(sub));
    redirectHome();

    // Aquí puedes agregar la lógica para transferir el ticket
    console.log("Ticket transferido a: " + email);
    // Cerrar el popup después de transferir el ticket
    setShowPopup(false);
  };
  ////////////////////////////////////////Transferir

  return (
    <div className="m-auto mt-10 flex flex-col lg:w-2/4 w-8/12 mx-auto -mb-8 -pb-8 ">
      <div className="flex   justify-between">
        <div className="border text-[black] border-[black]   rounded-tl-xl rounded-tr-xl px-2 bg-opacity-90  flex lg:flex-row flex-col lg:justify-between justify-center w-1/2 lg:w-1/3 items-center font-bold">
          <h4> Standar Ticket</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            id="airplane"
            data-name="Flat Color"
            class="icon flat-color"
          >
            <path
              id="primary"
              d="M11.92,19.58,15.84,14H20a2,2,0,0,0,0-4H15.84L11.92,4.42A1,1,0,0,0,11.11,4h-.93a1,1,0,0,0-1,1.16L10,10H6.38L4.68,8.29A1.05,1.05,0,0,0,4,8H3a1,1,0,0,0-.89,1.45L3.38,12,2.11,14.55A1,1,0,0,0,3,16H4a1.05,1.05,0,0,0,.71-.29L6.38,14H10l-.81,4.84a1,1,0,0,0,1,1.16h.93A1,1,0,0,0,11.92,19.58Z"
            />
          </svg>
          <h4 className=" text-xl font-bold">Ida</h4>
        </div>
        <div className="py-2 w-1/2 lg:w-1/3 border text-[black] border-[black] bg-[#E2D8FE] rounded-tl-xl rounded-tr-xl px-2 bg-opacity-90 flex lg:flex-row flex-col lg:justify-between justify-evenly items-center font-bold">
          <h3 className="text-sm">DEPARTURE </h3>

          <h4 className="text-sm">
            {moment(props.dateTimeDeparture).format("DD - MM - YYYY")}
          </h4>
        </div>
      </div>
      <div
        className="  bg-center bg-no-repeat bg-contain "
        style={{
          backgroundImage: "url(" + props.picture + ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="bg-[#E2D8FE] bg-opacity-80 border-2 flex flex-col lg:flex-row lg:items-stretch   items-center justify-center w-full  h-full -mb-4 ">
          <div className="w-4/5 text-[#00000] rounded-tl-xl rounded-bl-xl   py-4 flex   justify-center lg:justify-between lg:px-2">
            <div className="flex lg:flex-row flex-col lg:w-auto w-11/12  items-center justify-center ">
              <div className="flex items-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold px-2 text-xl  text-[black]">{`${props.origin}`}</p>
                  <p className=" font-medium text-[#151515] ">
                    {moment(props.dateTimeDeparture).format("HH:mm")}
                  </p>
                </div>
                <div className="font-bold text-sm text-[black] px-4 py-2 rounded-xl flex   items-center justify-center ">
                  <svg
                    className="mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="25px"
                    height="25px"
                    viewBox="0 0 48 48"
                    fill="none"
                  >
                    <path
                      d="M37 28.3923V35.4066C37 39.048 34.0885 42 30.497 42C26.9054 42 23.9939 39.048 23.9939 35.4066L24.0061 13.1429C24.0061 9.19797 21.0946 6 17.503 6C13.9115 6 11 9.19797 11 13.1429V28.3923"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M43 31L37 25L31 31"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M43 10.7273C43 15.1818 37 19 37 19C37 19 31 15.1818 31 10.7273C31 9.20831 31.6321 7.75155 32.7574 6.67748C33.8826 5.60341 35.4087 5 37 5C38.5913 5 40.1174 5.60341 41.2426 6.67748C42.3679 7.75155 43 9.20831 43 10.7273Z"
                      fill="#2F88FF"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17 34.7273C17 39.1818 11 43 11 43C11 43 5 39.1818 5 34.7273C5 33.2083 5.63214 31.7516 6.75736 30.6775C7.88258 29.6034 9.4087 29 11 29C12.5913 29 14.1174 29.6034 15.2426 30.6775C16.3679 31.7516 17 33.2083 17 34.7273Z"
                      fill="#2F88FF"
                      stroke="#000000"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <circle cx="37" cy="11" r="2" fill="white" />
                    <circle cx="11" cy="35" r="2" fill="white" />
                  </svg>
                  Escalas: {<p className="">{props.scale}</p>}
                </div>
                <div className="flex-col">
                  <p className="font-bold text-xl lg:px-2 text-[black]">{`${props.destiny}`}</p>
                  <p className=" font-medium lg:px-2  text-[#151515]">
                    {moment(props.dateTimeArrival1).format("HH:mm")}
                  </p>
                </div>
              </div>
              <div className="ml-5 flex flex-col  items-center justify-center">
                <span className="font-bold text-xl text-[black]">Asiento:</span>
                <p className="text-[black] font-bold text-xl">
                  {props.seatUser}
                </p>
              </div>
            </div>
          </div>

          {props.activatedTicket ? (
            <>
              <div className="flex items-center justify-center bg-[#E9134C]  text-[white]   w-full py-4  lg:w-2/5  rounded-tr-2xl lg:rounded-tr-none cursor-pointer text-2xl font-bold lg:py-5">
                Pasaje Rellenado
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center bg-[#E9134C] hover:bg-[#5c081e] text-[white]   w-full py-4  lg:w-2/5 rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none cursor-pointer text-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl font-bold lg:py-5">
                <button onClick={handleOpenPopup} className="text-sm px-2">
                  Transferir
                </button>{" "}
                <Popup
                  isOpen={showPopup}
                  onClose={handleClosePopup}
                  onSubmit={handleTransfer}
                  id={props.idTicket}
                />
              </div>
            </>
          )}
          {props.activatedTicket ? (
            <>
              <div className="flex items-center justify-center bg-[#E9134C]  text-[white]   w-full py-4  lg:w-2/5  rounded-tr-2xl lg:rounded-tr-none cursor-pointer text-2xl font-bold lg:py-5">
                Pasaje Rellenado
              </div>
            </>
          ) : (
            <>
              {" "}
              <div className="flex items-center justify-center bg-[#E9134C] hover:bg-[#5c081e] text-[white]   w-full py-4  lg:w-2/5  rounded-tr-2xl lg:rounded-tr-none cursor-pointer text-2xl font-bold lg:py-12">
                <button onClick={handleOpenPopupForm} className="text-sm px-2">
                  Rellenar pasaje
                </button>
                <PopupFormPasajero
                  isOpen={showPopupForm}
                  onClose={handleClosePopupForm}
                  onSubmit={handleFormPassanger}
                  id={props.idTicket}
                />
              </div>
            </>
          )}
        </div>
      </div>
      {props.roundTrip ? (
        <div>
          <div
            className=" bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url(" + props.picture + ")",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="bg-[#E2D8FE] bg-opacity-80   border-2 flex w-full   items-center justify-start">
              <svg
                className="cursor-pointer my-4 lg:mx-4 lg:my-0 invisible"
                xmlns="http://www.w3.org/2000/svg"
                width="50px"
                height="50px"
                viewBox="0 -1 20 20"
              >
                <g id="star" transform="translate(-2 -3)">
                  <path
                    id="secondary"
                    fill="none"
                    d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z"
                  />
                  <path
                    id="primary"
                    d="M12,4,9.22,9.27,3,10.11l4.5,4.1L6.44,20,12,17.27,17.56,20,16.5,14.21l4.5-4.1-6.22-.84Z"
                    fill="none"
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  />
                </g>
              </svg>
              <div className="flex flex-col px-2 py-4 items-center justify-center">
                <p className="font-bold  text-xl text-[black]">
                  {props.destiny}
                </p>
                <p className="font-medium lg:px-2 text-[#151515]">
                  {moment(props.dateTimeReturn).format("HH:mm")}
                </p>
              </div>
              <div className="font-bold    text-sm text-[black] px-4 py-2 rounded-xl flex  items-center justify-center ">
                <svg
                  className="mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <path
                    d="M37 28.3923V35.4066C37 39.048 34.0885 42 30.497 42C26.9054 42 23.9939 39.048 23.9939 35.4066L24.0061 13.1429C24.0061 9.19797 21.0946 6 17.503 6C13.9115 6 11 9.19797 11 13.1429V28.3923"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43 31L37 25L31 31"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M43 10.7273C43 15.1818 37 19 37 19C37 19 31 15.1818 31 10.7273C31 9.20831 31.6321 7.75155 32.7574 6.67748C33.8826 5.60341 35.4087 5 37 5C38.5913 5 40.1174 5.60341 41.2426 6.67748C42.3679 7.75155 43 9.20831 43 10.7273Z"
                    fill="#2F88FF"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M17 34.7273C17 39.1818 11 43 11 43C11 43 5 39.1818 5 34.7273C5 33.2083 5.63214 31.7516 6.75736 30.6775C7.88258 29.6034 9.4087 29 11 29C12.5913 29 14.1174 29.6034 15.2426 30.6775C16.3679 31.7516 17 33.2083 17 34.7273Z"
                    fill="#2F88FF"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle cx="37" cy="11" r="2" fill="white" />
                  <circle cx="11" cy="35" r="2" fill="white" />
                </svg>
                <p></p>
                Escalas: {<p className="">{props.scale}</p>}
              </div>
              <div className="flex flex-col py-4 lg:p-6 items-center justify-center">
                <p className="font-bold lg:px-2  text-xl text-[black]">
                  {props.origin}
                </p>
                <p className="font-bold lg:px-2  text-[#151515]">
                  {moment(props.dateTimeArrival2).format("HH:mm")}
                </p>
              </div>

              <div className="ml-5 flex flex-col  items-center justify-center mr-6">
                <span className="font-bold text-xl text-[black]">Asiento:</span>
                <p className="text-[black] font-bold text-xl   ">
                  {props.seatUser + 7}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <h4 className="border-2 flex items-center justify-evenly w-full lg:w-1/5 rounded-bl-xl rounded-br-xl text-[black] border-[black] bg-[#E2D8FE] font-bold ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                id="airplane"
                data-name="Flat Color"
                class="icon flat-color"
              >
                <path
                  id="primary"
                  d="M11.92,19.58,15.84,14H20a2,2,0,0,0,0-4H15.84L11.92,4.42A1,1,0,0,0,11.11,4h-.93a1,1,0,0,0-1,1.16L10,10H6.38L4.68,8.29A1.05,1.05,0,0,0,4,8H3a1,1,0,0,0-.89,1.45L3.38,12,2.11,14.55A1,1,0,0,0,3,16H4a1.05,1.05,0,0,0,.71-.29L6.38,14H10l-.81,4.84a1,1,0,0,0,1,1.16h.93A1,1,0,0,0,11.92,19.58Z"
                />
              </svg>
              Vuelta
            </h4>
            <div className=" flex-col border-2 flex items-center justify-evenly w-full lg:w-1/5 rounded-bl-xl rounded-br-xl text-[black] border-[black] bg-[#E2D8FE] font-bold">
              <h4 className=" ">DEPARTURE</h4>
              {/* pendiente cambiar la fecha de departure */}
              <h4 className=" ">
                {moment(props.dateTimeReturn).format("DD - M - YYYY")}
              </h4>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};
export default TicketCard;
