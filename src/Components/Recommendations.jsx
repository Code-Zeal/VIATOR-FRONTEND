import RecommendationsCard from "./RecomentationsCard.jsx";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAirlines } from "../Redux/Actions.js";

export default function Recommendations() {
  const dispatch = useDispatch();
  const airlines = useSelector((state) => state.getAirliness);

  useEffect(() => {
    dispatch(getAirlines());
  }, []);

  return (
    <div className="flex flex-col items-center px-4 py-6 justify-center  ">
      <h2 className="text-lg font-extrabold sm:text-2xl md:text-3xl ">
        AEROLINEAS RECOMENDADAS
      </h2>
      <div className="w-full h-full flex flex-wrap my-2 ">
        {airlines.map((el) => {
          return <RecommendationsCard {...el} />;
        })}
      </div>
    </div>
  );
}
