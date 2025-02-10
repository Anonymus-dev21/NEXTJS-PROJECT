"use client";
import { CartProduct } from "../componnents/common/CartProduct";
import { ErrorMsj } from "../componnents/common/MsjError";
import Link from "next/link";
import Swal from "sweetalert2";

export const CartSection = ({
  cart,
  setCart,
  sumar,
  restar,
  removeProduct,
  totalProd,
  cleanCart,
  total,
}) => {
  return (
    <>
      {cart.length > 0 ? (
        <>
          <h1 className="font-[Poppins] font-bold text-[50px] text-brown-900 dark:text-purple-500 text-center p-5">
            Bienvenido al carrito!
          </h1>
          <div className="GENERAL_CONTAINER">
            <div className="PRDUCTS_CONTAINER flex max-xl:flex-col max-xl:items-center">
              <div className="w-full">
                {cart.map((product) => {
                  return (
                    <CartProduct
                      imagen={product.imagen}
                      key={product.nombre}
                      id={product.id}
                      nombre={product.nombre}
                      precio={product.precio}
                      cantidad={product.cantidad}
                      sumar={sumar}
                      restar={restar}
                      disabled={product.disabled}
                      removeProduct={removeProduct}
                    />
                  );
                })}
              </div>
              <div className=" w-[30%]]  flex  justify-end max-600:justify-center">
                <div className="RESUMENCONTAINER  mx-10 max-995:mx-0  lg:h-[350px] h-[280px] bg-black dark:bg-brown-800 py-5 px-7 rounded-[30px]  ">
                  <div className="precioTotal flex justify-between my-5">
                    <div>
                      <span className="font-[Poppins] font-bold text-2xl text-white">
                        Total:
                      </span>
                    </div>
                    <div>
                      <span className="font-[Poppins] font-bold text-2xl text-white">
                        {" "}
                        {total}
                      </span>
                    </div>
                  </div>

                  <div className="TotalProductos flex justify-between my-5">
                    <div>
                      <span className="font-[Poppins] font-bold text-2xl text-white">
                        Libros:
                      </span>
                    </div>
                    <div>
                      <span className="font-[Poppins] font-bold text-2xl text-white ">
                        {totalProd}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <Link href="/Checkout">
                      <div className="py-[6px] px-2  my-4 w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer m-auto">
                        <span>Finalizar Compra</span>
                      </div>
                    </Link>
                    <div className="py-[6px] px-2   w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer m-auto">
                      <span onClick={cleanCart}>Limpiar Carrito</span>
                    </div>
                  </div>
                </div>
                <div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full min-h-dvh flex flex-col items-center justify-center text-center">
            <div className="w-full text-center">
              <span className="font-[Poppins] font-bold text-[100px] text-brown-900 dark:text-brown-300">
                UPS
              </span>
              <p className="font-[Urbanist] font-medium text-gray-900 dark:text-white tracking-wide text-[23px]">
                No hay productos en el Carrito
              </p>
            </div>
            <Link href="/productos">
              <div className="py-[6px] px-2  my-4 w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer">
                <span>Agregar Productos</span>
              </div>
            </Link>
          </div>
        </>
      )}
    </>
  );
};
