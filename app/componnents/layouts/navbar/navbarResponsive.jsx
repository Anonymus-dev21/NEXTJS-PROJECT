"use client"; // Necesario porque usa hooks de estado
import Link from "next/link";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Theme } from "../../common/theme";

export const NavbarResponsive = () => {
  const [hamburgerOpen, setHamburger] = useState(false);

  const toggleNav = () => {
    setHamburger(!hamburgerOpen);
  };

  return (
    <>
      <div className="toggleNavbar" onClick={toggleNav}>
        <RiMenu3Fill className="sm:hidden text-[50px] text-white font-bold p-2 rounded-full bg-black max-800:flex" />
      </div>

      <div
        className={`backgroundCerrar w-full h-full top-0 right-0 bg-black opacity-60 z-10 ${
          hamburgerOpen ? "fixed" : "hidden"
        }`}
        onClick={toggleNav}
      ></div>
      <div
        className={`fixed top-0 w-[300px] max-sm:w-[200px] min-h-[100vh] bg-black dark:bg-violet-950 opacity-100 rounded-s-md transition-all duration-300 z-30 ${
          hamburgerOpen ? "right-0" : "right-[-500px]"
        }`}
      >
        <div className="w-full h-full relative">
          <IoCloseCircleOutline
            className="text-[50px] text-white font-bold absolute top-5 left-5 hover:cursor-pointer"
            onClick={toggleNav}
          />
        </div>

        <ul className="flex flex-col w-full h-[70%] absolute top-24 items-end pr-5  space-y-10 font-[Poppins] text-slate-100 mr-5 text-xl max-sm:text-base font-semibold tracking-wider">
          <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
            <Link href="/">Inicio</Link>
          </li>
          <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
            <Link href="/productos">Productos</Link>
          </li>
          <li className="mx-2 group-hover:text-pink-500 transition-all duration-300">
            <Link href="/contacto">Contacto</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
