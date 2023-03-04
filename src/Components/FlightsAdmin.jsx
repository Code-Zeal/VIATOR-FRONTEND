import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFlights } from "../Redux/Actions";

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
  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      <ul>
        {flights.map((el, index) => {
          return (
            <div className="flex">
              <div className="flex flex-col border-2 ">
                <input type="checkbox" onChange={toggleHandler} />
              </div>
              <div className="flex border-2">
                <span htmlFor="">ID:</span>
                <span htmlFor="">{el.id}</span>
              </div>
              <div className="flex flex-col border-2">
                <span htmlFor="">origen</span>
                <span htmlFor="">{el.origin.substring(0, 50) + "..."}</span>
              </div>
              <div className="flex flex-col border-2">
                <span htmlFor="">destino</span>
                <span htmlFor="">{el.destiny.substring(0, 50) + "..."}</span>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
