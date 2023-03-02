import NavBar from "./NavBar";
import Footer from "./Footer";

export default function LoadingPage() {
  return (
    <div>
      <NavBar />
      <div class="flex justify-center items-center h-full w-full bg-azulOscuro">
        <div class="relative">
          <img src="https://i.imgur.com/76T65Ke.gif" alt="" />
          <div class="absolute top-0 left-0 text-azulClaro p-4 w-full">
            <h1 class="text-2xl font-bold text-center">
              Un momento por favor...
            </h1>
            <p class="text-lg text-center">Buscando los mejores vuelos</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
