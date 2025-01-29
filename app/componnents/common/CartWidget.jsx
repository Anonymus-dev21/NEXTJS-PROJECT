"use client";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "@/app/Context/CartContex";
export const CartWidget = () => {
  const { totalProd } = useContext(CartContext);
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
