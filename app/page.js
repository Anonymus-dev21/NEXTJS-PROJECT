
import { Banner } from "./LandingComponents/banner";
import { Carrousel } from "./LandingComponents/Carrousel";
import { AboutUs } from "./LandingComponents/AboutUs";
import { Reseñas } from "./LandingComponents/Reseñas";

export const metadata = {
  title: "LectorComerce",
  description: "Un increible e-commerce de libros simple y dinámico en el cual podrás encontrar tus libros favoritos!",
  keywords: "Libros, tienda, libro, ecomerce, fantasia, policiales, online, tienda, interesante, shopping, comprar, compra, libros en linea, libros online",
}
export default function Home() {
  
  return (
    <>
    <Banner />
    <Carrousel />
    <AboutUs />
    <Reseñas />
    </>
  );
}
