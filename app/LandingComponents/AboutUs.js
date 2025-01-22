import { AcordeonContainer } from "../componnents/common/Acordeon/AcordeonContainer";


export const AboutUs = () => {
    return (
        <div className="about__container w-full min-h-dvh flex flex-col lg:flex-row items-center justify-center">
            <div className="about__content w-[50%] max-md:w-[100%] text-center text-black dark:text-white">
                <h1 className="text-8xl max-sm:text-7xl max-xsm:text-6xl font-semibold text-pretty py-5 text-center  font-[Poppins]">
                    Acerca de Nosotros
                </h1>
                <p className="text-4xl font-[Urbanist]"> Conocenos un poco mas</p>  
            </div>

        <div className="AcordeonContainer">
        <AcordeonContainer
          titulo={"Diversidad de Títulos"}
          desc={
            "Ofrecemos una amplia gama de géneros y categorías que se adaptan a todos los gustos. Desde clásicos de la literatura hasta los lanzamientos más recientes, nuestro catálogo está cuidadosamente seleccionado para satisfacer a todo tipo de lectores."
          }
        />
        <AcordeonContainer
          titulo={"Precios Competitivos"}
          desc={
            "Nos esforzamos por ofrecer precios accesibles sin comprometer la calidad. Gracias a nuestras alianzas con editoriales y distribuidores, puedes adquirir tus libros favoritos a precios competitivos."
          }
        />

        <AcordeonContainer
          titulo={"Facilidad de Compra y Pago Seguro"}
          desc={
            "Nuestra plataforma es fácil de usar y brinda opciones de pago seguras y variadas, para que disfrutes de una experiencia de compra sin complicaciones. Tu información estará siempre protegida gracias a nuestras medidas de seguridad avanzadas."
          }
        />

        <AcordeonContainer
          titulo={"Atención al Cliente de Primera"}
          desc={
            "Valoramos a nuestros clientes y nos dedicamos a ofrecer una experiencia de compra satisfactoria. Nuestro equipo de atención al cliente está siempre disponible para resolver cualquier duda o consulta, asegurando tu satisfacción en cada compra."
          }
        />

        </div>
        </div>
    );
};