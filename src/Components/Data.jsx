import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDataUser, putDataUser } from "../Redux/Actions";

export default function Data() {
  const { user, getAccessTokenSilently } = useAuth0();
  const data = useSelector((state) => state?.userData);
  const [localData, setLocalData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [editSave, setEditSave] = useState(false);
  const dispatch = useDispatch();
  const valor = {
    id: user?.sub,
  };
  const verificar = async () => {
    // phoneNumber: Number,
    // country: "",
    // city: "",
    if (editDispatch.nickname === "") {
      setEditDispatch({ ...editDispatch, nickname: localData.nickName });
    }

    if (editDispatch.phoneNumber.length === 0) {
      setEditDispatch({ ...editDispatch, phoneNumber: localData.phone });
    }
    if (editDispatch.country === "") {
      setEditDispatch({ ...editDispatch, country: localData.country });
    }
    if (editDispatch.city === "") {
      setEditDispatch({ ...editDispatch, city: localData.city });
    }
  };
  useEffect(() => {
    setLocalData(data);
    setIsLoaded(true);
    // setEditDispatch({ ...editDispatch, idSubAuth0: valor.id });
  }, [data, isLoaded]);
  console.log(localData);

  const [editDispatch, setEditDispatch] = useState({
    nickname: "",
    phoneNumber: Number,
    country: "",
    city: "",
  });

  // "asfasgfasfasfas"
  console.log(editDispatch);
  const submitHandler = async (event) => {
    event.preventDefault();
    // await verificar();

    dispatch(putDataUser(valor.id, editDispatch));
    alert("Complete data");
    // await put();
  };

  useEffect(() => {
    // reviso en mi base de datos si tengo el id de la persona que acaba de iniciar sesion
    //  si tengo el id muetro el home em caso contrario muestro el formulario
    dispatch(getDataUser(valor.id));
  }, [user?.sub, editDispatch]);

  console.log(valor.id);
  const handlerEdit = () => {
    if (isEdit) {
      setIsEdit(false);
      setEditSave("Guardar");
    }
    if (!isEdit) {
      setIsEdit(true);
      setEditSave("Editar");
    }
  };
  const changeHanlderEdit = (event) => {
    const propiedad = event.target.name;
    let value;

    if (event.target.name === "names") {
      value = event.target.value;
      setEditDispatch({
        ...editDispatch,
        [propiedad]: value,
      });
    } else if (propiedad === "phoneNumber") {
      value = Number(event.target.value);
      setEditDispatch({
        ...editDispatch,
        [propiedad]: value,
      });
    } else {
      value = event.target.value;
      setEditDispatch({
        ...editDispatch,
        [propiedad]: value,
      });
    }
  };
  console.log(editDispatch);
  return (
    <div className="absolute  w-full z-2  flex flex-col items-center">
      <div className="  w-3/4 ml-auto   flex flex-col items-center">
        <div className=" flex flex-col py-2">
          <svg
            width="207"
            height="203"
            viewBox="0 0 207 203"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M103.5 185.588C151.134 185.588 189.75 146.413 189.75 98.0875C189.75 49.7627 151.134 10.5876 103.5 10.5876C55.8654 10.5876 17.25 49.7627 17.25 98.0875C17.25 146.413 55.8654 185.588 103.5 185.588Z"
              fill="#292D32"
            />
            <path
              d="M103.5 53.7245C85.6462 53.7245 71.1562 68.4245 71.1562 86.5366C71.1562 104.299 84.87 118.737 103.069 119.262C103.327 119.262 103.672 119.262 103.845 119.262C104.017 119.262 104.276 119.262 104.449 119.262C104.535 119.262 104.621 119.262 104.621 119.262C122.044 118.649 135.757 104.299 135.844 86.5366C135.844 68.4245 121.354 53.7245 103.5 53.7245Z"
              fill="#292D32"
            />
            <path
              d="M161.983 162.4C146.631 176.75 126.103 185.588 103.506 185.588C80.9083 185.588 60.3808 176.75 45.0283 162.4C47.0983 154.438 52.7046 147.175 60.8983 141.575C84.4446 125.65 122.74 125.65 146.113 141.575C154.393 147.175 159.913 154.438 161.983 162.4Z"
              fill="#292D32"
            />
          </svg>

          <label htmlFor="">Username</label>
          <input
            onChange={changeHanlderEdit}
            placeholder={localData.nickName}
            name="nickname"
            // value={localData.nickName}
            className="bg-[#D9D9D9] rounded-lg "
            type="text"
            disabled={isEdit}
          />
        </div>
        <div className="flex justify-evenly w-full py-2">
          <div className="flex flex-col items-start ">
            <label htmlFor="">Nombres</label>
            <input
              value={localData.givenName}
              // onChange={changeHanlderEdit}
              name="names"
              disabled={true}
              className="bg-[#D9D9D9] rounded-lg w-96"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start py-2">
            <label htmlFor="">Apellidos</label>
            <input
              value={localData.familyName}
              name="lastNames"
              disabled={true}
              className="bg-[#D9D9D9] rounded-lg w-96"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-evenly w-full py-2">
          <div className="flex flex-col items-start ">
            <label htmlFor="">Teléfono</label>
            <input
              onChange={changeHanlderEdit}
              placeholder={localData.phone}
              name="phoneNumber"
              disabled={isEdit}
              className="bg-[#D9D9D9] rounded-lg w-96"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start py-2">
            <label htmlFor="">Fecha de Nacimiento</label>
            <input
              value={localData.birthdate}
              name="DateOfBirth"
              disabled={true}
              className="bg-[#D9D9D9] rounded-lg w-96"
              type="text"
            />
          </div>
        </div>

        <div className="flex flex-col w-full  py-2">
          <label className="w-10/12 mx-auto" htmlFor="">
            Correo
          </label>
          <input
            value={user?.email}
            disabled={true}
            className="bg-[#D9D9D9] rounded-lg w-10/12 mx-auto  "
            type="text"
          />
        </div>
        <div className="flex justify-evenly w-full py-2">
          <div className="flex flex-col items-start ">
            <label htmlFor="">País</label>
            <input
              onChange={changeHanlderEdit}
              placeholder={localData.country}
              name="country"
              disabled={isEdit}
              className="bg-[#D9D9D9] rounded-lg w-96"
              type="text"
            />
          </div>
          <div className="flex flex-col items-start  py-2">
            <label htmlFor="">Ciudad</label>
            <input
              onChange={changeHanlderEdit}
              placeholder={localData.city}
              name="city"
              disabled={isEdit}
              className="bg-[#D9D9D9] rounded-lg w-96"
              type="text"
            />
          </div>
        </div>
        <div className="flex justify-around w-11/12 py-4">
          <Link to="/home">
            <button className="bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg">
              Volver
            </button>
          </Link>
          {isEdit ? (
            <button
              onClick={handlerEdit}
              className="bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg"
            >
              Editar
            </button>
          ) : (
            <button
              onClick={submitHandler}
              className="bg-[#4F46E5] text-[white] py-2 px-6 text-lg rounded-lg"
            >
              Guardar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
