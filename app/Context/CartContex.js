"use client"
import { createContext, useEffect, useState } from "react";
import { db } from "@/firebase/firebaseconfig";
import {collection, getDocs, doc, onSnapshot } from "firebase/firestore";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];
    const [cart, setCart] = useState(carritoInicial);
   const [stockMax, setStockMax] = useState(false);
   
   useEffect(() => {
      localStorage.setItem("carrito", JSON.stringify(cart));
   }, [cart])    
   useEffect(() => {
    const collectionRef = collection(db, "productos");

    const stopListening = onSnapshot(collectionRef, (snapshot) => {
      const productosFirebase = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setCart((currentCart) => {
        const updatedCart = currentCart.map((product) => {
          const updateProduct = productosFirebase.find(
            (pdt) => pdt.id === product.id
          );

          return updateProduct
            ? {
                ...product,
                ...updateProduct,
              }
            : product;
        });

        if (JSON.stringify(updatedCart) !== JSON.stringify(currentCart)) {
          return updatedCart;
        }

        return currentCart;
      });
    });

    return () => stopListening();
  }, []);

    
   const TotalPrecio = cart
   .reduce((acc, pdt) => acc + pdt.precio * pdt.cantidad, 0)
   .toFixed(2);
const removeProduct = (id) => {
   setCart(cart.filter((product) => product.id !== id));
 };

 const cleanCart = () => {
   setCart([]);
 };
 const totalProd = cart.reduce((acc, pdt) => acc + pdt.cantidad, 0).toFixed(0);

    return (
        <CartContext.Provider value={{ cart, setCart, stockMax, setStockMax, TotalPrecio, removeProduct, cleanCart, totalProd }}>
            {children}
        </CartContext.Provider>
    );
}