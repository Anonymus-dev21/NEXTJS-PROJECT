"use client";
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

export const Acordeon = ({ isOpen, handleToggle, titulo, desc }) => {
  return (
    <>
      <div
        className="acordeon__container w-[80%] rounded-2xl  bg-brown-800 text-white m-10  "
        onClick={handleToggle}
      >
        <div className="acordeon__top flex justify-between ">
          <div className="acordeon__top--title font-[Poppins] text-[25px] p-5 ">
            <h3>{titulo}</h3>
          </div>
          <div className="acordeon__top--icon flex items-center justify-center  text-2xl pr-5 transition-all duration-300">
            {isOpen ? <FaChevronUp /> : <FaChevronDown />}
          </div>
        </div>
        <div
          className={`acordeon__dsc px-5 py-3 overflow-hidden font-[Urbanist] transition-all ease-in-out duration-500 tracking-wider ${
            isOpen
              ? " max-h-[999px] bg-brown-700  rounded-b-2xl block"
              : " max-h-0 "
          }`}
        >
          <p
            className={`${
              isOpen
                ? "opacity-100 ease-in-out duration-700"
                : "opacity-0 ease-in-out duration-700 "
            }`}
          >
            {desc}
          </p>
        </div>
      </div>
    </>
  );
};
