"use client";
import { useEffect, useState } from "react";

export const Theme = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleMode = () => {
    setDarkTheme(!darkTheme);
  };
  useEffect(() => {
    darkTheme
      ? document.querySelector("html").classList.add("dark")
      : document.querySelector("html").classList.remove("dark");
  }, [darkTheme]);

  return (
    <div className="mx-6">
      <input
        type="checkbox"
        id="react-option"
        value=""
        className="hidden peer"
        required=""
      />

      <label
        htmlFor="react-option"
        onClick={toggleMode}
        className=" label flex z-10 items-center peer relative justify-center w-10 h-10 shadow-lg duration-300 [box-shadow:1px_1px_0px_1px_#eab92d] border-0 dark:border-[1px] border-gray-800 peer-checked:border-0 peer-checked:border-gray-800 rounded-lg cursor-pointer text-neutral-50 peer-checked:[box-shadow:1px_1px_0px_1px_rgb(138,43,226)] peer-checked:hover:[box-shadow:3px_1px_0px_1px_rgb(180,97,229)] hover:[box-shadow:3px_1px_0px_1px_#1e1e1e]"
      ></label>
      <svg
        className="absolute stroke-purple-700 w-10 h-21 duration-300 peer-checked:opacity-100 max-xxsm:top-[-29px] opacity-0 top-[-9px]"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M82.1,61.2a31.9,31.9,0,0,1-12.4,2.4A33.3,33.3,0,0,1,36.4,30.3a31.9,31.9,0,0,1,2.4-12.4A33.3,33.3,0,1,0,82.1,61.2Z"
          fill="none"
          strokeWidth="8"
        ></path>
      </svg>
      <svg
        className="absolute stroke-yellow-500 w-10 h-21 duration-300 peer-checked:opacity-0 top-[-9px] max-xxsm:top-[-29px] opacity-100"
        height="100"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 100 100"
        width="100"
        x="0"
        xmlns="http://www.w3.org/2000/svg"
        y="0"
      >
        <path
          className="svg-stroke-primary"
          d="M50,18v3.6m0,56.8V82M82,50H78.4M21.6,50H18M72.6,72.6l-2.5-2.5M29.9,29.9l-2.5-2.5m45.2,0-2.5,2.5M29.9,70.1l-2.5,2.5M64.2,50A14.2,14.2,0,1,1,50,35.8,14.3,14.3,0,0,1,64.2,50Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="8"
        ></path>
      </svg>
    </div>
  );
};
