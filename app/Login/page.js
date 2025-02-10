"use client"
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Context/AuthContext";

 const Login = () => {
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [Login, setLogin] = useState(true);
    

    const { loginWithPassword, registerUserGoogle, registerUserPasword, user, userCurrent, restablecerPassword } = useContext(AuthContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        let error = false;
        if (name === "password") {
            if (value.length < 6) {
              setPasswordError(true);
              error = true;
              setData((prev) => ({ ...prev, password: "" }));
            } else {
            setData((prev) => ({ ...prev, password: value }))
              setPasswordError(false);
            }
        }

        if (name === "email") {
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRgx.test(value)) {
              setEmailError(true);
              error = true;
              setData((prev) => ({ ...prev, email: "" }));
            } else {
                setData((prev) => ({ ...prev, email: value }))
              setEmailError(false);
            }
          }
    }

    const handleSubmitLogin =  async (e) => {
        e.preventDefault()
        if(data.email === "" || data.password === ""){
            Swal.fire({
                title: "Error",
                text: "Todos los campos son obligatorios",
                icon: "error",
                confirmButtonText: "Ok",
              });
              return;
        }
        if(emailError || passwordError){
            Swal.fire({
                title: "Error",
                text: "Completa correctamente los campos",
                icon: "error",
                confirmButtonText: "Ok",
              });
              return;
        }

            loginWithPassword(data.email, data.password);
         
    }

    const handleSubmitRegister = (e) => {
      e.preventDefault()
      if(data.email === "" || data.password === ""){
          Swal.fire({
              title: "Error",
              text: "Todos los campos son obligatorios",
              icon: "error",
              confirmButtonText: "Ok",
            });
            return;
      }
      if(emailError || passwordError){
          Swal.fire({
              title: "Error",
              text: "Completa correctamente los campos",
              icon: "error",
              confirmButtonText: "Ok",
            });
            return;
      }
      

        registerUserPasword( data.email, data.password);
  }
    return (
        <div className="Container-Genral w-full min-h-screen flex items-center justify-center">
            <div className="Container-Login w-[400px] min-h-[500px] my-10 bg-brown-800 rounded-[25px] flex flex-col items-center">
                
                <h1 className="font-[Poppins] font-bold text-[40px] text-white dark:text-brown-300 ">Login</h1>
                {Login ? (
                <form className="" onSubmit={handleSubmitLogin}>
                    <div className="flex flex-col w-full my-5">
                    <label className="font-[Poppins] font-bold text-[20px] text-white dark:text-brown-300">Email</label>
                    <input type="email" className="w-[300px] h-[40px] rounded-[25px] px-2 my-2 pl-3 outline-none " name="email"  placeholder="Email" required onChange={handleChange}/>
                    <p className="text-red-600 text-[12px]">{emailError && "*Ingresa un correo valido*"}</p>
                    </div>

                    <div className="flex flex-col w-full mb-5">
                    <label className="font-[Poppins] font-bold text-[20px] text-white dark:text-brown-300">Password</label>
                    <input type="password" className="w-[300px] h-[40px] rounded-[25px] px-2 my-2 pl-3 outline-none " name="password" placeholder="Password" required onChange={handleChange}/>
                    <p className="text-red-600 text-[12px]">{passwordError && "*La contraseña debe tener al menos 6 caracteres*"}</p>
                    </div>

                    <div className="SeparacionGOOGLE flex justify-center items-center w-full my-5">
                        <div className="w-full h-[2px] bg-white"></div>
                        <div className="font-[Poppins] font-bold text-[20px] text-white dark:text-brown-300 px-3"> O </div>
                        <div className="w-full h-[2px] bg-white"></div>
                    </div>
                    <button
            className="cursor-pointer font-[Poppins] flex gap-2 items-center bg-zinc-100 px-4 py-2 rounded-lg tracking-wide font-medium text-sm hover:bg-zinc-200 transition-all ease-in duration-200 w-full pl-5"
            onClick={(e) => {
              e.preventDefault();
              registerUserGoogle();
            }}
          >
            <svg
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              className="w-7"
            >
              <path
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                fill="#FFC107"
              ></path>
              <path
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                fill="#FF3D00"
              ></path>
              <path
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                fill="#4CAF50"
              ></path>
              <path
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                fill="#1976D2"
              ></path>
            </svg>
            Continue with Google
          </button>

                    <div className="flex flex-col items-center justify-center w-full my-9">
                    <div className="w-full flex justify-end items-center mb-1 text-white">
                    <p onClick={() => restablecerPassword(data.email)} className="text-brown-300    hover:cursor-pointer hover:underline">Olvidaste tu contraseña?</p>
                    </div>
                    <button type="submit" className="w-[300px] h-[40px] rounded-[25px] bg-brown-300 text-white font-[Poppins] font-bold text-[20px] hover:bg-brown-500 transition-all duration-300 p-2b hover:cursor-pointer hover:underline">Iniciar Sesion</button>
                    <div className="w-full flex justify-end items-center my-2 text-white">

                    <p>No tienes una cuenta? <span onClick={() => setLogin(false)} className="text-white font-[Poppins] font-bold  hover:cursor-pointer hover:underline">Registrate</span></p>
                    </div>
                    </div>

                </form>) : (
                <form className="" onSubmit={handleSubmitRegister}>
                <div className="flex flex-col w-full my-5">
                <label className="font-[Poppins] font-bold text-[20px] text-white dark:text-brown-300">Email</label>
                <input type="email" className="w-[300px] h-[40px] rounded-[25px] px-2 my-2 pl-3 outline-none " name="email"  placeholder="Email" required onChange={handleChange}/>
                <p className="text-red-600 text-[12px]">{emailError && "*Ingresa un correo valido*"}</p>
                </div>

                <div className="flex flex-col w-full mb-5">
                <label className="font-[Poppins] font-bold text-[20px] text-white dark:text-brown-300">Password</label>
                <input type="password" className="w-[300px] h-[40px] rounded-[25px] px-2 my-2 pl-3 outline-none " name="password" placeholder="Password" required onChange={handleChange}/>
                <p className="text-red-600 text-[12px]">{passwordError && "*La contraseña debe tener al menos 6 caracteres*"}</p>
                </div>

                <div className="SeparacionGOOGLE flex justify-center items-center w-full my-5">
                    <div className="w-full h-[2px] bg-white"></div>
                    <div className="font-[Poppins] font-bold text-[20px] text-white dark:text-brown-300 px-3"> O </div>
                    <div className="w-full h-[2px] bg-white"></div>
                </div>
                <button
        className="cursor-pointer font-[Poppins] flex gap-2 items-center bg-zinc-100 px-4 py-2 rounded-lg tracking-wide font-medium text-sm hover:bg-zinc-200 transition-all ease-in duration-200 w-full pl-5"
        onClick={(e) => {
          e.preventDefault();
          registerUserGoogle();
        }}
      >
        <svg
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          className="w-7"
        >
          <path
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            fill="#FFC107"
          ></path>
          <path
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
            fill="#FF3D00"
          ></path>
          <path
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
            fill="#4CAF50"
          ></path>
          <path
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
            fill="#1976D2"
          ></path>
        </svg>
        Continue with Google
      </button>

                <div className="flex flex-col items-center justify-center w-full my-9">
                <div className="w-full flex justify-end items-center mb-1 text-white">
                    <p onClick={() => restablecerPassword(data.email)} className="text-brown-300    hover:cursor-pointer hover:underline">Olvidaste tu contraseña?</p>
                    </div>
                <button type="submit" className="w-[300px] h-[40px] rounded-[25px] bg-brown-300 text-white font-[Poppins] font-bold text-[20px] hover:bg-brown-500 transition-all duration-300 p-2b hover:cursor-pointer hover:underline">Registrate</button>
                <div className="w-full flex justify-end items-center my-2 text-white">

                <p >Ya tienes una cuenta? <span onClick={() => setLogin(true)} className="text-white font-[Poppins] font-bold  hover:cursor-pointer hover:underline">Inicia Sesion</span></p>
                </div>
                </div>

            </form> )}
            </div>
        </div>
    );
}
export default Login;