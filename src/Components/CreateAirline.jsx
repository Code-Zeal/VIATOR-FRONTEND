import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAirlineToAirport,
  addAirportToAirline,
  CreateAirlines,
  CreateAirports,
  getAirlines,
  getAirports,
  getCountries,
} from "../Redux/Actions";
import { useHistory } from "react-router-dom";

export default function CreateAirline() {
  let history = useHistory();

  const airlines = useSelector((state) => state.getAirliness);
  const Airport = useSelector((state) => state.getAirports);
  const CountrieCities = useSelector((state) => state.getCountries);
  const dispatch = useDispatch();

  const [formAiline, setFormAirline] = useState({
    name: "",
    infoContact: "",
    rating: "0",
  });
  console.log(formAiline);

  const [city, setCity] = useState(true);
  // const [countrie, setCountrie] = useState(false);
  const [relation, setRelation] = useState({
    airlineId: Number,
    airportsId: [],
  });
  console.log(relation);

  const handlerRelation = (event) => {
    const propiedad = event.target.name * 1;
    // let value;
    // value = event.target.value;
    if (event.target.checked) {
      setRelation({
        ...relation,
        airportsId: [...relation.airportsId, propiedad],
      });
    } else {
      const result = relation.airportsId.filter(
        (el) => el !== event.target.name
      );
      setRelation({
        ...relation,
        airlinesId: result,
      });
    }
  };
  useEffect(() => {
    dispatch(getAirlines());
    dispatch(getAirports());
    dispatch(getCountries());
  }, [dispatch]);
  const handlerChangeAirport = (event) => {
    if (city) {
      setCity(false);
    }
    if (formAiline.rating === "") {
      setFormAirline({
        ...formAiline,
        rating: "0",
      });
    }
    if (event.target.className.includes("countries")) {
      // console.log(event.target.value);
      // setCountrie(event.target.value);
    }
    // setCountrie(event.target);
    setRelation({ ...relation, airlineId: airlines.length + 1 });
    const propiedad = event.target.name;
    let value;

    value = event.target.value;
    setFormAirline({
      ...formAiline,
      [propiedad]: value,
    });
  };
  const redirectHome = async () => {
    history.push("/createAirline");
    window.location.reload();
  };
  const submitHandler = async () => {
    await dispatch(CreateAirlines(formAiline));
    await dispatch(addAirportToAirline(relation));
    await redirectHome();
  };

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <form action="">
        <div className="flex flex-col py-2">
          <label htmlFor="">Nombre de la aerolinea</label>
          <input
            name="name"
            onChange={handlerChangeAirport}
            type="text"
            className="bg-[gray]  rounded-lg"
          />
        </div>
        <div className=" flex flex-col py-2">
          <label htmlFor="Pais">Correo</label>
          <input
            name="infoContact"
            onChange={handlerChangeAirport}
            type="text"
            className="bg-[gray]  rounded-lg"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="Ciudad">Rating</label>

          <input
            name="rating"
            type="text"
            placeholder="0"
            onChange={handlerChangeAirport}
          />
        </div>

        <label htmlFor="airlines">Aeropuertos</label>
        <div>
          {/* <input onChange={handlerChangeAirport} type="checkbox" />
          <label htmlFor="">Nombre de la aerolinea</label> */}
          {Airport.map((el) => {
            return (
              <div>
                <input
                  onChange={handlerRelation}
                  name={el.id}
                  type="checkbox"
                />
                <label htmlFor="">{el.name}</label>
              </div>
            );
          })}
        </div>
        <button onClick={submitHandler}>Crear</button>
      </form>
    </div>
  );
}
