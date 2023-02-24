import React from "react";
import moment from "moment";

const CardFlight = (props) => {
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
    <div className="m-auto my-6 flex flex-col  w-1/2  ">
      <div className="flex justify-between">
        <div className="border text-[black] border-[black] bg-[#E2D8FE] rounded-tl-xl rounded-tr-xl px-2 bg-opacity-90  flex justify-between w-1/3 items-center font-bold">
          <h4> Standar Ticket</h4>
          <h4 className=" text-xl font-bold">Ida</h4>
        </div>
        <div className="py-2 w-1/3 border text-[black] border-[black] bg-[#E2D8FE] rounded-tl-xl rounded-tr-xl px-2 bg-opacity-90 flex justify-between items-center font-bold">
          <h3 className="text-sm">DEPARTURE </h3>

          <h4 className="text-sm">
            {moment(props.dateTimeDeparture).format("DD, M ,YYYY")}
          </h4>
        </div>
      </div>
      <div className=" bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_Logo.png')] bg-center bg-no-repeat bg-contain  ">
        <div className="bg-[#E2D8FE] bg-opacity-80 border-2 flex w-full      h-full  ">
          <div className="w-4/5 text-[#00000] rounded-tl-xl rounded-bl-xl   py-4 flex   justify-between px-2">
            <div className="flex my-2  items-center ">
              <div className="flex-col items-center">
                <p className="font-bold  px-2 text-xl">{`${props.origin}`}</p>
                <p className=" font-medium text-[#151515] px-2">
                  {moment(props.dateTimeDeparture).format("HH:mm")}
                </p>
              </div>
              <div className="font-bold  bg-[#801072] bg-opacity-90  text-xs text-[white] px-4 py-2 rounded-xl flex items-center justify-center ">
                Escalas: {"2"}
              </div>

              <div className="flex-col">
                <p className="font-bold text-xl px-2">{`${props.destiny}`}</p>
                <p className=" font-medium px-2 text-[#151515]">
                  {moment(props.dateTimeArrival).format("HH:mm")}
                </p>
              </div>
            </div>
            <div className="ml-5 flex flex-col  items-center justify-center">
              <span className="font-extrabold text-xl">Precio por adulto</span>
              {props.propiedadVueltaTrueOrFalse ? (
                <p className="font-bold text-xl">
                  $
                  {parseFloat(props.ticketPrice) +
                    parseFloat(props.vueltaData.ticketPrice)}
                  {"."}
                  00
                </p>
              ) : (
                <p className="font-bold text-xl">
                  $
                  {props.ticketPrice.substring(0, props.ticketPrice.length - 1)}
                </p>
              )}
            </div>
            {/* <p>LUN</p> */}
          </div>

          <div className="flex items-center justify-center bg-[#E9134C] text-[white]   w-1/5 cursor-pointer text-2xl font-bold">
            Comprar
          </div>
        </div>
      </div>
      {props.propiedadVueltaTrueOrFalse ? (
        <div>
          <div className="bg-[url('https://upload.wikimedia.org/wikipedia/commons/c/c2/Qatar_Airways_Logo.png')] bg-center bg-no-repeat bg-contain">
            <div className="bg-[#E2D8FE] bg-opacity-80   border-2 flex w-full     rounded-br-xl  items-center justify-start">
              <div className="flex flex-col p-6 items-center justify-center">
                <p className="font-bold  px-2 text-xl">
                  {props.vueltaData.origin}
                </p>
                <p className="font-medium px-2 text-[#151515]">
                  {moment(props.vueltaData.dateTimeDeparture).format("HH:mm")}
                </p>
              </div>
              <div className="font-bold  bg-[#801072] bg-opacity-90  text-xs text-[white] px-4 py-2  rounded-xl flex items-center justify-center">
                Escalas: {"1"}
              </div>
              <div className="flex flex-col p-6 items-center justify-center">
                <p className="font-bold  px-2 text-xl">
                  {props.vueltaData.destiny}
                </p>
                <p className="font-medium px-2 text-[#151515]">
                  {moment(props.vueltaData.dateTimeArrival).format("HH:mm")}
                </p>
              </div>
            </div>
          </div>
          <h4 className="border-2 flex items-center justify-center w-1/5 rounded-bl-xl rounded-br-xl text-[black] border-[black] bg-[#E2D8FE] font-bold">
            Vuelta
          </h4>
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
