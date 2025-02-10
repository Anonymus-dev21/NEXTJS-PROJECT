"use client";

import { IoArrowBack } from "react-icons/io5";
import { useEffect, useState } from "react";
import Link from "next/link";
import { CounterContainer } from "@/app/componnents/common/Counter/counterContainer";
import { CartContext } from "@/app/Context/CartContex";
import { useContext } from "react";


 const Detail = ({ productDetail}) => {
  const {cart, setCart, stockMax, setStockMax} = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);
  useEffect(() => {
    setStockMax(false)
  }, [productDetail, setStockMax])
    const onAdd = (quantity) => {
      const product = { ...productDetail, cantidad: quantity };
      const productExist = cart.some((item) => item.id === product.id);
      if(productExist){
        const carritoActualizado = cart.map((item) => {
          if(item.id === product.id){
            if(item.stock <= item.cantidad + quantity){
              setStockMax(true)
              return {...item, cantidad: item.stock, id}

            } else {
              setStockMax(false)
              return {...item, cantidad: item.cantidad + quantity}
            }
          }else{
            return item
          }
        })
        setCart(carritoActualizado)
      } else{
        setCart([...cart, product])
      }
    };
    

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
              alt={productDetail.nombre}
              title='imagen de producto'
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
            <div className="my-5"><CounterContainer cantidad={cantidad} setCantidad={setCantidad} productDetail={productDetail}/></div>
            {stockMax && (
              <div className="text-red-600 py-2">
                <p className="font-[Poppins] font-bold text-sm">
                  *Ya tienes el stock máximo agregado en el carrito*
                </p>
              </div>
            )}
          <div className="py-[6px] px-2 my-5 w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer" onClick={() => onAdd(cantidad)}>
              <span>Agregar al carrito</span>
            </div>
          </div>
        </div>                      
      </div>

    </>)
}
export default Detail;