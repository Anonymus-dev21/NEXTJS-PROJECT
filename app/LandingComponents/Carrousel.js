"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export const Carrousel = () => {
  return (
    <>
      <div className="w-full h-[500px]">
        <Swiper
          grabCursor={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Mousewheel, Keyboard]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          className="mySwiper2 w-full h-full  mx-auto flex items-center justify-center"
        >
          <SwiperSlide>
            <div className="w-[100%] h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731540368/Escritura_xf5onx.jpg"
                className="w-full h-full object-cover "
                alt="Escritura"
                title="Escritura"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731109365/BIblioteca_2_e0eghi.jpg"
                className="w-full h-full object-cover "
                alt="Biblioteca"
                title="Biblioteca"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731022443/HarryPoter_Y_la_piedra_Filosofal_ppqzwb.jpg"
                className="w-full h-full object-cover " 
                alt="Harry Potter"
                title="Harry Potter"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731022443/BajoLaMismaEstrella_vek5aw.jpg"
                className="w-full h-full object-cover "
                alt="Bajo la misma estrella"
                title="Bajo la misma estrella"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731540556/libreriaMejorCalidad_ojkq9z.jpg"
                className="w-full h-full object-cover "
                alt="Libreria Mejor Calidad"
                title="Libreria Mejor Calidad"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731022442/Orgullo_y_prejuicio_vp0kg9.jpg"
                className="w-full h-full object-cover "
                alt="Orgullo y prejuicio"
                title="Orgullo y prejuicio"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-full h-full m-auto">
              <img
                src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731540702/Libreriamejor2_sju7kt.jpg"
                className="w-full h-full object-cover "
                alt="Libreria Mejor"
                title="Libreria Mejor"
              />
            </div>
          </SwiperSlide>

          <div className="swiper-button-next" id="nextbutton"></div>
          <div className="swiper-button-prev" id="prevbutton"></div>
          <div className="swiper-pagination" id="pagination"></div>
        </Swiper>
      </div>
    </>
  );
};
