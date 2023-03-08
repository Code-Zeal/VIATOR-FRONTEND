import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights, getFlightsAdms } from "../Redux/Actions";
import moment from "moment";
import Paginated from "./Paginated";
import { Link } from "react-router-dom";

export default function FlightsAdmin() {
  const dispatch = useDispatch();

  const flightsAdm = useSelector((state) => state.flightsAdm);

  const toggleHandler = (event) => {
    console.log(event.target.value);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(4);
  const indexOfLastRecipes = currentPage * recipesPerPage;
  const indexOfFirstRecipes = indexOfLastRecipes - recipesPerPage;
  const currentRecipes = flightsAdm.slice(
    indexOfFirstRecipes,
    indexOfLastRecipes
  );
  const pagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  useEffect(() => {
    dispatch(getFlightsAdms());
  }, [dispatch]);
  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center justify-start">
      <ul className="bg-azulOscuro px-9 py-4 my-5 rounded-xl">
        {currentRecipes ? (
          currentRecipes.map((el, index) => {
            return (
              <div className="bg-[#2e298dbd] m-2 rounded-lg">
                <div className="flex   text-[white] ">
                  <div className="flex flex-col items-center px-2 border-2 font-bold text-lg w-20 text-center justify-center">
                    <div className="flex items-center px-2 border-b-2 font-bold text-lg w-20 text-center justify-center">
                      <span className="" htmlFor="">
                        ID:
                      </span>
                      <span htmlFor="">{el.id}</span>
                    </div>
                    {el.roundTrip ? <p>Ida y vuelta</p> : <p>Solo ida</p>}
                  </div>
                  <div className="flex flex-col items-center justify-center px-2 border-2 font-bold text-lg w-36">
                    <span htmlFor="">Estado:</span>
                    <span htmlFor="">
                      {el.state ? (
                        <p className="text-[#34d234] ">Activo</p>
                      ) : (
                        <p className="text-[#cd3434]">Inhabilitado</p>
                      )}
                    </span>
                  </div>
                  <div className="flex flex-col border-2">
                    <div className="flex flex-col justify-center items-center text-center">
                      <span className="font-bold" htmlFor="">
                        Origen
                      </span>
                      <span className="" htmlFor="">
                        {el.origin.substring(0, 60) + "..."}
                      </span>
                    </div>
                    <div className="flex flex-col border-2 items-center justify-center">
                      <span htmlFor="">Departure</span>
                      <span htmlFor="">
                        {moment(el.dateTimeDeparture).format(
                          "DD-MM-YYYY HH:mm"
                        )}
                      </span>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col border-2 items-center justify-center text-center">
                      <span className="font-bold" htmlFor="">
                        Destino
                      </span>
                      <span htmlFor="">
                        {el.destiny.substring(0, 50) + "..."}
                      </span>
                    </div>
                    <div className="flex flex-col border-2 items-center justify-center ">
                      <span htmlFor="">Llegada</span>
                      <span htmlFor="">
                        {moment(el.dateTimeArrival1).format("DD-MM-YYYY HH:mm")}
                      </span>
                    </div>
                  </div>

                  <Link
                    to={`/flightAdm/${el.id}`}
                    className=" flex border-2 w-36 border-[black] hover:bg-[#131313] bg-[#f1f1f1d5] text-[black] hover:text-[white] py-1 px-3 text-lg rounded-tr-lg rounded-br-lg font-bold items-center justify-center "
                  >
                    <div>Configurar</div>
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}
      </ul>
      <div>
        <Paginated
          recipesPerPage={recipesPerPage}
          allRecipes={flightsAdm.length}
          pagination={pagination}
          currentRecipes={currentRecipes}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
}
