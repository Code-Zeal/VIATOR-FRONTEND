import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAirlineToAirport,
  CreateAirports,
  getAirlines,
  getAirports,
  getCountries,
} from "../Redux/Actions";
import { useHistory } from "react-router-dom";

export default function CreateAirport() {
  let history = useHistory();

  const airlines = useSelector((state) => state.getAirliness);
  const Airport = useSelector((state) => state.getAirports);
  const CountrieCities = useSelector((state) => state.getCountries);
  const dispatch = useDispatch();

  const [formAirport, setFormAirport] = useState({
    name: "",
    country: "",
    city: "",
  });
  const [city, setCity] = useState(true);
  const [countrie, setCountrie] = useState(false);
  const [relation, setRelation] = useState({
    airlinesId: [],
    airportId: Number,
  });

  const handlerRelation = (event) => {
    const propiedad = event.target.name * 1;
    // let value;
    // value = event.target.value;
    if (event.target.checked) {
      setRelation({
        ...relation,
        airlinesId: [...relation.airlinesId, propiedad],
      });
    } else {
      const result = relation.airlinesId.filter(
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
    if (event.target.className.includes("countries")) {
      // console.log(event.target.value);
      setCountrie(event.target.value);
    }
    // setCountrie(event.target);
    setRelation({ ...relation, airportId: Airport.length + 1 });
    const propiedad = event.target.name;
    let value;

    value = event.target.value;
    setFormAirport({
      ...formAirport,
      [propiedad]: value,
    });
  };
  const redirectHome = async () => {
    history.push("/createAirport");
    window.location.reload();
  };
  const submitHandler = async () => {
    await dispatch(CreateAirports(formAirport));
    await dispatch(addAirlineToAirport(relation));
    await redirectHome();
  };

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <form action="">
        <div className="flex flex-col py-2">
          <label htmlFor="">Nombre del aeropuerto</label>
          <input
            name="name"
            onChange={handlerChangeAirport}
            type="text"
            className="bg-[gray]  rounded-lg"
          />
        </div>
        <div className=" flex flex-col py-2">
          <label htmlFor="Pais">Pais</label>
          <select
            onChange={handlerChangeAirport}
            className=" countries bg-[gray]  rounded-lg"
            name="country"
            id=""
          >
            <option selected="selected" disabled value="default">
              País
            </option>
            {CountrieCities.map((el) => {
              return <option value={el.country}>{el.country}</option>;
            })}
          </select>
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="Ciudad">Ciudad</label>
          <select
            disabled={city}
            onChange={handlerChangeAirport}
            className="bg-[gray]  rounded-lg"
            name="city"
            id=""
          >
            {countrie !== false ? (
              CountrieCities.find((el) => el.country === countrie).cities.map(
                (el) => {
                  return <option value={el}>{el}</option>;
                }
              )
            ) : (
              <></>
            )}
            {/* {countrie ? (
              CountrieCities`${countrie}`
            ) : <></>} */}
            {/* <option value="Buenos Aires">Buenos Aires</option>
            <option value="Santiago">Santiago</option>
            <option value="Bogotá">Bogotá</option>
            <option value="Lima">Lima</option>
            <option value="Maracaibo">Maracaibo</option> */}
          </select>
        </div>

        <label htmlFor="airlines">Aerolineas</label>
        <div>
          {/* <input onChange={handlerChangeAirport} type="checkbox" />
          <label htmlFor="">Nombre de la aerolinea</label> */}
          {airlines.map((el) => {
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