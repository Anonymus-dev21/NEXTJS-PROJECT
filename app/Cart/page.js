'use client'
import { CartSection } from "./Cart";
import { useContext } from "react";
import { CartContext } from "../Context/CartContex";

import Swal from "sweetalert2";
const CartSectionContainer = () => {
  const {
    cart,
    setCart,
    updateQuantity,
    removeProduct,
    cleanCart,
    totalProd,
    TotalPrecio,
  } = useContext(CartContext);

  const sumar = (id) => {
    let nuevoCarrito = cart.map((product) => {
      if (product.id === id) {
        if (product.cantidad < product.stock) {
          const nuevaCantidad = product.cantidad + 1;
          return {
            ...product,
            cantidad: nuevaCantidad,
            disabled: nuevaCantidad >= product.stock,
          };
        } else {
          return { ...product, disabled: true };
        }
      }

      return product;
    });
    setCart(nuevoCarrito);
  };

  const restar = (id, cantidad) => {
    if (cantidad > 1) {
      let nuevoCarrito = cart.map((product) => {
        if (product.id === id) {
          const nuevaCantidad = product.cantidad - 1;
          return {
            ...product,
            cantidad: nuevaCantidad,
            disabled: false,
          };
        }
        return product;
      });
      setCart(nuevoCarrito);
    } else {
      removeProduct(id);
    }
  };

  const handleClearCart = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el carrito?",
      text: "Deberás agregar los productos nuevamente",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, limpiarlo",
      cancelButtonText: "No, cancelar",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        cleanCart();
        Swal.fire({
          title: "¡Eliminado!",
          text: "Se ha limpiado el carrito.",
          icon: "success",
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({
          title: "Cancelado",
          text: "No se borró tu carrito",
          icon: "error",
        });
      }
    });
  };
  return (
    <CartSection
      cart={cart}
      sumar={sumar}
      restar={restar}
      removeProduct={removeProduct}
      totalProd={totalProd}
      cleanCart={handleClearCart}
      total={TotalPrecio}
    />
  );
};
export default CartSectionContainer;