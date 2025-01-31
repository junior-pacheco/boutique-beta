import React from 'react';
import { useState } from "react";
import { ShoppingBag, User, Heart, Search, UserIcon as Female, UserIcon as Male, Watch, Grid, Menu } from "lucide-react"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="bg-black shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/">
              <span className="sr-only">Tu Boutique</span>
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <img
                  src="https://i.pinimg.com/236x/cd/f3/df/cdf3df10e20ff4e7449a108e0504be9e.jpg"
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
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Female className="w-5 h-5 mr-2" />
              Mujer
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Male className="w-5 h-5 mr-2" />
              Hombre
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Watch className="w-5 h-5 mr-2" />
              Accesorios
            </a>
            <a href="#" className="text-base font-medium text-gray-300 hover:text-white flex items-center">
              <Grid className="w-5 h-5 mr-2" />
              Colecciones
            </a>
          </div>

          {/* Iconos de acciones */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#" className="text-white hover:text-gray-300">
              <Search className="h-6 w-6" />
            </a>
            <a href="#" className="text-white hover:text-gray-300">
              <User className="h-6 w-6" />
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
          <div className="lg:hidden absolute top-20 left-[59%] -translate-x-1/2 w-[250px] bg-black text-white p-4 rounded-lg shadow-lg">
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
    </div>
  );
}

