"use client";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "@/app/Context/CartContex";
export const CartWidget = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { totalProd } = useContext(CartContext);
  useEffect(() => {
    setIsMounted(true); // Marca que el componente está en el cliente
  }, []);

  if (!isMounted) return null;
  return (
    <div>
      <div className=" relative mr-2">
        <FaOpencart className="text-[30px] mr-2 text-white" />
        <span className="absolute top-[-16px] right-[-20px] px-3 py-[1px] rounded-full bg-indigo-500 text-white font-bold">
          {totalProd}
        </span>
      </div>
    </div>
  );
};
