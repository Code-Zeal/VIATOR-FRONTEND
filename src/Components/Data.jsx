import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getDataUser, putDataUser } from "../Redux/Actions";

export default function Data() {
  const history = useHistory();
  const { user, getAccessTokenSilently } = useAuth0();
  const data = useSelector((state) => state?.userData);
  const myId = useSelector((state) => state.idUser);
  const [localData, setLocalData] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [isEdit, setIsEdit] = useState(true);
  const [editSave, setEditSave] = useState(false);
  const dispatch = useDispatch();
  const valor = {
    id: user?.sub,
  };

  const userRegex = new RegExp(/[a-zA-Z][a-zA-Z0-9-_]{3,32}/gi);
  const phoneNumber = new RegExp(
    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g
  );
  const redirectHome = async () => {
    history.push("/data");
    window.location.reload();
  };

  const verificar = () => {
    // phoneNumber: Number,
    // country: "",
    // city: "",
    if (editDispatch.nickname === "") {
      setEditDispatch({ ...editDispatch, nickname: data.nickName });
    }

    if (editDispatch.phoneNumber.length === 0) {
      setEditDispatch({ ...editDispatch, phoneNumber: data.phone });
    }
    if (editDispatch.country === "") {
      setEditDispatch({ ...editDispatch, country: data.country });
    }
    if (editDispatch.city === "") {
      setEditDispatch({ ...editDispatch, city: data.city });
    }
  };
  const CountrieCities = useSelector((state) => state.getCountries);

  useEffect(() => {
    setLocalData(data);
    setIsLoaded(true);
    // setEditDispatch({ ...editDispatch, idSubAuth0: valor.id });
  }, [data, isLoaded]);
  console.log(localData);
  const [city, setCity] = useState(true);
  const [countrie, setCountrie] = useState(false);
  console.log(countrie);
  console.log(data);

  const [editDispatch, setEditDispatch] = useState({
    nickname: String,
    phoneNumber: Number,
    country: String,
    city: String,
    picture: data.picture,
  });
  console.log(data);

  // "asfasgfasfasfas"
  const submitHandler = async (event) => {
    event.preventDefault();
    if (
      window.confirm("Estás seguro/a de que quieres cambiar tus datos?") ===
      true
    ) {
      await dispatch(putDataUser(myId, editDispatch));
      alert("Complete data");
    } else {
      redirectHome();
    }

    // await put();
  };

  useEffect(() => {
    // reviso en mi base de datos si tengo el id de la persona que acaba de iniciar sesion
    //  si tengo el id muetro el home em caso contrario muestro el formulario

    dispatch(getDataUser(myId));
  }, [myId, editDispatch, dispatch]);

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
    if (event.target.className.includes("countries")) {
      if (city) {
        setCity(false);
      }
      // console.log(event.target.value);
      setCountrie(event.target.value);
    }
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

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  console.log(valor.id);
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dx2me9gqm",
        uploadPreset: "lc03gemm",
      },
      function (error, result) {
        if (result.event === "success") {
          if (
            window.confirm(
              "Estás seguro/a de que quieres cambiar tus datos?"
            ) === true
          ) {
            dispatch(
              putDataUser(myId, {
                ...data,
                picture: result.info.secure_url,
              })
            );
            alert("Complete data");
            redirectHome();
          } else {
            redirectHome();
          }
        }
      }
    );
  }, [data, dispatch, redirectHome, myId]);
  const handleSelect = (event) => {};
  return (
    <div className="absolute ml-[21%] w-[70%] z-20  flex flex-col items-center">
      <div className="  w-full ml-auto  flex flex-col items-center">
        <div className="flex flex-col items-center  my-3 h-[190px] ">
          <img
            className="rounded-full w-[150px] h-[150px] border-2"
            src={data.picture}
            alt=""
          />
          {!isEdit ? (
            <button
              className="bg-azulOscuro hover:bg-[#040934] mt-2 text-[white] rounded-lg py-1 px-2"
              onClick={() => widgetRef.current.open()}
            >
              Cambiar Imagen
            </button>
          ) : (
            <></>
          )}
        </div>
        <div className=" flex flex-col py-2">
          <label htmlFor="" className="text-md">
            Username
          </label>
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
          <div className="flex flex-col items-start ">
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
              type="number"
            />
          </div>
          <div className="flex flex-col items-start">
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

        <div className="flex flex-col w-full py-2">
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
        <div className="flex justify-around  w-full py-2">
          <div className="flex flex-col py-2">
            <label htmlFor="Ciudad">País</label>

            {isEdit ? (
              <select
                onChange={changeHanlderEdit}
                className=" countries bg-[gray]  rounded-lg "
                name="country"
                disabled="true"
              >
                <option
                  value={localData.country}
                  selected="selected"
                  disabled="true"
                >
                  {localData.country}
                </option>
                <option value="">
                  South Georgia and the South Sandwich Islands
                </option>
              </select>
            ) : (
              <select
                onChange={changeHanlderEdit}
                className=" countries bg-[gray]  rounded-lg"
                name="country"
                disabled={isEdit}
              >
                <option selected="selected" disabled value="default">
                  País
                </option>
                {CountrieCities.map((el) => {
                  return <option value={el.country}>{el.country}</option>;
                })}
              </select>
            )}
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="Ciudad">Ciudad</label>
            {isEdit ? (
              <select className="bg-[gray]  rounded-lg w-96" disabled={true}>
                <option selected value="">
                  {localData.city}
                </option>
              </select>
            ) : (
              <>
                <select
                  disabled={city}
                  onChange={changeHanlderEdit}
                  className="bg-[gray]  rounded-lg w-96"
                  name="city"
                  id=""
                >
                  <option disabled value={"default"} selected>
                    Ciudad
                  </option>
                  {countrie !== false ? (
                    CountrieCities.find(
                      (el) => el.country === countrie
                    ).cities.map((el) => {
                      return <option value={el}>{el}</option>;
                    })
                  ) : (
                    <></>
                  )}
                </select>
              </>
            )}
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
