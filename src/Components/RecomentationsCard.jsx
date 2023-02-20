export default function RecommendationsCard(props) {
  return (
    <div className="w-full h-64 md:w-1/2 md:h-80 lg:w-1/3 xl:w-1/4 p-6 my-4 ">
      <img
        className=" w-full h-full relative block overflow-hidden rounded-xl bg-no-repeat shadow-xl shadow-[black]"
        src={props.img}
        alt={`${props.airline} Airplane or logo`}
      />
      <span class="absolute z-10 transform -translate-y-48 md:-translate-y-64  inline-flex items-center rounded-lg bg-black mx-2 px-3 py-1 text-sm font-bold text-[white]  stroke-2 stroke-[yellow] bg-[#000000]  ">
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
        <h3 class="text-2xl font-bold my-4 lg:text-3xl ">{props.airline}</h3>
      </div>

      <div></div>
    </div>
  );
}
