
import Link from "next/link";
export const Banner = () => {
    return (
      <div className="banner__container w-full min-h-dvh flex items-center justify-center ">
        <div className="banner__content w-[50%] max-sm:w-[90%] text-center text-black dark:text-white">
          <h1 className="text-8xl max-sm:text-7xl font-semibold mb-5 font-[Poppins]">
            Hola !
          </h1>
          <p className="text-[21px] font-[Urbanist] text-pretty">
            Estamos encantados de tenerte aqui! hechale un vistazo a nuestros
            <Link href="/productos">
              <span className="underline hover:text-blue-500 ml-1">Libros!</span>
            </Link>
          </p>
          <Link href="/productos">
            <div className="w-full flex items-center justify-center">
              <div className="py-[6px] px-2 my-5  w-fit rounded-xl bg-brown-900 text-[16px] text-white font-semibold font-[Poppins] tracking-wide hover:tracking-wider hover:underline transition-all duration-300 cursor-pointer">
                <span className="">Ver Productos</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
  };
  