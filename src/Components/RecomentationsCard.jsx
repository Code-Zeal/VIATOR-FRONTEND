import { useDispatch } from "react-redux";
import { getFlightsByAirline } from "../Redux/Actions";
import { useHistory } from "react-router-dom";

export default function RecommendationsCard(props) {
  const dispatch = useDispatch();
  const history = useHistory();

  function handleOnClick() {
    dispatch(getFlightsByAirline(props.name));
    history.push("/shop");
  }

  return (
    <div
      className="w-full h-64 md:w-1/2 md:h-80 lg:w-1/3 xl:w-1/4 p-6 my-4 cursor-pointer"
      onClick={handleOnClick}
    >
      <img
        className=" w-full h-full relative block overflow-hidden rounded-xl bg-no-repeat shadow-xl shadow-[black]"
        src={props.picture}
        alt={`${props.name} logo`}
      />
      <div class="relative bg-black bg-opacity-40  text-white">
        <h3 class="text-2xl font-bold my-4 lg:text-3xl ">{props.name}</h3>
      </div>

      <div></div>
    </div>
  );
}
