import React from "react";
import moment from "moment";

const CardFlight = (props) => {
  // const [hover, setHover] = React.useState(false);
  // const handleMouseEnter = () => setHover(true);
  // const handleMouseLeave = () => setHover(false);

  return (
    <div className="m-2">
      {/* //   getFlights
  //   id: 1,
  //   origin: "chiloe",
  //   destiny: "arica",
  //   dateTimeDeparture: "2023-02-22T19:35:20.000Z",
  //   dateTimeArrival: "2023-02-22T19:35:20.000Z",
  //   seatsAvailable: 20,
  //   ticketPrice: "400.000", */}

      <div className="border flex flex-col justify-center items-center">
        <div>
          <div className="border flex flex-row justify-around ">
            <h3 className="text-sm">DEPARTURE </h3>

            {console.log(props.dateTimeDeparture)}
            <h4 className="text-sm">
              {moment(props.dateTimeDeparture).format("DD, M ,YYYY")}
            </h4>
          </div>
          {/* foto y nombre de la aerolinea */}
          <div className="text-center w-60 mb-2 mt-4 flex flex-row">
            <img src="" alt="logo" className="w-10  " />
            <h4>Nombre Aerolinea</h4>
          </div>
          <div className=" border mt-2 mb-1">
            <h4 className="mb-2">Ida</h4>

            <p>{moment(props.dateTimeDeparture).format("HH:mm:ss")}</p>
            {/* <p>PMC</p> */}
            <p>{props.origin}</p>
          </div>

          <div className="border mt-1 ">
            <p>{moment(props.dateTimeArrival).format("HH:mm:ss")}</p>
            {/* <p>LUN</p> */}
            <p>{props.destiny}</p>
          </div>
          {/* vuelta */}

          {props.propiedadVueltaTrueOrFalse ? (
            <div>
              <div className="border mt-4 mb-1">
                <h4 className="mb-2">Vuelta</h4>

                <p>
                  {moment(props.vueltaData.dateTimeDeparture).format(
                    "HH:mm:ss"
                  )}
                </p>
                <p>{props.vueltaData.origin}</p>
              </div>

              <div className=" border mb-4">
                <p>
                  {moment(props.vueltaData.dateTimeArrival).format("HH:mm:ss")}
                </p>
                <p>{props.vueltaData.destiny}</p>
              </div>
            </div>
          ) : (
            <></>
          )}

          {/* /vueelta */}
        </div>

        <div className=" border flex flex-row">
          <div className=" border-r pr-10">
            <h4> Standar Ticket</h4>
            {props.propiedadVueltaTrueOrFalse ? (
              <p>
                {parseFloat(props.ticketPrice) +
                  parseFloat(props.vueltaData.ticketPrice)}
                {"."}
                000
              </p>
            ) : (
              <p>{props.ticketPrice}</p>
            )}
            <span>Precio por adulto</span>
          </div>

          <button className="">Comprar</button>
        </div>
      </div>
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
