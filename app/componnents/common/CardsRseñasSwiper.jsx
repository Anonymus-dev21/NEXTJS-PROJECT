import { FaQuoteLeft } from "react-icons/fa";
export const CardsReseñasSwiper = ({ Descripcion }) => {
  return (
    <>
      <div className="reseñas__container w-full flex flex-col items-center justify-center">
        <div className="reseñas__top w-full flex justify-center items-center">
          <FaQuoteLeft className="text-[70px] text-center text-brown-800 dark:text-violet-800" />
        </div>
        <div className="reseñas__txt my-5 py-[15px] px-[40px] max-330:px-[25px] text-lg font-semibold tracking-wider">
          <p className="text-pretty font-[Urbanist] text-center text-gray-800 tracking-wider dark:text-slate-50">
            {Descripcion}
          </p>
        </div>
      </div>
    </>
  );
};
