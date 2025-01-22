"use client";
import { useState } from "react";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";

import Swal from "sweetalert2";
import Loader from "../componnents/common/loader";
import { Greetings } from "../componnents/common/Greetings";
export const Contacto = () => {
  const [greetings, setGreetings] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [messageError, setMessageError] = useState(false);
 

  const [userDates, setUserDates] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const handleErrorsForm = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa correctamente los campos!",
      });
    };

    if (
      userDates.username === "" ||
      userDates.email === "" ||
      userDates.phone === "" ||
      userDates.message === ""
    ) {
      handleErrorsForm();
      return;
    }

    if (userError || emailError || phoneError || messageError) {
      handleErrorsForm();
      return;
    }

    const consulta = {
      user: userDates,
      date: new Date(),
    };

    setIsLoading(true);
    setGreetings(false);
    let reffCollection = collection(db, "Consultas");

    addDoc(reffCollection, consulta)
      .then(() => {
        setGreetings(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = false;
    if (name === "username") {
      const nameRgx = /^[A-Za-zÀ-ÿ\s'-.]+$/;
      if (!nameRgx.test(value)) {
        setUserError(true);
        setUserDates((prev) => ({ ...prev, username: "" }));
        error = true;
      } else {
        setUserError(false);
      }
    }

    if (name === "email") {
      const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRgx.test(value)) {
        setEmailError(true);
        error = true;
        setUserDates((prev) => ({ ...prev, email: "" }));
      } else {
        setEmailError(false);
      }
    }

    if (name === "phone") {
      const phoneRgx = /^[0-9]{10}$/;
      if (!phoneRgx.test(value)) {
        setPhoneError(true);
        error = true;
        setUserDates((prev) => ({ ...prev, phone: "" }));
      } else {
        setPhoneError(false);
      }
    }

    if (name === "message") {
      const msjRgx = /^(?=.*[a-zA-Z])[\s\S]{10,}$/;
      if (!msjRgx.test(value)) {
        setMessageError(true);
        error = true;
        setUserDates((prev) => ({ ...prev, message: "" }));
      } else {
        setMessageError(false);
      }
    }
    if (!error) {
      setUserDates((prev) => ({ ...prev, [name]: value }));
    }
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {greetings ? (
        <Greetings />
      ) : (
        <div className="GENERALCONTAINER max-w-[70%] mx-auto min-h-dvh flex flex-col justify-center ">
          <div>
            <h1 className="font-[Poppins] font-bold text-[50px] text-brown-900 dark:text-purple-700 ">
              Contacto
            </h1>

            <p className="font-[Urbanist] font-semibold tracking-wider text-gray-900 dark:text-white  text-[20px]">
              Hola! Esta es la sección de contacto estamos a disposicon de
              cualquier duda que pueda llegar a surgirte! Deja tu mensaje y
              responderemos a la brevedad.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="TOPINPUTS  grid grid-cols-2 gap-5 max-sm:grid-cols-1 max-sm:gap-0">
              <div className=" relative">
                <input
                  className="w-full my-5 py-3 px-4 placeholder:text-gray-500  bg-slate-50 outline-transparent dark:outline-none dark:border-gray-400  rounded-md border-2 border-grey-700  "
                  type="text"
                  placeholder="Nombre"
                  name="username"
                  onChange={handleChange}
                  required
                />
                {userError && (
                  <p className="text-red-500 text-xs mt-1 absolute bottom-0 left-0">
                    Debe ingresar un nombre valido
                  </p>
                )}
              </div>
              <div className=" relative">
                <input
                  className="w-full my-5 py-3 px-4 placeholder:text-gray-500  bg-slate-50 dark:border-gray-400 outline-transparent dark:outline-none rounded-md border-2 border-grey-700  "
                  type="email"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                  required
                />
                {emailError && (
                  <p className="text-red-500 text-xs mt-1 absolute bottom-0 left-0">
                    Debe ingresar un email valido
                  </p>
                )}
              </div>
            </div>
            <div className="NORMALINPUTS">
              <div className=" relative">
                <input
                  className="w-full my-5 py-3 px-4 placeholder:text-gray-500  bg-slate-50 dark:border-gray-400 outline-transparent dark:outline-none rounded-md border-2 border-grey-700  "
                  type="Number"
                  placeholder="Telefono"
                  name="phone"
                  onChange={handleChange}
                  required
                />
                {phoneError && (
                  <p className="text-red-500 text-xs mt-1 absolute bottom-0 left-0">
                    El Número de telefono debe contener 10 caracteres
                  </p>
                )}
              </div>

              <div className=" relative">
                <textarea
                  className="w-full max-h-[150px] my-5 py-3 px-4 placeholder:text-gray-500  bg-slate-50 dark:border-gray-400 outline-transparent dark:outline-none rounded-md border-2 border-grey-700  resize-none "
                  type="text"
                  placeholder="Mensaje"
                  name="message"
                  onChange={handleChange}
                  required
                />
                {messageError && (
                  <p className="text-red-500 text-xs mt-1 absolute bottom-3 left-0">
                    Debe ingresar un Mensaje valido
                  </p>
                )}
              </div>
            </div>
            <div className="py-[6px] px-2 mb-10 mt-0  w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer">
              <button className="px-5" type="submit">
                Enviar
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
