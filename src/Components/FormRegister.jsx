import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  putRegister,
  postDataAuth0Inicial,
  getCountries,
} from "../Redux/Actions";
import Footer from "./Footer";
import Logout from "./Logout";
import Home from "./Home";

const validate = (formRegister) => {
  const errors = {};

  if (formRegister.names === "") {
    errors.names = "Se requiere nombre";
  }
  if (formRegister.names.length < 2) {
    errors.names = "El nombre debe contener como mínimo 2 caracteres";
  }
  if (formRegister.names.length === 50) {
    errors.names = "El nombre no puede contener más de 50 caracteres";
  }
  if (formRegister.lastNames === "") {
    errors.lastNames = "Se requiere que ingrese informacion";
  }
  if (formRegister.lastNames.length < 2) {
    errors.lastNames = "El apellido debe contener como mínimo 2 caracteres";
  }
  if (formRegister.lastNames.length === 50) {
    errors.lastNames = "El apellido no puede contener más de 50 caracteres";
  }
  if (formRegister.nickname === "") {
    errors.nickname = "Se requiere que ingrese informacion";
  }
  if (formRegister.nickname.length < 2) {
    errors.nickname =
      "El nombre usuario debe contener como mínimo 2 caracteres";
  }
  if (formRegister.nickname.length === 20) {
    errors.nickname =
      "El nombre de usuario no pude contener más de 20 caracteres";
  }
  if (formRegister.DateOfBirth === "") {
    errors.DateOfBirth = "Debes ingresar una fecha válida";
  }
  if (formRegister.phoneNumber === 0) {
    errors.phoneNumber = "Ingresa un número de telefono válido";
  }
  if (formRegister.country === "") {
    errors.country = "Se requiere que ingrese informacion";
  }
  if (formRegister.city === "") {
    errors.city = "Se requiere que ingrese informacion";
  }

  return errors;
};

const FormRegister = () => {
  const countries = useSelector((state) => state.getCountries);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const cities = selectedCountry
    ? countries.find((country) => country.country === selectedCountry).cities
    : [];

  useEffect(() => {
    dispatch(getCountries());
  }, [getCountries]);

  const handleKeyPress = (event) => {
    const charCode = event.which || event.keyCode;
    // Códigos de teclas permitidas: letras mayúsculas y minúsculas, números y algunos caracteres de puntuación
    const allowedKeys = [
      8,
      32,
      44,
      45,
      46,
      95,
      ...Array.from({ length: 26 }, (_, i) => i + 65),
      ...Array.from({ length: 26 }, (_, i) => i + 97),
      ...Array.from({ length: 10 }, (_, i) => i + 48),
    ];
    if (!allowedKeys.includes(charCode)) {
      event.preventDefault();
    }
  };

  // const data = useSelector((state) => state?.userExiste);

  const { user, getAccessTokenSilently } = useAuth0();
  const sub = user?.sub;
  console.log(sub);

  const dispatch = useDispatch();
  //   const [formRegisterPhoneSelec, setformRegisterPhoneSelec] = useState({
  //     selectedOption: 0,
  //   });

  //   const ChangeSelectPhone = (event) => {
  //     setformRegisterPhoneSelec({
  //       selectedOption: event.target.value,
  //     });
  //   };
  let history = useHistory();
  const redirectHome = async () => {
    history.push("/home");
    window.location.reload();
  };

  const registro = async () => {
    const token = await getAccessTokenSilently({});
    const dataRegister = {
      picture: user.picture,
      email: user.email,
      sub: user?.sub,
    };
    dispatch(postDataAuth0Inicial(dataRegister, token)); // const response = await axios.post(
  };

  const [formRegister, setFormRegister] = useState({
    names: "",
    lastNames: "",
    nickname: "",
    DateOfBirth: "",
    phoneNumber: Number,
    country: "",
    city: "",

    idSubAuth0: "",
  });
  const [errors, setErrors] = useState({
    names: "",
    lastNames: "",
    nickname: "",
    DateOfBirth: "",
    phoneNumber: Number,
    country: "",
    city: "",
  });
  useEffect(() => {
    setFormRegister({ ...formRegister, idSubAuth0: sub });
  }, [user?.sub]);

  const put = async () => {
    const token = await getAccessTokenSilently({});

    dispatch(putRegister(formRegister, token));
  };

  const changeHanlderForm = (event) => {
    const propiedad = event.target.name;
    let value;

    if (event.target.name === "DateOfBirth") {
      value = event.target.value;
      setFormRegister({
        ...formRegister,
        [propiedad]: value,
      });
    } else if (propiedad === "phoneNumber") {
      value = Number(event.target.value);
      setFormRegister({
        ...formRegister,
        [propiedad]: value,
      });
    } else {
      value = event.target.value;
      setFormRegister({
        ...formRegister,
        [propiedad]: value,
      });
    }

    setErrors(
      validate({
        ...formRegister,
        [propiedad]: value,
      })
    );
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    await registro();

    if (Object.keys(errors).length === 0) {
      alert("Complete data");
      await put();
      setErrors({
        names: "",
        lastNames: "",
        nickname: "",
        DateOfBirth: "",
        phoneNumber: Number,
        country: "",
        city: "",
      });
      setFormRegister({
        names: "",
        lastNames: "",
        nickname: "",
        DateOfBirth: "",
        phoneNumber: Number,
        country: "",
        city: "",
      });
      await redirectHome();
    } else {
      alert("You Must Correct Errors");
    }
  };
  console.log(formRegister);

  return (
    <>
      <section className="bg-azulOscuro flex flex-col items-center justify-center">
        <nav className="w-full flex  justify-center bg-blanco">
          <img
            src="https://i.imgur.com/wSCtx9T.png"
            alt="Logo"
            className="w-48"
            id="up"
          />
        </nav>
        <form
          onSubmit={submitHandler}
          className="bg-blanco borde-0 rounded-2xl md:w-8/12  w-11/12 sm:w-10/12 lg:w-6/12 my-14 flex flex-wrap flex-col items-center justify-center "
        >
          <div className="flex w-full  items-center justify-center">
            <h2 className="py-6 font-extrabold text-xl text-azulOscuro text-center">
              INGRESE SUS DATOS PARA CONTINUAR
            </h2>
          </div>
          <div className="flex  w-full px-10 ">
            <label htmlFor="names">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                width="25px"
                height="25px"
                viewBox="-2.5 0 32 32"
                version="1.1"
              >
                <g id="icomoon-ignore"></g>
                <path
                  d="M16.785 12.328h7.342v1.049h-7.342v-1.049z"
                  fill="#000000"
                ></path>
                <path
                  d="M16.784 18.623h7.343v1.049h-7.343v-1.049z"
                  fill="#000000"
                ></path>
                <path
                  d="M16.784 15.475h5.237v1.049h-5.237v-1.049z"
                  fill="#000000"
                ></path>
                <path
                  d="M15.735 6.034v-3.147h-4.196v3.147h-11.539v23.079h27.275v-23.079h-11.539zM26.226 7.083v2.098h-10.49v-2.098h10.49zM12.588 3.936h2.098v5.245h-2.098v-5.245zM1.049 7.083h10.49v2.098h-10.49v-2.098zM1.049 28.064v-17.833h25.177v17.833h-25.177z"
                  fill="#000000"
                ></path>
                <path
                  d="M15.463 23.402c-0.757-0.315-2.545-0.936-3.652-1.263-0.094-0.030-0.108-0.035-0.108-0.428 0-0.324 0.133-0.65 0.263-0.927 0.14-0.301 0.308-0.806 0.368-1.259 0.168-0.196 0.396-0.58 0.545-1.313 0.128-0.645 0.069-0.881-0.017-1.102-0.009-0.023-0.018-0.046-0.026-0.069-0.033-0.152 0.012-0.938 0.123-1.549 0.076-0.418-0.019-1.309-0.596-2.046-0.364-0.466-1.060-1.037-2.334-1.117l-0.699 0.001c-1.251 0.079-1.949 0.651-2.312 1.116-0.577 0.737-0.673 1.628-0.597 2.046 0.112 0.611 0.156 1.397 0.124 1.546-0.006 0.026-0.016 0.049-0.026 0.072-0.085 0.221-0.146 0.456-0.016 1.102 0.146 0.733 0.375 1.117 0.544 1.313 0.058 0.453 0.226 0.958 0.368 1.259 0.103 0.22 0.153 0.519 0.153 0.942 0 0.393-0.015 0.398-0.103 0.426-1.144 0.338-2.967 0.996-3.646 1.293-0.539 0.231-0.67 0.646-0.67 1.020 0 0.105 0 0.268 0 0.453h1.049v-0.453c0-0.017 0.001-0.030 0.002-0.040 0.009-0.005 0.021-0.011 0.039-0.018 0.645-0.283 2.433-0.927 3.543-1.255 0.835-0.265 0.835-1.049 0.835-1.426 0-0.581-0.080-1.022-0.252-1.389-0.105-0.224-0.235-0.621-0.277-0.946l-0.041-0.313-0.206-0.239c-0.032-0.036-0.192-0.244-0.309-0.833-0.080-0.397-0.051-0.471-0.035-0.514 0.028-0.068 0.051-0.135 0.073-0.23 0.092-0.424-0.030-1.483-0.116-1.955-0.029-0.155 0.012-0.73 0.39-1.214 0.332-0.425 0.844-0.665 1.522-0.713l0.629-0.001c0.691 0.049 1.209 0.289 1.541 0.714 0.379 0.484 0.419 1.059 0.391 1.213-0.086 0.472-0.208 1.53-0.117 1.957l0.009 0.041 0.011 0.040c0.014 0.046 0.030 0.090 0.052 0.149 0.017 0.044 0.046 0.117-0.033 0.513-0.119 0.59-0.28 0.8-0.312 0.836l-0.204 0.237-0.041 0.31c-0.043 0.326-0.172 0.725-0.277 0.949-0.17 0.36-0.364 0.841-0.364 1.375 0 0.377 0 1.162 0.861 1.434 1.048 0.309 2.805 0.916 3.535 1.221 0.111 0.047 0.151 0.105 0.162 0.127v0.424h1.049c0-0.184 0-0.348 0-0.453-0-0.374-0.259-0.831-0.797-1.063z"
                  fill="#000000"
                ></path>
              </svg>
            </label>
            <input
              placeholder="Nombres"
              type="text"
              name="names"
              value={formRegister.names}
              onChange={changeHanlderForm}
              onKeyPress={handleKeyPress}
              className="w-full h-1/2  border-2 rounded-md mr-1 "
              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}"
              minLength={2}
              maxLength={50}
            />
            <input
              placeholder="Apellidos"
              type="text"
              name="lastNames"
              value={formRegister.lastNames}
              onChange={changeHanlderForm}
              onKeyPress={handleKeyPress}
              className="w-full h-1/2  ml-1 border-2 rounded-md"
              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}"
              minLength={2}
              maxLength={50}
            />
          </div>
          <div className="flex justify-evenly w-full px-6 mb-10">
            <span className=" text-[#ff0000] ">{errors.names}</span>
            <span className="text-[#ff0000] ">{errors.lastNames}</span>
          </div>

          <div className="flex  w-full px-10 ">
            <label htmlFor="nickname">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M16.5 7.063C16.5 10.258 14.57 13 12 13c-2.572 0-4.5-2.742-4.5-5.938C7.5 3.868 9.16 2 12 2s4.5 1.867 4.5 5.063zM4.102 20.142C4.487 20.6 6.145 22 12 22c5.855 0 7.512-1.4 7.898-1.857a.416.416 0 0 0 .09-.317C19.9 18.944 19.106 15 12 15s-7.9 3.944-7.989 4.826a.416.416 0 0 0 .091.317z"
                  fill="#000000"
                />
              </svg>
            </label>
            <input
              placeholder="Usuario"
              type="text"
              name="nickname"
              value={formRegister.nickname}
              onChange={changeHanlderForm}
              onKeyPress={handleKeyPress}
              className="w-full h-1/2  ml-1 border-2 rounded-md"
              pattern="[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{2,50}"
              minLength={2}
              maxLength={20}
            />
          </div>
          <span className=" text-[#ff0000] mb-10"> {errors.nickname}</span>

          <div className="flex  w-full px-10 ">
            <label htmlFor="DateOfBirth">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="25px"
                height="25px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <title>calendar1</title>
                <path d="M28 30h-24c-1.104 0-2-0.896-2-2v-21c0-1.104 0.896-2 2-2h2v1c0 1.657 1.343 3 3 3s3-1.343 3-3v-1h8v1c0 1.657 1.344 3 3 3s3-1.343 3-3v-1h2c1.104 0 2 0.896 2 2v21c0 1.104-0.896 2-2 2zM28 12h-24v16h24v-16zM13.069 19.829c0.197-0.314 0.296-0.646 0.296-0.993 0-0.773-0.416-1.16-1.248-1.16-0.723 0-1.414 0.287-2.074 0.861v-1.629c0.73-0.473 1.555-0.709 2.473-0.709 0.859 0 1.53 0.216 2.013 0.647s0.724 1.015 0.724 1.749c0 0.98-0.588 1.994-1.764 3.041l-1.729 1.535v0.035h3.41v1.535h-5.531v-1.441l2.408-2.303c0.484-0.464 0.825-0.853 1.022-1.168zM19.837 23.166c0.264-0.203 0.396-0.486 0.396-0.85 0-0.375-0.163-0.664-0.489-0.867s-0.774-0.305-1.345-0.305h-0.756v-1.418h0.697c1.094 0 1.641-0.363 1.641-1.090 0-0.684-0.42-1.025-1.26-1.025-0.562 0-1.109 0.182-1.641 0.545v-1.512c0.59-0.297 1.277-0.445 2.062-0.445 0.859 0 1.528 0.193 2.007 0.58s0.718 0.889 0.718 1.506c0 1.098-0.557 1.785-1.67 2.062v0.029c0.594 0.074 1.062 0.29 1.406 0.647s0.516 0.796 0.516 1.315c0 0.785-0.287 1.406-0.861 1.863s-1.367 0.686-2.379 0.686c-0.867 0-1.572-0.141-2.115-0.422v-1.611c0.562 0.41 1.219 0.615 1.969 0.615 0.472 0.002 0.84-0.1 1.104-0.303zM22.969 8c-1.088 0-1.969-0.881-1.969-1.969v-2.062c0-1.088 0.881-1.969 1.969-1.969s1.969 0.881 1.969 1.969v2.062c0 1.088-0.881 1.969-1.969 1.969zM8.969 8c-1.088 0-1.969-0.881-1.969-1.969v-2.062c0-1.088 0.881-1.969 1.969-1.969s1.969 0.881 1.969 1.969v2.062c0 1.088-0.882 1.969-1.969 1.969z" />
              </svg>
            </label>
            <input
              placeholder="Ingresa tu fecha de nacimiento"
              type="date"
              name="DateOfBirth"
              onChange={changeHanlderForm}
              valueAsDate={formRegister.DateOfBirth}
              className="w-full h-1/2 border-2 rounded-md"
            />
          </div>
          <span className="mb-10 text-[#ff0000]"> {errors.DateOfBirth}</span>

          <div className="flex  w-full px-10 ">
            <label htmlFor="phoneNumber">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                width="25px"
                height="25px"
                viewBox="0 0 32 32"
                version="1.1"
              >
                <title>phone</title>
                <path d="M0 10.375c0 0.938 0.344 1.969 0.781 3.063s1 2.125 1.438 2.906c1.188 2.063 2.719 4.094 4.469 5.781s3.813 3.094 6.125 3.938c1.344 0.531 2.688 1.125 4.188 1.125 0.75 0 1.813-0.281 2.781-0.688 0.938-0.406 1.781-1.031 2.094-1.781 0.125-0.281 0.281-0.656 0.375-1.094 0.094-0.406 0.156-0.813 0.156-1.094 0-0.156 0-0.313-0.031-0.344-0.094-0.188-0.313-0.344-0.563-0.5-0.563-0.281-0.656-0.375-1.5-0.875-0.875-0.5-1.781-1.063-2.563-1.469-0.375-0.219-0.625-0.313-0.719-0.313-0.5 0-1.125 0.688-1.656 1.438-0.563 0.75-1.188 1.438-1.625 1.438-0.219 0-0.438-0.094-0.688-0.25s-0.5-0.281-0.656-0.375c-2.75-1.563-4.594-3.406-6.156-6.125-0.188-0.313-0.625-0.969-0.625-1.313 0-0.406 0.563-0.875 1.125-1.375 0.531-0.469 1.094-1.031 1.094-1.719 0-0.094-0.063-0.375-0.188-0.781-0.281-0.813-0.656-1.75-0.969-2.656-0.156-0.438-0.281-0.75-0.313-0.906-0.063-0.094-0.094-0.219-0.125-0.375s-0.094-0.281-0.125-0.406c-0.094-0.281-0.25-0.5-0.406-0.625-0.156-0.063-0.531-0.156-0.906-0.188-0.375 0-0.813-0.031-1-0.031-0.094 0-0.219 0-0.344 0.031h-0.406c-1 0.438-1.719 1.313-2.25 2.344-0.5 1.031-0.813 2.188-0.813 3.219z" />
              </svg>
            </label>

            <input
              className="appearance:textfield w-full h-1/2  border-2 rounded-md "
              placeholder="Teléfono"
              type="number"
              name="phoneNumber"
              onChange={changeHanlderForm}
              value={Number(formRegister.phoneNumber)}
            />
          </div>
          <span className="mb-10 text-[#ff0000]"> {errors.phoneNumber}</span>
          <div className="flex  w-full px-10 ">
            <label htmlFor="country">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                  stroke="#808080"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="3"
                  y="5"
                  width="18"
                  height="14"
                  rx="2"
                  stroke="#808080"
                  stroke-width="2"
                  stroke-linecap="round"
                />
              </svg>
            </label>
            {/* <input disabled="true" type="text" value={user.email} /> */}
            <input
              disabled={true}
              type="text"
              value={user?.email}
              className="w-full h-1/2 border-2 rounded-md  text-[gray]"
            />
          </div>
          <span className="mb-10 text-[#ff0000]"> </span>

          <div className="flex  w-full px-10 ">
            <label htmlFor="country">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                width="25px"
                height="25px"
                viewBox="0 0 28 28"
                fill="none"
              >
                <path
                  clip-rule="evenodd"
                  d="M10 7.88974C11.1046 7.88974 12 6.98912 12 5.87814C12 4.76716 11.1046 3.86654 10 3.86654C8.89543 3.86654 8 4.76716 8 5.87814C8 6.98912 8.89543 7.88974 10 7.88974ZM10 6.5822C10.3866 6.5822 10.7 6.26698 10.7 5.87814C10.7 5.4893 10.3866 5.17408 10 5.17408C9.6134 5.17408 9.3 5.4893 9.3 5.87814C9.3 6.26698 9.6134 6.5822 10 6.5822Z"
                  fill="#000000"
                  fill-rule="evenodd"
                />
                <path
                  clip-rule="evenodd"
                  d="M5.15 5.62669C5.15 3.0203 7.37393 1 10 1C12.6261 1 14.85 3.0203 14.85 5.62669C14.85 6.06012 14.8114 6.53528 14.7269 7.03578L18 7.8588L25.7575 5.90818C26.0562 5.83306 26.3727 5.90057 26.6154 6.09117C26.8581 6.28178 27 6.57423 27 6.88395V23.9826C27 24.4441 26.6877 24.8464 26.2425 24.9584L18.2425 26.97C18.0833 27.01 17.9167 27.01 17.7575 26.97L10 25.0193L2.24254 26.97C1.94379 27.0451 1.6273 26.9776 1.38459 26.787C1.14187 26.5964 1 26.3039 1 25.9942V8.89555C1 8.43402 1.3123 8.03172 1.75746 7.91978L5.2731 7.03578C5.18863 6.53528 5.15 6.06012 5.15 5.62669ZM10 2.70986C8.20779 2.70986 6.85 4.06691 6.85 5.62669C6.85 7.21686 7.5125 9.57287 9.40979 11.3615C9.74241 11.6751 10.2576 11.6751 10.5902 11.3615C12.4875 9.57287 13.15 7.21686 13.15 5.62669C13.15 4.06691 11.7922 2.70986 10 2.70986ZM5.80904 8.97453L3.22684 9.62382C3.09349 9.65735 3 9.77726 3 9.91476V24.3212C3 24.5165 3.18371 24.6598 3.37316 24.6121L8.77316 23.2543C8.90651 23.2208 9 23.1009 9 22.9634V13.2506C7.40353 12.024 6.39235 10.4792 5.80904 8.97453ZM11 13.2506V22.9634C11 23.1009 11.0935 23.2208 11.2268 23.2543L16.6268 24.6121C16.8163 24.6598 17 24.5165 17 24.3212V9.91477C17 9.77726 16.9065 9.65735 16.7732 9.62382L14.191 8.97453C13.6076 10.4792 12.5965 12.024 11 13.2506ZM25 22.9634C25 23.1009 24.9065 23.2208 24.7732 23.2543L19.3732 24.6121C19.1837 24.6598 19 24.5165 19 24.3212V9.91477C19 9.77726 19.0935 9.65736 19.2268 9.62382L24.6268 8.26599C24.8163 8.21835 25 8.36159 25 8.55693V22.9634Z"
                  fill="#000000"
                  fill-rule="evenodd"
                />
              </svg>
            </label>
            <select
              name="country"
              className="w-full   border-2 rounded-md h-1/2"
              onChange={(event) => {
                handleCountryChange(event);
                changeHanlderForm(event);
              }}
            >
              <option value="">Select a country</option>
              {countries.map((country) => (
                <option key={country.country} value={`${country.country}`}>
                  {country.country}
                </option>
              ))}
            </select>
          </div>
          <span className="mb-10 text-[#ff0000]">{errors.country}</span>
          <div className="flex  w-full px-10 ">
            <label htmlFor="city">
              <svg
                className="mx-2"
                xmlns="http://www.w3.org/2000/svg"
                xlink="http://www.w3.org/1999/xlink"
                height="25px"
                width="25px"
                version="1.1"
                id="_x32_"
                viewBox="0 0 512 512"
                space="preserve"
              >
                <path
                  class="st0"
                  d="M485.75,475.54V252.367H358.838V134.2h-43.29V95.887h-13.124V62.716h-34.472V10.202h-15.307v52.514h-34.291   v33.171h-13.14V134.2h-43.291v61.737H26.264V475.54H0v26.258h32.826h135.658h13.124h157.542h13.124h126.913H512V475.54H485.75z    M90.797,428.491H71.124v-19.68h19.673V428.491z M90.797,386.844H71.124v-19.68h19.673V386.844z M90.797,345.197H71.124v-19.679   h19.673V345.197z M90.797,303.544H71.124v-19.68h19.673V303.544z M90.797,261.89H71.124v-19.68h19.673V261.89z M118.003,477.932   H92.501v-25.517h25.502V477.932z M140.038,428.491h-19.673v-19.68h19.673V428.491z M140.038,386.844h-19.673v-19.68h19.673V386.844   z M140.038,345.197h-19.673v-19.679h19.673V345.197z M140.038,303.544h-19.673v-19.68h19.673V303.544z M140.038,261.89h-19.673   v-19.68h19.673V261.89z M250.536,180.876h19.687v19.672h-19.687V180.876z M250.536,222.515h19.687v19.687h-19.687V222.515z    M250.536,264.177h19.687v19.672h-19.687V264.177z M250.536,305.815h19.687v19.687h-19.687V305.815z M250.536,347.469h19.687v19.68   h-19.687V347.469z M250.536,389.123h19.687v19.68h-19.687V389.123z M227.545,408.803h-19.672v-19.68h19.672V408.803z    M227.545,367.149h-19.672v-19.68h19.672V367.149z M227.545,325.503h-19.672v-19.687h19.672V325.503z M227.545,283.849h-19.672   v-19.672h19.672V283.849z M227.545,242.202h-19.672v-19.687h19.672V242.202z M227.545,200.548h-19.672v-19.672h19.672V200.548z    M273.631,477.932h-25.517v-43.373h25.517V477.932z M312.901,408.803h-19.688v-19.68h19.688V408.803z M312.901,367.149h-19.688   v-19.68h19.688V367.149z M312.901,325.503h-19.688v-19.687h19.688V325.503z M312.901,283.849h-19.688v-19.672h19.688V283.849z    M312.901,242.202h-19.688v-19.687h19.688V242.202z M312.901,200.548h-19.688v-19.672h19.688V200.548z M420.575,475.54h-25.517   v-33.484h25.517V475.54z M439.799,413.43H374.16v-11.451h65.639V413.43z M439.799,379.908H374.16v-11.451h65.639V379.908z    M439.799,346.386H374.16v-11.443h65.639V346.386z M439.799,312.857H374.16v-11.45h65.639V312.857z"
                />
              </svg>
            </label>

            <select
              name="city"
              className="w-full   border-2 rounded-md h-1/2"
              value={selectedCity}
              onChange={(event) => {
                handleCityChange(event);
                changeHanlderForm(event);
              }}
              disabled={!selectedCountry}
            >
              <option value="">Select a city</option>
              {cities.map((city) => (
                <option key={city} value={`${city}`}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <span className="mb-10 text-[#ff0000]"> {errors.city}</span>

          <div className="flex w-full  justify-center">
            <button
              type="submit"
              className=" px-4 py-3 rounded-xl text-blanco font-bold mb-6  transition ease-in-out delay-150 bg-[#3A83F6] hover:-translate-y-1 hover:scale-110 hover:bg-[#6366F1] duration-300"
            >
              Continuar
            </button>
          </div>
        </form>

        <Footer />
      </section>
    </>
  );
};

export default FormRegister;
