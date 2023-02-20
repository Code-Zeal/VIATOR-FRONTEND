import RecommendationsCard from "./RecomentationsCard.jsx";

export default function Recommendations() {
  const prueba = [
    {
      airline: "Qatar Airways",
      img: "https://www.qatarairways.com/content/dam/images/mobile/brand/aircraft/a350/m-a350-aircraft-flight2.jpg",
      value: "4.9",
    },
    {
      airline: "Singapore Airlines",
      img: "https://martinroll.com/wp-content/uploads/Singapore-Airlines-%E2%80%93-An-Excellent-Iconic-Asian-Brand-Martin-Roll.jpg",
      value: "4.5",
    },
    {
      airline: "Emirates",
      img: "https://content.presspage.com/uploads/2431/1920_photo1.png",
      value: "4.8",
    },
    {
      airline: "Qantas Airways",
      img: "https://s28477.pcdn.co/wp-content/uploads/2017/09/Qantas_2-984x554.jpg",
      value: "4.4",
    },
    {
      airline: "Japan Airlines",
      img: "https://www.ibm.com/blogs/client-voices/wp-content/uploads/2019/09/Japan.jpg",
      value: "4.2",
    },
    {
      airline: "Turkish Airlines",
      img: "https://cdnuploads.aa.com.tr/uploads/Contents/2022/10/07/thumbs_b_c_82d6e941647d4700af3c8a1a8cef4f32.jpg",
      value: "4.7",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-6 justify-center  ">
      <h2 className="text-lg font-extrabold sm:text-2xl md:text-3xl ">
        AEROLINEAS RECOMENDADAS
      </h2>
      <div className="w-full h-full flex flex-wrap my-2 ">
        {prueba.map((el) => {
          return <RecommendationsCard {...el} />;
        })}
      </div>
    </div>
  );
}
