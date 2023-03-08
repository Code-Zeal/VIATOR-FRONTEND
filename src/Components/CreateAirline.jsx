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
import { useRef } from "react";
import { cloudinaryFlights } from "../Redux/Actions";

export default function CreateAirline() {
  const [formAiline, setFormAirline] = useState({
    name: "",
    infoContact: "",
    picture: "",
  });
  const dispatch = useDispatch();

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dx2me9gqm",
        uploadPreset: "hauiebsf",
      },
      function (error, result) {
        console.log(result.event === "success");
        if (result.event === "success") {
          setFormAirline({
            ...formAiline,
            picture: result.info.secure_url,
          });
        }
      }
    );
  }, [formAiline]);
  let history = useHistory();

  const airlines = useSelector((state) => state.getAirliness);
  const Airport = useSelector((state) => state.getAirports);
  const CountrieCities = useSelector((state) => state.getCountries);

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
    if (
      window.confirm("Estás seguro/a de que quieres crear este aeropuerto?") ===
      true
    ) {
      if (
        formAiline.name === "" ||
        formAiline.infoContact === "" ||
        formAiline.picture === ""
      ) {
        alert("Hay campos obligatorios incompletos");
        redirectHome();
      } else {
        alert("Aerolinea creada correctamente");

        await dispatch(CreateAirlines(formAiline));
        await dispatch(addAirportToAirline(relation));
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
      <div className="bg-azulClaro w-1/2 px-8 mt-8 rounded-xl">
        <div className="flex flex-col items-center  my-3 h-[200px] ">
          <img
            className="rounded-full w-[150px] h-[150px] border-2 bg-[white]"
            src={formAiline.picture}
            alt=""
          />

          <button
            className="border-2 border-[black] mt-2 hover:bg-[#961d1d] bg-[#e54848] text-[white] py-1 px-3 text-lg rounded-lg font-bold"
            onClick={() => widgetRef.current.open()}
          >
            Subir Imagen
          </button>
        </div>
        <div className="flex flex-col py-2">
          <label className="text-[white] font-bold" htmlFor="">
            Nombre de la aerolinea
          </label>
          <input
            name="name"
            onChange={handlerChangeAirport}
            type="text"
            className="bg-azulOscuro border-2  rounded-lg text-[white]"
          />
        </div>
        <div className=" flex flex-col py-2">
          <label className="text-[white] font-bold" htmlFor="Pais">
            Correo
          </label>
          <input
            name="infoContact"
            onChange={handlerChangeAirport}
            type="text"
            className="bg-azulOscuro border-2  rounded-lg text-[white]"
          />
        </div>

        <label className="font-bold text-[white] " htmlFor="airlines">
          Aeropuertos (opcional)
        </label>
        <div>
          <div className="bg-azulOscuro w-full rounded-lg p-4 my-2 ">
            <div className="flex flex-col overflow-y-scroll h-52">
              {Airport.map((el) => {
                return (
                  <div className="flex items-center ">
                    <input
                      className="border-2 w-4 h-4 appearance-none bg-[white] m-0 checked:bg-[#ef1bef]  checked:border-[white] checked:border-2 rounded-full "
                      onChange={handlerRelation}
                      name={el.id}
                      type="checkbox"
                    />
                    <label className="text-[white] text-md" htmlFor="">
                      {el.name}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center py-4">
          <button
            className="border-2 border-[black] hover:bg-[#191483] bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg font-bold"
            onClick={submitHandler}
          >
            Crear
          </button>
        </div>
      </div>
    </div>
  );
}
