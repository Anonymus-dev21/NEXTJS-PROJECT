"use client";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Sobre Nosotros</h4>
          <p>
            Somos una tienda en línea dedicada a ofrecer los mejores productos a
            nuestros clientes.
          </p>
        </div>
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Enlaces Rápidos</h4>
          <ul>
            <li className="mb-2">
              <Link href="/about" legacyBehavior>
                <a className="hover:underline">Sobre Nosotros</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/contact" legacyBehavior>
                <a className="hover:underline">Contacto</a>
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/faq" legacyBehavior>
                <a className="hover:underline">FAQ</a>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/3">
          <h4 className="text-lg font-semibold mb-2">Síguenos</h4>
          <ul className="flex space-x-4">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p>&copy; 2023 Tu Tienda. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};
