import RecommendationsCard from "./RecomentationsCard.jsx";

export default function Recommendations() {
  const prueba = [
    {
      country: "Italia",
      city: "Roma",
      img: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1592&q=80",
      value: "4.9",
    },
    {
      country: "Rusia",
      city: "San Petersburgo",
      img: "https://images.unsplash.com/photo-1675950083665-3b1f4d5dcc07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      value: "4.7",
    },
    {
      country: "Alemania",
      city: "Old Town",
      img: "https://images.unsplash.com/photo-1675974147277-8fac1c4efd07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      value: "4.5",
    },
    {
      country: "Austria",
      city: "Elimau",
      img: "https://images.unsplash.com/photo-1676041336972-b7fa104bf1f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
      value: "4.8",
    },
    {
      country: "Hungría",
      city: "Budapest",
      img: "https://images.unsplash.com/photo-1675436678084-f2c460bf5d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1553&q=80",
      value: "4.2",
    },
    {
      country: "Vietnam",
      city: "Quảng Ninh",
      img: "https://images.unsplash.com/photo-1675950083665-3b1f4d5dcc07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      value: "4.7",
    },
    {
      country: "Ucrania",
      city: "Óblast de Ivano-Frankivsk",
      img: "https://images.unsplash.com/photo-1676108984021-68d1ce147a43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
      value: "4.6",
    },
    {
      country: "Alemania",
      city: "Espira",
      img: "https://images.unsplash.com/photo-1675877103442-d1363a938d04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
      value: "4.9",
    },
  ];

  return (
    <div className="flex flex-col items-center p-8 my-10">
      <h2 className="text-3xl font-bold">VIAJES RECOMENDADOS</h2>
      <div className="w-full h-full flex flex-wrap my-2 ">
        {prueba.map((el) => {
          return <RecommendationsCard {...el} />;
        })}
      </div>
    </div>
  );
}
