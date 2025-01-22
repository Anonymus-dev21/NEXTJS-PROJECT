"use client";
import Link from "next/link";
export const ProductCard = ({ imagen, titulo, desc, id, precioItem }) => {
  return (
    <div className="ProductCard mx-11  max-w-[350px] group text-white bg-brown-800  rounded-bl-2xl rounded-se-2xl transition-all duration-400 my-10">
      <Link href={`/ItemDetail/${id}`}>
        <div className="imgbox w-full h-[250px]">
          <img
            src={imagen}
            className=" w-full h-full rounded-se-2xl transition-all duration-400"
          />
        </div>
      </Link>

      <Link href={`/ItemDetail/${id}`}>
        <div className="textos px-3  pt-5 pb-20">
          <div className="title text-xl font-semibold font-[Poppins] ">
            <h3 className="hover:text-brown-100 group-hover:underline transition-colors duration-200">
              {titulo}
            </h3>
          </div>

          <div className=" text line-clamp-2 ">
            <p className="">{desc}</p>
          </div>
          <div className="py-4 text-lg font-[Poppins] font-semibold tracking-wider">
            <span className="">{precioItem}$</span>
          </div>
          <div className="social__medias flex items-center text-center text-[30px]  ">
            <button
              className="px-5
               py-[6px] rounded-md bg-black text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300"
            >
              Ver detalles
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
};
