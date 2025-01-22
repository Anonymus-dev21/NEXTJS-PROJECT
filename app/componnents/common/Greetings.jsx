"   use client";
import { useRouter } from "next/navigation";
export const Greetings = () => {
  const router = useRouter();
  const goBack = () => {
    router.back();
  };
  return (
    <div className="Greetings flex items-center justify-center  w-full min-h-dvh select-none">
      <div className="w-full h-full  flex flex-col items-center justify-center max-sm:py-10">
        <div className="w-[80%] max-sm:w-[90%] h-[300px] max-sm:h-[200px]">
          <img
            src="https://res.cloudinary.com/dgaxmhaj2/image/upload/v1731519309/ConsultaEnviada_d9wkzs.webp"
            alt="Consulta Enviada"
            className="w-full h-full object-contain object-center"
          />
        </div>

        <div className="TEXT w-[90%]  max-sm:w-[90%] max-330:w-full h-full my-5">
          <h1 className="font-[Poppins] font-bold text-[60px] max-md:text-[35px]   max-sm:text-left  py-5 text-center text-brown-900 text-pretty dark:text-brown-300 ">
            Consulta enviada exitosamente!
          </h1>
          <p className="font-[Urbanist] font-medium text-center max-sm:text-left text-gray-900 dark:text-white tracking-wide text-[23px] ">
            Nos pondremos en contacto a la brevedad
          </p>

          <div
            onClick={() => {
              goBack();
            }}
            className="py-[6px] px-2 my-5  w-fit rounded-md bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer m-auto max-sm:my-5 max-sm:mx-0"
          >
            <span className="">Volver al Inicio</span>
          </div>
        </div>
      </div>
    </div>
  );
};
