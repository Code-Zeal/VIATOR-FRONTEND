export default function Data() {
  return (
    <div className="absolute  w-full z-2   flex flex-col items-center">
      <div className="  w-3/4 ml-auto   flex flex-col items-center">
        <div className=" flex flex-col ">
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
          <input className="bg-[#D9D9D9] rounded-lg" type="text" />
        </div>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-start ">
            <label htmlFor="">Nombres</label>
            <input className="bg-[#D9D9D9] rounded-lg w-96" type="text" />
          </div>
          <div className="flex flex-col items-start ">
            <label htmlFor="">Apellidos</label>
            <input className="bg-[#D9D9D9] rounded-lg w-96" type="text" />
          </div>
        </div>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-start ">
            <label htmlFor="">Teléfono</label>
            <input className="bg-[#D9D9D9] rounded-lg w-96" type="text" />
          </div>
          <div className="flex flex-col items-start ">
            <label htmlFor="">Fecha de Nacimiento</label>
            <input className="bg-[#D9D9D9] rounded-lg w-96" type="text" />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Correo</label>
          <input className="bg-[#D9D9D9] rounded-lg w-[85 0px]" type="text" />
        </div>
        <div className="flex justify-evenly w-full">
          <div className="flex flex-col items-start ">
            <label htmlFor="">Teléfono</label>
            <input className="bg-[#D9D9D9] rounded-lg w-96" type="text" />
          </div>
          <div className="flex flex-col items-start ">
            <label htmlFor="">Fecha de Nacimiento</label>
            <input className="bg-[#D9D9D9] rounded-lg w-96" type="text" />
          </div>
        </div>
        <div className="">
          <button>Volver</button>
          <button>Editar</button>
        </div>
      </div>
    </div>
  );
}
