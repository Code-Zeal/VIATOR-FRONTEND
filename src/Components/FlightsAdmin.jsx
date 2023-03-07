import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../Redux/Actions";
import moment from "moment";
import Paginated from "./Paginated";
import { Link } from "react-router-dom";

export default function FlightsAdmin() {
  const dispatch = useDispatch();
  const flights = useSelector((state) => state.flights);

  console.log(flights);
  useEffect(() => {
    dispatch(getFlights());
  }, [dispatch]);
  const toggleHandler = (event) => {
    console.log(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(6);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = flights.slice(indexOfFirstRecipes, indexOfLastRecipes);
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      <ul className="bg-azulClaro px-9 py-4 my-20 rounded-xl">
        {currentRecipes.map((el, index) => {
          return (
            <div className="bg-azulOscuro m-2">
              <div className="flex  text-[white] ">
                <div className="flex items-center px-2 border-2 font-bold text-lg w-20">
                  <span htmlFor="">ID:</span>
                  <span htmlFor="">{el.id}</span>
                </div>
                <div className="flex items-center px-2 border-2 font-bold text-lg w-20">
                  {el.roundTrip ? <p>Ida y vuelta</p> : <p>Solo ida</p>}
                </div>
                <div className="flex flex-col border-2">
                  <div className="flex flex-col">
                    <span htmlFor="">Origen</span>
                    <span htmlFor="">{el.origin.substring(0, 50) + "..."}</span>
                  </div>
                  <div>
                    <span htmlFor="">Departure</span>
                    <span htmlFor="">
                      {moment(el.dateTimeDeparture).format("DD-MM-YYYY HH:mm")}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col border-2">
                  <div className="flex flex-col">
                    <span htmlFor="">Destino</span>
                    <span htmlFor="">
                      {el.destiny.substring(0, 50) + "..."}
                    </span>
                  </div>
                  <div>
                    <span htmlFor="">Llegada</span>
                    <span htmlFor="">
                      {moment(el.dateTimeArrival1).format("DD-MM-YYYY HH:mm")}
                    </span>
                  </div>
                </div>

                <Link to={`/flightAdm/${el.id}`} className="border-2">
                  <div>Más detalles</div>
                </Link>
              </div>
            </div>
          );
        })}
      </ul>
      <div>
        <Paginated
          recipesPerPage={recipesPerPage}
          allRecipes={flights.length}
          pagination={pagination}
          currentRecipes={currentRecipes}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
