import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getFlightDetailAdm,
  getFlightDetails,
  putFlightDetails,
} from "../Redux/Actions";
import NavBar from "./NavBar";
import Footer from "./Footer";
import moment from "moment";
import { Link, useHistory } from "react-router-dom";

export default function FlightAdminDetails({ flightId }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const detailedFlight = useSelector((state) => state.flightDetailAdm);
  const [toggle, setToggle] = useState({
    toggle: "",
  });

  console.log(flightId);
  console.log(toggle.toggle);
  console.log(detailedFlight);

  useEffect(() => {
    dispatch(getFlightDetailAdm(flightId));
    // setToggle({
    //   toggle: detailedFlight.state,
    // });
  }, [dispatch]);
  let idaVuelta = detailedFlight.roundTrip;
  const redirectHome = () => {
    history.push(`/flightAdm/${flightId}`);
    window.location.reload();
  };
  const handletoggle = async (event) => {
    if (
      window.confirm("Estás seguro/a de que quieres cambiar el estado?") ===
      true
    ) {
      await dispatch(
        putFlightDetails({
          id: flightId,
          state: !detailedFlight.state,
        })
      );
      dispatch(getFlightDetailAdm(flightId));
      alert("Complete data");
      redirectHome();
    } else {
      redirectHome();
    }
  };
  return (
    <div>
      <NavBar />
      <div className="rounded-tr-xl rounded-tl-xl shadow-lg lg:w-9/12 shadow-[#0f0f0f] w-11/12 mx-auto bg-blanco my-6">
        <div className="rounded-tr-xl rounded-tl-xl w-full py-6 px-4 bg-[#990F02] flex justify-between items-center text-[white] font-bold  ">
          <div className="flex flex-col items-center">
            <h3 className="py-2">
              <p> {detailedFlight.origin} </p>
            </h3>
            <p className="py-2">
              {moment(detailedFlight.dateTimeDeparture).format(
                "DD-MM-YYYY HH:mm"
              )}
            </p>
          </div>
          <svg
            width="50"
            height="53"
            viewBox="0 0 40 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.5799 38.9688H12.5002C12.2912 38.9687 12.0856 38.9123 11.9021 38.8047C11.7187 38.6972 11.5632 38.5419 11.45 38.3531C11.3368 38.1643 11.2694 37.948 11.254 37.724C11.2386 37.4999 11.2757 37.2753 11.3619 37.0707L16.3978 25.1239L8.83611 24.9434L6.0783 28.5354C5.55252 29.2459 5.13299 29.5625 4.06267 29.5625H2.66267C2.44101 29.5702 2.2209 29.5203 2.02098 29.4171C1.82106 29.3139 1.64724 29.1604 1.51424 28.9696C1.3283 28.7 1.14549 28.2431 1.32361 27.5914L2.87205 21.6285C2.88377 21.584 2.89783 21.5395 2.91346 21.4958C2.91423 21.4916 2.91423 21.4874 2.91346 21.4832C2.89732 21.4396 2.8835 21.395 2.87205 21.3497L1.32205 15.349C1.15408 14.7099 1.33767 14.2631 1.52205 14.0002C1.64586 13.8236 1.80649 13.6807 1.99102 13.583C2.17555 13.4852 2.37885 13.4354 2.58455 13.4375H4.06267C4.86189 13.4375 5.63767 13.823 6.09392 14.4453L8.79471 17.9769L16.3978 17.8559L11.3635 5.93014C11.2771 5.72559 11.2399 5.50105 11.2551 5.27704C11.2704 5.05303 11.3376 4.8367 11.4506 4.64783C11.5637 4.45895 11.719 4.30355 11.9024 4.19584C12.0857 4.08813 12.2912 4.03154 12.5002 4.03125H14.6025C14.8958 4.03759 15.184 4.11487 15.4457 4.25735C15.7074 4.39984 15.9359 4.60387 16.1142 4.8543L25.8838 17.6199L30.397 17.4923C30.7275 17.4729 31.6431 17.4662 31.8549 17.4662C36.1721 17.4688 38.7502 18.9754 38.7502 21.5C38.7502 22.2945 38.4549 23.7676 36.4791 24.7048C35.3127 25.2591 33.7564 25.5396 31.8533 25.5396C31.6439 25.5396 30.7306 25.5329 30.3955 25.5136L25.883 25.3843L16.0892 38.1499C15.9108 38.3992 15.6825 38.6023 15.4212 38.744C15.16 38.8857 14.8724 38.9625 14.5799 38.9688Z"
              fill="black"
            />
          </svg>
          <div>
            <div className="flex flex-col items-center">
              <h3 className="py-2">
                <p> {detailedFlight.destiny}</p>
              </h3>
              <p className="py-2">
                {moment(detailedFlight.dateTimeArrival1).format(
                  "DD-MM-YYYY HH:mm"
                )}
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-around items-center  py-4 lg:py-20 w-full">
          <div className="flex flex-col items-center justify-center w-5/12 mx-auto ">
            <h3 className="font-bold  pt-4 text-lg lg:text-2xl">Aerolínea: </h3>
            <h3 className="font-bold pb-2 text-lg lg:text-2xl">
              {detailedFlight.Airline
                ? detailedFlight.Airline.name
                : "Qatar Airways"}
            </h3>
          </div>
          <div className="bg-[#990F02] text-[white] py-1 px-3 flex items-center justify-center rounded-lg">
            <h3 className="font-bold inline-flex  text-lg lg:text-2xl mr-2">
              Escalas:
            </h3>
            <h3 className="font-bold  inline-flex text-lg lg:text-2xl">
              {detailedFlight.scale}
            </h3>
          </div>
          <div className="flex flex-col items-center w-5/12 mx-auto">
            <div className="flex items-start">
              <svg
                width="100"
                height="100"
                viewBox="0 0 69 71"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_276_386)">
                  <path
                    d="M28.5 45C28.5834 45.3698 29.2699 48.5282 29.3482 48.898C34.5661 48.0213 39.8858 47.9988 45.1104 48.8314C46.7905 49.086 48.3531 49.8685 49.5843 51.0719C50.8156 52.2753 51.6554 53.8408 51.9888 55.5542H24.4535C23.6952 55.5548 22.9583 55.2956 22.359 54.8175C21.7597 54.3395 21.3321 53.6697 21.1437 52.9139L13.1764 21.1636M13.1764 21.1636C14.869 21.1684 16.528 21.6509 17.9727 22.5585C19.4174 23.4661 20.5925 24.764 21.3701 26.3111C23.6791 30.8491 25.4706 35.1254 27 40M13.1764 21.1636C12.9521 19.3065 19.9242 23.3823 19.9242 24.1979M19.2729 23.5453C19.6318 23.2106 20.8161 16.5366 21.0231 16.086C21.2302 15.6354 21.1072 14.766 21.1309 14.2682C21.1545 13.7703 21.0827 13.2726 20.9194 12.8034L19.7712 9.50518C19.4416 8.55772 18.7597 7.78378 17.8756 7.35355C16.9915 6.92333 15.9775 6.87205 15.0566 7.21099L14.1165 7.55712L14.1176 7.55823C13.8971 7.63929 13.6942 7.76428 13.5207 7.92604C13.3472 8.0878 13.2063 8.28315 13.1062 8.50095C13.0061 8.71875 12.9487 8.95471 12.9372 9.19536C12.9257 9.43601 12.9605 9.67662 13.0394 9.90344L13.4547 22.273"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M40.822 44.9677C40.9317 44.9891 41.0429 44.9998 41.1543 44.9997C41.6153 44.9996 42.0595 44.8125 42.3997 44.4752C42.7399 44.1379 42.9514 43.6748 42.9926 43.1769C43.0338 42.6791 42.9017 42.1825 42.6223 41.7849C42.343 41.3874 41.9365 41.1175 41.4829 41.0285C34.5511 39.6572 27.4477 39.6572 20.5159 41.0285C20.2773 41.0755 20.0496 41.173 19.8459 41.3155C19.6421 41.4579 19.4662 41.6425 19.3282 41.8587C19.1902 42.0749 19.0928 42.3184 19.0416 42.5753C18.9904 42.8323 18.9864 43.0977 19.0298 43.3564C19.0732 43.615 19.1632 43.8619 19.2945 44.0828C19.4259 44.3038 19.5961 44.4945 19.7955 44.6441C19.9949 44.7938 20.2194 44.8994 20.4564 44.9549C20.6934 45.0104 20.9382 45.0147 21.1767 44.9677C27.6715 43.6825 34.3272 43.6825 40.822 44.9677Z"
                    fill="black"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_276_386">
                    <rect width="69" height="71" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="bg-[#990F02] text-[white] font-bold px-2 py-1 rounded-lg">
                <p className="text-base lg:text-2xl">
                  {detailedFlight.seatsAvailable
                    ? detailedFlight.seatsAvailable
                    : "20"}
                </p>
              </div>
            </div>

            <p className="w-1/2 text-center font-bold">Asientos disponibles</p>
          </div>
        </div>
        {idaVuelta ? (
          <></>
        ) : (
          <>
            <div className="flex justify-around items-center">
              <div className="flex">
                <svg
                  width="27"
                  height="28"
                  viewBox="0 0 27 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="27" height="28" fill="white" />
                  <path
                    d="M12.6584 9.42444V12.7611L11.5221 12.3527C10.9483 12.1427 10.5996 11.9444 10.5996 10.9294C10.5996 10.1011 11.1959 9.42444 11.9271 9.42444H12.6584Z"
                    fill="#129227"
                  />
                  <path
                    d="M16.4025 17.0667C16.4025 17.895 15.8062 18.5717 15.075 18.5717H14.3438V15.235L15.48 15.6433C16.0538 15.8533 16.4025 16.0517 16.4025 17.0667Z"
                    fill="#129227"
                  />
                  <path
                    d="M18.2137 2.33337H8.78625C4.69125 2.33337 2.25 4.86504 2.25 9.11171V18.8884C2.25 23.135 4.69125 25.6667 8.78625 25.6667H18.2137C22.3087 25.6667 24.75 23.135 24.75 18.8884V9.11171C24.75 4.86504 22.3087 2.33337 18.2137 2.33337ZM16.0425 14C16.92 14.315 18.09 14.98 18.09 17.0684C18.09 18.865 16.74 20.3234 15.075 20.3234H14.3437V21C14.3437 21.4784 13.9612 21.875 13.5 21.875C13.0387 21.875 12.6562 21.4784 12.6562 21V20.3234H12.2512C10.4062 20.3234 8.91 18.7017 8.91 16.7184C8.91 16.24 9.28125 15.8434 9.75375 15.8434C10.215 15.8434 10.5975 16.24 10.5975 16.7184C10.5975 17.745 11.34 18.5734 12.2512 18.5734H12.6562V14.6184L10.9575 14C10.08 13.685 8.91 13.02 8.91 10.9317C8.91 9.13504 10.26 7.67671 11.925 7.67671H12.6562V7.00004C12.6562 6.52171 13.0387 6.12504 13.5 6.12504C13.9612 6.12504 14.3437 6.52171 14.3437 7.00004V7.67671H14.7487C16.5937 7.67671 18.09 9.29837 18.09 11.2817C18.09 11.76 17.7187 12.1567 17.2462 12.1567C16.785 12.1567 16.4025 11.76 16.4025 11.2817C16.4025 10.255 15.66 9.42671 14.7487 9.42671H14.3437V13.3817L16.0425 14Z"
                    fill="#129227"
                  />
                </svg>

                <p className="font-bold lg:text-lg flex">
                  {" "}
                  {
                    <p className="lg:text-md mr-1">
                      {detailedFlight.ticketPrice}.00{" "}
                    </p>
                  }
                  USD{" "}
                </p>
              </div>
              <div className="flex">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_282_427)">
                    <path
                      d="M24.4845 0H5.5155L0 13.4739L15 30L30 13.4739L24.4845 0Z"
                      fill="#53AE94"
                    />
                    <path
                      d="M17.0833 10.7335V8.11857H22.3156V4.1344H8.06815V8.11857H13.3009V10.7315C9.0481 10.9543 5.8501 11.9173 5.8501 13.0703C5.8501 14.2233 9.0496 15.1861 13.3009 15.4115V23.7873H17.0851V15.4099C21.3301 15.1861 24.5213 14.2242 24.5213 13.072C24.5213 11.9198 21.3301 10.9581 17.0851 10.7342M17.0851 14.7006V14.6983C16.9784 14.7061 16.4299 14.7438 15.2087 14.7438C14.2324 14.7438 13.5454 14.7121 13.3037 14.6977V14.7013C9.5455 14.511 6.7411 13.7632 6.7411 12.8685C6.7411 11.9738 9.5461 11.2271 13.3027 11.0366V13.9562C13.5488 13.9756 14.2526 14.0231 15.224 14.0231C16.3909 14.0231 16.9775 13.9675 17.0851 13.9562V11.0366C20.8351 11.2274 23.633 11.9759 23.633 12.8675C23.633 13.7591 20.8337 14.5079 17.0851 14.6987"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_282_427">
                      <rect width="30" height="30" fill="white" />
                    </clipPath>
                  </defs>
                </svg>

                <p className="font-bold lg:text-lg">
                  {detailedFlight.ticketPrice} USDT
                </p>
              </div>
            </div>
          </>
        )}
        {idaVuelta ? (
          <>
            <div className="rounded-tr-xl rounded-tl-xl w-full py-6 px-4 bg-[#990F02] flex justify-between items-center text-[white] font-bold">
              <div className="flex flex-col items-center">
                <h3 className="py-2">
                  <p> {detailedFlight.destiny}</p>
                </h3>
                <p className="py-2">
                  {moment(detailedFlight.dateTimeReturn).format(
                    "DD-MM-YYYY HH:mm"
                  )}
                </p>
              </div>
              <svg
                width="50"
                height="53"
                viewBox="0 0 40 43"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.5799 38.9688H12.5002C12.2912 38.9687 12.0856 38.9123 11.9021 38.8047C11.7187 38.6972 11.5632 38.5419 11.45 38.3531C11.3368 38.1643 11.2694 37.948 11.254 37.724C11.2386 37.4999 11.2757 37.2753 11.3619 37.0707L16.3978 25.1239L8.83611 24.9434L6.0783 28.5354C5.55252 29.2459 5.13299 29.5625 4.06267 29.5625H2.66267C2.44101 29.5702 2.2209 29.5203 2.02098 29.4171C1.82106 29.3139 1.64724 29.1604 1.51424 28.9696C1.3283 28.7 1.14549 28.2431 1.32361 27.5914L2.87205 21.6285C2.88377 21.584 2.89783 21.5395 2.91346 21.4958C2.91423 21.4916 2.91423 21.4874 2.91346 21.4832C2.89732 21.4396 2.8835 21.395 2.87205 21.3497L1.32205 15.349C1.15408 14.7099 1.33767 14.2631 1.52205 14.0002C1.64586 13.8236 1.80649 13.6807 1.99102 13.583C2.17555 13.4852 2.37885 13.4354 2.58455 13.4375H4.06267C4.86189 13.4375 5.63767 13.823 6.09392 14.4453L8.79471 17.9769L16.3978 17.8559L11.3635 5.93014C11.2771 5.72559 11.2399 5.50105 11.2551 5.27704C11.2704 5.05303 11.3376 4.8367 11.4506 4.64783C11.5637 4.45895 11.719 4.30355 11.9024 4.19584C12.0857 4.08813 12.2912 4.03154 12.5002 4.03125H14.6025C14.8958 4.03759 15.184 4.11487 15.4457 4.25735C15.7074 4.39984 15.9359 4.60387 16.1142 4.8543L25.8838 17.6199L30.397 17.4923C30.7275 17.4729 31.6431 17.4662 31.8549 17.4662C36.1721 17.4688 38.7502 18.9754 38.7502 21.5C38.7502 22.2945 38.4549 23.7676 36.4791 24.7048C35.3127 25.2591 33.7564 25.5396 31.8533 25.5396C31.6439 25.5396 30.7306 25.5329 30.3955 25.5136L25.883 25.3843L16.0892 38.1499C15.9108 38.3992 15.6825 38.6023 15.4212 38.744C15.16 38.8857 14.8724 38.9625 14.5799 38.9688Z"
                  fill="black"
                />
              </svg>
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="py-2">
                    <p> {detailedFlight.origin} </p>
                  </h3>
                  <p className="py-2">
                    {moment(detailedFlight.dateTimeArrival2).format(
                      "DD-MM-YYYY HH:mm"
                    )}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-around items-center  py-4 w-full">
              <div className="flex flex-col items-center">
                <h3 className="font-bold pt-4 text-lg">Aerolínea: </h3>
                <h3 className="font-bold pb-2 text-xl mx-auto">
                  {detailedFlight.Airline
                    ? detailedFlight.Airline.name
                    : "Qatar Airways"}
                </h3>
              </div>
              <div className="bg-[#990F02] text-[white] py-1 px-3 flex items-center justify-center rounded-lg">
                <h3 className="font-bold inline-flex  text-lg lg:text-2xl mr-2">
                  Escalas:
                </h3>
                <h3 className="font-bold  inline-flex text-lg lg:text-2xl">
                  {detailedFlight.scale}
                </h3>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-start">
                  <svg
                    width="69"
                    height="71"
                    viewBox="0 0 69 71"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_276_386)">
                      <path
                        d="M28.5 45C28.5834 45.3698 29.2699 48.5282 29.3482 48.898C34.5661 48.0213 39.8858 47.9988 45.1104 48.8314C46.7905 49.086 48.3531 49.8685 49.5843 51.0719C50.8156 52.2753 51.6554 53.8408 51.9888 55.5542H24.4535C23.6952 55.5548 22.9583 55.2956 22.359 54.8175C21.7597 54.3395 21.3321 53.6697 21.1437 52.9139L13.1764 21.1636M13.1764 21.1636C14.869 21.1684 16.528 21.6509 17.9727 22.5585C19.4174 23.4661 20.5925 24.764 21.3701 26.3111C23.6791 30.8491 25.4706 35.1254 27 40M13.1764 21.1636C12.9521 19.3065 19.9242 23.3823 19.9242 24.1979M19.2729 23.5453C19.6318 23.2106 20.8161 16.5366 21.0231 16.086C21.2302 15.6354 21.1072 14.766 21.1309 14.2682C21.1545 13.7703 21.0827 13.2726 20.9194 12.8034L19.7712 9.50518C19.4416 8.55772 18.7597 7.78378 17.8756 7.35355C16.9915 6.92333 15.9775 6.87205 15.0566 7.21099L14.1165 7.55712L14.1176 7.55823C13.8971 7.63929 13.6942 7.76428 13.5207 7.92604C13.3472 8.0878 13.2063 8.28315 13.1062 8.50095C13.0061 8.71875 12.9487 8.95471 12.9372 9.19536C12.9257 9.43601 12.9605 9.67662 13.0394 9.90344L13.4547 22.273"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M40.822 44.9677C40.9317 44.9891 41.0429 44.9998 41.1543 44.9997C41.6153 44.9996 42.0595 44.8125 42.3997 44.4752C42.7399 44.1379 42.9514 43.6748 42.9926 43.1769C43.0338 42.6791 42.9017 42.1825 42.6223 41.7849C42.343 41.3874 41.9365 41.1175 41.4829 41.0285C34.5511 39.6572 27.4477 39.6572 20.5159 41.0285C20.2773 41.0755 20.0496 41.173 19.8459 41.3155C19.6421 41.4579 19.4662 41.6425 19.3282 41.8587C19.1902 42.0749 19.0928 42.3184 19.0416 42.5753C18.9904 42.8323 18.9864 43.0977 19.0298 43.3564C19.0732 43.615 19.1632 43.8619 19.2945 44.0828C19.4259 44.3038 19.5961 44.4945 19.7955 44.6441C19.9949 44.7938 20.2194 44.8994 20.4564 44.9549C20.6934 45.0104 20.9382 45.0147 21.1767 44.9677C27.6715 43.6825 34.3272 43.6825 40.822 44.9677Z"
                        fill="black"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_276_386">
                        <rect width="69" height="71" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <div className="bg-[#990F02] text-[white] font-bold px-2 py-1 rounded-lg">
                    <p>{detailedFlight.seatsAvailable + 17} </p>
                  </div>
                </div>

                <p className="w-1/2 text-center font-bold">
                  Asientos disponibles
                </p>
              </div>
            </div>
            <div className="flex justify-around items-center">
              {idaVuelta ? (
                <>
                  <div className="flex">
                    <svg
                      width="27"
                      height="28"
                      viewBox="0 0 27 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="27" height="28" fill="white" />
                      <path
                        d="M12.6584 9.42444V12.7611L11.5221 12.3527C10.9483 12.1427 10.5996 11.9444 10.5996 10.9294C10.5996 10.1011 11.1959 9.42444 11.9271 9.42444H12.6584Z"
                        fill="#129227"
                      />
                      <path
                        d="M16.4025 17.0667C16.4025 17.895 15.8062 18.5717 15.075 18.5717H14.3438V15.235L15.48 15.6433C16.0538 15.8533 16.4025 16.0517 16.4025 17.0667Z"
                        fill="#129227"
                      />
                      <path
                        d="M18.2137 2.33337H8.78625C4.69125 2.33337 2.25 4.86504 2.25 9.11171V18.8884C2.25 23.135 4.69125 25.6667 8.78625 25.6667H18.2137C22.3087 25.6667 24.75 23.135 24.75 18.8884V9.11171C24.75 4.86504 22.3087 2.33337 18.2137 2.33337ZM16.0425 14C16.92 14.315 18.09 14.98 18.09 17.0684C18.09 18.865 16.74 20.3234 15.075 20.3234H14.3437V21C14.3437 21.4784 13.9612 21.875 13.5 21.875C13.0387 21.875 12.6562 21.4784 12.6562 21V20.3234H12.2512C10.4062 20.3234 8.91 18.7017 8.91 16.7184C8.91 16.24 9.28125 15.8434 9.75375 15.8434C10.215 15.8434 10.5975 16.24 10.5975 16.7184C10.5975 17.745 11.34 18.5734 12.2512 18.5734H12.6562V14.6184L10.9575 14C10.08 13.685 8.91 13.02 8.91 10.9317C8.91 9.13504 10.26 7.67671 11.925 7.67671H12.6562V7.00004C12.6562 6.52171 13.0387 6.12504 13.5 6.12504C13.9612 6.12504 14.3437 6.52171 14.3437 7.00004V7.67671H14.7487C16.5937 7.67671 18.09 9.29837 18.09 11.2817C18.09 11.76 17.7187 12.1567 17.2462 12.1567C16.785 12.1567 16.4025 11.76 16.4025 11.2817C16.4025 10.255 15.66 9.42671 14.7487 9.42671H14.3437V13.3817L16.0425 14Z"
                        fill="#129227"
                      />
                    </svg>

                    <p className="font-bold lg:text-lg flex">
                      {" "}
                      {
                        <p className="lg:text-md mr-1">
                          ${detailedFlight.ticketPrice}.00{" "}
                        </p>
                      }
                      USD{" "}
                    </p>
                  </div>
                  <div className="flex">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_282_427)">
                        <path
                          d="M24.4845 0H5.5155L0 13.4739L15 30L30 13.4739L24.4845 0Z"
                          fill="#53AE94"
                        />
                        <path
                          d="M17.0833 10.7335V8.11857H22.3156V4.1344H8.06815V8.11857H13.3009V10.7315C9.0481 10.9543 5.8501 11.9173 5.8501 13.0703C5.8501 14.2233 9.0496 15.1861 13.3009 15.4115V23.7873H17.0851V15.4099C21.3301 15.1861 24.5213 14.2242 24.5213 13.072C24.5213 11.9198 21.3301 10.9581 17.0851 10.7342M17.0851 14.7006V14.6983C16.9784 14.7061 16.4299 14.7438 15.2087 14.7438C14.2324 14.7438 13.5454 14.7121 13.3037 14.6977V14.7013C9.5455 14.511 6.7411 13.7632 6.7411 12.8685C6.7411 11.9738 9.5461 11.2271 13.3027 11.0366V13.9562C13.5488 13.9756 14.2526 14.0231 15.224 14.0231C16.3909 14.0231 16.9775 13.9675 17.0851 13.9562V11.0366C20.8351 11.2274 23.633 11.9759 23.633 12.8675C23.633 13.7591 20.8337 14.5079 17.0851 14.6987"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_282_427">
                          <rect width="30" height="30" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>

                    <p className="font-bold lg:text-lg">
                      {detailedFlight.ticketPrice} USDT
                    </p>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="flex flex-row-reverse w-full justify-evenly items-center">
          <div className="flex flex-col items-center p-10">
            <p className="bg-azulClaro my-4 py-2 px-6 text-[white] rounded-tr-lg rounded-bl-lg">
              Estado actual
            </p>
            <label
              for="AcceptConditions"
              class="relative h-8 w-14 cursor-pointer"
            >
              <input
                type="checkbox"
                id="AcceptConditions"
                class="peer sr-only"
                onClick={handletoggle}
                checked={detailedFlight.state}
              />

              <span class="absolute inset-0 rounded-full bg-[gray] transition peer-checked:bg-[green]"></span>

              <span class="absolute inset-0 m-1 h-6 w-6 rounded-full bg-[white] transition peer-checked:translate-x-6"></span>
            </label>
          </div>
          <Link to="/flights">
            <button className="border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg font-bold">
              Volver
            </button>
          </Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
