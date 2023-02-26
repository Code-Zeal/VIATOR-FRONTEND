import React from "react";
import Login from "./Login.jsx";
import FormRegister from "./FormRegister";
import { useAuth0 } from "@auth0/auth0-react"; //--
import { useState, useEffect } from "react"; //--
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"; //--
import Footer from "./Footer.jsx";
import Welcome from "./Welcome.jsx";
import { Redirect } from "react-router-dom";

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
        <div className=" bg-[#f1f5f9]">
          <div className="  ">
            <div className=" backdrop-blur-xl flex justify-start">
              <div className=" sm:ml-28 ml-5  sm:w-32 w-28  my-1">
                <img src={imagen} alt="Logo de Viator" />
              </div>
            </div>

            <div
              style={{ backgroundImage: `url(${images[currentIndex]})` }}
              className=" group flex items-center flex-col h-screen w-full bg-no-repeat bg-cover bg-center duration-500"
            >
              <div className=" flex items-center flex-col mt-48 mb-48">
                <h1 className=" font-semibold text-lg text-[#f1f5f9]  ">
                  {" "}
                  Bienvenidos a:{" "}
                </h1>
                <h3 className=" text-6xl font-sans font-semibold text-[#f1f5f9] p-5 ">
                  {" "}
                  Viator{" "}
                </h3>
                <p className=" font-semibold text-lg text-[#f1f5f9] ">
                  Viaja a tu manera
                </p>

                <Login />
              </div>

              <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] left-5 text-2xl roundee-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactLeft onClick={prevSlider} size={30} />
              </div>

              <div className=" hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[50%] right-5 text-2xl roundee-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactRight onClick={nextSlider} size={30} />
              </div>

              <div></div>
            </div>
          </div>

          {/*este es el final de codigo del slider */}

          <div
            style={{ backgroundImage: `url(${banner})` }}
            className=" h-96 flex mt-8 mb-1 justify-center flex-col w-full bg-no-repeat bg-cover bg-center"
          >
            <section className=" bg-gradient-to-r bg-transparent my-4 flex flex-wrap justify-center ">
              <div className=" rounded-lg backdrop-blur-sm sm:pl-0 pl-0 ">
                <div className=" max-w-lg ">
                  <h2 className=" flex justify-center  text-[#1d4ed8] text-[30px] font-semibold">
                    Quienes Somos
                  </h2>
                  <p className="  text-[#f1f5f9] p-3 text-[16px] font-semibold">
                    Somos una agencia de viajes, que contamos con asesoría
                    profesional y las mejores ofertas especializadas en paquetes
                    turísticos, te ofrecemos servicio de calidad y adaptados tus
                    necesidades a precios solidarios en el mercado.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className=" flex justify-around flex-wrap  m-2 p-3 ">
            <section className=" rounded-lg bg-[#02122C] my-4 flex ">
              <div className=" sm:pr-0 pr-0 flex">
                <div className=" flex flex-col items-center max-w-lg">
                  <h2 className=" text-[#f1f5f9]  text-[30px] font-semibold">
                    Misión
                  </h2>
                  <p className=" text-[#f1f5f9] p-3 text-[16px] font-semibold">
                    Ofrecer el mejor servicio con el fin de alcanzar la
                    satisfacción de nuestros usuarios con nuestros paquetes
                    turísticos y boleteria aérea a precios accesibles para el
                    disfrute en familia o empresarial.
                  </p>
                </div>
              </div>
            </section>

            <section className=" rounded-lg bg-[#02122C] my-4 flex flex-wrap ">
              <div className=" sm:pl-0 pl-0 flex flex-initial ">
                <div className=" flex flex-col items-center max-w-lg">
                  <h2 className=" text-[#f1f5f9] text-[30px] font-semibold">
                    Visión
                  </h2>
                  <p className=" text-[#f1f5f9] p-3 text-[16px] font-semibold">
                    Consolidarnos como una agencia líder en el mercado actual,
                    con personal calificado brindando una experiencia agradable
                    a nuestros clientes, ademas fortalecer el turismo nacional y
                    internacional.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default Landing;
