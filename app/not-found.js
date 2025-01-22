"use client"
import { useRouter } from "next/navigation";
const notFoundPage = () => {
    const router = useRouter();
      return (
        <div className="404_CONTAINER flex items-center justify-center max-sm:flex-col w-full min-h-dvh">
          <div className="w-[50%] max-sm:w-[90%] h-[400px]">
            <img
              src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1728186728/404NotFound_jmdpvz.jpg"
              alt="404 Not found"
              className="w-full h-full object-cover object-center"
            />
          </div>
    
          <div className="TEXT w-[50%]  max-sm:w-[90%] h-full">
            <h1 className="font-[Poppins] font-bold text-[100px] text-brown-900 dark:text-brown-300 max-330:text-[90px]">
              OOOPS
            </h1>
            <p className="font-[Urbanist] font-medium text-gray-900 dark:text-white tracking-wide text-[23px] ">
              Parece que esta pagina ha dejado de existir! Lo sentimos mucho!
            </p>
            <button onClick={() => { router.back()}}>
              <div className="py-[6px] px-2 my-5  w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer">
                <span className="">Volver al Inicio</span>
              </div>
            </button>
          </div>
        </div>
      );
    };
    
  
  export default notFoundPage;