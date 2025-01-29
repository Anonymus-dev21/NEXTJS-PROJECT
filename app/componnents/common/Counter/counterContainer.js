"use client";
import { Counter } from "./Counter";
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "@/app/Context/CartContex";
export const CounterContainer = ({cantidad, setCantidad, productDetail}) => {
        const {stockMax, setStockMax} = useContext(CartContext);
      const [disabled, setDisabled] = useState(true);
      const [disabledSumar, setDisabledSumar] = useState(false);
      console.log(productDetail)
      const sumar = () => {
        
        setDisabled(false);
        if (cantidad < productDetail.stock) {
          setCantidad(cantidad + 1);
      
          // Si la próxima cantidad iguala el stock, deshabilita el botón
          if (cantidad + 1 === productDetail.stock) {
            setDisabledSumar(true);
          } else {
            setDisabledSumar(false); // Si no, asegúrate de que el botón esté habilitado
          }
        }
      };
      
      const restar = () => {
        if (cantidad > 1) {
          setCantidad(cantidad - 1);
      
          // Si la próxima cantidad será 1, deshabilita el botón "menos"
          if (cantidad - 1 === 1) {
            setDisabled(true);
          } else {
            setDisabled(false); // Si no, asegúrate de que esté habilitado
          }
        }
      
        // Si se reduce cantidad y es menor que el stock máximo, habilita el botón "más"
        if (cantidad <= productDetail.stock) {
         setDisabledSumar(false);
        }
      };
      return (<Counter sumar={sumar} restar={restar} disabled={disabled} cantidad={cantidad} stockMax={stockMax} disabledSumar={disabledSumar} />)
}