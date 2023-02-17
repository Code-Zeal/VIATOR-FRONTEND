export default function RecommendationsCard(props) {
  return (
    <div className="w-1/3 h-80 p-6 my-4">
      <img
        className=" w-full h-full relative block overflow-hidden rounded-xl bg-no-repeat"
        src={props.img}
        alt={`${props.city} Popular place`}
      />
      <span class="absolute z-10 transform -translate-y-64  inline-flex items-center rounded-full bg-black px-3 py-1 text-xs font-semibold text-blanco stroke-azulOscuro">
        {props.value}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="ml-1.5 h-4 w-4 text-amarillo"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      </span>

      <div class="relative bg-black bg-opacity-40  text-white">
        <h3 class="text-2xl font-bold m-1 ">{props.city}</h3>

        <p class="text-sm m-1 font-light">{props.country}</p>
      </div>

      <div></div>
    </div>
  );
}
