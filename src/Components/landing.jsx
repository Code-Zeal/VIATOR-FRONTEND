import React from "react";
import Login from "./Login.jsx";
import FormRegister from "./FormRegister";
import { useAuth0 } from "@auth0/auth0-react"; //--
import { useState, useEffect } from "react"; //--
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"; //--
import Footer from "./Footer.jsx";
import { Redirect } from "react-router";
import Welcome from "./Welcome.jsx";

function Landing() {
  const { isAuthenticated } = useAuth0();

  const imagen = "https://i.imgur.com/wSCtx9T.png"; // logo de viator

  const images = [
    "https://images2.alphacoders.com/238/238870.jpg",
    "https://images4.alphacoders.com/756/75604.jpg",
    "https://images3.alphacoders.com/237/23765.jpg",
    "https://images.alphacoders.com/594/594341.jpg",
  ];

  const banner = "https://images5.alphacoders.com/127/1278807.jpg";

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlider() {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }

  function nextSlider() {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }

  const startSlider = () => {
    setTimeout(() => {
      nextSlider();
    }, 5000);
  };

  useEffect(() => {
    startSlider();
  }, [startSlider]);

  return (
    <>
      {isAuthenticated ? (
        <>
          <Redirect to="/welcome" />
          <Welcome />

          {/* <FormRegister /> */}
        </>
      ) : (
        <div className="  ">
          <div className=" bg-blanco flex flex-col items-center h-20  w-screen ">
            <img
              className=" h-20 w-72 px-2  "
              src={imagen}
              alt="Logo de Viator"
            />
          </div>

          <div
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
            className="    rounded-2xl group flex items-center flex-col  w-11/12 mx-auto bg-no-repeat bg-cover bg-center duration-500 "
          >
            <div className="w-full h-full flex items-center flex-col  m-44 ">
              <div className=" flex items-center flex-col py-10 px-36 rounded-3xl bg-[black] bg-opacity-80 ">
                <h3 className=" font-semibold text-6xl text-[#f1f5f9]  ">
                  Bienvenid
                  {true ? (
                    <h3 className="inline-block">a</h3>
                  ) : (
                    <h3 className="inline-block">o</h3>
                  )}{" "}
                  a
                  {<h3 className="inline-block text-azulClaro ml-4">VIATOR</h3>}
                </h3>

                {/* <p className=" font-semibold text-lg text-[#f1f5f9] ">
                  Viaja a tu manera
                </p> */}
                <Login />
              </div>
            </div>

            <div className=" hidden group-hover:block absolute top-[50%]  left-5 text-2xl rounded-full ml-14 p-2  bg-[white] text-[black] cursor-pointer ">
              <BsChevronCompactLeft onClick={prevSlider} size={40} />
            </div>

            <div className=" hidden group-hover:block absolute top-[50%]  right-5 text-2xl bg-black/20 text-[black] bg-[white] rounded-full cursor-pointer mr-14 p-2">
              <BsChevronCompactRight onClick={nextSlider} size={40} />
            </div>

            <div></div>
          </div>

          {/*este es el final de codigo del slider */}
          <section class="text-gray-400  body-font">
            <div class="container px-5 py-24 mx-auto">
              <div class="text-center mb-20 ">
                <h1 class="sm:text-3xl text-2xl font-bold title-font text-white mb-4">
                  VIATOR
                </h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto font-medium">
                  proviene del latín y su significado es “El viajero” o
                  “Viajante”. Creemos que vivir ciertas experiencias en la vida
                  son imperdibles ya que generan sensaciones únicas e
                  irrepetibles. Viajar es una de ellas.
                </p>
              </div>
              <div class="flex flex-wrap sm:my-10 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-azulClaro mb-5 flex-shrink-0 animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="100"
                      height="100"
                      viewBox="0 0 256 240"
                    >
                      <path
                        fill="#E17726"
                        d="M250.066 0L140.219 81.279l20.427-47.9z"
                      />
                      <path
                        fill="#E27625"
                        d="m6.191.096l89.181 33.289l19.396 48.528zM205.86 172.858l48.551.924l-16.968 57.642l-59.243-16.311zm-155.721 0l27.557 42.255l-59.143 16.312l-16.865-57.643z"
                      />
                      <path
                        fill="#E27625"
                        d="m112.131 69.552l1.984 64.083l-59.371-2.701l16.888-25.478l.214-.245zm31.123-.715l40.9 36.376l.212.244l16.888 25.478l-59.358 2.7zM79.435 173.044l32.418 25.259l-37.658 18.181zm97.136-.004l5.131 43.445l-37.553-18.184z"
                      />
                      <path
                        fill="#D5BFB2"
                        d="m144.978 195.922l38.107 18.452l-35.447 16.846l.368-11.134zm-33.967.008l-2.909 23.974l.239 11.303l-35.53-16.833z"
                      />
                      <path
                        fill="#233447"
                        d="m100.007 141.999l9.958 20.928l-33.903-9.932zm55.985.002l24.058 10.994l-34.014 9.929z"
                      />
                      <path
                        fill="#CC6228"
                        d="m82.026 172.83l-5.48 45.04l-29.373-44.055zm91.95.001l34.854.984l-29.483 44.057zm28.136-44.444l-25.365 25.851l-19.557-8.937l-9.363 19.684l-6.138-33.849zm-148.237 0l60.435 2.749l-6.139 33.849l-9.365-19.681l-19.453 8.935z"
                      />
                      <path
                        fill="#E27525"
                        d="m52.166 123.082l28.698 29.121l.994 28.749zm151.697-.052l-29.746 57.973l1.12-28.8zm-90.956 1.826l1.155 7.27l2.854 18.111l-1.835 55.625l-8.675-44.685l-.003-.462zm30.171-.101l6.521 35.96l-.003.462l-8.697 44.797l-.344-11.205l-1.357-44.862z"
                      />
                      <path
                        fill="#F5841F"
                        d="m177.788 151.046l-.971 24.978l-30.274 23.587l-6.12-4.324l6.86-35.335zm-99.471 0l30.399 8.906l6.86 35.335l-6.12 4.324l-30.275-23.589z"
                      />
                      <path
                        fill="#C0AC9D"
                        d="m67.018 208.858l38.732 18.352l-.164-7.837l3.241-2.845h38.334l3.358 2.835l-.248 7.831l38.487-18.29l-18.728 15.476l-22.645 15.553h-38.869l-22.63-15.617z"
                      />
                      <path
                        fill="#161616"
                        d="m142.204 193.479l5.476 3.869l3.209 25.604l-4.644-3.921h-36.476l-4.556 4l3.104-25.681l5.478-3.871z"
                      />
                      <path
                        fill="#763E1A"
                        d="M242.814 2.25L256 41.807l-8.235 39.997l5.864 4.523l-7.935 6.054l5.964 4.606l-7.897 7.191l4.848 3.511l-12.866 15.026l-52.77-15.365l-.457-.245l-38.027-32.078zm-229.628 0l98.326 72.777l-38.028 32.078l-.457.245l-52.77 15.365l-12.866-15.026l4.844-3.508l-7.892-7.194l5.952-4.601l-8.054-6.071l6.085-4.526L0 41.809z"
                      />
                      <path
                        fill="#F5841F"
                        d="m180.392 103.99l55.913 16.279l18.165 55.986h-47.924l-33.02.416l24.014-46.808zm-104.784 0l-17.151 25.873l24.017 46.808l-33.005-.416H1.631l18.063-55.985zm87.776-70.878l-15.639 42.239l-3.319 57.06l-1.27 17.885l-.101 45.688h-30.111l-.098-45.602l-1.274-17.986l-3.32-57.045l-15.637-42.239z"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base font-medium">
                      Por esa misma razón, ideamos un sistema innovador en dónde
                      podrás adquirir tus boletos tokenizados. ¿Qué significa
                      esto? Significa que simplifican la forma en que se compran
                      y administran los boletos, lo que permite a los viajeros
                      disponer fácilmente de sus activos de viaje, revenderlos,
                      recibir ofertas o transferirlos de una billetera a otra.
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div class="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-azulClaro mb-5 flex-shrink-0  motion-safe:animate-spin-slow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="#000000"
                      width="1000px"
                      height="1000px"
                      viewBox="0 0 32 32"
                      version="1.1"
                    >
                      <title>plane</title>
                      <path d="M12.25 8.719l-0.469 0.469 4 0.344 2.406-2.406c0.375-0.375 1.063-0.938 2.063-1.563s1.656-0.813 1.906-0.563c0.688 0.688 0 2.031-2.063 4.063l-2.375 2.375 0.344 4 0.469-0.438c0.375-0.406 0.781-0.406 1.094-0.094 0.375 0.375 0.219 0.906-0.531 1.656l-0.75 0.781 0.375 2.688 0.531-0.563c0.344-0.375 0.719-0.375 1.063-0.063 0.375 0.375 0.313 0.844-0.188 1.344l-1.125 1.125c0.438 3 0.5 4.688 0.156 5.031-0.156 0.125-0.375 0.25-0.688 0.313-0.281 0.031-0.531 0-0.688-0.125-0.125-0.156-0.313-0.719-0.5-1.688-0.219-1-0.75-2.688-1.688-5.063-0.906-2.406-1.563-3.75-1.875-4.094-0.125-0.125-0.313-0.125-0.531 0-0.219 0.094-1 0.75-2.25 1.969-1.25 1.25-2.406 2.25-3.5 3.031-0.031 0.188 0.063 0.813 0.219 1.844s0.219 1.719 0.188 1.969c-0.063 0.25-0.313 0.594-0.719 1-0.219 0.219-0.375 0.344-0.531 0.375-0.406-0.406-1.031-1.719-1.875-3.875-2.344-1.031-3.625-1.688-3.875-1.938 0-0.125 0.125-0.313 0.344-0.531 0.406-0.406 0.75-0.656 1.031-0.688 0.25-0.063 0.906 0.031 1.938 0.219 1.031 0.156 1.656 0.219 1.875 0.219 0.75-1.125 2.156-2.781 4.344-4.969 0.625-0.688 0.813-1.125 0.594-1.344-0.313-0.344-1.688-0.969-4.063-1.875-2.406-0.906-4.063-1.5-5.063-1.688-1-0.219-1.563-0.375-1.688-0.531-0.156-0.125-0.188-0.375-0.125-0.688 0.031-0.313 0.156-0.531 0.313-0.688 0.313-0.313 2-0.281 5.031 0.156l1.094-1.125c0.5-0.469 0.969-0.531 1.344-0.156 0.344 0.313 0.313 0.688-0.031 1.031l-0.563 0.531 2.688 0.375 0.75-0.719c0.75-0.75 1.281-0.906 1.656-0.531 0.344 0.344 0.313 0.688-0.063 1.094z" />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base font-medium">
                      Gracias a la implementación de la blockchain, tu boleto de
                      avión no es simplemente un pasaje, es un activo con el que
                      podrás hacer lo que desees. Ese viaje que organizaste y
                      que te enteraste que no lo podrás hacer, no hay problema,
                      se puede vender. O aquél regalo de cumpleaños que querías
                      hacerle a tu amigo, ahora se lo podrás transferir por
                      sorpresa.
                    </p>
                  </div>
                </div>
                <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                  <div class="w-40 h-20 inline-flex items-center justify-center rounded-full bg-gray text-azulClaro mb-5 flex-shrink-0 animate-bounce">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="150"
                      viewBox="-.02682843 0 123.63183286 30.17842908"
                      width="150"
                    >
                      <path
                        d="m46.211 6.749h-6.839a.95.95 0 0 0 -.939.802l-2.766 17.537a.57.57 0 0 0 .564.658h3.265a.95.95 0 0 0 .939-.803l.746-4.73a.95.95 0 0 1 .938-.803h2.165c4.505 0 7.105-2.18 7.784-6.5.306-1.89.013-3.375-.872-4.415-.972-1.142-2.696-1.746-4.985-1.746zm.789 6.405c-.374 2.454-2.249 2.454-4.062 2.454h-1.032l.724-4.583a.57.57 0 0 1 .563-.481h.473c1.235 0 2.4 0 3.002.704.359.42.469 1.044.332 1.906zm19.654-.079h-3.275a.57.57 0 0 0 -.563.481l-.145.916-.229-.332c-.709-1.029-2.29-1.373-3.868-1.373-3.619 0-6.71 2.741-7.312 6.586-.313 1.918.132 3.752 1.22 5.031.998 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .562.66h2.95a.95.95 0 0 0 .939-.803l1.77-11.209a.568.568 0 0 0 -.561-.658zm-4.565 6.374c-.316 1.871-1.801 3.127-3.695 3.127-.951 0-1.711-.305-2.199-.883-.484-.574-.668-1.391-.514-2.301.295-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.499.589.697 1.411.554 2.317zm22.007-6.374h-3.291a.954.954 0 0 0 -.787.417l-4.539 6.686-1.924-6.425a.953.953 0 0 0 -.912-.678h-3.234a.57.57 0 0 0 -.541.754l3.625 10.638-3.408 4.811a.57.57 0 0 0 .465.9h3.287a.949.949 0 0 0 .781-.408l10.946-15.8a.57.57 0 0 0 -.468-.895z"
                        fill="#253b80"
                      />
                      <path
                        d="m94.992 6.749h-6.84a.95.95 0 0 0 -.938.802l-2.766 17.537a.569.569 0 0 0 .562.658h3.51a.665.665 0 0 0 .656-.562l.785-4.971a.95.95 0 0 1 .938-.803h2.164c4.506 0 7.105-2.18 7.785-6.5.307-1.89.012-3.375-.873-4.415-.971-1.142-2.694-1.746-4.983-1.746zm.789 6.405c-.373 2.454-2.248 2.454-4.062 2.454h-1.031l.725-4.583a.568.568 0 0 1 .562-.481h.473c1.234 0 2.4 0 3.002.704.359.42.468 1.044.331 1.906zm19.653-.079h-3.273a.567.567 0 0 0 -.562.481l-.145.916-.23-.332c-.709-1.029-2.289-1.373-3.867-1.373-3.619 0-6.709 2.741-7.311 6.586-.312 1.918.131 3.752 1.219 5.031 1 1.176 2.426 1.666 4.125 1.666 2.916 0 4.533-1.875 4.533-1.875l-.146.91a.57.57 0 0 0 .564.66h2.949a.95.95 0 0 0 .938-.803l1.771-11.209a.571.571 0 0 0 -.565-.658zm-4.565 6.374c-.314 1.871-1.801 3.127-3.695 3.127-.949 0-1.711-.305-2.199-.883-.484-.574-.666-1.391-.514-2.301.297-1.855 1.805-3.152 3.67-3.152.93 0 1.686.309 2.184.892.501.589.699 1.411.554 2.317zm8.426-12.219-2.807 17.858a.569.569 0 0 0 .562.658h2.822c.469 0 .867-.34.939-.803l2.768-17.536a.57.57 0 0 0 -.562-.659h-3.16a.571.571 0 0 0 -.562.482z"
                        fill="#179bd7"
                      />
                      <path
                        d="m7.266 29.154.523-3.322-1.165-.027h-5.563l3.866-24.513a.316.316 0 0 1 .314-.268h9.38c3.114 0 5.263.648 6.385 1.927.526.6.861 1.227 1.023 1.917.17.724.173 1.589.007 2.644l-.012.077v.676l.526.298a3.69 3.69 0 0 1 1.065.812c.45.513.741 1.165.864 1.938.127.795.085 1.741-.123 2.812-.24 1.232-.628 2.305-1.152 3.183a6.547 6.547 0 0 1 -1.825 2c-.696.494-1.523.869-2.458 1.109-.906.236-1.939.355-3.072.355h-.73c-.522 0-1.029.188-1.427.525a2.21 2.21 0 0 0 -.744 1.328l-.055.299-.924 5.855-.042.215c-.011.068-.03.102-.058.125a.155.155 0 0 1 -.096.035z"
                        fill="#253b80"
                      />
                      <path
                        d="m23.048 7.667c-.028.179-.06.362-.096.55-1.237 6.351-5.469 8.545-10.874 8.545h-2.752c-.661 0-1.218.48-1.321 1.132l-1.409 8.936-.399 2.533a.704.704 0 0 0 .695.814h4.881c.578 0 1.069-.42 1.16-.99l.048-.248.919-5.832.059-.32c.09-.572.582-.992 1.16-.992h.73c4.729 0 8.431-1.92 9.513-7.476.452-2.321.218-4.259-.978-5.622a4.667 4.667 0 0 0 -1.336-1.03z"
                        fill="#179bd7"
                      />
                      <path
                        d="m21.754 7.151a9.757 9.757 0 0 0 -1.203-.267 15.284 15.284 0 0 0 -2.426-.177h-7.352a1.172 1.172 0 0 0 -1.159.992l-1.564 9.906-.045.289a1.336 1.336 0 0 1 1.321-1.132h2.752c5.405 0 9.637-2.195 10.874-8.545.037-.188.068-.371.096-.55a6.594 6.594 0 0 0 -1.017-.429 9.045 9.045 0 0 0 -.277-.087z"
                        fill="#222d65"
                      />
                      <path
                        d="m9.614 7.699a1.169 1.169 0 0 1 1.159-.991h7.352c.871 0 1.684.057 2.426.177a9.757 9.757 0 0 1 1.481.353c.365.121.704.264 1.017.429.368-2.347-.003-3.945-1.272-5.392-1.399-1.593-3.924-2.275-7.155-2.275h-9.38c-.66 0-1.223.48-1.325 1.133l-3.907 24.765a.806.806 0 0 0 .795.932h5.791l1.454-9.225z"
                        fill="#253b80"
                      />
                    </svg>
                  </div>
                  <div class="flex-grow">
                    <p class="leading-relaxed text-base font-medium">
                      Pero no te preocupes, tambien tenemos otros tipos de
                      metodos de pagos, no es necesario
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default Landing;
