import React from "react";
import { sliderRecomendado } from "../Redux/Actions.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

function SliderRecomemdado() {
  const sliderRecoment = useSelector((state) => state.recommended);
  const dispatch = useDispatch();

  function datosRecomendados() {
    dispatch(sliderRecomendado());
  }

  useEffect(() => {
    setInterval(() => {
      dispatch(sliderRecomendado());
    }, 5000);
  }, [dispatch]);

  return (
    <div>
      <h3 className="flex justify-center m-3 p-3 text-2xl font-bold text-center  ">
        Destinos Recomendados
      </h3>

      <div className="">
        <div className=" group bg-[#02122C] rounded-lg flex flex-wrap justify-center ">
          <div className="bg-[#02122C] rounded-lg flex flex-wrap justify-center">
            {sliderRecoment.map((x) => {
              return (
                <div className="flex m-2 p-3 " key={x.id}>
                  <div className=" self-center ">
                    <img
                      className=" rounded-lg w-80 lg:w-72 xl:w-80 text-[#f1f5f9]"
                      src={x.image}
                      title={x.destiny}
                      alt={x.destiny}
                    />
                    <p className=" text-[17px] font-semibold text-[#f1f5f9] ">
                      {x.destiny}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            className=" hidden group-hover:block absolute  -translate-x-0 translate-y-[50%] left-5 text-2xl roundee-full p-2 bg-black/20 text-white cursor-pointer "
            onClick={datosRecomendados}
          >
            <BsChevronCompactLeft className="text-[#f1f5f9]" size={30} />
          </button>

          <button
            className=" hidden group-hover:block absolute  -translate-x-0 translate-y-[50%] right-5 text-2xl roundee-full p-2 bg-black/20 text-white cursor-pointer "
            onClick={datosRecomendados}
          >
            <BsChevronCompactRight className="text-[#f1f5f9]" size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderRecomemdado;
