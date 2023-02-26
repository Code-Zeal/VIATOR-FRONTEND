import React from "react";
import { sliderRecomendado } from "../Redux/Actions.js";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";


function SliderRecomemdado() {

    const sliderRecoment = useSelector((state) => state.recommended )
    const dispatch = useDispatch()

    const [randomContents, setRandomContents] = useState([])

    function shadowRandomContents() {
        const datosMezclado = sliderRecoment.sort(() => Math.random() - 0.5)
        const datosSeleccionados = datosMezclado.slice(0, 3)
    
        setRandomContents(datosSeleccionados) // por ultimo los guardo en mi estado 
    }

    useEffect(() => {
        if (randomContents.length === 0) {
            //setInterval(() => {
            //    shadowRandomContents()
            //}, 6000)// cada siete segundos se actualiza
            shadowRandomContents()
        }

    }, [shadowRandomContents])

    useEffect(() => { // al iniciar la pagina se ejecuta esta funcion
        dispatch(sliderRecomendado())
    }, [dispatch])

    return (
        <div>

            <h3 className="flex justify-center m-3 p-3 text-2xl font-bold text-center  ">
                Destinos Recomendados
            </h3>

            <div className="">

                <div className=" group bg-[#02122C] rounded-lg flex flex-wrap justify-center ">

                    <div className="bg-[#02122C] rounded-lg flex flex-wrap justify-center">

                        {
                            randomContents.map((x) => {
                                return(
                                    <div  className="flex m-2 p-3 " key={x.id}>
                                        <div className=" self-center ">
                                            <img className=" rounded-lg w-80 lg:w-72 xl:w-80 text-[#f1f5f9]" src={x.image}  title={x.destiny} alt={x.destiny}/>
                                            <p className=" text-[17px] font-semibold text-[#f1f5f9] ">{x.destiny}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>

                    <button className=" hidden group-hover:block absolute  -translate-x-0 translate-y-[50%] left-5 text-2xl roundee-full p-2 bg-black/20 text-white cursor-pointer " onClick={() => shadowRandomContents()}>
                        <BsChevronCompactLeft className="text-[#f1f5f9]"  size={30} />
                    </button>

                    <button className=" hidden group-hover:block absolute  -translate-x-0 translate-y-[50%] right-5 text-2xl roundee-full p-2 bg-black/20 text-white cursor-pointer " onClick={() => shadowRandomContents()}>
                        <BsChevronCompactRight className="text-[#f1f5f9]"  size={30} />
                    </button>

                </div>

            </div>

        </div>
    )
}

export default SliderRecomemdado