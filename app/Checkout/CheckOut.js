"use client";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContex";
import { db } from "@/firebase/firebaseconfig";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import Loader from "../componnents/common/loader";
import Swal from "sweetalert2";
export const Checkout = () => {
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const { cart, TotalPrecio, cleanCart, totalProd } = useContext(CartContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const handleErrorsForm = () => {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Completa correctamente los campos!",
      });
    };
    if (user.name === "" || user.email === "" || user.phone === "") {
      handleErrorsForm();
      return;
    }
    if (emailError || phoneError || userError) {
      handleErrorsForm();
      return;
    }
    const order = {
      buyer: user,
      items: cart,
      total: TotalPrecio,
      date: new Date(),
    };

    if (totalProd > 0) {
      setIsLoading(true);
      let refCollection = collection(db, "orders");
      addDoc(refCollection, order)
        .then((resp) => {
          setOrderId(resp.id);
          updateStock();
          cleanCart();
        })
        .finally(() => setIsLoading(false));
      const updateStock = () => {
        cart.forEach((item) => {
          updateDoc(doc(db, "productos", item.id), {
            stock: item.stock - item.cantidad,
          });
        });
      };
    } else {
      alert("No hay productos en el carrito, agrega al menos uno");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = false;

    if (name === "email") {
      const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRgx.test(value)) {
        setEmailError(true);
        error = true;
        setUser((prev) => ({ ...prev, email: "" }));
      } else {
        setEmailError(false);
      }
    }

    if (name === "phone") {
      const phoneRgx = /^[0-9]{10}$/;
      if (!phoneRgx.test(value)) {
        setPhoneError(true);
        error = true;
        setUser((prev) => ({ ...prev, phone: "" }));
      } else {
        setPhoneError(false);
      }
    }

    if (name === "name") {
      const nameRgx = /^[A-Za-zÀ-ÿ\s'-.]+$/;
      if (!nameRgx.test(value)) {
        setUserError(true);
        setUser((prev) => ({ ...prev, name: "" }));
        error = true;
      } else {
        setUserError(false);
      }
    }

    if (!error) {
      setUser({ ...user, [name]: value });
    }
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      {orderId ? (
        <div className="GENERALCONTAINER h-dvh flex flex-col items-center justify-center">
          <div>
            <h1 className="text-center font-[Poppins] text-[50px] font-bold text-brown-800 dark:text-slate-100">
              Gracias por tu compra!
            </h1>
          </div>
          <div className="flex">
            <span className="text-center font-[Urbanist] text-[25px] font-semibold text-brown-800 dark:text-slate-100">
              Tu numero de orden es:{" "}
              <span className="text-brown-500 text-center dark:text-brown-300">
                {orderId}
              </span>
            </span>
          </div>
        </div>
      ) : (
        <div className="GENERALCONTAINER h-dvh flex items-center justify-center">
          <div className="max-w-lg w-full">
            <div
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              className="bg-gray-800 rounded-lg shadow-xl overflow-hidden"
            >
              <div className="p-8">
                <h2 className="text-center text-3xl font-extrabold text-white">
                  Has llegado al final!
                </h2>
                <p className="mt-4 text-center text-gray-400">
                  Complete con sus datos
                </p>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                  <div className="rounded-md shadow-sm">
                    <div>
                      <label className="sr-only">Email address</label>
                      <input
                        placeholder="Email address"
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required
                        type="email"
                        name="email"
                        onChange={handleChange}
                      />
                      {emailError && (
                        <p className="text-red-500 text-xs mt-1">
                          Debe ingresar un email valido
                        </p>
                      )}
                    </div>
                    <div className="mt-4">
                      <label className="sr-only">Nombre</label>
                      <input
                        placeholder="Nombre"
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required
                        type="text"
                        name="name"
                        onChange={handleChange}
                      />
                      {userError && (
                        <p className="text-red-500 text-xs mt-1">
                          Debe ingresar un nombre valido
                        </p>
                      )}
                    </div>

                    <div className="mt-4">
                      <label className="sr-only">Nombre</label>
                      <input
                        placeholder="Telefono"
                        className="appearance-none relative block w-full px-3 py-3 border border-gray-700 bg-gray-700 text-white rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        required
                        type="number"
                        name="phone"
                        onChange={handleChange}
                      />
                      {phoneError && (
                        <p className="text-red-500 text-xs mt-1">
                          Debe ingresar un telefono de 10 digitos numericos
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <button
                      className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-gray-900 bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      type="submit"
                    >
                      Finalizar Compra
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
