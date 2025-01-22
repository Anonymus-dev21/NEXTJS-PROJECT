"use client";

import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";

 const Detail = ({ productDetail}) => {
    


    return (
        <>
        
      <div className="w-full h-[100px] relative mb-20">
        <Link href="/productos">
          <IoArrowBack className="absolute top-10 left-5 text-5xl text-black dark:text-slate-100" />
          </Link>
        
      </div>

      <div className="w-full min-h-dvh flex flex-col  items center my-10">
        <div className="CONTAINERDETAIL w-[80%] m-auto flex justify-center min-h-[500px] max-md:flex-col max-lg:w-[92%] ">
          <div className=" IMAGEN CONTAINER w-[50%] min-h-full max-md:h-[300px] min-intermedio:min-h-fit max-md:w-full">
            <img
              src={productDetail.imagen}
              alt="imagen"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-[50%]  TEXTOS py-5 px-7  max-md:w-full max-md:px-0 text-black dark:text-white select ">
            <h1 className="text-5xl font-[Poppins] tracking-wide  font-semibold text-pretty">
              {productDetail.nombre}
            </h1>
            <p className="text-xl font-[Urbanist] font-medium tracking-wide  mt-5 text-pretty">
              {productDetail.descripcionLarga}
            </p>
<div
              className="py-[6px] px-2  w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer"
              
            >
              <span>Agregar al carrito</span>
            </div>
          </div>
        </div>                      
      </div>

    </>)
}
export default Detail;