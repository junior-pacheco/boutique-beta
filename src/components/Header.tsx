import React from 'react';
import { useState } from "react";
import { ShoppingBag, User, Heart, Search, UserIcon as Female, UserIcon as Male, Watch, Grid, Menu } from "lucide-react"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black h-[7vh] md:h-[10vh] mt-4 2xl:h-[7vh] shadow-sm fixed top-0 left-1/2 -translate-x-1/2 w-[70vw] rounded-full z-50">
      <div className="h-full flex items-center justify-between px-6">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/">
            <span className="sr-only text-white">Tu Boutique</span>
            <div className="h-12 w-12 rounded-full overflow-hidden">
              <img
                src="https://img.freepik.com/vector-premium/logotipo-empresa-boutique-percha-estilo-simple_278222-6983.jpg?ga=GA1.1.1653515673.1712756887&semt=ais_hybrid"
                alt="Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </a>
        </div>

        {/* Menú en móvil */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <Menu className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Menú en escritorio */}
        <div className="hidden lg:flex space-x-8">
          {[
            { icon: <Female className="w-5 h-5 mr-2" />, text: "Mujer" },
            { icon: <Male className="w-5 h-5 mr-2" />, text: "Hombre" },
            { icon: <Watch className="w-5 h-5 mr-2" />, text: "Accesorios" },
            { icon: <Grid className="w-5 h-5 mr-2" />, text: "Colecciones" },
          ].map(({ icon, text }, index) => (
            <a
              key={index}
              href="#"
              className="relative group text-base font-medium text-gray-300 hover:text-white flex items-center"
            >
              {icon}
              <span className="relative h-[1.2em] overflow-hidden">
                <span className="block group-hover:animate-cylinder">{text}</span>
              </span>
              <span className="absolute left-0 bottom-[-8px] w-full h-[2px] bg-white rounded-full scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>


        {/* Iconos de acciones */}
        <div className="hidden lg:flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            <Search className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <Heart className="h-6 w-6" />
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            <ShoppingBag className="h-6 w-6" />
          </a>
        </div>
      </div>

      {/* Menú desplegable en móvil */}
      {menuOpen && (
        <div className="lg:hidden absolute top-[7vh] left-1/2 -translate-x-1/2 w-[150px] bg-black text-white p-4 rounded-lg shadow-lg">
          <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
            <Female className="w-5 h-5 mr-2" /> Mujer
          </a>
          <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
            <Male className="w-5 h-5 mr-2" /> Hombre
          </a>
          <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
            <Watch className="w-5 h-5 mr-2" /> Accesorios
          </a>
          <a href="#" className="flex items-center py-2 text-gray-300 hover:text-white">
            <Grid className="w-5 h-5 mr-2" /> Colecciones
          </a>
        </div>
      )}
    </div>
  );
}

export default Header