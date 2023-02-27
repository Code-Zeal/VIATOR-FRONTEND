import React, { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";

const CardFlight = (props) => {
  console.log(props.ticketPrice);
  const [isFav, setIsFav] = useState(false);

  // const [hover, setHover] = React.useState(false);
  // const handleMouseEnter = () => setHover(true);
  // const handleMouseLeave = () => setHover(false);

  /* //   getFlights
//   id: 1,
//   origin: "chiloe",
//   destiny: "arica",
//   dateTimeDeparture: "2023-02-22T19:35:20.000Z",
//   dateTimeArrival: "2023-02-22T19:35:20.000Z",
//   seatsAvailable: 20,
//   ticketPrice: "400.000", */

  return (
    <div className="m-auto my-6 flex flex-col lg:w-1/2  w-11/12 mx-auto  ">
      <div className="flex   justify-between">
        <div className="border text-[black] border-[black] bg-[#E2D8FE] rounded-tl-xl rounded-tr-xl px-2 bg-opacity-90  flex lg:flex-row flex-col lg:justify-between justify-center w-1/2 lg:w-1/3 items-center font-bold">
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
            {moment(props.dateTimeDeparture).format("DD - M - YYYY")}
          </h4>
        </div>
      </div>
      <div className=" bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_Logo.png')] bg-center bg-no-repeat bg-contain  ">
        <div className="bg-[#E2D8FE] bg-opacity-80 border-2 flex flex-col lg:flex-row lg:items-stretch   items-center justify-center w-full  h-full  ">
          <div className="w-4/5 text-[#00000] rounded-tl-xl rounded-bl-xl   py-4 flex   justify-center lg:justify-between lg:px-2">
            <div className="flex lg:flex-row flex-col lg:w-auto w-11/12  items-center justify-center ">
              {isFav ? (
                <>
                  <svg
                    className="cursor-pointer my-4 lg:mx-4 lg:my-0"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsFav(false)}
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="#E9134C"
                  >
                    <path
                      d="M4.42602 12.9469L10.1622 19.1217C11.1546 20.1899 12.8454 20.1899 13.8378 19.1217L19.574 12.9469C21.4753 10.9002 21.4753 7.58179 19.574 5.53505C17.6726 3.48832 14.5899 3.48832 12.6885 5.53505V5.53505C12.3168 5.93527 11.6832 5.93527 11.3115 5.53505V5.53505C9.4101 3.48832 6.32738 3.48832 4.42602 5.53505C2.52466 7.58178 2.52466 10.9002 4.42602 12.9469Z"
                      stroke="#000000"
                      stroke-width="2"
                    />
                  </svg>
                </>
              ) : (
                <>
                  <svg
                    className="cursor-pointer my-4 lg:mx-4 lg:my-0"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setIsFav(true)}
                    width="50px"
                    height="50px"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M4.42602 12.9469L10.1622 19.1217C11.1546 20.1899 12.8454 20.1899 13.8378 19.1217L19.574 12.9469C21.4753 10.9002 21.4753 7.58179 19.574 5.53505C17.6726 3.48832 14.5899 3.48832 12.6885 5.53505V5.53505C12.3168 5.93527 11.6832 5.93527 11.3115 5.53505V5.53505C9.4101 3.48832 6.32738 3.48832 4.42602 5.53505C2.52466 7.58178 2.52466 10.9002 4.42602 12.9469Z"
                      stroke="#000000"
                      stroke-width="2"
                    />
                  </svg>
                </>
              )}
              <div className="flex items-center">
                <div className="flex flex-col items-center justify-center">
                  <p className="font-bold px-2 text-xl">{`${props.origin}`}</p>
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
                  <p className="font-bold text-xl lg:px-2">{`${props.destiny}`}</p>
                  <p className=" font-medium lg:px-2  text-[#151515]">
                    {moment(props.dateTimeArrival1).format("HH:mm")}
                  </p>
                </div>
              </div>
              <div className="ml-5 flex flex-col  items-center justify-center">
                <span className="font-bold text-xl">Precio final</span>
                {props.roundTrip ? (
                  <p className="font-bold text-md">
                    USD {props.ticketPrice}
                    {"."}
                    00
                  </p>
                ) : (
                  <p className="font-bold text-md">
                    USD
                    {props.ticketPrice}
                  </p>
                )}
              </div>
            </div>
            {/* <p>LUN</p> */}
          </div>

          <div className="flex items-center justify-center bg-[#E9134C] text-[white]   w-full py-4  lg:w-1/5 rounded-tl-2xl rounded-tr-2xl lg:rounded-tr-none cursor-pointer text-2xl lg:rounded-tl-2xl lg:rounded-bl-2xl font-bold lg:py-12">
            <Link to={`/flight/${props.flightId}`}>Detalles</Link>
          </div>
        </div>
      </div>
      {props.roundTrip ? (
        <div>
          <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_Logo.png')] bg-center bg-no-repeat bg-contain">
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
                <p className="font-bold  text-xl">{props.destiny}</p>
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
                Escalas: {<p className="">{props.scale}</p>}
              </div>
              <div className="flex flex-col py-4 lg:p-6 items-center justify-center">
                <p className="font-bold lg:px-2  text-xl">{props.origin}</p>
                <p className="font-medium lg:px-2  text-[#151515]">
                  {moment(props.dateTimeArrival2).format("HH:mm")}
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

/* <div>
            <div className="border mt-4 mb-1">
              <h4 className="mb-2">Vuelta</h4>

              <p>{moment(props.dateTimeDeparture).format("HH:mm:ss")}</p>
              <p>Puerto Montt</p>
            </div>

            <div className=" border mb-4">
              <p>{moment(props.dateTimeArrival).format("HH:mm:ss")}</p>
              <p>Santiago</p>
            </div>
          </div> */

// sequelize.define('Flight',{
//     id:{
//         type:DataTypes.INTEGER,
//         autoIncrement:true,
//         allowNull:false,
//         primaryKey:true,
//     },
//     origin:{
//         type:DataTypes.STRING,
//         allowNull:false,
//     },
//     destiny:{
//       type:DataTypes.STRING,
//       allowNull:false,
//   },
//     dateTimeDeparture:{
//         type:DataTypes.DATE,
//         allowNull: false,
//         },

//     dateTimeArrival:{
//         type:DataTypes.DATE,
//         allowNull: false,
//       },

//     seatsAvailable:{
//         type:DataTypes.INTEGER,
//         defaultValue: 0,

//       },
//     ticketPrice:{
//         type:DataTypes.STRING,
//         defaultValue: "",
//       },

//     }, {
//     timestamps: false,

export default CardFlight;

/* <div class=" max-w-xl m-auto flex flex-wrap flex-col md:flex-row items-center justify-start"> */
