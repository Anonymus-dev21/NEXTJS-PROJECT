"use client";
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { CardsReseñasSwiper } from "../componnents/common/CardsRseñasSwiper"
import { LuSendHorizonal } from "react-icons/lu";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export const Reseñas = () => {
  return (
    <section className="Comentarios min-h-dvh mt-20 " id="Testimonios">
      <div className="title w-full px-5 text-center py-10">
        <h2 className="text-5xl font-[Poppins] max-sm:text-4xl font-semibold mb-2 dark:text-purple-500 text-brown-800">
          Testimonios
        </h2>
        <span className="text-xl font-semibold font-[Urbanist] dark:text-slate-50  max-sm:px-1 text-brown-800 tracking-[2px]">
          Algunos Testimonios de nuestros clientes:
        </span>
      </div>
      <Swiper
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="mySwiper3 cursor-default w-[80%] max-xxsm:w-[95%] mt-10 mx-auto flex items-center justify-center"
      >
        <SwiperSlide>
          <div>
            <CardsReseñasSwiper Descripcion=" ¡Excelente en todos los aspectos! Encontré libros que no podía conseguir en ningún otro lugar y a precios muy competitivos. El sitio es fácil de navegar, y la atención al cliente fue rápida y eficaz. ¡Súper satisfecho con mi compra!" />
          </div>
          <div className="stars__nombre flex flex-col justify-center items-center py-3">
            <div className="stars flex">
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
            </div>
            <span className="nombre text-lg font-semibold font-[Poppins]">
              Joaquín Herrera
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <CardsReseñasSwiper Descripcion=" La experiencia de compra fue muy buena, tienen una gran variedad de títulos y el proceso de compra es sencillo. Me hubiera gustado que el envío llegara un poco antes, pero en general, ¡muy recomendable! Definitivamente volveré a comprar aquí." />
          </div>
          <div className="stars__nombre flex flex-col justify-center items-center py-3">
            <div className="stars flex">
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStarHalf className="mx-1 text-2xl text-yellow-400" />
              <IoIosStarOutline className="mx-1 text-2xl text-yellow-400" />
            </div>
            <span className="nombre text-lg font-semibold font-[Poppins]">
              Martina López
            </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div>
            <CardsReseñasSwiper Descripcion=" Muy buena tienda de libros en línea. La calidad de los libros es excelente y el embalaje estaba bien cuidado. Tienen un catálogo interesante y encontré títulos que no suelen estar en otras tiendas. Quizás podrían mejorar las opciones de pago, pero definitivamente recomiendo esta tienda." />
          </div>
          <div className="stars__nombre flex flex-col justify-center items-center py-3">
            <div className="stars flex">
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStar className="mx-1 text-2xl text-yellow-400" />
              <IoIosStarHalf className="mx-1 text-2xl text-yellow-400" />
              <IoIosStarOutline className="mx-1 text-2xl text-yellow-400" />
            </div>
            <span className="nombre text-lg font-semibold font-[Poppins]">
              Valentina Ríos
            </span>
          </div>
        </SwiperSlide>
        <div className="swiper-button-next text-brown-800 dark:text-violet-600"></div>
        <div className="swiper-button-prev text-brown-800 dark:text-violet-600"></div>
        <div
          className="swiper-pagination bg-brown-800 dark:bg-violet-600"
          id="pagination"
        ></div>
      </Swiper>
    </section>
  );
};
