"use client"; // Necesario porque usas hooks y lógica del cliente
import Link from "next/link";

import { Theme } from "../../common/theme";
import { NavbarResponsive } from "./navbarResponsive";
import { useState, useRef, useEffect } from "react";
import { CartWidget } from "../../common/CartWidget";

export const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const headerRef = useRef(null);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      headerRef.current.style.top = "-150px";
    } else {
      headerRef.current.style.top = "0px";
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header
      className="bg-brown-900 text-white dark:bg-indigo-950 font-[Poppins] sticky top-0 z-[100] transition-all duration-500"
      ref={headerRef}
    >
      <nav className="w-full flex justify-between items-center p-5">
        <div className="logo">
          <span className="text-lg font-medium dark:text-white">
            <Link href="/">LectorComerce</Link>
          </span>
        </div>
        <div className=" hidden sm:block ">
          <ul className="flex w-full text-white ">
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
        <div className="flex items-center justify-between">
          <Link href="/Cart">
            <div className="max-xxsm:mx-3">
              <CartWidget />
            </div>
          </Link>
          <div className="max-xxsm:hidden ">
            <Theme />
          </div>
          <NavbarResponsive />
        </div>
      </nav>
    </header>
  );
};
