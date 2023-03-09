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

  const submitHandler = () => {
    if (
      window.confirm("Estás seguro/a de que quieres crear este aeropuerto?") ===
      true
    ) {
      if (
        formAirport.name === "" ||
        formAirport.city === "" ||
        formAirport.country === ""
      ) {
        alert("Hay campos obligatorios incompletos");
        redirectHome();
      } else {
        dispatch(CreateAirports(formAirport));
        dispatch(addAirlineToAirport(relation));
        alert("Aeropuerto creado correctamente");
        redirectHome();
      }
    } else {
      redirectHome();
    }
  };

  return (
    <div className="absolute ml-[21%] w-[75%] z-20 bg-[#F8FBFB]  flex flex-col items-center">
      {/* <button className="mx-6" onClick={countries}>
        countries
      </button> */}
      <form className="bg-azulClaro p-9 my-20 rounded-xl">
        <div className="flex flex-col pt-2 rounded-lg  ">
          <label className="font-bold text-[white]" htmlFor="">
            Nombre del aeropuerto
          </label>
          <input
            name="name"
            onChange={handlerChangeAirport}
            type="text"
            className="bg-azulOscuro border-2  rounded-lg text-[white]"
            placeholder="Introduce el Nombre del aeropuerto"
          />
        </div>
        <div className=" flex flex-col py-2">
          <label className="font-bold text-[white]" htmlFor="Pais">
            Pais
          </label>
          <select
            onChange={handlerChangeAirport}
            className=" countries  bg-azulOscuro border-2  rounded-lg text-[white]"
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
          <label className="font-bold text-[white]" htmlFor="Ciudad">
            Ciudad
          </label>
          <select
            disabled={city}
            onChange={handlerChangeAirport}
            className="bg-azulOscuro border-2  rounded-lg text-[white]"
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
          </select>
        </div>

        <label className="font-bold text-[white]" htmlFor="airlines">
          Aerolineas (opcional)
        </label>
        <div>
          {airlines.map((el) => {
            return (
              <div>
                <input
                  onChange={handlerRelation}
                  name={el.id}
                  type="checkbox"
                  className=" border-2 w-4 h-4 appearance-none bg-[white] m-0 checked:bg-[#ef1bef]  checked:border-[white] checked:border-2 rounded-full "
                />
                <label className=" text-[white]" htmlFor="">
                  {el.name}
                </label>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center items-center pt-8">
          <button
            onClick={submitHandler}
            className="border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg font-bold"
          >
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}
