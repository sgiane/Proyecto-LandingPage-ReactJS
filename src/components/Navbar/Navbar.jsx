import React, { useState } from "react";
import Logo from "../../assets/Logo.jpg";

const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },

  {
    id: 2,
    title: "Nosotros",
    link: "#",
  },

  {
    id: 3,
    title: "Menú",
    link: "#",
  },

  {
    id: 4,
    title: "Testimonios",
    link: "#",
  },

  {
    id: 5,
    title: "Ubicación",
    link: "#",
  },

  {
    id: 6,
    title: "Reserva",
    link: "#",
  },
];

const navbarRedes = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: "bi bi-facebook",
    alt: "Facebook",
  },

  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: "bi bi-instagram",
    alt: "Instragram",
  },

  {
    id: 3,
    title: "TikTok",
    link: "https://www.tiktok.com",
    icon: "bi bi-tiktok",
    alt: "Tiktok",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="flex justify-between items-center sm:px-12 sm:py-6 px-4 py-3">
        {/* Logo Navbar */}
        <div>
          <img
            src={Logo}
            alt="Logo de CoffeeNest"
            className="w-[100px] rounded-4xl"
          />
        </div>
        {/* Boton de Hamburguesa creado manualmente*/}{" "}
        {/*Para el boton se puede usar icono para no hacerlo manual*/}
        <button onClick={toggleMenu} className="md:hidden text-amber-950">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {/* El path es el icono  */}
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Navegacion Navbar Desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4 sm:space-x-6 ">
            {navbarLinks.map((link) => (
              <li key={link.id}>
                <a
                  className="text-amber-950 md:text-lg text-sm hover:text-yellow-800 transition-transform hover:scale-110 transform inline-block duration-500 "
                  href={link.link}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Navegacion Redes Desktop */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 transform hover:scale-125"
                  href={link.link}
                >
                  <i
                    className={`${link.icon} ${link.alt} sm:text-2xl text-lg text-amber-950 hover:text-yellow-800 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
        {/* Menu Mobile */}
        <div className={`md:hidden absolute w-full bg-amber-50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
          <ul className="flex flex-col px-4 py-2">
            {navbarLinks.map((link) => (
              <li className="py-2 text-center" key={link.id}>
                <a className="text-amber-950 hover:text-amber-800" href={link.link} onClick={() => setIsOpen(false)}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex space-x-4 px-4 py-2 border-t border-amber-900 justify-center">
            {navbarRedes.map((link) => (
              <li key={link.id}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                  href={link.link}
                  onClick={() => setIsOpen(false)}
                >
                  <i
                    className={`${link.icon} ${link.alt} sm:text-2xl text-lg text-amber-950 hover:text-yellow-800 transition-all duration-300`}
                  ></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  );
};

export default Navbar;
