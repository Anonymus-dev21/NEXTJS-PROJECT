"use client"
import { createContext, useEffect, useState } from "react";
import { db } from "@/firebase/firebaseconfig";
import { GoogleAuthProvider, getAuth, signInWithPopup, sendEmailVerification, sendPasswordResetEmail, createUserWithEmailAndPassword, signInWithEmailAndPassword, } from "firebase/auth";

import Swal from "sweetalert2";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);
    const userCurrent = getAuth().currentUser;

     const registerUserPasword = async (email, password) => {
        const auth = getAuth();

        try {
          const result = await createUserWithEmailAndPassword( auth, email, password); // Función del contexto
          
          if (result.error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
                text: result.error, // Muestra el mensaje de error
              });
              return; // Evita que continúe con el SweetAlert de éxito
            }
            sendEmailVerification(auth.currentUser).then(() => {
              Swal.fire({
                  icon: "success",
                  title: "Solo un paso mas.",
                  text: "Confirme su correo electrónico para completar el registro.",
                });

             }); 
              
            } catch (error) {
              console.error("Error en el registro:", error);
              Swal.fire({
                icon: "error",
                title: "Error",
                text: "El usuario ya existe",
              });
              
          }
        };

  const loginWithPassword = async (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        
        const user = userCredential.user;
        Swal.fire({
            title: "Bienvenido",
            text: "Iniciaste sesion correctamente",
            icon: "success",
            confirmButtonText: "Ok",
            
          });
          window.location.href = "/";
        // ...
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
            title: "Error",
            text: "Usuario o contraseña incorrecta",
            icon: "error",
            confirmButtonText: "Ok",
            
          });
        });
      };
  
    
  const registerUserGoogle = async () => {
    const googleProvider = new GoogleAuthProvider(); 
    const auth = getAuth();
  try {
    const result = await signInWithPopup(auth, googleProvider);
    setUser({user: result.user.email, uid: result.user.uid});
    Swal.fire({
        icon: "success",
        title: "Inicio de sesión exitoso",
        text: `Bienvenido!`,
        timer: 2000,
        
      });
        window.location.href = "/";
  } catch (error) {
    Swal.fire({
        icon: "error",
        title: "Error en el inicio de sesión",
        text: "Ocurrió un problema al iniciar sesión.",
      });
    
  }
};

const restablecerPassword = async (email) => {
  if (!email) {
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "Ingrese un correo electrónico",
      });
    return;
  }
  const auth = getAuth();
  try {
    await sendPasswordResetEmail(auth, email);
    Swal.fire({
        icon: "success",
        title: "Email enviado",
        text: "Revise su bandeja de entrada o spam y siga las instrucciones para restablecer su contraseña",
      });
  } catch (error) {
    console.error("Error en el restablecimiento de contraseña:", error);
    Swal.fire({
        icon: "error",
        title: "Error",
        text: "No se pudo enviar el correo",
      });
  }
}


    return <AuthContext.Provider value={{ user, restablecerPassword, userCurrent, registerUserGoogle, registerUserPasword, loginWithPassword }}>{children}</AuthContext.Provider>;
}
